import React from 'react';
import usePositionStore from '../store/PositionStore';

const Position = () => {

  const { position, setPosition } = usePositionStore();

 
  const handlePointerMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      id="dot-container"
      onPointerMove={handlePointerMove}  
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <div
        id="dot"
        style={{
          position: 'absolute',
          transform: `translate(${position.x}px, ${position.y}px)`,  
          width: '20px',
          height: '20px',
          backgroundColor: 'red',
          borderRadius: '50%',  
        }}
      />
    </div>
  );
};

export default Position;
