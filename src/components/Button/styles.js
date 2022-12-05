import styled, { css } from "styled-components";

export const Container = styled.div`
  border: 1px solid cyan;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: cyan;
    color: #111;
  }

  ${({ position }) =>
    position === "left"
      ? css`
          border-radius: 10px 0 0 10px;
        `
      : css`
          border-radius: 0 10px 10px 0;
        `}
`;

export const Text = styled.p`
  font-size: 2rem;
`;
