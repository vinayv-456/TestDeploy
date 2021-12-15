/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Header, HighlightContent, NormalContent } from './TutorialItem.style';

const TutorialItem = ({ className }) => {
  const tutorial = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    duration: '3min 23sec'
  };
  const { title, description, duration } = tutorial;
  const dispatch = useDispatch();
  return (
    <Container className={className}>
      <Header>{title}</Header>
      <NormalContent>
        {description}
        <NormalContent>
          Duration:
          <HighlightContent>{` ${duration}`}</HighlightContent>
        </NormalContent>
      </NormalContent>
    </Container>
  );
};

export default TutorialItem;
