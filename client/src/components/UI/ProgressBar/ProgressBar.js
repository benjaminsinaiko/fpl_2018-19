import React from 'react';

const ProgressBar = props => {
  const rankBar = ((1 - props.rank / 5764233) * 100).toFixed(0);
  const rankDisplay = props.rank.toLocaleString();

  return (
    <div className="progress" style={{ height: '45px' }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{
          width: `${rankBar}%`,
          color: '#46004b',
          backgroundColor: '#e90052',
          fontSize: '1.5rem'
        }}
        aria-valuemax="100"
      >
        {rankDisplay}
      </div>
    </div>
  );
};

export default ProgressBar;
