import React from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const SignInPage = () => {
  return (
    <div className="bg-gray-100 items-start justify-center p-4 min-h-screen">
      <div className="flex flex-col md:flex-row md:space-x-6 w-full max-w-[1480px] px-2 mt-10 gap-8 md:gap-0">
        {/* Sign In Card */}
        <SignInForm />
        {/* Create Account Card */}
        <SignUpForm />
      </div>
      <div className="flex justify-center mt-8 text-sm text-gray-600">
        Your information is 100% secure
      </div>
    </div>
  );
};

export default SignInPage;
