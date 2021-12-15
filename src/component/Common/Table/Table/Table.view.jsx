/* eslint-disable react/no-array-index-key */
import React from 'react';
import { CellTemplate, RowTemplate, TableContainerTemplate } from './Table.style';

const Table = ({ colProps, data }) => (
  <TableContainerTemplate>
    <RowTemplate className='header '>
      {colProps.map((col, index) => (
        <CellTemplate key={index} width={col.width} className='colHeading'>
          {col.label}
        </CellTemplate>
      ))}
    </RowTemplate>
    {data.map((entry) => (
      <RowTemplate>
        {colProps.map((col, index) => (
          <CellTemplate key={index} width={col.width}>
            {entry[col.name]}
          </CellTemplate>
        ))}
      </RowTemplate>
    ))}
  </TableContainerTemplate>
);

export default Table;
