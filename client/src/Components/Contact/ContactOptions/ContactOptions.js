import Wrapper from "../../../Assets/utils/Wrapper";
import { DonationCards } from "../../HomePage/Donation/Donation";
import { Locate, Mail, PhoneCall } from "lucide-react";
import useContacts from "../../../Assets/utils/useContacts";

const ContactOptionsComponent = () => {
  const { contacts } = useContacts();

  const { location, email, phone } = contacts;
  const contactOptions = [
    {
      logo: <Locate color="var(--background-color)" size={32} />,
      title: "Visit Us",
      content: location || "location",
      to: "#",
      IconBgColor: "var(--secondary-color)",
      bg: "var(--dark-to-white:)",
    },
    {
      logo: <PhoneCall color="var(--background-color)" size={32} />,
      title: "Call Us",
      content: phone || "phone number",
      to: "#",
      IconBgColor: "var(--blue-color)",
      bg: "var(  --light-dark-bg)",
    },
    {
      logo: <Mail color="var(--background-color)" size={32} />,
      title: "Email Us",
      content: email || "email address",
      to: "#",
      toEmail: true,
      link: (
        <a
          style={{ textDecoration: "none !important" }}
          href={`mailto:${email || "email address"}`}
          className="btn-send primary"
        >
          <button
            className="btn-send-email primary"
            style={{ color: "var(--background-color)" }}
          >
            SEND MESSAGE
          </button>
        </a>
      ),
      IconBgColor: "var(--secondary-color)",
     bg: "var(--dark-to-white:)",
    },
  ];
  return <div>{DonationCards(contactOptions)}</div>;
};

const ContactOptions = () => {
  return (
    <Wrapper component={<ContactOptionsComponent />} bg="var(--dark-text)" />
  );
};

export default ContactOptions;
