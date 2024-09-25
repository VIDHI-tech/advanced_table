// import React, { useState } from 'react';
// import { Drawer, Button, Select, MenuItem } from '@mui/material';

// const GroupingPanel = ({ isOpen, onClose, onApplyGrouping }) => {
//   const [selectedColumn, setSelectedColumn] = useState('');

//   const handleGroupChange = (event) => {
//     setSelectedColumn(event.target.value);
//   };

//   const applyGrouping = () => {
//     if (selectedColumn) {
//       onApplyGrouping(selectedColumn);
//     }
//   };

//   return (
//     <Drawer anchor="right" open={isOpen} onClose={onClose}>
//       <div style={{ width: '250px', padding: '16px' }}>
//         <h3>Create Groups</h3>
//         <Select
//           fullWidth
//           value={selectedColumn}
//           onChange={handleGroupChange}
//           displayEmpty
//         >
//           <MenuItem value="">Select a column</MenuItem>
//           <MenuItem value="category">Category</MenuItem>
//           <MenuItem value="subcategory">Subcategory</MenuItem>
//           {/* <MenuItem value="clear">Clear Grouping</MenuItem> */}
//         </Select>
//         <Button
//           variant="contained"
//           color="light"
//           fullWidth
//           style={{ marginTop: '16px' }}
//           onClick={applyGrouping}
//         >
//           Clear Grouping
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           style={{ marginTop: '16px' }}
//           onClick={applyGrouping}
//         >
//           Apply Grouping
//         </Button>
//       </div>
//     </Drawer>
//   );
// };

// export default GroupingPanel;



import React, { useState } from 'react';
import { Drawer, Button, Select, MenuItem } from '@mui/material';

const GroupingPanel = ({ isOpen, onClose, onApplyGrouping, onClearGrouping }) => {
  const [selectedColumn, setSelectedColumn] = useState('');

  const handleGroupChange = (event) => {
    setSelectedColumn(event.target.value);
  };

  const applyGrouping = () => {
    if (selectedColumn) {
      onApplyGrouping(selectedColumn);
    }
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: '250px', padding: '16px' }}>
        <h3>Create Groups</h3>
        <Select
          fullWidth
          value={selectedColumn}
          onChange={handleGroupChange}
          displayEmpty
        >
          <MenuItem value="">Select a column</MenuItem>
          <MenuItem value="category">Category</MenuItem>
          <MenuItem value="subcategory">Subcategory</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          style={{ marginTop: '16px' }}
          onClick={onClearGrouping}
        >
          Clear Grouping
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '16px' }}
          onClick={applyGrouping}
        >
          Apply Grouping
        </Button>
      </div>
    </Drawer>
  );
};

export default GroupingPanel;
