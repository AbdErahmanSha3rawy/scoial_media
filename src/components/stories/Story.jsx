import React from 'react';
import './stories.css';

const Story = ({item}) => {
  return (
    <div className='story'>
      <img className="story_img" src={item.image} alt="" />
    </div>
  );
};

export default Story;