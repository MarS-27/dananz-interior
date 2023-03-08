import Layout from "components/Layout";
import PageTitleSection from "@/components/title_section/PageTitleSection";
import ContactLocationSection from "@/components/contact_page/ContactLocationSection";
import ContactFormSection from "@/components/contact_page/ContactFormSection";

export default function Contact() {
  return (
    <Layout>
      <PageTitleSection pageName="contact" />
      <ContactFormSection />
      <ContactLocationSection />
    </Layout>
  );
}
