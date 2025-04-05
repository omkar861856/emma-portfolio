import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useInView } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const Newsletter = () => {
  const { toast } = useToast();
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.5 });

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: NewsletterFormValues) {
    // In a real application, this would connect to a newsletter API
    console.log(values);
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
      duration: 3000,
    });
    form.reset();
  }

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 bg-primary text-white"
      initial={{ opacity: 0 }}
      animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold">
          Subscribe to Our Newsletter
        </h2>
        <p className="font-['Cormorant_Garamond'] italic mt-4 max-w-2xl mx-auto">
          Be the first to know about new collections, exclusive events, and studio
          insights
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-10 max-w-md mx-auto flex"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input
                      placeholder="Your email address"
                      className="flex-grow p-3 bg-transparent border border-white placeholder:text-white placeholder:opacity-70 focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="px-6 py-3 bg-white text-primary hover:bg-[#DFA878] hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-body"
            >
              Subscribe
            </Button>
          </form>
        </Form>
      </div>
    </motion.section>
  );
};

export default Newsletter;
