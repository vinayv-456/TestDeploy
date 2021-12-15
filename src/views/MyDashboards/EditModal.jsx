import React from 'react';
import styled from 'styled-components';
import Modal from '../../component/Common/PopUpModal/Modal.view';
import Input from '../../component/Common/Input/Input';

import { ReactComponent as Arrow } from '../../assets/icons/KPV/dropdownArrowBlack.svg';
import { ReactComponent as Add } from '../../assets/icons/Filter/add black.svg';
import Close from '../../assets/icons/Filter/cancel black.svg';
import Radiobutton from '../../component/Common/RadioButton/RadioButton';

import { fontSize } from '../../constants';
import { Button, Div, FlexContainer } from '../../globalStyles';
import { Tag } from './MyDashboards.style';

const Title = styled.p`
  font-size: ${fontSize.text};
  color: ${({ theme }) => theme.headingText};
`;

const DropDown = styled(Div)`
  position: relative;
  box-shadow: -3px -3px 7px #ffffffcb;
`;

const DButton = styled(Div)`
  height: 5.5rem;
  width: 5.5rem;
  background: ${({ theme }) => theme.white};
  border-radius: 1rem;

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  & > svg {
    height: 15px;
    transform: rotate(90deg);
  }
`;

const SearchCont = styled(Div)`
  width: 50%;
  position: relative;
`;

const AddButton = styled(DButton)`
  & > svg {
    height: 15px;
  }
`;

const P = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 2.5rem;
`;

const TagsContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const Tags = styled(Tag)`
  padding-right: 2.5rem;
  position: relative;

  & > img {
    height: 8px;
    position: absolute;
    top: 9px;
    right: 7px;
  }
`;
const Btn = styled(Button)`
  padding: 1.8rem;
  height: auto;
  cursor: pointer;
`;

const Editmodal = () => (
  <Modal>
    <Title>Save Dashboard</Title>
    <Input margin='1rem 0' placeholder='Title' value='' setValue={() => null} />
    <DropDown my='1'>
      <Input placeholder='Category' disabled={true} />
      <DButton>
        <Arrow />
      </DButton>
    </DropDown>
    <FlexContainer className='jc_spacebetween ai_center'>
      <SearchCont my='1'>
        <Input placeholder='Search Tags' value='' />
        <AddButton>
          <Add />
        </AddButton>
      </SearchCont>
      <FlexContainer className='jc_center ai_center'>
        <P> Shared Dashboard</P>
        <Radiobutton />
      </FlexContainer>
    </FlexContainer>
    <TagsContainer>
      <Tags>
        Tag
        <img src={Close} alt='Clear' />
      </Tags>
    </TagsContainer>

    <FlexContainer className='jc_spacebetween ai_center' my='1'>
      <Btn>Cancel</Btn>
      <Btn className='dark'>Save</Btn>
    </FlexContainer>
  </Modal>
);

export default Editmodal;
