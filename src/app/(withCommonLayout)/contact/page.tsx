import Contact from "@/components/UI/Contact/Contact";
// import ContactBanner from "@/components/UI/Contact/ContactBanner";
import Service from "@/components/UI/HomePage/Service/Service";
import CommonBanner from "@/utils/CommonBanner/CommonBanner";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      {/* <ContactBanner /> */}
      <CommonBanner pageName="Contact" />
      <Contact />
      <div className="mt-20 mb-[-40px]">
        <Service />
      </div>
    </div>
  );
};

export default ContactPage;
