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
import { authClient } from "@/lib/auth-client";
import { Bento } from "../mycomponents/Bento";

const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    form.setValue(e.target.name as "email", e.target.value, {
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  const isEmailValid = formSchema.shape.email.safeParse(formData.email).success;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log("send email button clicked");
      setIsLoading(true);
      const { error } = await authClient.forgetPassword({
        email: values.email,
        redirectTo: "/reset-password",
      });
      if (!error) {
        toast.success("Please check your email for password reset link.");
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

                <div className="flex flex-col gap-3 w-full">
                  <Bento className="w-full ">
                    <div className="main-box-1 flex-1 w-full h-full relative border border-[#E3E2E2]">
                      <Button
                        type="submit"
                        className="w-full cursor-pointer h-full rounded-none px-4 py-3 text-black bg-gradient-to-t from-[#389E0E]/10 to-[#72D23B]/10 hover:bg-transparent"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader className="animate-spin" />
                        ) : (
                          "Get Email"
                        )}
                      </Button>
                    </div>
                  </Bento>
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                Go back to{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Login
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
