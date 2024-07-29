import React from 'react';

const FullNameColumn = ({ valueGetter }) => {
  return {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter,
  };
};

export default FullNameColumn;