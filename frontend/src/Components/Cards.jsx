import React from 'react'

export default function Cards() {
  return (
    <>
    <div className='cards'>
   <div className='cards-image'>
    <img src="cardImage/action.png" alt="" />
   </div>
   <div className='cards-title'>
    <h1>Contest -1</h1>
   </div>
   <div className='cards-des'>
    <p>Vote for your favorite Action Movie</p>
    <button className='cards-button'>Enter the Contest</button>
   </div>
    </div>
    </>  
  );
}
