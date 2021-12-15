/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import leftArrow from '../../assets/icons/layout/BackArrow.svg';
import rightArrow from '../../assets/icons/layout/right_arrow.svg';
import leftArrowDisable from '../../assets/icons/layout/BackArrowDisable.svg';
import rightArrowDisable from '../../assets/icons/layout/right_arrow_disable.svg';
import { fontFamily, fontSize } from '../../constants/font';
import { device } from '../../constants';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 4rem;
  cursor: pointer;
`;
const RangeText = styled.p`
  font-size: ${fontSize.title};
  font-family: ${fontFamily.circularBold};
  margin-right: 5px;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

const Total = styled.div`
  font-size: ${fontSize.title};
  font-family: ${fontFamily.circularBook};
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

const PaginationComponent = (props) => {
  const { handlePageChange, total } = props;
  const [menusPerPage, setMenusPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastMenu = currentPage * menusPerPage;
  const indexOfFirstMenu = indexOfLastMenu - menusPerPage;

  useEffect(() => {
    handlePageChange(indexOfFirstMenu, indexOfLastMenu);
  }, [total, currentPage, menusPerPage]);

  const handlePageDown = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePageUp = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <Icon
        src={indexOfFirstMenu !== 0 ? leftArrow : leftArrowDisable}
        alt=''
        onClick={indexOfFirstMenu !== 0 ? handlePageDown : null}
      />
      <RangeText>
        {indexOfLastMenu < total
          ? `${indexOfFirstMenu + 1}-${indexOfLastMenu}`
          : total % indexOfFirstMenu === 1
          ? total
          : `${indexOfFirstMenu + 1}-${total}`}
      </RangeText>
      <Total> of {total}</Total>

      <Icon
        src={indexOfLastMenu < total ? rightArrow : rightArrowDisable}
        alt=''
        onClick={indexOfLastMenu < total ? handlePageUp : null}
      />
    </Container>
  );
};

export default PaginationComponent;
