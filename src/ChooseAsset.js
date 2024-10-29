import React, { useState } from 'react';

const ChooseAsset = () => {
  const dataSource = [
    { "asset": "123" },
    { "asset": "456" },
    { "asset": "789" },
    { "asset": "012" }
  ];

  const [sourceList, setSourceList] = useState(dataSource);
  const [targetList, setTargetList] = useState([]);
  const [fadingItem, setFadingItem] = useState(null);

  const addToTarget = (item) => {
    setFadingItem(item);
    setTimeout(() => {
      setTargetList([...targetList, item]);
      setSourceList(sourceList.filter(a => a !== item));
      setFadingItem(null);
    }, 300); // Duration matches fade-out animation
  };

  const addToSource = (item) => {
    setFadingItem(item);
    setTimeout(() => {
      setSourceList([...sourceList, item]);
      setTargetList(targetList.filter(a => a !== item));
      setFadingItem(null);
    }, 300); // Duration matches fade-out animation
  };

  const sourceListDiv = sourceList.map((item, index) => (
    <div
      onClick={() => addToTarget(item)}
      className={`rounded-lg m-1 text-center bg-orange-300 hover:bg-gray-300 cursor-pointer transition-all duration-300 ${
        fadingItem === item ? '-translate-y-full' : 'translate-y-0'
      }`}
      key={index}
    >
      {item.asset}
    </div>
  ));

  const targetListDiv = targetList.map((item, index) => (
    <div
      onClick={() => addToSource(item)}
      className={`rounded-lg m-1 text-center bg-orange-300 hover:bg-gray-300 cursor-pointer transition-all duration-300 ${
        fadingItem === item ? '-translate-y-full' : 'translate-y-0'
      }`}
      key={index}
    >
      {item.asset}
    </div>
  ));

  return (
    <div className='bg-black h-full w-full flex'>
      <div className='text-center m-1 border-2 rounded-lg border-white h-max w-1/2 bg-lime-500'>
        {sourceListDiv}
      </div>
      <div className='m-1 border-2 rounded-lg border-white h-max w-1/2 bg-lime-500'>
        {targetListDiv}
      </div>
    </div>
  );
};

export default ChooseAsset;
