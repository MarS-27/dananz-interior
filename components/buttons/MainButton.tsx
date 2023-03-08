import { FontMedium_m } from "@/styles/typography";
import styled from "styled-components";

type ButtonConfigType = {
  buttonColor: "blue" | "white";
  buttonWidth: "small" | "medium" | "large";
};

type ButtonPropsType = ButtonConfigType & {
  buttonName:
    | "Contact Us"
    | "Learn More"
    | "See Materials"
    | "Send Message"
    | "See More";
};

export const Button = styled.button<ButtonConfigType>`
  width: ${({ buttonWidth }) => {
    return buttonWidth === "small"
      ? "140px"
      : buttonWidth === "medium"
      ? "160px"
      : "170px";
  }};
  height: 50px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({ theme, buttonColor }) => {
    return buttonColor === "blue"
      ? theme.main_colors.blue_100
      : theme.grayscale.grayscale_white;
  }};
  border: 1px solid ${({ theme }) => theme.grayscale.grayscale_30};

  :hover {
    background-color: ${({ theme }) => theme.main_colors.blue_50};
    transition: ${({ theme }) => theme.transition};
  }

  & p {
    color: ${({ theme, buttonColor }) => {
      return buttonColor === "blue"
        ? theme.grayscale.grayscale_white
        : theme.grayscale.grayscale_50;
    }};

    :hover {
      color: ${({ theme }) => theme.grayscale.grayscale_50};
      transition: ${({ theme }) => theme.transition};
    }
  }
`;

export default function MainButton({
  buttonName,
  buttonColor,
  buttonWidth,
}: ButtonPropsType) {
  return (
    <Button
      type={buttonName === "Send Message" ? "submit" : "button"}
      buttonColor={buttonColor}
      buttonWidth={buttonWidth}
    >
      <FontMedium_m>{buttonName}</FontMedium_m>
    </Button>
  );
}
