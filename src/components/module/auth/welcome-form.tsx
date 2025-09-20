"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  regions,
  type WelcomeFormData,
  welcomeFormSchema,
} from "../../../schema/welcome";
import { ProfileUpload } from "../../elements/profile-upload";
import { H1, P } from "../../elements/typography";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

export function WelcomeForm() {
  const form = useForm<WelcomeFormData>({
    resolver: zodResolver(welcomeFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      region: "",
      profileImage: null,
    },
  });

  const handleSubmit = (data: WelcomeFormData) => {
    console.log(data);
  };

  const {
    formState: { isLoading },
  } = form;

  return (
    <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-8">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src="/logo.png" width={80} height={50} alt="Logo" />
        <H1 level="h3" weight="semibold" className="text-deep-navy">
          Fill your credentials
        </H1>
      </div>

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="m-auto flex w-full flex-1 gap-8 self-center"
        >
          {/* Profile Image Upload */}
          <div className="flex justify-center">
            <FormField
              control={form.control}
              name="profileImage"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ProfileUpload
                      value={field.value}
                      onChange={field.onChange}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex w-full flex-col gap-4">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-base font-semibold text-deep-navy">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name..."
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-base font-semibold text-deep-navy">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your last name..."
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Region */}
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-base font-semibold text-deep-navy">
                    Region
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Region" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region.value} value={region.value}>
                          {region.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-2.5">
              <Button
                type="button"
                variant="outline"
                className="h-10 rounded-full border-light-gray-400 bg-white px-6 text-slate-gray-400 hover:bg-slate-50"
                disabled={isLoading}
                onClick={() => form.reset()}
              >
                <P
                  level="body"
                  weight="semibold"
                  className="text-slate-gray-400"
                >
                  Cancel
                </P>
              </Button>

              <Button
                type="submit"
                variant="orange"
                className="h-10 rounded-full bg-warm-orange-400 px-6"
                disabled={isLoading}
              >
                <P level="body" weight="semibold" className="text-white">
                  {isLoading ? "Processing..." : "Finish"}
                </P>
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
