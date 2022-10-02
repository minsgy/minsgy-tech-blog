import React from "react";
import styled from "styled-components";

interface ProfileCardProps {
  name: string;
}

export const ProfileCard = ({ name }: ProfileCardProps) => {
  return (
    <Wrapper>
      <ImageBox
        alt="프로필 사진"
        src="https://avatars.githubusercontent.com/u/60251579?v=4"
      />
      <NameBox>
        안녕하세요. 꾸준한 경험으로 성장하는 개발자 {name}입니다
      </NameBox>
      <Description></Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ImageBox = styled.img`
  width: 175px;
  border-radius: 50%;
  overflow: hidden;
`;

const NameBox = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
`;

const Description = styled.div`
  flex: 1 0 auto;
`;
