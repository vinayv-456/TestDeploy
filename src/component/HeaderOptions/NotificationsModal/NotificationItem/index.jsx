import React from 'react';
import { useDispatch } from 'react-redux';
import { Message, NotificationItemContainer, Time } from '../NotificationsModal.style';

const NotificationItem = ({ icon, data, handleClick }) => (
  // const { message, time, date } = data;

  // const dispatch = useDispatch();

  <NotificationItemContainer onClick={() => handleClick(data)}>
    <div>
      <div>{icon}</div>
      <Message>{data?.message}</Message>
    </div>
    <div>
      <Time>{data?.time}</Time>
      <Time>{data?.date}</Time>
    </div>
  </NotificationItemContainer>
);
export default NotificationItem;
