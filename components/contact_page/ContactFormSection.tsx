import styled from "styled-components";
import { PageSection } from "@/styles/sections";
import {
  FontMedium_xl,
  FontRegular_m,
  poppinsRegular,
} from "@/styles/typography";
import MainButton from "../buttons/MainButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInputs } from "@/models/models";
import { useEffect } from "react";

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

const ContactInputError = styled(FontRegular_m)`
  margin-top: 5px;
  color: #d62940;

  ::before {
    display: inline;
    content: "⚠ ";
    font-size: 18px;
    line-height: 29px;
  }
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
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {};

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <PageSection>
      <ContactForm onSubmit={handleSubmit(onSubmit)}>
        <NameInputs>
          <ContactInputLabel as="label">
            First Name
            <ContactInput
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: "This field is required!",
              })}
            />
            {errors.firstName && (
              <ContactInputError>{errors.firstName.message}</ContactInputError>
            )}
          </ContactInputLabel>
          <ContactInputLabel as="label">
            Last Name
            <ContactInput
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "This field is required!" })}
            />
            {errors.lastName && (
              <ContactInputError>{errors.lastName.message}</ContactInputError>
            )}
          </ContactInputLabel>
        </NameInputs>
        <ContactInputLabel as="label">
          Email
          <ContactInput
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "This field is required!",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format!",
              },
            })}
          />
          {errors.email && (
            <ContactInputError>{errors.email.message}</ContactInputError>
          )}
        </ContactInputLabel>
        <ContactInputLabel as="label">
          Phone Number
          <ContactInput
            type="text"
            placeholder="Phone Number"
            {...register("phone", {
              required: "This field is required!",
            })}
          />
          {errors.phone && (
            <ContactInputError>{errors.phone.message}</ContactInputError>
          )}
        </ContactInputLabel>
        <ContactInputLabel as="label">
          Your Message
          <ContactInput
            as="textarea"
            placeholder="Your Message"
            {...register("message")}
          />
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
