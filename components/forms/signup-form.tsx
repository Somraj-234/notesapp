"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signUpUser } from "@/server/users";
import { useState } from "react";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Bento } from "../mycomponents/Bento";

// Validation schema: like login, keep error messages user-facing
const formSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters").max(8, "Name cannot be more than 8 characters"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Confirm password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const signUp = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard",
  });
};

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // For showing bento check mark on valid values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle value changes for bento validation icons
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    form.setValue(
      e.target.name as "name" | "email" | "password" | "confirmPassword",
      e.target.value,
      {
        shouldValidate: true,
        shouldTouch: true,
      },
    );
  };

  // Validation checks for bento checkmarks
  const isNameValid = formSchema.shape.name.safeParse(formData.name).success;
  const isEmailValid = formSchema.shape.email.safeParse(formData.email).success;
  const isPasswordValid = formSchema.shape.password.safeParse(formData.password).success;
  const isConfirmPasswordValid =
    formData.confirmPassword.length >= 8 && formData.confirmPassword === formData.password;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const response = await signUpUser(
        values.email,
        values.password,
        values.name,
      );
      if (response.success) {
        toast.success("Please check your email for verification");
        // Optionally redirect to login here after successful signup prompt
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast(`${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-transparent shadow-none border-0">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex justify-center items-center flex-col gap-4">
                {/* Name field */}
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Bento className="w-full">
                            <div className="main-box-1 w-full h-full flex items-center justify-start relative border border-[#E3E2E2] px-4 py-3 gap-1 sm:gap-2">
                              <div className="flex items-center gap-2 sm:gap-4 flex-1 w-full">
                                <svg
                                  className="text-[#b0b0b0] w-4 h-4"
                                  width="15"
                                  height="15"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <circle
                                    cx="10"
                                    cy="7"
                                    r="4"
                                    stroke="black"
                                    strokeWidth="1.5"
                                  />
                                  <path
                                    d="M2.5 17C2.5 13.6863 7.02944 12 10 12C12.9706 12 17.5 13.6863 17.5 17"
                                    stroke="black"
                                    strokeWidth="1.5"
                                  />
                                </svg>
                                <div className="h-4 border-r border-black/10" />
                                <input
                                  className="rounded-none border-0 placeholder:text-black/40 bg-transparent outline-none cursor-text text-sm sm:text-base flex-1 w-full"
                                  placeholder="john"
                                  name="name"
                                  autoComplete="name"
                                  value={formData.name}
                                  required
                                  onChange={handleChange}
                                  onBlur={field.onBlur}
                                  ref={field.ref}
                                />
                              </div>
                              <div className="w-4 h-4">
                                <svg
                                  className={`text-black w-4 h-4 ${isNameValid ? "block" : "hidden"}`}
                                  width="8"
                                  height="7"
                                  viewBox="0 0 8 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M6.95729 0.542969L2.54728 4.95298L0.542725 2.94843"
                                    stroke="#252525"
                                    strokeWidth="1"
                                  />
                                </svg>
                              </div>
                            </div>
                          </Bento>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email field */}
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Bento className="w-full">
                            <div className="main-box-1 w-full h-full flex items-center justify-start relative border border-[#E3E2E2] px-4 py-3 gap-1 sm:gap-2">
                              <div className="flex items-center gap-2 sm:gap-4 flex-1 w-full">
                                <svg
                                  className="text-[#b0b0b0] w-4 h-4"
                                  width="13"
                                  height="10"
                                  viewBox="0 0 13 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 0H12.5V10H0V0ZM1.25 1.25V2.09383L6.25 4.31605L11.25 2.09383V1.25H1.25ZM11.25 3.46173L6.25 5.68395L1.25 3.46173V8.75H11.25V3.46173Z"
                                    fill="black"
                                    
                                  />
                                </svg>
                                <div className="h-4 border-r border-black/10" />
                                <input
                                  className="rounded-none border-0 placeholder:text-black/40 bg-transparent outline-none cursor-text text-sm sm:text-base flex-1 w-full"
                                  placeholder="email@example"
                                  required
                                  autoComplete="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  onBlur={field.onBlur}
                                  ref={field.ref}
                                />
                              </div>
                              <div className="w-4 h-4">
                                <svg
                                  className={`text-black w-4 h-4 ${isEmailValid ? "block" : "hidden"}`}
                                  width="8"
                                  height="7"
                                  viewBox="0 0 8 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M6.95729 0.542969L2.54728 4.95298L0.542725 2.94843"
                                    stroke="#252525"
                                    strokeWidth="1"
                                  />
                                </svg>
                              </div>
                            </div>
                          </Bento>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Password field */}
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center">
                          <FormLabel>Password</FormLabel>
                        </div>
                        <FormControl>
                          <Bento className="w-full">
                            <div className="main-box-1 h-full flex items-center justify-between relative border border-[#E3E2E2] px-4 py-3 gap-1 sm:gap-2">
                              <div className="flex items-center gap-2 sm:gap-4 flex-1 w-full">
                                <svg
                                  className="text-[#b0b0b0] w-4 h-4"
                                  width="14"
                                  height="8"
                                  viewBox="0 0 14 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M2.75 2.66667V5.33333H4.08333V2.66667H2.75Z"
                                    fill="black"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 0H7V2H14V6H12.6667V8H8.66667V6H7V8H0V0ZM5.66667 1.33333V3.33333H12.6667V4.66667H11.3333V6.66667H10V4.66667H5.66667V6.66667H1.33333V1.33333H5.66667Z"
                                    fill="black"
                                  />
                                </svg>
                                <div className="h-4 border-r border-black/10" />
                                <input
                                  className="rounded-none border-0 placeholder:text-black/40 bg-transparent outline-none cursor-text text-sm sm:text-base flex-1 w-full"
                                  type="password"
                                  placeholder="********"
                                  required
                                  name="password"
                                  value={formData.password}
                                  onChange={handleChange}
                                  onBlur={field.onBlur}
                                  ref={field.ref}
                                />
                              </div>
                              <div className="w-4 h-4">
                                {isPasswordValid && (
                                  <svg
                                    className="text-black w-4 h-4"
                                    width="8"
                                    height="7"
                                    viewBox="0 0 8 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M6.95729 0.542969L2.54728 4.95298L0.542725 2.94843"
                                      stroke="#252525"
                                      strokeWidth="1"
                                    />
                                  </svg>
                                )}
                              </div>
                            </div>
                          </Bento>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Confirm Password field */}
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Bento className="w-full">
                            <div className="main-box-1 h-full flex items-center justify-between relative border border-[#E3E2E2] px-4 py-3 gap-1 sm:gap-2">
                              <div className="flex items-center gap-2 sm:gap-4 flex-1 w-full">
                                <svg
                                  className="text-[#b0b0b0] w-4 h-4"
                                  width="14"
                                  height="8"
                                  viewBox="0 0 14 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M2.75 2.66667V5.33333H4.08333V2.66667H2.75Z"
                                    fill="black"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 0H7V2H14V6H12.6667V8H8.66667V6H7V8H0V0ZM5.66667 1.33333V3.33333H12.6667V4.66667H11.3333V6.66667H10V4.66667H5.66667V6.66667H1.33333V1.33333H5.66667Z"
                                    fill="black"
                                  />
                                </svg>
                                <div className="h-4 border-r border-black/10" />
                                <input
                                  className="rounded-none border-0 placeholder:text-black/40 bg-transparent outline-none cursor-text text-sm sm:text-base flex-1 w-full"
                                  type="password"
                                  placeholder="********"
                                  required
                                  name="confirmPassword"
                                  value={formData.confirmPassword}
                                  onChange={handleChange}
                                  onBlur={field.onBlur}
                                  ref={field.ref}
                                />
                              </div>
                              <div className="w-4 h-4">
                                {isConfirmPasswordValid && (
                                  <svg
                                    className="text-black w-4 h-4"
                                    width="8"
                                    height="7"
                                    viewBox="0 0 8 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M6.95729 0.542969L2.54728 4.95298L0.542725 2.94843"
                                      stroke="#252525"
                                      strokeWidth="1"
                                    />
                                  </svg>
                                )}
                              </div>
                            </div>
                          </Bento>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit / Social buttons */}
                <div className="flex flex-col gap-3 w-full">
                  <Bento className="w-full">
                    <div className="main-box-1 flex-1 w-full h-full relative border border-[#E3E2E2]">
                      <Button
                        type="submit"
                        className="w-full cursor-pointer h-full rounded-none px-4 py-3 text-black bg-gradient-to-t from-[#389E0E]/10 to-[#72D23B]/10 hover:bg-transparent"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader className="animate-spin" />
                        ) : (
                          "Create Account"
                        )}
                      </Button>
                    </div>
                  </Bento>
                  <Bento className="w-full">
                    <div className="main-box-1 flex-1 w-full h-full relative border border-[#E3E2E2]">
                      <Button
                        type="button"
                        className="w-full cursor-pointer h-full rounded-none px-4 py-3 text-black"
                        style={{
                          background:
                            "linear-gradient(to right, #FF3D0010, #FFC10710, #4CAF5010, #1976D210)",
                        }}
                        disabled={isLoading}
                        onClick={signUp}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <g clipPath="url(#clip0_498_17289)">
                            <path
                              d="M11.5001 6.12305C11.5001 5.67055 11.4626 5.34055 11.3821 4.99805H6.11206V7.03955H9.20506C9.14306 7.54655 8.80656 8.31055 8.05806 8.82405L8.04756 8.89205L9.71356 10.157L9.82856 10.168C10.8896 9.20905 11.5001 7.79705 11.5001 6.12305Z"
                              fill="#4285F4"
                            />
                            <path
                              d="M6.11239 11.5004C7.62739 11.5004 8.89939 11.0114 9.82889 10.1679L8.05789 8.82389C7.58389 9.14789 6.94789 9.37389 6.11239 9.37389C5.40812 9.37395 4.72149 9.15354 4.14885 8.74356C3.57621 8.33358 3.14628 7.75461 2.91939 7.08789L2.85339 7.09339L1.12089 8.40739L1.09839 8.46939C2.02139 10.2659 3.91739 11.5004 6.11239 11.5004Z"
                              fill="#34A853"
                            />
                            <path
                              d="M2.92 7.08741C2.79702 6.73794 2.73331 6.37038 2.7315 5.99991C2.7315 5.62091 2.8005 5.25441 2.912 4.91241L2.909 4.83891L1.155 3.50391L1.0975 3.53091C0.705396 4.29489 0.500596 5.14117 0.5 5.99991C0.5 6.88591 0.718 7.72341 1.0985 8.46891L2.92 7.08741Z"
                              fill="#FBBC05"
                            />
                            <path
                              d="M6.11239 2.6265C7.16639 2.6265 7.87689 3.0725 8.28239 3.4455L9.86589 1.93C8.89339 1.044 7.62739 0.5 6.11239 0.5C3.91689 0.5 2.02139 1.7345 1.09839 3.531L2.91339 4.9125C3.14223 4.24583 3.57348 3.66722 4.14696 3.25742C4.72043 2.84761 5.40754 2.62705 6.11239 2.6265Z"
                              fill="#EB4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_498_17289">
                              <rect width="12" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Sign Up with Google
                      </Button>
                    </div>
                  </Bento>
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Log in
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
