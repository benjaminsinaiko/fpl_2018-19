import React from 'react';

import styles from './PlayerSelector.module.css';

const playerSelector = props => {
  const playerNames = props.players.map(player => {
    return [
      `${player.entry.player_first_name} ${player.entry.player_last_name}`,
      player.entry.id
    ];
  });
  const selector = playerNames.map(player => {
    let btnStyle = 'light';
    if (player[1] === props.selectedId) {
      btnStyle = 'dark';
    }
    return (
      <button
        key={player[1]}
        type="button"
        className={`btn btn-${btnStyle} ${styles.SelectorButton}`}
      >
        {player[0]}
      </button>
    );
  });

  return (
    <div className={`col-md-12 mb-4`} role="group" aria-label="Player Selector">
      {selector}
    </div>
  );
};

export default playerSelector;
