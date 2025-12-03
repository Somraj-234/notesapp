"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { useState } from "react";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Bento } from "../mycomponents/Bento";

const formSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // For showing bento check mark on valid values
  const [formData, setFormData] = useState({
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
      e.target.name as "password" | "confirmPassword",
      e.target.value,
      {
        shouldValidate: true,
        shouldTouch: true,
      },
    );
  };

  // Validation checks for bento checkmarks

  const isPasswordValid = formSchema.shape.password.safeParse(
    formData.password,
  ).success;
  const isConfirmPasswordValid =
    formData.confirmPassword.length >= 8 &&
    formData.confirmPassword === formData.password;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const { error } = await authClient.resetPassword({
        newPassword: values.password,
        token: token ?? "",
      });
      if (!error) {
        toast.success("Password reset successfull");
        router.push("/login");
      } else {
        toast.error(error.message);
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
      <Card className="bg-transparent shadow-none border-0 ">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex justify-center items-center flex-col gap-4">
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
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                Go to{" "}
                <Link href="/login" className="underline underline-offset-4">
                  login page
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
