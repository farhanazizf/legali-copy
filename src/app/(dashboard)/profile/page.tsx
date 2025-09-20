"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Edit, LogOut } from "lucide-react";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { ProfileUpload } from "@/components/elements/profile-upload";
import { Typography } from "@/components/elements/typography";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  type ProfileFormData,
  profileFormSchema,
  regionOptions,
  subscriptionTypeOptions,
} from "@/schema/profile";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const formId = useId();

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: "Legali",
      lastName: "Legali",
      profileImage: null,
      dateOfBirth: "1990-01-01",
      subscriptionType: "Premium",
      region: "united-states",
      tokenUsage: 5000,
      storageUsage: "20000 MB",
    },
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    form.reset();
    setIsEditing(false);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const onSubmit = (data: ProfileFormData) => {
    console.log("Form submitted:", data);
    setIsEditing(false);
  };

  return (
    <div className="flex w-full flex-1 flex-col gap-10 overflow-hidden">
      {/* Header with Action Buttons */}
      <div className="flex items-center gap-3">
        {!isEditing ? (
          <Button onClick={handleEdit} variant={"orange"}>
            <Edit className="h-4 w-4" />
            Edit
          </Button>
        ) : (
          <div className="flex items-center gap-3">
            <Button type="submit" form={formId}>
              Save
            </Button>
            <Button type="button" onClick={handleCancel} variant="outline">
              Cancel
            </Button>
          </div>
        )}
      </div>

      {/* Profile Form */}
      <Form {...form}>
        <form
          id={formId}
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-1 flex-col space-y-5"
        >
          <div className="flex w-full gap-10">
            {/* Left Column */}
            <div className="flex flex-col gap-5 px-10">
              {/* Profile Avatar */}
              <FormField
                control={form.control}
                name="profileImage"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ProfileUpload
                        value={field.value}
                        onChange={field.onChange}
                        disabled={!isEditing}
                        className="mx-auto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Right Column */}
            <div className="grid flex-1 grid-cols-2 flex-col gap-5">
              {/* Form Fields */}
              <div className="space-y-5">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Typography
                          level="body"
                          weight="semibold"
                          className="text-deep-navy"
                        >
                          First Name
                        </Typography>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={!isEditing}
                          className="h-[39px] w-full rounded-[10px] border-light-gray-400 bg-white px-6 py-2 text-slate-gray-400"
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
                    <FormItem>
                      <FormLabel>
                        <Typography
                          level="body"
                          weight="semibold"
                          className="text-deep-navy"
                        >
                          Last Name
                        </Typography>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={!isEditing}
                          className="h-[39px] w-full rounded-[10px] border-light-gray-400 bg-white px-6 py-2 text-slate-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Date of Birth */}
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Typography
                          level="body"
                          weight="semibold"
                          className="text-deep-navy"
                        >
                          DoB
                        </Typography>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          disabled={!isEditing}
                          className="h-[39px] w-full rounded-[10px] border-light-gray-400 bg-white px-6 py-2 text-slate-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Subscription Type */}
                <FormField
                  control={form.control}
                  name="subscriptionType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Typography
                          level="body"
                          weight="semibold"
                          className="text-deep-navy"
                        >
                          Subscription Type
                        </Typography>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={!isEditing}
                      >
                        <FormControl>
                          <SelectTrigger className="h-[39px] w-full rounded-[10px] border-light-gray-400 bg-white px-6 py-2 text-slate-gray-400">
                            <SelectValue placeholder="Select subscription type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {subscriptionTypeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-5">
                {/* Region */}
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Typography
                          level="body"
                          weight="semibold"
                          className="text-deep-navy"
                        >
                          Region
                        </Typography>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={!isEditing}
                      >
                        <FormControl>
                          <SelectTrigger className="h-[39px] w-full rounded-[10px] border-light-gray-400 bg-white px-6 py-2 text-slate-gray-400">
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {regionOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Token Usage */}
                <FormField
                  control={form.control}
                  name="tokenUsage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Typography
                          level="body"
                          weight="semibold"
                          className="text-deep-navy"
                        >
                          Token Usage
                        </Typography>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={true}
                          className="text-slate-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Storage Usage */}
                <FormField
                  control={form.control}
                  name="storageUsage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Typography
                          level="body"
                          weight="semibold"
                          className="text-deep-navy"
                        >
                          Storage Usage
                        </Typography>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={true}
                          className="text-slate-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Footer with Logout Button */}
          <div className="flex justify-end">
            <Button onClick={handleLogout} variant={"destructive"}>
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
