import React from "react";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ 
  message = "Hello%20Jilani%20Gems!%20I%27m%20interested%20in%20your%20products.", 
  className = "",
  children 
}: WhatsAppButtonProps) => {
  const phoneNumber = "9234567890"; // Replace with actual business number
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${className}`}
    >
      {children || "Contact on WhatsApp"}
    </a>
  );
};

export default WhatsAppButton;