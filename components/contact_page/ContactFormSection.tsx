import styled from "styled-components";
import { PageSection } from "@/styles/sections";
import { FontMedium_xl, poppinsRegular } from "@/styles/typography";
import MainButton from "../buttons/MainButton";
import { useForm } from "react-hook-form";

const ContactForm = styled.form`
  max-width: 840px;
  margin: 0 auto;

  & button {
    display: block;
    margin: 0 auto;
    margin-top: 40px;
  }
`;

const NameInputs = styled.div`
  display: flex;
  gap: 15px;
`;

const ContactInputLabel = styled(FontMedium_xl)`
  display: block;
  width: 100%;
  margin-bottom: 20px;
`;

const ContactInput = styled.input`
  width: 100%;
  height: ${({ placeholder }) =>
    placeholder === "Your Message" ? "180px" : "60px"};
  padding: 15px 30px;
  margin-top: 10px;
  background: ${({ theme }) => theme.grayscale.grayscale_white};
  ${poppinsRegular.style};
  font-size: 16px;
  line-height: 26px;
  border: 1px solid ${({ theme }) => theme.grayscale.grayscale_10};
  outline: none;
  color: ${({ theme }) => theme.grayscale.grayscale_50};
  resize: none;

  ::placeholder {
    color: ${({ theme }) => theme.grayscale.grayscale_10};
  }

  :focus {
    outline: 3px solid ${({ theme }) => theme.main_colors.blue_50};
  }
`;

export default function ContactFormSection() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <PageSection>
      <ContactForm>
        <NameInputs>
          <ContactInputLabel as="label">
            First Name
            <ContactInput type="text" placeholder="First Name" />
          </ContactInputLabel>
          <ContactInputLabel as="label">
            Last Name
            <ContactInput type="text" placeholder="Last Name" />
          </ContactInputLabel>
        </NameInputs>
        <ContactInputLabel as="label">
          Email
          <ContactInput type="email" placeholder="Email" />
        </ContactInputLabel>
        <ContactInputLabel as="label">
          Phone Number
          <ContactInput type="tel" placeholder="Phone Number" />
        </ContactInputLabel>
        <ContactInputLabel as="label">
          Your Message
          <ContactInput as="textarea" placeholder="Your Message" />
        </ContactInputLabel>
        <MainButton
          buttonName="Send Message"
          buttonWidth="large"
          buttonColor="blue"
        />
      </ContactForm>
    </PageSection>
  );
}
