/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AvatarComponent } from '../../..';
import { userProfileDetails } from '../../../../constants/sampleData';
import {
  Container,
  AvatarIconContainer,
  HeadingText,
  Header,
  ContentContainer,
  UserDetailFeild,
  ButtonContainer,
  Anchor
} from './Account.style';
import editIcon from '../../../../assets/icons/KPV/Chart menu_edit pane.svg';
import DynamicSVGIcon from '../../../Common/DynamicSVGIcon';
import ItemComponent from '../../../Common/MenuItem/Item.view';
import Input from '../../../Common/Input/Input';
import ButtonComp from '../../../Common/Button/Button.view';
import { Modal } from '../../../Common/PopUpModal/Modal.style';
import { Creators as LayoutCreators } from '../../../../views/Layout/store';

const userFeilds = [
  // {label: 'Profile Name' , value: 'profileName'},
  { label: 'Employee ID', value: 'empId' },
  { label: 'User ID', value: 'userId' },
  { label: 'Role', value: 'role' },
  { label: 'Mail', value: 'reportingManager' },
  { label: 'Reporting Manager', value: 'mail' },
  { label: 'Phone', value: 'phone' }
];

const Item = ({ name, icon, edit }) => (
  <ItemComponent name={name} icon={icon} style={edit && { marginBottom: '0rem' }} />
);

const EditUserFeild = ({ feild }) => {
  console.log('');
  return (
    <UserDetailFeild>
      <Item name={feild.label} edit={true} />
      <div>
        <Input
          placeholder={userProfileDetails[feild.value]}
          style={{ backgroundColor: 'transparent', width: '25rem', minWidth: '25rem' }}
        />
      </div>
    </UserDetailFeild>
  );
};

const Accounts = () => {
  const { changePwd } = useSelector((state) => state.home);
  const { userData } = useSelector((state) => state.loginData);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (changePwd) {
      dispatch(LayoutCreators.settingsActiveMenu(''));
    }
  }, [changePwd]);

  const handleChangePwd = () => {
    dispatch(LayoutCreators.toggleHeaderOption('changePwd'));
  };

  const handleSaveChanges = () => {
    setEdit(false);
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  return (
    <Container>
      <AvatarIconContainer>
        <AvatarComponent
          userdata={userData}
          circle='circle'
          // ml='1.5rem'
          size='12rem'
          // onClick={(e) => setModalIsVisibal(!modalIsVisibal)}
        />
      </AvatarIconContainer>
      {!edit ? (
        <ContentContainer>
          <Header>
            <HeadingText>{userProfileDetails.profileName}</HeadingText>
            <div onClick={() => setEdit(true)}>
              <DynamicSVGIcon iconUrl={editIcon} width='3rem' />
            </div>
          </Header>
          {userFeilds.map((feild) => (
            <Item name={userProfileDetails[feild.value]} />
          ))}
          <Anchor onClick={handleChangePwd}>change Password</Anchor>
        </ContentContainer>
      ) : (
        <div>
          <EditUserFeild feild={{ label: 'Profile Name', value: 'profileName' }} />
          {userFeilds.map((feild) => (
            <EditUserFeild feild={feild} />
          ))}
          <Anchor onClick={handleChangePwd}>change Password</Anchor>
          <ButtonContainer>
            <ButtonComp style={{ marginRight: '2rem' }} onClick={cancelEdit}>
              Cancel
            </ButtonComp>
            <ButtonComp dark={true} onClick={handleSaveChanges}>
              Save Changes
            </ButtonComp>
          </ButtonContainer>
        </div>
      )}
    </Container>
  );
};

export default Accounts;
