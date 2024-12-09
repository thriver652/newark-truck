import React, { useState } from "react";

const SignInForm = () => {
  const signInFields = [
    {
      label: "Email",
      type: "email",
      placeholder: "olivia@untitledui.com",
      hint: "This is a hint text to help user.",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "your password",
      hint: "This is a hint text to help user.",
    },
  ];

  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Form validation
    signInFields.forEach((field) => {
      if (!formData[field.label]?.trim()) {
        errors[field.label] = `${field.label} is required`;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      alert("Sign In successful!");
      setFormErrors({});
    }
  };

  return (
    <div className="bg-white py-6 shadow-md w-full h-[524px] flex flex-col items-center justify-center">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-2">Sign in to your account</h2>
        <p className="text-gray-600 mb-6">Welcome back!</p>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
          {signInFields.map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                name={field.label}
                value={formData[field.label] || ""}
                onChange={handleInputChange}
                className={`w-full p-4 border rounded-md focus:outline-none ${
                  formErrors[field.label]
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
              />
              <small className="text-gray-400 text-xs">{field.hint}</small>
              {formErrors[field.label] && (
                <small className="text-red-500 text-xs">
                  {formErrors[field.label]}
                </small>
              )}
            </div>
          ))}
          <div className="flex justify-between items-center mb-4">
            <a href="/" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#004E98] text-white rounded-md shadow-sm hover:bg-blue-700 transition duration-200"
          >
            Sign in and continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
