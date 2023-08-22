"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href =
      `mailto:${process.env.NEXT_PUBLIC_EMAIL_ID}?subject=${formData.subject}&body=Hey, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <main className="max-w-screen-lg md:h-screen mx-auto px-5 lg:px-10">
      <h1 className="py-20 text-5xl text-center">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-20">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <input
              {...register("name")}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              {...register("email")}
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <input
            {...register("subject")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Subject"
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            {...register("message")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Message"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-2xl uppercase bg-blue-500 rounded-sm w-full"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Contact;
