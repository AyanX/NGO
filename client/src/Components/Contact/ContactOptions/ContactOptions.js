import Wrapper from "../../../Assets/utils/Wrapper";
import { DonationCards } from "../../HomePage/Donation/Donation";
import { Locate, Mail, PhoneCall } from "lucide-react";
import useContacts from "../../../Assets/utils/useContacts";

const ContactOptionsComponent = () => {
  const { contacts } = useContacts();

  const { location, email, phone } = contacts;
  const contactOptions = [
    {
      logo: <Locate color="var(--primary-color)" size={32} />,
      title: "Visit Us",
      content: location || "location",
      to: "#",
      link: "Get Directions",

      IconBgColor: "var(--secondary-color)",
      bg: "var(--dark-blue)",
    },
    {
      logo: <PhoneCall color="var(--primary-color)" size={32} />,
      title: "Call Us",
      content: phone || "phone number",
      to: "#",
      link: "Call Now",
      IconBgColor: "var(--blue-color)",
      bg: "var(--darker-gray)",
    },
    {
      logo: <Mail color="var(--primary-color)" size={32} />,
      title: "Email Us",
      content: email || "email address",
      to: "#",
      toEmail: true,
      link: (
        <a
          style={{ textDecoration: "none !important" }}
          href={`mailto:${email || "email address"}`}
          className="btn primary"
        >
          <button
            className="btn primary"
            style={{ color: "var(--secondary-color)" }}
          >
            SEND MESSAGE
          </button>
        </a>
      ),
      IconBgColor: "var(--secondary-color)",
      bg: "var(--dark-blue)",
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
