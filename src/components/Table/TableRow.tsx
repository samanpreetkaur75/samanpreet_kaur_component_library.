import React from "react";
import styled from "styled-components";
import { TableRowProps } from "./Table.types";

const CustomTableRow = styled.tr<TableRowProps>`
    &:nth-child(odd) {
        background-color: #f4f4f4;
    }
`;

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <CustomTableRow>{children}</CustomTableRow>;
};

export default TableRow;
