import React from 'react';

const ProgressBar = props => {
  const rankBar = ((1 - props.rank / 5764233) * 100).toFixed(0);
  const rankDisplay = props.rank.toLocaleString();

  return (
    <div className="progress" style={{ height: '30px' }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${rankBar}%`, backgroundColor: '#e90052' }}
        aria-valuemax="100"
      >
        {rankDisplay}
      </div>
    </div>
  );
};

export default ProgressBar;
