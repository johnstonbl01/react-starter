import React, { useState } from 'react';
import { connect } from 'react-redux';
import Icon from '../Icon/Icon.component';
import icons from '../../theme/icons';
import colors from '../../theme/colors';
import { incrementCount, decrementCount } from '../../state/counter/actions';
import * as styles from './App.styles';

const mapStateToProps = state => ({ count: state.counter.count });
const mapDispatchToProps = { increment: incrementCount, decrement: decrementCount };

const Particles = ({ rotation, onAnimationEnd }) => {
  return (
    <div
      css={[styles.particles, { transform: `rotate(${rotation}deg)` }]}
      onAnimationEnd={onAnimationEnd}
    >
      <div css={[styles.particleContainer, styles.animateTop]}>
        <div css={[styles.particle, { background: colors.red }]} />
        <div css={styles.particleRow}>
          <div css={[styles.particle, { background: colors.blue }]} />
          <div css={[styles.particle, { background: colors.orange }]} />
        </div>
      </div>

      <div css={[styles.particleContainer, styles.animateTopRight]}>
        <div css={[styles.particle, { background: colors.red }]} />
        <div css={styles.particleRow}>
          <div css={[styles.particle, { background: colors.blue }]} />
          <div css={[styles.particle, { background: colors.orange }]} />
        </div>
      </div>

      <div css={[styles.particleContainer, styles.animateBottomRight]}>
        <div css={[styles.particle, { background: colors.red }]} />
        <div css={styles.particleRow}>
          <div css={[styles.particle, { background: colors.blue }]} />
          <div css={[styles.particle, { background: colors.orange }]} />
        </div>
      </div>

      <div css={[styles.particleContainer, styles.animateBottomLeft]}>
        <div css={[styles.particle, { background: colors.red }]} />
        <div css={styles.particleRow}>
          <div css={[styles.particle, { background: colors.blue }]} />
          <div css={[styles.particle, { background: colors.orange }]} />
        </div>
      </div>

      <div css={[styles.particleContainer, styles.animateTopLeft]}>
        <div css={[styles.particle, { background: colors.red }]} />
        <div css={styles.particleRow}>
          <div css={[styles.particle, { background: colors.blue }]} />
          <div css={[styles.particle, { background: colors.orange }]} />
        </div>
      </div>
    </div>
  );
};

export const AppComponent = ({ increment, decrement, count }) => {
  const [particleId, setParticleId] = useState(0);
  const [particles, setParticles] = useState([]);

  const onButtonClick = counterFn => () => {
    counterFn();
    setParticles([...particles, particleId]);
    setParticleId(particleId + 1);
  };

  return (
    <main css={styles.main}>
      <div css={styles.counter}>
        <span css={styles.counterNumber}>{addLeadingZero(count)}</span>
        <div css={styles.counterBackground} />
        {particles.map(particleId => (
          <Particles
            key={particleId}
            rotation={generateRandomNumber(1, 135)}
            onAnimationEnd={() => setParticles(particles.filter(id => id !== particleId))}
          />
        ))}
      </div>
      <div css={styles.counterButtons}>
        <ChangeCountButton
          testId="increment-button"
          iconName="thumbsUp"
          containerStyle={{ marginRight: '1rem' }}
          onClick={onButtonClick(increment)}
        />
        <ChangeCountButton
          testId="decrement-button"
          disabled={count === 0}
          iconName="thumbsDown"
          containerStyle={{ marginLeft: '1rem' }}
          onClick={onButtonClick(decrement)}
        />
      </div>
    </main>
  );
};

export const ChangeCountButton = ({
  iconName,
  containerStyle,
  iconStyle,
  onClick,
  disabled,
  testId
}) => {
  const [isHovered, setHovered] = useState(false);
  const buttonIcon = isHovered ? `${iconName}Solid` : iconName;

  return (
    <div css={[styles.buttonContainer, containerStyle]}>
      <div css={[styles.buttonBorderHover, isHovered && styles.buttonBorderAnimate]} />
      <button
        data-testid={testId}
        disabled={disabled}
        onClick={onClick}
        css={[styles.button]}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Icon icon={icons[buttonIcon]} style={iconStyle} />
      </button>
    </div>
  );
};

function addLeadingZero(number) {
  if (number < 10) {
    return `0${number}`;
  }

  return number;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
