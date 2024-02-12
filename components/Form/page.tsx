"use client";
import { formSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSending(true);
    try {
      const respond = await fetch("api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await respond.json();
      if (respond.ok) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Message not sent, please try again!");
      }
      form.reset({});
      setIsSending(false);
      return data;
    } catch (error) {
      console.error("Error:", error);
      setIsSending(false);
    }
  }

  return (
    <Form {...form}>
      <Toaster />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white-800">
                What’s your name?
              </FormLabel>
              <FormControl>
                <Input className="inputStyle text-md md:!h-28 " {...field} />
              </FormControl>
              <FormMessage className="text-red-500 text-md tracking-wide" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white-800">
                What’s your email?
              </FormLabel>
              <FormControl>
                <Input className="inputStyle text-md md:!h-28" {...field} />
              </FormControl>
              <FormMessage className="text-red-500 text-md tracking-wide" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white-800">
                Write something about your project goals and timeframe
              </FormLabel>
              <FormControl>
                <Textarea className="inputStyle text-md !h-48" {...field} />
              </FormControl>
              <FormMessage className="text-red-500 text-md tracking-wide" />
            </FormItem>
          )}
        />
        <div className="overflow-hidden bg-gradient-to-r from-[#0026FF] to-[#C1A4FF] rounded-full">
          <Button
            type="submit"
            className="w-full px-12 !h-16 text-lg transition hover:scale-110 duration-300
           leading-7 text-white-900 ">
            {isSending ? "Sending..." : "Send"}
            <Image
              src="/icons/Vector.svg"
              width={10}
              height={10}
              alt="arrow"
              className="inline-block ml-2"
            />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
