import React from "react";
import { Text, Container } from "./styles";

export const Button = ({ text, onClick, position }) => {
  return (
    <Container position={position} onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  );
};
