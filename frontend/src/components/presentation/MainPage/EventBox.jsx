import React from 'react';

const EventBox = ({detail, handleEventBoxClick, thumbnailUrl}) => {
    return (
        <div className="event_box" onClick={handleEventBoxClick}>
            {detail.image === undefined ?
                <iframe
                    width="287" 
                    height="195" 
                    style={{borderRadius: '12px'}}
                    src={`https://www.youtube.com/embed/Ik0dtE_Mx6A?autoplay=1&mute=1`} 
                    title="YouTube video player" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                    allowfullscreen /> :
                <div>
                    <img src={detail.image} alt=''/>
                </div>
            }
            <div className="text_detail">
                {detail.title && <p className="title_detail">{detail.title}</p>}
                {detail.first && <p className="first_detail">{detail.first}</p>}
                {detail.second && <p className="second_detail">{detail.second}</p>}
            </div>
            {detail.boolDirection && <div className="arrow_detail">{`>`}</div>}
        </div>
    );
};

export default EventBox;