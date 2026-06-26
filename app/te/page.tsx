"use client";
import { z } from "zod";

const schema = z.object({
    email: z.string().email("ایمیل معتبر نیست"),
});


import {  Form } from "@heroui/react";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../components/module/TextInput";


type FormData = z.infer<typeof schema>;

export default function TestForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onChange",
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log("valid data:", data);
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
          
        {/* <TextInput  errorMessage={errors.email?.message} name={"email"} register={register} /> */}
            <button type="submit">submit</button>
        </Form>
    );
}
