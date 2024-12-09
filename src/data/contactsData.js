import { CallIcon, EmailIcon, TextIcon, LiveChatIcon } from "../images";
export const contactOptions = [
  {
    icon: TextIcon,
    label: "Text",
    info: "+123 456 7890",
    availability: "Available at 5 pm",
    style: {
      width: "24px",
      height: "24px",
      padding: "3px 3px 2.54px 3px",
      gap: "0px",
    },
  },
  {
    icon: CallIcon,
    label: "Call",
    info: "+123 456 7890",
    availability: "Available at 5 pm",
    style: {
      width: "24px",
      height: "24px",
      padding: "2.55px 2.46px 2.84px 2.93px",
      gap: "0px",
    },
  },
  {
    icon: EmailIcon,
    label: "Email",
    info: "support@example.com",
    availability: "Response within 24 hours",
    style: {
      width: "24px",
      height: "24px",
      left: "2px",
      gap: "0px",
      border: "2px solid transparent",
    },
  },
  {
    icon: LiveChatIcon,
    label: "Live Chat",
    info: "Click here",
    availability: "Available for immediate support",
    style: {
      width: "24px",
      height: "24px",
      padding: "2px 0px 0px 0px",
      gap: "0px",
    },
  },
];
