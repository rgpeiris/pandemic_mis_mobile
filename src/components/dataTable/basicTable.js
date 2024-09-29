import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  TablePagination,
  Table,
  TableContainer,
  TableSortLabel,
  Paper,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import { Plagiarism } from "@mui/icons-material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import moment from "moment";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFFFFF",
    color: "#15181A",
    fontWeight: "bold",
    fontSize: "15px",
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#696969",
  },
}));

const BasicTable = ({
  currentPage,
  columns,
  rows,
  recordsPerPage,
  handleChangeCurrentPage,
  handleEdit,
  isMobile,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(recordsPerPage);
  const [tableData, setTableData] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    setOrderBy("");
    setTableData(rows);
  }, [rows]);

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    handleChangeCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    handleChangeCurrentPage(0);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const handleRequestSort = (event, property) => {
    event.preventDefault();
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  return (
    <Grid item sm={12} xs={12}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: isMobile ? 200 : 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  width={column.width}
                  align="left"
                  key={column.field}
                >
                  <TableSortLabel
                    active={orderBy === column.field}
                    direction={orderBy === column.field ? order : "asc"}
                    onClick={createSortHandler(column.field)}
                  >
                    {column.columnName}
                    {orderBy === column.field ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </StyledTableCell>
              ))}
              {handleEdit && <StyledTableCell width="5%"></StyledTableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  There are no records available
                </TableCell>
              </TableRow>
            ) : (
              tableData
                .sort(getComparator(order, orderBy))
                .slice(
                  currentPage * rowsPerPage,
                  currentPage * rowsPerPage + rowsPerPage
                )
                .map((row, index) => (
                  <TableRow
                    key={index.toString()}
                    data-testid="data-rows"
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {columns.map((column) => (
                      <TableCell key={column.field}>
                        {column.field === "createdDate" ||
                        column.field === "updatedDate" ||
                        column.field === "registrationDate" ||
                        column.field === "confirmedDate" ||
                        column.field === "dateScheduled" ||
                        column.field === "dateOfVaccination" ||
                        column.field === "dateOfPandemicTest" ? (
                          <>
                            {row[column.field] &&
                              moment(row[column.field]).format("DD-MMM-YYYY") +
                                " " +
                                row[column.field]?.split("T")[1]?.split(".")[0]}
                          </>
                        ) : column.field === "isActive" ? (
                          <>{row[column.field] ? "ACTIVE" : "INACTIVE"}</>
                        ) : (
                          row[column.field]
                        )}
                      </TableCell>
                    ))}
                    {handleEdit && (
                      <TableCell>
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "Center",
                            alignItems: "Center",
                          }}
                        >
                          {handleEdit && (
                            <IconButton
                              sx={{ color: "#2f4f4f" }}
                              onClick={handleEdit.bind(this, row)}
                              data-testid="edit"
                            >
                              <Tooltip title="View more">
                                <Plagiarism fontSize="large" />
                              </Tooltip>
                            </IconButton>
                          )}
                        </span>
                      </TableCell>
                    )}
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
        {tableData && tableData[0] ? (
          <TablePagination
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[10, 20]}
            page={currentPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            showFirstButton
            showLastButton
          />
        ) : null}
      </TableContainer>
    </Grid>
  );
};

BasicTable.propTypes = {
  currentPage: PropTypes.number.isRequired,
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  handleChangeCurrentPage: PropTypes.func.isRequired,
  handleEdit: PropTypes.func,
  isMobile: PropTypes.bool,
};

export default BasicTable;
