import React from 'react';
import { Container, Content, UsernameText } from './CommentItem.style';

const CommentItem = ({ item }) => {
  const { name, comment, profilePic } = item;
  return (
    <Container>
      <UsernameText>{name}</UsernameText>
      <Content>{comment}</Content>
    </Container>
  );
};

export default CommentItem;
