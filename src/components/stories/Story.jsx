import React from 'react';
import './Stories.css';

const Story = ({item}) => {
  return (
    <div className='story'>
      <img className="story_img" src={item.image} alt="" />
    </div>
  );
};

export default Story;