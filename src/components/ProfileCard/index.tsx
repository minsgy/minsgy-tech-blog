import React from "react";
import styled from "styled-components";

interface ProfileCardProps {
  name: string;
  description: string;
}

export const ProfileCard = ({ name, description }: ProfileCardProps) => {
  return (
    <Wrapper>
      <ImageBox />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.div`
  width: 100%;
  border-radius: 50%;
`;
