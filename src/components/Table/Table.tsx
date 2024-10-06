import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const CustomTable = styled.table<TableProps>`
    width: 100%;
    border-collapse: collapse;
    background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'white')};
    color: ${({ disabled }) => (disabled ? '#999' : '#333')};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Table: React.FC<TableProps> = ({ children, ...props }) => {
  return <CustomTable {...props}>{children}</CustomTable>;
};

export default Table;
