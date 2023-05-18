import React from 'react';

interface BallProps {
    number: number;
    color?: string;
}

const Ball: React.FC<BallProps> = ({ number, color }) => {
    const ballStyle = {
        backgroundColor: color || 'skyblue',
    };

    return (
        <div className="ball" style={ballStyle}>
            <span className="ball-number">{number}</span>
        </div>
    );
};

export default Ball;