/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Creators as LayoutCreators } from '../../../../views/Layout/store';
import DynamicSVGIcon from '../../../Common/DynamicSVGIcon';
import {
  ContentText,
  Header,
  HeaderContainer,
  Icon,
  ItemText,
  MainHeading,
  QuestionsContainer,
  SubHeading,
  TableOfContentsContainer,
  BodyContainer
} from './FAQs.style';
import DropArrow from '../../../../assets/icons/layout/dropdownarrow.svg';
import { AlignedDiv } from '../../../Common/CommonStyles';
import CollapsableQuestion from './CollapsableQuestion/CollapsableQuestion.view';

const FAQs = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(LayoutCreators.setShowSideNav({ showSideNav: false }));
  }, []);
  const modules = ['Dashboard', 'Analytics', 'KPVs', 'Charting', 'Plot Graph'];
  const [activeModule, setActiveModule] = useState(modules[0]);

  const questions = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      question: 'sed do eiusmod tempor incididunt ut labore et d ?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      question: 'quis nostrud exercitation ullamco ?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <HeaderContainer>
        <AlignedDiv>
          <div onClick={() => history.push('/home')}>
            <DynamicSVGIcon iconUrl={DropArrow} width='2.2rem' />
          </div>
          <Header style={{ marginLeft: '2rem' }}>FAQs</Header>
        </AlignedDiv>
      </HeaderContainer>
      <div style={{ overflow: 'auto' }}>
        <BodyContainer>
          <TableOfContentsContainer>
            <SubHeading>Table of Content</SubHeading>
            <div>
              {modules.map((e) => (
                <ItemText onClick={() => setActiveModule(e)} className={activeModule === e && 'active'}>
                  {e}
                </ItemText>
              ))}
            </div>
          </TableOfContentsContainer>
          <QuestionsContainer>
            <MainHeading>Questions?? Look Here.</MainHeading>
            {questions.map((e) => (
              <CollapsableQuestion question={e} />
            ))}
          </QuestionsContainer>
        </BodyContainer>
      </div>
    </div>
  );
};

export default FAQs;
