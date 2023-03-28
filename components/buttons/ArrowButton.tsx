import styled from "styled-components";

const ArrowBtn = styled.button`
  min-width: 32px;
  width: 32px;
  height: 32px;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s ease;
  background-image: url("/vectors/arrow_vector.svg");
  background-size: cover;

  :active {
    transform: translateX(20px);
  }
`;

export default function ArrowButton() {
  return <ArrowBtn title="Link button" />;
}
