import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div class="flex flex-row gap-2 w-full h-full items-center justify-center mx-auto my-auto z-30 fixed">
          <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
          <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.3s]"></div>
          <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
        </div>
      ) : (
        <div className="w-full max-w-lg px-3 mx-auto  md:flex-0 shrink-0 border border-gray-900 rounded-lg my-8 mt-16">
          <div className="flex-auto p-6">
            <h1 className=" text-center text-2xl p-4 font-semibold">
              {" "}
              Register with MERN-AUTH for free!
            </h1>
            <form role="form text-left" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  aria-describedby="email-addon"
                  aria-label="Name"
                  placeholder="UserName"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="text"
                  id="username"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  aria-describedby="email-addon"
                  aria-label="Email"
                  placeholder="Email"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  aria-describedby="password-addon"
                  aria-label="Password"
                  placeholder="Password"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button
                  className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                  type="button"
                  onClick={handleSubmit}
                >
                  Sign up
                </button>
              </div>
              <p className="mt-4 mb-0 leading-normal text-sm">
                Already have an account?{" "}
                <Link className="font-bold text-slate-700" to="/sign-in">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
