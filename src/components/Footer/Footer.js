import React from "react";
import { BbbAccred, EliteReseller, GoogleFoot, Phcc } from "../../images";
import {
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  // Social media links and icons
  const socialMediaLinks = [
    {
      href: "https://www.youtube.com",
      icon: <FaYoutube className="text-2xl" />,
      label: "YouTube",
    },
    {
      href: "https://twitter.com",
      icon: <FaTwitter className="text-2xl" />,
      label: "Twitter",
    },
    {
      href: "https://facebook.com",
      icon: <FaFacebook className="text-2xl" />,
      label: "Facebook",
    },
    {
      href: "https://instagram.com",
      icon: <FaInstagram className="text-2xl" />,
      label: "Instagram",
    },
    {
      href: "https://linkedin.com",
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
    },
    {
      href: "https://www.tiktok.com",
      icon: <FaTiktok className="text-2xl" />,
      label: "TikTok",
    },
  ];

  // Accreditation logos
  const accreditationLogos = [
    { src: GoogleFoot, alt: "Google Certified", width: 80, height: 80 },
    { src: BbbAccred, alt: "BBB Accreditation", width: 128, height: 60 },
    { src: EliteReseller, alt: "Elite Reseller", width: 80, height: 80 },
    { src: Phcc, alt: "PHCC Member", width: 80, height: 80 },
  ];

  // Footer links like Terms of Service, Privacy Policy, etc.
  const footerLinks = [
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Site Map" },
    { href: "#", label: "Do Not Sell My Personal Information" },
  ];

  return (
    <footer className="w-[1440px] h-[228px] p-[80px_32px] gap-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section with Links and Social Media Icons */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <ul className="flex space-x-4 mb-4">
            {/* Map through footer links */}
            {footerLinks.map(({ href, label }) => (
              <li key={label}>
                <a href={href} className="hover:underline text-[#1570EF]">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
            {/* Map through social media links */}
            {socialMediaLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}

            {/* Copyright text with domain link */}
            <p className="text-[16px] flex items-center gap-2 justify-center md:justify-start">
              <a
                href="https://newarktruckcenter.com"
                className="hover:underline text-[#004E98]"
              >
                ©Newarktruckcenter.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Section with Images */}
        <div className="flex gap-6 justify-center md:justify-end">
          {/* Map through accreditation logos */}
          {accreditationLogos.map(({ src, alt, width, height }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className={`w-[${width}px] h-[${height}px] object-contain`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
