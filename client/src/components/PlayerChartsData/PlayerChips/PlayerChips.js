import React from 'react';

import styles from './PlayerChips.module.css';

const PlayerChips = props => {
  // Chip Details
  const chips = [
    ['wildcard', 'Wildcard', '#e90052'],
    ['freehit', 'Free Hit', '#04f5ff'],
    ['3xc', 'Triple Captain', '#00ff85'],
    ['bboost', 'Bench Boost', '#eaff04']
  ];

  // Find Used Chips
  const usedChips = {};
  props.chips.forEach(chip => {
    return (usedChips[chip.name] = chip.event);
  });

  // Create Chip Buttons
  let chipButton = chips.map((chip, index) => {
    let usedChipColor = '#e8e8e8';
    let gwUsed = <i>Not Used</i>;

    // Set Used Chip Color / GW
    if (usedChips[chip[0]]) {
      usedChipColor = chip[2];
      gwUsed = `Used in GW${usedChips[chip[0]]}`;
    }

    return (
      <button
        key={index}
        type="button"
        className={`btn ${styles.ChipButton}`}
        style={{ backgroundColor: `${usedChipColor}` }}
        disabled
      >
        {`${chips[index][1]}`}
        <br /> <span style={{ fontSize: '.7em' }}>{gwUsed}</span>
      </button>
    );
  });

  return (
    <React.Fragment>
      <h5 className={styles.ChipTitle}>Season Chips</h5>
      <div
        className={`btn-group ${styles.ChipButtons}`}
        role="group"
        aria-label="Player Chips"
      >
        {chipButton}
      </div>
    </React.Fragment>
  );
};

export default PlayerChips;
