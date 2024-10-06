import React from "react";
import styled from "styled-components";
import { TableHeaderProps } from "./Table.types";

const CustomTableHeader = styled.thead<TableHeaderProps>`
    font-weight: bold;
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.backgroundColor};
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <CustomTableHeader>{children}</CustomTableHeader>;
};

export default TableHeader;
