/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Div } from '../../globalStyles';

const ImgContainer = styled.img`
  height: ${(props) => props.size || '36px'};
  width: ${(props) => props.size || '36px'};
  margin-left: ${(props) => props.ml || '0px'};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: ${(props) => (props.circle ? '50%' : '0.6rem')};
`;

const Container = styled.div`
  height: ${(props) => props.size || '36px'};
  width: ${(props) => props.size || '36px'};
  margin-left: ${(props) => props.ml || '0px'};
  background-color: white;
  border-radius: ${(props) => (props.circle ? '50%' : '0.6rem')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LetterContainer = styled.div`
  text-transform: uppercase;
  color: black;
  font-weight: bold;
`;

const Letter = styled.span`
  font-size: 13px;
`;

const Avatar = (props) => {
  const { userdata, circle, size } = props;
  return (
    <Container circle={circle} size={size} {...props}>
      {userdata?.lastName || userdata?.firstName ? (
        <LetterContainer>
          <Letter>{userdata?.firstName?.charAt(0)}</Letter>
          <Letter>{userdata?.lastName?.charAt(0)}</Letter>
        </LetterContainer>
      ) : (
        <LetterContainer>
          <Letter>{userdata.email.split('@')[0].split('.')[0].charAt(0)}</Letter>
          <Letter>{userdata.email.split('@')[0].split('.')[1].charAt(0)}</Letter>
        </LetterContainer>
      )}
    </Container>
  );
  // return <ImgContainer src={url} circle={circle} size={size} {...props} />;
};

export default Avatar;
