/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Creators as LayoutCreators } from '../../../../views/Layout/store';
import { AlignedDiv, Header } from '../../../Common/CommonStyles';
import DynamicSVGIcon from '../../../Common/DynamicSVGIcon';
import DropArrow from '../../../../assets/icons/layout/dropdownarrow.svg';
import { BodyContainer, Container, HeaderContainer } from './Tutorials.style';
import TutorialItem from './TutorialItem/TutorialItem.view';

const Tutorials = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(LayoutCreators.setShowSideNav({ showSideNav: false }));
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <AlignedDiv>
          <div onClick={() => history.push('/home')}>
            <DynamicSVGIcon iconUrl={DropArrow} width='2.2rem' />
          </div>
          <Header style={{ marginLeft: '2rem' }}>Tutorials</Header>
        </AlignedDiv>
      </HeaderContainer>
      <BodyContainer>
        <TutorialItem className='hightlight' />
        <TutorialItem />
        <TutorialItem />
        <TutorialItem />
      </BodyContainer>
    </Container>
  );
};

export default Tutorials;
