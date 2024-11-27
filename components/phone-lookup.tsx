"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  countryCode: z.string().length(2, "Country code must be 2 characters"),
});

type PhoneInfo = {
  valid: boolean;
  number: string;
  local_format: string;
  international_format: string;
  country_prefix: string;
  country_code: string;
  country_name: string;
  location: string;
  carrier: string;
  line_type: string | null;
} | null;

export function PhoneLookup() {
  const [phoneInfo, setPhoneInfo] = useState<PhoneInfo>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      countryCode: "IN",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await fetch(
        `http://apilayer.net/api/validate?access_key=471eba72a86a6724f5101348d08c938f&number=${values.phoneNumber}&country_code=${values.countryCode}&format=1`
      );
      const data = await response.json();
      setPhoneInfo(data);
      if (!data.valid) {
        toast.error("Invalid phone number");
      }
    } catch (error) {
      toast.error("Error looking up phone number");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-center text-3xl font-bold">Phone Number Lookup</h2>
        <Card>
          <CardHeader>
            <CardTitle>Enter Phone Details</CardTitle>
            <CardDescription>
              Get detailed information about any phone number worldwide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country Code</FormLabel>
                      <FormControl>
                        <Input placeholder="IN" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Looking up..." : "Lookup Number"}
                </Button>
              </form>
            </Form>

            {phoneInfo && (
              <div className="mt-8 space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <h3 className="mb-4 font-semibold">Results</h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Valid</dt>
                      <dd>{phoneInfo.valid ? "Yes" : "No"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Country</dt>
                      <dd>{phoneInfo.country_name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Location</dt>
                      <dd>{phoneInfo.location || "N/A"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Carrier</dt>
                      <dd>{phoneInfo.carrier || "N/A"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Line Type</dt>
                      <dd>{phoneInfo.line_type || "N/A"}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}