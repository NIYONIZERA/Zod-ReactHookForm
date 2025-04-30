import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//  The Zod schema for validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Must be a valid email"),
  age: z.number({ invalid_type_error: "Age must be a number" })
    .min(18, "Must be 18 or older"),
});

const UserForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      age: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className=" w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">User Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={`mt-1 block w-full p-2 border bg-white text-black rounded-md ${
              errors.name ? "border-[#FF69B4]" : "border-black"
            } focus:outline-none focus:ring-2 focus:ring-[#FF69B4]`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-[#FF69B4]">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`mt-1 block w-full p-2 border bg-white text-black rounded-md ${
              errors.email ? "border-[#FF69B4]" : "border-black"
            } focus:outline-none focus:ring-2 focus:ring-[#FF69B4]`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-[#FF69B4]">{errors.email.message}</p>
          )}
        </div>

        {/* Age Field */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-black">
            Age
          </label>
          <input
            id="age"
            type="number"
            {...register("age", { valueAsNumber: true })}
            className={`mt-1 block w-full p-2 border bg-white text-black rounded-md ${
              errors.age ? "border-[#FF69B4]" : "border-black"
            } focus:outline-none focus:ring-2 focus:ring-[#FF69B4]`}
          />
          {errors.age && (
            <p className="mt-1 text-sm text-[#FF69B4]">{errors.age.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#FF69B4] text-white rounded-md hover:bg-[#FF85C1] transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;