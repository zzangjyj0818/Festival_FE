import React, { useState, useRef } from 'react';
import './drag.scss';
import { tagData, infoData, tagData_food, infoData_food } from './data'; // 데이터를 임포트하세요
import Time from './carbon_time.png';
import EmptyHeart from './Heart.png';
import FilledHeart from './Heart2.png';
import Line from './Line 5.png'
import LinkImage from './Link_2.png'
function DragInfo({ selectedTagId, selectedTagId_food }) {
  const [miniWindowOpen, setMiniWindowOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffsetY, setDragOffsetY] = useState(0);
  const miniWindowRef = useRef(null);
  const [heart,setHeart] = useState(true);


  const handleHeart = () => {
    
    setHeart(!heart);
    
  };
  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = miniWindowRef.current.getBoundingClientRect();
    setDragOffsetY(e.clientY - rect.top);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    const rect = miniWindowRef.current.getBoundingClientRect();
    setDragOffsetY(touch.clientY - rect.top);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newY = e.clientY - dragOffsetY;
      miniWindowRef.current.style.top = `${newY}px`;
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      const newY = touch.clientY - dragOffsetY;
      miniWindowRef.current.style.top = `${newY}px`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const selectedTagContent = selectedTagId
    ? tagData.find((tag) => tag.id === selectedTagId)?.name
    : '';

  const selectedTagFoodContent = selectedTagId_food
    ? tagData_food.find((tag) => tag.id === selectedTagId_food)?.name
    : '';

  const selectedTagInfo = selectedTagId
    ? infoData.find((tag) => tag.id === selectedTagId)?.content
    : '';
  const selectedTagGame = selectedTagId
    ? infoData.find((tag) => tag.id === selectedTagId)?.Game
    : '';
  const selectedTagFoodInfo = selectedTagId_food
    ? infoData_food.find((tag) => tag.id === selectedTagId_food)?.content
    : '';
  return (
    <div>

      {/* 작은 창 */}
      <div
        ref={miniWindowRef}
        className={`mini-window-container ${miniWindowOpen ? 'opened' : ''}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
        style={{ left: '0' }} // 수평 이동 막음
      >
        <div className="mini-window-content">
          {selectedTagContent && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={Line} alt='Line' />
              </div>

              <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between' }}>
                <div className='mini-window-Title'>{selectedTagContent}</div>
                <img src={heart? EmptyHeart:FilledHeart} alt='emptyheart' onClick={handleHeart} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Time} alt='time' style={{ width: '14px', height: '14px', marginRight: '8px' }} />
                <div className='mini-window-Time'> 시간 </div>
                <div className='mini-window-TimeInfo' >{selectedTagInfo}</div>
              </div>

              <div className='mini-window-TimeInfo'>학과부스설명</div>
              <div className='mini-window-TimeInfo'>학과부스설명</div>
              <img src={LinkImage} alt='Link' />

              <hr />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className='mini-window-GameImage'> 게임사진 및 촬영 </div>
                <div style={{ flex: 1, textAlign: 'right' }}>{selectedTagGame} </div>
              </div>
              <hr />
            </div>
          )}

          {selectedTagFoodContent && (
            <div >
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={Line} alt='Line' />
              </div>

              <div style={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between' }}>
                <div className='mini-window-Title'>{selectedTagFoodContent}</div>
                <img src={heart? EmptyHeart:FilledHeart} alt='emptyheart' onClick={handleHeart}/>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Time} alt='time' style={{ width: '14px', height: '14px', marginRight: '8px' }} />
                <div className='mini-window-Time'> 시간 </div>
                <div className='mini-window-TimeInfo' >{selectedTagFoodInfo}</div>
              </div>

              <div className='mini-window-TimeInfo'>학과부스설명</div>
              <div className='mini-window-TimeInfo'>학과부스설명</div>
              <img src={LinkImage} alt='Link' />

              <hr />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className='mini-window-GameImage'> 게임사진 및 촬영 </div>
                <div style={{ flex: 1, textAlign: 'right' }}>{selectedTagGame} </div>
              </div>
              <hr />
            </div>
          )}
        </div>
        {/* <div className="mini-window-toggle" onClick={toggleMiniWindow}>
          {miniWindowOpen ? '닫기' : '열기'}
        </div> */}
      </div>
    </div>
  );
}

export default DragInfo;
