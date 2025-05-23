import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup.object({
  firstName: yup
    .string()
    .required()
    .trim()
    .min(2, "first name must be atlest 2 characters")
    .max(15, "first name cannot exceed 15 characters")
    .matches(/^[A-Za-z ]+$/, "Name can only contain letters and spaces"),
  lastName: yup
    .string()
    .trim()
    .min(2, "last name must be atlest 2 characters")
    .max(15, "last name cannot exceed 15 characters")
    .matches(/^[A-Za-z ]+$/, "last name can only contain letters and spaces"),
  email: yup.string().email().required().trim(),
  password: yup.string().required().min(6).max(30, "password cannot exceed 30"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      {/* heading */}
      <div className="py-12 sm:py-16 lg:py-20 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Create account
        </h1>
        <div className="breadcrumbs text-sm sm:text-base">
          <ul className="justify-center">
            <li>
              <Link>Home</Link>
            </li>
            <li className="text-gray-500">Create Account</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-2xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <fieldset className="fieldset">
              {/* first-name */}
              <div className="form-control w-full">
                <legend className="fieldset-legend text-black font-medium text-sm sm:text-base inline-block mb-2">
                  First name <span className="text-red-600">*</span>
                </legend>
                <input
                  {...register("firstName")}
                  type="text"
                  className="input input-bordered bg-white border-gray-300 focus:outline-0 focus:border-black w-full h-10 sm:h-12 rounded-4xl"
                  placeholder="First name"
                />
                <p>{errors.firstName?.message}</p>
              </div>

              {/* last-name */}
              <div className="form-control w-full">
                <legend className="fieldset-legend text-black font-medium text-sm sm:text-base inline-block mb-2">
                  Last name
                </legend>
                <input
                  {...register("lastName")}
                  type="text"
                  className="input input-bordered bg-white border-gray-300 focus:outline-0 focus:border-black w-full h-10 sm:h-12 rounded-4xl"
                  placeholder="Last name"
                />
                <p>{errors.lastName?.message}</p>
              </div>

              {/* email */}
              <div className="form-control w-full">
                <legend className="fieldset-legend text-black font-medium text-sm sm:text-base inline-block mb-2">
                  Email <span className="text-red-600">*</span>
                </legend>
                <input
                  {...register("email")}
                  type="email"
                  className="input input-bordered bg-white border-gray-300 focus:outline-0 focus:border-black w-full h-10 sm:h-12 rounded-4xl"
                  placeholder="Email"
                />
                <p>{errors.email?.message}</p>
              </div>

              {/* password */}
              <div className="form-control w-full">
                <legend className="fieldset-legend text-black font-medium text-sm sm:text-base inline-block mb-2">
                  Password <span className="text-red-600">*</span>
                </legend>
                <input
                  {...register("password")}
                  type="password"
                  className="input input-bordered bg-white border-gray-300 focus:outline-0 focus:border-black w-full h-10 sm:h-12 rounded-4xl"
                  placeholder="Password"
                />
                <p>{errors.password?.message}</p>
              </div>

              {/* notice */}
              <p className="text-gray-600 text-[16px] my-5">
                Your personal data will be used to support your experience
                throughout this website, to <br /> manage access to your account
                and for other purposes described in our privacy policy.
              </p>

              {/* submit button */}
              <div className="form-control w-full mb-4">
                <button
                  type="submit"
                  className="btn bg-white w-full h-10 sm:h-12 rounded-4xl uppercase text-[14px] relative overflow-hidden transition-colors duration-300 hover:text-black group"
                >
                  <span className="absolute inset-0 bg-black transform translate-y-0  group-hover:translate-y-full transition-transform duration-500 ease-in-out z-0"></span>
                  <span className="relative z-20 transition-colors duration-300 group-hover:text-black">
                    Create Account
                  </span>
                </button>
              </div>

              {/* login button */}
              <div className="form-control w-full">
                <button
                  type="submit"
                  className="btn bg-black w-full h-10 sm:h-12 rounded-4xl uppercase text-[14px] relative overflow-hidden transition-colors duration-300 hover:text-black group"
                >
                  <span className="absolute inset-0 bg-white transform translate-y-0 group-hover:translate-y-full transition-transform duration-500 ease-in-out z-0"></span>
                  <span className="relative z-20 transition-colors duration-300 text-black group-hover:text-white">
                    log in
                  </span>
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
