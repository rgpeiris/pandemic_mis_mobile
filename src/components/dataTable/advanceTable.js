import React, { useEffect, useState } from "react";
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

const AdvanceTable = ({
  columns,
  rows,
  rowsPerPage,
  totalCount,
  currentPage,
  onHandlePageChange,
  onHandleChangeCurrentPage,
  onHandleChangeRowsPerPage,
  handleEdit,
  isRakanMgt,
}) => {
  const [tableData, setTableData] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    onHandleChangeCurrentPage(newPage);
    onHandlePageChange(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    onHandleChangeRowsPerPage(+event.target.value);
    onHandleChangeCurrentPage(0);
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

  useEffect(() => {
    setOrderBy("");
    setTableData(rows);
  }, [rows]);

  return (
    <Grid item sm={12} xs={12}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="advance table">
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
                .slice()
                .map((row, index) => (
                  <TableRow
                    key={index.toString()}
                    data-testid="data-rows"
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {columns.map((column) => (
                      <TableCell key={column.field}>
                        {column.field === "dateCreated" ||
                        column.field === "dateUpdated" ||
                        column.field === "activationDate" ||
                        column.field === "recordCreatedDate" ||
                        column.field === "triggerDate" ||
                        column.field === "createDate" ||
                        column.field === "ekycPerformedDate" ||
                        column.field === "cddPerformedDate" ||
                        column.field === "updateDate" ? (
                          <>
                            {row[column.field] &&
                              moment(row[column.field]).format("DD-MMM-YYYY") +
                                " " +
                                row[column.field]?.split("T")[1]?.split(".")[0]}
                          </>
                        ) : column.field === "pmProductName" ? (
                          <>{row.name.en}</>
                        ) : (
                          row[column.field]
                        )}
                      </TableCell>
                    ))}
                    {handleEdit && (
                      <>
                        {isRakanMgt &&
                        !["ACTIVE", "DEACTIVATED"].includes(row?.status) ? (
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
                                  sx={{
                                    color: "#2f4f4f",
                                    filter: "Opacity(0.5)",
                                    pointerEvents: "none",
                                  }}
                                  data-testid="edit-disable"
                                >
                                  <Plagiarism fontSize="large" />
                                </IconButton>
                              )}
                            </span>
                          </TableCell>
                        ) : (
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
                      </>
                    )}
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
        {tableData && tableData[0] ? (
          <TablePagination
            component="div"
            count={totalCount}
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

AdvanceTable.defaultProps = {
  isRakanMgt: false,
};

AdvanceTable.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onHandlePageChange: PropTypes.func.isRequired,
  onHandleChangeCurrentPage: PropTypes.func.isRequired,
  onHandleChangeRowsPerPage: PropTypes.func.isRequired,
  handleEdit: PropTypes.func,
  isRakanMgt: PropTypes.bool,
};

export default AdvanceTable;
