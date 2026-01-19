import { Helmet } from "react-helmet-async";

export const homePageHelmet = () => {
  return (
    <Helmet>
      <title>
        Uncle T NGO Organization | Education, Food & Clean Water in Uganda
      </title>

      <meta
        name="description"
        content="Uncle Tusiime NGO Organization is a nonprofit in Uganda supporting education, food security, clean water access, and small-scale farmers across East Africa."
      />

      <meta
        name="keywords"
        content="NGO Uganda, nonprofit organization Uganda, education NGO Uganda, clean water NGO East Africa, food security Uganda, farmers support NGO, agriculture development Uganda, community development NGO East Africa"
      />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href="https://uncletusiimefoundations.org/" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Uncle Tusiime NGO | Education, Food & Clean Water for Communities"
      />
      <meta
        property="og:description"
        content="A nonprofit organization in Uganda empowering communities through education, food security, clean water, and farmer support across East Africa."
      />
      <meta property="og:url" content="https://uncletusiimefoundations.org/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Uncle Tusiime NGO Organization" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Uncle T NGO | Education, Food & Clean Water in Uganda"
      />
      <meta
        name="twitter:description"
        content="Supporting education, food security, clean water access, and farmers in Uganda and East Africa."
      />
    </Helmet>
  );
};

export const aboutPageHelmet = () => {
  return (
    <Helmet>
      <title>
        About Us | Uncle Tusiime NGO Foundation – Empowering Communities in East Africa
      </title>

      <meta
        name="description"
        content="Learn about Uncle Tusiime NGO Foundation, a nonprofit organization in Uganda dedicated to education, food security, clean water access, and supporting farmers across East Africa."
      />

      <meta
        name="keywords"
        content="about NGO Uganda, Uncle Tusiime Foundation, nonprofit Uganda, community development East Africa, education charity Uganda, clean water projects Uganda"
      />

      <meta name="robots" content="index, follow" />

      <link
        rel="canonical"
        href="https://uncletusiimefoundations.org/about"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="About Uncle Tusiime NGO Foundation"
      />
      <meta
        property="og:description"
        content="Discover our mission, vision, and impact in empowering communities through education, food security, clean water, and farmer support in Uganda."
      />
      <meta
        property="og:url"
        content="https://uncletusiimefoundations.org/about"
      />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};



export const contactPageHelmet = () => {
  return (
    <Helmet>
      <title>
        Contact Us | Uncle Tusiime NGO Foundation – East Africa Nonprofit
      </title>

      <meta
        name="description"
        content="Get in touch with Uncle Tusiime NGO Foundation in Uganda. Contact us to partner, donate, volunteer, or learn more about our community programs across East Africa."
      />

      <meta
        name="keywords"
        content="contact NGO Uganda, Uncle Tusiime Foundation contact, nonprofit contact Uganda, charity organization Uganda, NGO partnerships East Africa"
      />

      <meta name="robots" content="index, follow" />

      <link
        rel="canonical"
        href="https://uncletusiimefoundations.org/contact"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Contact Uncle Tusiime NGO Foundation"
      />
      <meta
        property="og:description"
        content="Reach out to Uncle Tusiime NGO Foundation to support education, food security, clean water, and farmers in Uganda."
      />
      <meta
        property="og:url"
        content="https://uncletusiimefoundations.org/contact"
      />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export const volunteerPageHelmet = () => {
  return (
    <Helmet>
      <title>
        Volunteer With Us | Uncle Tusiime NGO Foundation – Make an Impact
      </title>

      <meta
        name="description"
        content="Volunteer with Uncle Tusiime NGO Foundation in Uganda. Join us in supporting education, food security, clean water initiatives, and farmers across East Africa."
      />

      <meta
        name="keywords"
        content="volunteer NGO Uganda, volunteer opportunities East Africa, nonprofit volunteering Uganda, community service Uganda, NGO volunteer application"
      />

      <meta name="robots" content="index, follow" />

      <link
        rel="canonical"
        href="https://uncletusiimefoundations.org/volunteer"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Volunteer With Uncle Tusiime NGO Foundation"
      />
      <meta
        property="og:description"
        content="Become a volunteer and help transform lives through education, clean water, food security, and farmer support in Uganda."
      />
      <meta
        property="og:url"
        content="https://uncletusiimefoundations.org/volunteer"
      />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Volunteer With Uncle Tusiime NGO Foundation"
      />
      <meta
        name="twitter:description"
        content="Apply to volunteer and support life-changing community projects across Uganda and East Africa."
      />
    </Helmet>
  );
};
