
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signIn } from "next-auth/react";
 
import TextInput from "@/app/components/module/TextInput";
import { Button, FieldGroup, Fieldset, Form, Spinner, toast } from "@heroui/react";
 
import { loginUser } from "@/app/server_action/Login";
import Link from "next/link";
import { RingMark } from "@/app/components/UI/RingMark";
 
// اگر TextInput داری:

interface LoginFormData {
  email: string;
  password: string;
}
const schema = z.object({

  email: z.string().email("ایمیل معتبر نیست"),
  password: z.string().min(6, "رمز باید حداقل ۶ کاراکتر باشد"),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",

    resolver: zodResolver(schema),
  });


  const onSubmit = async (data: LoginFormData) => {


    try {
      setLoading(true);

      const res = await loginUser(data);
 

      if (!res.success) {
        toast.danger(res.message || "خطا در ورود");
        return;
      }

      const signInRes = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (signInRes?.error) {
        toast.danger("ورود ناموفق بود");
        return;
      }

      router.push("/");
    } catch (err: unknown) {
  
      
      const message =
        err instanceof Error ? "خطای سرور" : "خطا";

      toast.danger(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[32px] border border-black/5 bg-white/75 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-10">

      {/* decor */}
      <RingMark
        muted
        className="pointer-events-none absolute -left-16 top-[-40px] h-[220px] w-[220px] text-[#7d996e]/20"
      />

      {/* header */}
      <div className="relative mb-8 text-right">
        <span className="mb-3 inline-flex rounded-full bg-[#7d996e]/10 px-3 py-1 text-xs font-medium text-[#5b6b2e]">
          ورود به حساب
        </span>

        <h1 className="text-[28px] font-semibold tracking-tight text-[#1f2917]">
          ورود به سایت
        </h1>

        <p className="mt-2 text-sm leading-7 text-[#4b5446]/75">
          برای ادامه وارد حساب کاربری شوید
        </p>
      </div>

      {/* form */}
      <Form
        onSubmit={handleSubmit(onSubmit)}
        validationBehavior="aria"
        className="space-y-5"
      >
        <Fieldset className="space-y-5">

          <FieldGroup className="space-y-4">

            <TextInput
              name="email"
              label="ایمیل"
              register={register}
              errorMessage={errors.email?.message}
              placeholder="example@gmail.com"
              type="text"
            />

            <TextInput
              name="password"
              label="گذرواژه"
              register={register}
              errorMessage={errors.password?.message}
              placeholder="••••••••"
              type="password"
            />

          </FieldGroup>

          {/* extra actions */}
          {/* <div className="flex items-center justify-between text-sm">

 

        <Link
          href="/forgot-password"
          className="text-[#5b6b2e] transition hover:opacity-80"
        >
          فراموشی رمز؟
        </Link>

      </div> */}

          {/* <Button
            type="submit"
            fullWidth={true}
            isPending={loading}
            {({ isPending }) => (
              <>
                {isPending ? <Spinner color="current" size="sm" /> : <Paperclip />}
                {isPending ? "Uploading..." : " ورود به حساب"}
              </>
            )}
          >

          </Button> */}

          <Button fullWidth={true} isPending={loading} type="submit">
            {({ isPending }) => (
              <>
                {isPending ? <Spinner color="current" size="sm" /> : ""}
                {isPending ? "" : " ورود به حساب"}
              </>
            )}
          </Button>

        </Fieldset>
      </Form>

      {/* footer */}
      <div className="mt-8 border-t border-black/5 pt-6 text-center">
        <span className="text-sm text-[#4b5446]/75">
          حساب نداری؟
        </span>

        <Link
          href="/auth/register"
          className="mr-2 font-medium text-[#5b6b2e] transition hover:text-[#4a5726]"
        >
          ثبت‌نام کن
        </Link>
      </div>

    </div>
  );
};

export default Login;