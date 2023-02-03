import React from 'react'

export default function Features() {
  return (
   <>
   <div className='features'>
    <div className='row'>
        <div className='text-col'>
            <h2>Action</h2>
            <p>Lorem ipsum dolor sit amet consectetur,
                 adipisicing elit. Pariatur, quis.</p>
        </div>
        <div className='img-col'>
           <img src={process.env.PUBLIC_URL + "images1/action.png"}/>
        </div>
    </div>
   </div>
   <hr></hr>
   <div className='features'>
    <div className='row'>
    <div className='img-col'>
           <img src={process.env.PUBLIC_URL + "images1/thriller.png"}/>
        </div>
        <div className='text-col'>
            <h2>Thriller</h2>
            <p>Lorem ipsum dolor sit amet consectetur,
                 adipisicing elit. Pariatur, quis.</p>
        </div>
    </div>
   </div>
   <hr></hr>
   <div className='features'>
    <div className='row'>
    
        <div className='text-col'>
            <h2>Romance</h2>
            <p>Lorem ipsum dolor sit amet consectetur,
                 adipisicing elit. Pariatur, quis.</p>
        </div>
        <div className='img-col'>
           <img src={process.env.PUBLIC_URL + "images1/romantic.png"}/>
        </div>
    </div>
   </div>
<hr></hr>
   <div className='features'>
    <div className='row'>
    <div className='img-col'>
           <img src={process.env.PUBLIC_URL + "images1/crime.png"}/>
        </div>
        <div className='text-col'>
            <h2>Crime</h2>
            <p>Lorem ipsum dolor sit amet consectetur,
                 adipisicing elit. Pariatur, quis.</p>
        </div>
    </div>
   </div>
   <hr></hr>
   </>
  )
}
