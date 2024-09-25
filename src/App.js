// import React, { useState } from 'react';
// import DataTable from './components/DataTable';
// import GroupingPanel from './components/GroupingPanel';

// function App() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [groupedColumn, setGroupedColumn] = useState('');

//   const handleDrawerOpen = () => {
//     setIsDrawerOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setIsDrawerOpen(false);
//   };

//   const handleGrouping = (column) => {
//     setGroupedColumn(column);
//     setIsDrawerOpen(false);
//   };

//   return (
//     <div>
//       <DataTable onGroupIconClick={handleDrawerOpen} groupedColumn={groupedColumn} />
//       <GroupingPanel isOpen={isDrawerOpen} onClose={handleDrawerClose} onApplyGrouping={handleGrouping} />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import DataTable from './components/DataTable';
import GroupingPanel from './components/GroupingPanel';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [groupedColumn, setGroupedColumn] = useState('');

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleGrouping = (column) => {
    setGroupedColumn(column);
    setIsDrawerOpen(false);
  };

  const handleClearGrouping = () => {
    setGroupedColumn('');
    setIsDrawerOpen(false);
  };

  return (
    <div className='maindiv'>
      <DataTable onGroupIconClick={handleDrawerOpen} groupedColumn={groupedColumn} />
      <GroupingPanel 
        isOpen={isDrawerOpen} 
        onClose={handleDrawerClose} 
        onApplyGrouping={handleGrouping} 
        onClearGrouping={handleClearGrouping} 
      />
    </div>
  );
}

export default App;
