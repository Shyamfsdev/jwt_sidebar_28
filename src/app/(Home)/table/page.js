import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'CustomerName', headerName: 'Customer Name', width: 130 },
  { field: 'BuisnessName', headerName: 'Buisness Name', width: 130 },
  { field: 'CustomerCode', headerName: 'Customer Code', width: 130 },
  { field: 'MobileNo', headerName: 'Mobile No', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//   },
];

const rows = [
  { id: 1, CustomerName: 'Snow', BuisnessName: 'Jon',CustomerCode: 'Jon', age: 35 },
  { id: 2, CustomerName: 'Lannister', BuisnessName: 'Cersei',CustomerCode: 'Jon', age: 42 },
  { id: 3, CustomerName: 'Lannister', BuisnessName: 'Jaime',CustomerCode: 'Jon', age: 45 },
  { id: 4, CustomerName: 'Stark', BuisnessName: 'Arya',CustomerCode: 'Jon', age: 16 },
  { id: 5, CustomerName: 'Targaryen', BuisnessName: 'Daenerys',CustomerCode: 'Jon', age: null },
  { id: 6, CustomerName: 'Melisandre', BuisnessName: null,CustomerCode: 'Jon', age: 150 },
  { id: 7, CustomerName: 'Clifford', BuisnessName: 'Ferrara',CustomerCode: 'Jon', age: 44 },
  { id: 8, CustomerName: 'Frances', BuisnessName: 'Rossini',CustomerCode: 'Jon', age: 36 },
  { id: 9, CustomerName: 'Roxie', BuisnessName: 'Harvey',CustomerCode: 'Jon', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnFilter
        disableColumnMenu
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10,15]}
        // checkboxSelection
      />
    </div>
  );
}
