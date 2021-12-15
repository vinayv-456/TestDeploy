import styled from 'styled-components';
import { fontFamily } from '../../../constants';
import { CircularDiv } from '../../Common/CommonStyles';
import { Modal as ModalTemplate, RightAlignedModalContainer } from '../../Common/PopUpModal/Modal.style';

export const Modal = styled(ModalTemplate)`
  overflow: hidden;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .dynamicSVGIcon {
    margin-right: 2rem;
  }
`;

export const ModalContainer = styled(RightAlignedModalContainer)`
  width: 40%;
  padding: 3.5rem 0rem;
  animation: lefttoright 300ms 1;

  @keyframes lefttoright {
    from {
      right: -100%;
    }
    to {
      right: 0px;
    }
  }
`;

export const Header = styled.div`
  font-size: 2.6rem;
  font-family: ${fontFamily.circularBold};
  color: #202020;
  padding-left: 5rem;
`;

export const TabContainer = styled.div`
  margin-top: 3rem;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 1rem;
  /* background-color: green; */
`;

export const TabItem = styled.div`
  color: #4a4a4a;
  font-size: 2.1rem;
  font-family: ${fontFamily.circularMedium};
  padding-bottom: 1.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  /* background-color: yellow; */
  &.active::after {
    content: '';
    background-color: #000000;
    height: 5px;
    width: 4rem;
    border-radius: 3px;
    position: absolute;
    bottom: -3px;
  }
`;

export const NotificationItemContainer = styled.div`
  background-color: #f9f9f9;
  /* background-color: red; */
  border-radius: 10px;
  margin: 0rem 2.5rem;
  padding: 2rem;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    max-width: 85%;
    /* background-color: red; */
  }
`;

export const Message = styled.div`
  color: #474747;
  font-size: 1.8rem;
  font-family: ${fontFamily.circularMedium};
`;

export const Time = styled.div`
  color: #9f9f9f;
  font-size: 1.5rem;
  font-family: ${fontFamily.circularMedium};
  text-align: right;
`;

export const ActiveNotificationCount = styled(CircularDiv)`
  background-color: red;
  font-size: 1.4rem;
  position: absolute;
  top: -2rem;
`;

export const CancelContainer = styled.div`
  position: absolute;
  right: 41%;
  top: 3rem;
  cursor: pointer;
`;
