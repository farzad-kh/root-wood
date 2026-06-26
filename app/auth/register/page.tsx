 
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signIn } from "next-auth/react";
import { registerUser } from "@/app/server_action/register";
import TextInput from "@/app/components/module/TextInput";
import { Button, FieldGroup, Fieldset, Form, Spinner, toast } from "@heroui/react";
 
import Link from "next/link";
import { RingMark } from "@/app/components/UI/RingMark";
// اگر TextInput داری:


const schema = z.object({
  name: z.string().min(1, "نام الزامی است"),
  email: z.string().email("ایمیل معتبر نیست"),
  password: z.string().min(6, "رمز باید حداقل ۶ کاراکتر باشد"),
});

type FormData = z.infer<typeof schema>;

const Register = () => {
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


  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const res = await registerUser(data);
      console.log(res);

      if (!res.success) {
        toast.danger(res.message || "خطا دوباره امتحان کنید");
        return;
      }

      await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      router.push("/");
    } catch (err: unknown) {
      const message =
             err instanceof Error ? "خطای سرور" : "خطا";

      toast.danger(message || "خطا دوباره امتحان کنید");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[32px] border border-black/5 bg-white/75 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-10">

      {/* decor */}
      <RingMark
        muted
        className="pointer-events-none absolute -right-16 top-[-40px] h-[220px] w-[220px] text-[#7d996e]/20"
      />

      {/* header */}
      <div className="relative mb-8 text-right">

        <span className="mb-3 inline-flex rounded-full bg-[#7d996e]/10 px-3 py-1 text-xs font-medium text-[#5b6b2e]">
          ساخت حساب جدید
        </span>

        <h1 className="text-[28px] font-semibold tracking-tight text-[#1f2917]">
          به روت هوم خوش اومدی 🍃
        </h1>

        <p className="mt-2 text-sm leading-7 text-[#4b5446]/75">
          فقط چند ثانیه زمان می‌بره، بعدش می‌تونی خریدت رو شروع کنی.
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
              name="name"
              label="اسم"
              register={register}
              errorMessage={errors.name?.message}
              placeholder="مثال: محمد"
              type="text"
            />

            <TextInput
              name="email"
              label="ایمیل"
              register={register}
              errorMessage={errors.email?.message}
              placeholder="example@gmail.com"
              type="email"
            />

            <TextInput
              name="password"
              label="گذرواژه"
              register={register}
              errorMessage={errors.password?.message}
              placeholder="حداقل ۶ کاراکتر"
              type="password"
            />

          </FieldGroup>

          {/* terms */}
          {/* <label className="flex items-start gap-3 text-sm leading-6 text-[#4b5446]/80">

        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-black/10 accent-[#5b6b2e]"
        />

        <span>
          با ساخت حساب،
          <span className="mx-1 text-[#5b6b2e]">
            قوانین و شرایط
          </span>
          را می‌پذیرم.
        </span>

      </label> */}

          <Button fullWidth={true} isPending={loading} type="submit">
            {({ isPending }) => (
              <>
                {isPending ? <Spinner color="current" size="sm" /> : ""}
                {isPending ? "" : " ساخت حساب"}
              </>
            )}
          </Button>


        </Fieldset>
      </Form>

      {/* divider */}
      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-black/5" />
        <span className="text-xs text-[#4b5446]/50">
          یا
        </span>
        <div className="h-px flex-1 bg-black/5" />
      </div>

      {/* footer */}
      <div className="text-center">
        <span className="text-sm text-[#4b5446]/75">
          قبلاً حساب ساختی؟
        </span>

        <Link
          href="/auth/signin"
          className="mr-2 font-medium text-[#5b6b2e] transition hover:text-[#4a5726]"
        >
          وارد شو
        </Link>
      </div>

    </div>
  );
};

export default Register;