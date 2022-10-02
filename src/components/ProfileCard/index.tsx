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
      <Description>
        <NameBox>경험으로 성장하는 프론트엔드 개발자 {name}입니다.</NameBox>
        <p>
          쏘카(SOCAR)에서 주니어 프론트엔드 개발자로 재직중입니다.
          <br />
        </p>
      </Description>
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
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5;
`;

const Description = styled.div`
  flex: 1 0 auto;
`;
