import React from 'react';
import SlideShow from './SlideShow';
import '../../../styles/components/TimelinePage/DetailPerformance1.scss';
import Events from './Events';

const DetailPerformance1 = () => {

    return (
        <div className='DetailPerformance_Container'>
            <div className='DetailPerformance_Wrapper'>
                <SlideShow />
                <Events/>
            </div>
        </div>
    );
};

export default DetailPerformance1;