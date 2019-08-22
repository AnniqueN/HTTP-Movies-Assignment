import styled from "styled-components";

// Global Styling for all buttons
export const ButtonContainer = styled.button`
  background: red;
  border-radius: 6px;
  color: blue;
  padding: .2rem 1rem;
  transition: all .3s ease;
  &:hover {
    background: pink;
    border-radius: 6px;
    cursor: pointer;
    }
`;
