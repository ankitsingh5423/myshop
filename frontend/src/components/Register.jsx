import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handelSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
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
          <form onSubmit={handelSubmit(console.log)} className="space-y-6">
            <fieldset className="fieldset">
              {/* first-name */}
              <div className="form-control w-full">
                <legend className="fieldset-legend text-black font-medium text-sm sm:text-base inline-block mb-2">
                  First name <span className="text-red-600">*</span>
                </legend>
                <input
                  {...register("firstName", {
                    validate: {
                      required: true,
                      
                    },
                  })}
                  type="text"
                  className="input input-bordered bg-white border-gray-300 focus:outline-0 focus:border-black w-full h-10 sm:h-12 rounded-4xl"
                  placeholder="First name"
                />
              </div>

              {/* last-name */}
              <div className="form-control w-full">
                <legend className="fieldset-legend text-black font-medium text-sm sm:text-base inline-block mb-2">
                  Last name
                </legend>
                <input
                  type="text"
                  className="input input-bordered bg-white border-gray-300 focus:outline-0 focus:border-black w-full h-10 sm:h-12 rounded-4xl"
                  placeholder="Last name"
                />
              </div>

              {/* email */}
              <div className="form-control w-full">
                <legend className="fieldset-legend text-black font-medium text-sm sm:text-base inline-block mb-2">
                  Email <span className="text-red-600">*</span>
                </legend>
                <input
                  type="email"
                  className="input input-bordered bg-white border-gray-300 focus:outline-0 focus:border-black w-full h-10 sm:h-12 rounded-4xl"
                  placeholder="Email"
                />
              </div>

              {/* password */}
              <div className="form-control w-full">
                <legend className="fieldset-legend text-black font-medium text-sm sm:text-base inline-block mb-2">
                  Password <span className="text-red-600">*</span>
                </legend>
                <input
                  type="password"
                  className="input input-bordered bg-white border-gray-300 focus:outline-0 focus:border-black w-full h-10 sm:h-12 rounded-4xl"
                  placeholder="Password"
                />
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
