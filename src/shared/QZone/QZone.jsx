import React from 'react';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary text-center my-4 py-4 rounded'>
            <h4 className='text-light fw-bold'>Q-Zone</h4>
            <div className="">
                <img src={qzone1} alt="" loading="lazy" />
                <img src={qzone2} alt="" loading="lazy" />
                <img src={qzone3} alt="" loading="lazy" />
            </div>
        </div>
    );
};

export default QZone;