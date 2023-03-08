import styled from "styled-components";

const SubmitButton = styled.button`
  position: absolute;
  min-width: 24px;
  width: 24px;
  height: 12px;
  padding: 0;
  right: 20px;
  bottom: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s ease;
  background-image: url("/vectors/emaiL_submit_vector.svg");
  background-size: cover;

  :active {
    transform: translateX(20px);
  }
`;

export default function SubmitEmailButton() {
  return <SubmitButton type="submit" />;
}
