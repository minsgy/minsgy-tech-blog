import React from "react";
import styled from "styled-components";

interface CustomLayoutProps {
  children: React.ReactNode;
  maxWidth?: number;
}

export const CustomLayout = ({
  maxWidth = 960,
  children,
}: CustomLayoutProps) => {
  return <Container maxWidth={maxWidth}>{children}</Container>;
};

const Container = styled.div<{ maxWidth: number }>`
  padding: 0 1rem;
  margin: 0 auto;
  max-width: ${({ maxWidth }) => maxWidth}px;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  font-size: 1rem;
`;
