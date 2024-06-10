import { DataGrid } from "@mui/x-data-grid";

function DataTable(props) {
  const { rows = [], columns = [], page = 0, pageSize = 10 } = props;
  return (
    <div style={{ height: 630 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page, pageSize },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;
