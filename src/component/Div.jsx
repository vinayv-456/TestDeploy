/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Div = ({ children, onClick }) => <div onClick={onClick}>{children}</div>;

export default Div;
