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

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const respond = await fetch("api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await respond.json();
    form.reset({});
    return data;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="inputStyle text-md "
                  placeholder="Name"
                  {...field}
                />
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
              <FormControl>
                <Input
                  className="inputStyle text-md"
                  placeholder="Your Email"
                  {...field}
                />
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
              <FormControl>
                <Textarea
                  placeholder="Message..."
                  className="inputStyle text-md"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-md tracking-wide" />
            </FormItem>
          )}
        />
        <Button type="submit" className="inputStyle px-12 !h-12">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
