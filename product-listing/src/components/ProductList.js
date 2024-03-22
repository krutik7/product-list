// top level imports
import * as React from "react";
// mui components and data grid
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Stack } from "@mui/material";
// mui icons
import AddIcon from "@mui/icons-material/Add";

export default function ProductList() {
  // hooks
  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState([]);

  // fetching product list data from json
  React.useEffect(() => {
    fetch("staticData/productList.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setRows(myJson[0].rows);
        setColumns(myJson[0].columns);
      });
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Stack direction={"row"} justifyContent={"right"} mb={2}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            fontSize: "10px",
            fontWeight: 600,
            backgroundColor: "#ac8454 !important",
          }}
        >
          Add Product
        </Button>
      </Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        density="compact"
        initialState={{
          ...columns,
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  );
}
