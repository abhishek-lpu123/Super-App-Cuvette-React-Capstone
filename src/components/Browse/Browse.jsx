import React from 'react';
import Info from './Info';
import Weather from './Weather';
import Notes from './Notes';
import './Browse.css'
function Browse() {
  return (
    <>
      <div className='container3'>
        <div className='vertical'>
          <Info />
          <Weather />
        </div>

        <div className='horizontal'>
          <Notes />
        </div>
      </div>
    </>
  )
}

export default Browse;