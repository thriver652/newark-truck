import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { MailIcon } from "../../images";

const VerificationEmail = () => {
  const navigate = useNavigate();
  const { userEmail } = useAuth();

  const handleResendEmail = () => {
    alert(`Verification email has been resent to ${userEmail}`);
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[90%] max-w-[600px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <div className="w-16 h-16 mb-4">
          <img src={MailIcon} alt="Mail Icon" className="object-contain" />
        </div>
        <h2 className="text-2xl font-semibold">You’re almost there</h2>
        <p className="text-center my-4">
          We sent a verification email to <strong>{userEmail}</strong>.
          <br />
          Please verify your email before signing in.
        </p>
        <button
          onClick={handleResendEmail}
          className="text-blue-600 hover:underline mb-4"
        >
          Resend verification email
        </button>
        <button
          onClick={handleSignIn}
          className="bg-blue-600 text-white p-2 rounded-md"
        >
          Sign in here
        </button>
      </div>
    </div>
  );
};

export default VerificationEmail;
