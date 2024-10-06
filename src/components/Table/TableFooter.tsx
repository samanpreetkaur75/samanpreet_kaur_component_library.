import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './Table.types';

const CustomTableFooter = styled.tfoot<TableFooterProps>`
    width: 100%;
    background-color: #f8f8f8;
    padding: 10px 0;
    border-top: 2px solid #ccc;
`;

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <CustomTableFooter>{children}</CustomTableFooter>;
};

export default TableFooter;
