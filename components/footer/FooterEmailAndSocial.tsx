import { FontRegular_xl, poppinsRegular } from "@/styles/typography";
import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import SubmitEmailButton from "../buttons/SubmitEmailInputButton";
import Social from "../social/Social";

const FooterEmailAndSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 30px;
  max-width: 440px;
  width: 440px;

  @media (max-width: ${({ theme }) => theme.media.medium_width}) {
    padding-top: 0;
    width: 100%;
    gap: 20px;
  }
`;

const EmailForm = styled.form`
  position: relative;
`;

const EmailFormTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const EmailFormTitleDot = styled.hr`
  min-width: 14px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.grayscale.grayscale_50};
`;

const EmailFormInput = styled.input`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.grayscale.grayscale_lightray};
  width: 100%;
  height: 40px;
  padding: 0 0 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.grayscale.grayscale_70};
  ${poppinsRegular.style};
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.grayscale.grayscale_50};

  ::placeholder {
    color: ${({ theme }) => theme.grayscale.grayscale_10};
  }
`;

export default function FooterEmailAndSocial() {
  const [email, setEmail] = useState("");

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
  };

  const emailHandleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  return (
    <FooterEmailAndSocialContainer>
      <EmailForm action="" method="POST" onSubmit={onFormSubmit}>
        <EmailFormTitle>
          <EmailFormTitleDot />
          <FontRegular_xl>
            Enter your email to get the laterst news
          </FontRegular_xl>
        </EmailFormTitle>
        <EmailFormInput
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={emailHandleChange}
        />
        <SubmitEmailButton />
      </EmailForm>
      <Social />
    </FooterEmailAndSocialContainer>
  );
}
