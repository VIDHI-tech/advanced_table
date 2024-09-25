// import React from 'react';
// import { MaterialReactTable } from 'material-react-table';
// import { IconButton } from '@mui/material';
// import LayersIcon from '@mui/icons-material/Layers';
// import data from '../data/data.json';

// const DataTable = ({ onGroupIconClick, groupedColumn }) => {
//   // Reorder columns based on the selected group column
//   let columns = [
//     { accessorKey: 'id', header: 'ID' },
//     { accessorKey: 'name', header: 'Name' },
//     { accessorKey: 'category', header: 'Category' },
//     { accessorKey: 'subcategory', header: 'Subcategory' },
//     { accessorKey: 'createdAt', header: 'Created At' },
//     { accessorKey: 'updatedAt', header: 'Updated At' },
//     { accessorKey: 'price', header: 'Price' },
//     { accessorKey: 'salePrice', header: 'Sale Price' },
//   ];

//   // Move grouped column to the first position
//   if (groupedColumn) {
//     const groupedColumnObject = columns.find(col => col.accessorKey === groupedColumn);
//     columns = columns.filter(col => col.accessorKey !== groupedColumn);
//     columns.unshift(groupedColumnObject);
//   }

//   // Group data based on the selected column
//   const groupedData = {};
//   data.forEach((row) => {
//     const key = row[groupedColumn] || 'Ungrouped';
//     if (!groupedData[key]) {
//       groupedData[key] = { count: 0, rows: [] };
//     }
//     groupedData[key].count += 1;
//     groupedData[key].rows.push(row);
//   });

//   // Flatten the grouped data to render in the table
//   const flattenedData = [];
//   Object.keys(groupedData).forEach((group) => {
//     flattenedData.push({ [groupedColumn]: `${group} (${groupedData[group].count})` });
//     flattenedData.push(...groupedData[group].rows);
//   });

//   return (
//     <div>
//       <MaterialReactTable
//         columns={columns}
//         data={flattenedData}
//         renderTopToolbarCustomActions={() => (
//           <IconButton onClick={onGroupIconClick}>
//             <LayersIcon />
//           </IconButton>
//         )}
//         enableDensityToggle={false}
//         enableFullScreenToggle={true}
//         enableColumnActions={false}
//       />
//     </div>
//   );
// };

// export default DataTable;


import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import { IconButton } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import data from '../data/data.json';

const DataTable = ({ onGroupIconClick, groupedColumn }) => {
  let columns = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'category', header: 'Category' },
    { accessorKey: 'subcategory', header: 'Subcategory' },
    { accessorKey: 'createdAt', header: 'Created At', cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString() },
    { accessorKey: 'updatedAt', header: 'Updated At', cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString() },
    { accessorKey: 'price', header: 'Price' },
    { accessorKey: 'salePrice', header: 'Sale Price' },
  ];

  if (groupedColumn) {
    const groupedColumnObject = columns.find(col => col.accessorKey === groupedColumn);
    columns = columns.filter(col => col.accessorKey !== groupedColumn);
    columns.unshift(groupedColumnObject);
  }

  const groupedData = {};
  data.forEach((row) => {
    const key = row[groupedColumn] || 'Ungrouped';
    if (!groupedData[key]) {
      groupedData[key] = { count: 0, rows: [] };
    }
    groupedData[key].count += 1;
    groupedData[key].rows.push(row);
  });

  const flattenedData = [];
  Object.keys(groupedData).forEach((group) => {
    flattenedData.push({ [groupedColumn]: `${group} (${groupedData[group].count})` });
    flattenedData.push(...groupedData[group].rows);
  });

  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={flattenedData}
        renderTopToolbarCustomActions={() => (
          <IconButton onClick={onGroupIconClick}>
            <LayersIcon />
          </IconButton>
        )}
        enableDensityToggle={false}
        enableFullScreenToggle={true}
        enableColumnActions={false}
      />
    </div>
  );
};

export default DataTable;
