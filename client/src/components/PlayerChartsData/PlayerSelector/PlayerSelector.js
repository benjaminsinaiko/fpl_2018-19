import React from 'react';

import styles from './PlayerSelector.module.css';

const playerSelector = props => {
  const playerSelector = props.players.map((player, index) => {
    let playerName = `${player.entry.player_first_name} ${
      player.entry.player_last_name
    }`;

    let btnStyle = 'light';
    if (player.entry.id === props.selectedId) {
      btnStyle = 'dark';
    }
    return (
      <button
        key={index}
        type="button"
        className={`btn btn-${btnStyle} ${styles.SelectorButton}`}
        onClick={() => props.selectPlayer(player)}
      >
        {playerName}
      </button>
    );
  });

  return (
    <div className={`col-md-12 mb-4`} role="group" aria-label="Player Selector">
      {playerSelector}
    </div>
  );
};

export default playerSelector;
