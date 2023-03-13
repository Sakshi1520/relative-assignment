import React from 'react';
import './App.css';
import DetailCard from './components/DetailCard';
import {coinsData, dataItem} from './data';

function App() {
  return (
    <div className="App p-20">
      <div className='flex  items-center pb-14'>
        <img className='mr-5 w-4 h-4' src='assets/images/activity.svg' alt='trending assets' />
        <h1 className="text-base font-bold">Trending Assets</h1>
      </div>
      <div className='flex gap-16 flex-wrap'>
        {coinsData.map((item: dataItem, index: number) => (
          <DetailCard key={index} item={item}/>
        ))}
      </div>
    </div>
  );
}

export default App;
