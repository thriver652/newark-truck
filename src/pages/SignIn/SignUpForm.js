import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  // Define sign-up fields with hints
  const signUpFields = [
    {
      label: "Name",
      type: "text",
      placeholder: "Your name",
      hint: "This is a hint text to help user.",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "olivia@untitledui.com",
      hint: "This is a hint text to help user.",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Your password",
      hint: "This is a hint text to help user.",
    },
  ];

  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setReceiveUpdates(e.target.checked);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Validate form fields
    signUpFields.forEach((field) => {
      if (!formData[field.label] || formData[field.label].trim() === "") {
        errors[field.label] = `${field.label} is required`;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Trigger sign-up function
      signUp(formData["Email"]);
      toast.success("🎉 Sign Up successful!");
      navigate("/verificationmail");
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md w-full h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
        <p className="text-gray-600 mb-4">Save your info for faster checkout</p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Track orders and access your history</li>
          <li>Easily reorder from past purchases</li>
        </ul>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
          {signUpFields.map((field, index) => (
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

          {/* Checkbox for updates */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="receiveUpdates"
              checked={receiveUpdates}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="receiveUpdates" className="text-sm">
              Send me updates on top brands & products
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#004E98] text-white rounded-md shadow-sm hover:bg-blue-700 transition duration-200"
          >
            Sign up and continue
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpForm;
