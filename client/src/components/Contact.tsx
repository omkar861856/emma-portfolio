import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone } from "lucide-react";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = insertContactMessageSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const { toast } = useToast();
  const contactInfoRef = useRef(null);
  const isContactInfoInView = useInView(contactInfoRef, { once: true, amount: 0.2 });
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: "Message Sent",
        description: data.message,
        duration: 5000,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <motion.div
            ref={contactInfoRef}
            className="w-full md:w-1/2 md:pr-16 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Get in Touch</h2>
            <p className="font-['Cormorant_Garamond'] text-lg mt-4 text-[#333333] italic">
              For inquiries, collaborations, or to schedule an appointment
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <h3 className="text-xl font-heading">Contact Information</h3>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-[#DFA878]" />
                    info@emmavandermeer.com
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-[#DFA878]" />
                    +31 20 123 4567
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading">Press Inquiries</h3>
                <p className="mt-2 text-[#333333]">
                  For press kits, interview requests, and media inquiries, please contact
                  our press team at press@emmavandermeer.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading">Stockists</h3>
                <div className="mt-2 space-y-1 text-[#333333]">
                  <p>De Bijenkorf - Amsterdam</p>
                  <p>X Bank - Amsterdam</p>
                  <p>Le Bon Marché - Paris</p>
                  <p>Liberty London - London</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={formRef}
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="bg-[#F5F5F5] p-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-sm uppercase tracking-wide mb-2 font-body">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="w-full p-3 border border-[#E5E5E5] focus:border-[#DFA878] focus:outline-none transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-sm uppercase tracking-wide mb-2 font-body">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email address"
                          className="w-full p-3 border border-[#E5E5E5] focus:border-[#DFA878] focus:outline-none transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-sm uppercase tracking-wide mb-2 font-body">
                        Subject
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full p-3 border border-[#E5E5E5] focus:border-[#DFA878] focus:outline-none transition-colors">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                          <SelectItem value="Appointment Request">Appointment Request</SelectItem>
                          <SelectItem value="Collaboration Proposal">Collaboration Proposal</SelectItem>
                          <SelectItem value="Press Inquiry">Press Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-sm uppercase tracking-wide mb-2 font-body">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          className="w-full p-3 border border-[#E5E5E5] focus:border-[#DFA878] focus:outline-none transition-colors min-h-[120px]"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full p-3 bg-primary text-white hover:bg-[#DFA878] transition-colors font-body uppercase tracking-widest"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
