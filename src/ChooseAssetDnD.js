import React, { useState } from 'react';

const ChooseAssetDnD = () => {
  const dataSource = [
    { "asset": "123" },
    { "asset": "456" },
    { "asset": "789" },
    { "asset": "012" }
  ];

  const [sourceList, setSourceList] = useState(dataSource);
  const [targetList, setTargetList] = useState([]);

  // Handle dragging an item to the target list
  const handleDrop = (event, listType) => {
    const itemData = JSON.parse(event.dataTransfer.getData('itemData'));

    if (listType === 'target') {
      // Add to target list and remove from source list
      setTargetList([...targetList, itemData]);
      setSourceList(sourceList.filter(a => a !== itemData));
    } else {
      // Add back to source list and remove from target list
      setSourceList([...sourceList, itemData]);
      setTargetList(targetList.filter(a => a !== itemData));
    }
  };

  // Start the drag event by setting the item data
  const handleDragStart = (event, item) => {
    event.dataTransfer.setData('itemData', JSON.stringify(item));
  };

  const sourceListDiv = sourceList.map((item, index) => (
    <div
      key={index}
      draggable
      onDragStart={(e) => handleDragStart(e, item)}
      className="rounded-lg m-1 p-2 text-center bg-orange-300 hover:bg-gray-300 cursor-move"
    >
      {item.asset}
    </div>
  ));

  const targetListDiv = targetList.map((item, index) => (
    <div
      key={index}
      draggable
      onDragStart={(e) => handleDragStart(e, item)}
      className="rounded-lg m-1 p-2 text-center bg-blue-300 hover:bg-gray-300 cursor-move"
    >
      {item.asset}
    </div>
  ));

  return (
    <div className="bg-black h-full w-full flex p-4 space-x-4">
      {/* Source List */}
      <div
        className="text-center border-2 rounded-lg border-white w-1/2 p-4 bg-lime-500"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, 'source')}
      >
        <h3 className="text-white mb-2">Source List</h3>
        {sourceListDiv}
      </div>

      {/* Target List */}
      <div
        className="text-center border-2 rounded-lg border-white w-1/2 p-4 bg-lime-500"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, 'target')}
      >
        <h3 className="text-white mb-2">Target List</h3>
        {targetListDiv}
      </div>
    </div>
  );
};

export default ChooseAssetDnD;
