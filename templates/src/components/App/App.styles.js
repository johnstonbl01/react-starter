import { css, keyframes } from '@emotion/core';
import colors from '../../theme/colors';

const borderFade = keyframes({
  '0%': {
    opacity: 0.7
  },
  '100%': {
    transform: 'scale(1.4)',
    opacity: 0
  }
});

const growAndShrink = keyframes({
  '0%': {
    transform: 'scale(1)'
  },
  '50%': {
    transform: 'scale(1.25)'
  },
  '100%': {
    transform: 'scale(1)'
  }
});

const flyTop = keyframes({
  '0%': {
    transform: 'translate(0, 0) rotate(0)',
    opacity: 1
  },
  '100%': {
    transform: 'translate(150px, -150px) rotate(0)',
    opacity: 0
  }
});

const flyTopRight = keyframes({
  '0%': {
    transform: 'translate(0, 0) rotate(55deg)',
    opacity: 1
  },
  '100%': {
    transform: 'translate(150px, -100px) rotate(55deg)',
    opacity: 0
  }
});

const flyBottomRight = keyframes({
  '0%': {
    transform: 'translate(0, 0) rotate(135deg)',
    opacity: 1
  },
  '100%': {
    transform: 'translate(120px, 130px) rotate(135deg)',
    opacity: 0
  }
});

const flyBottomLeft = keyframes({
  '0%': {
    transform: 'translate(0, 0) rotate(-135deg)',
    opacity: 1
  },
  '100%': {
    transform: 'translate(-150px, 130px) rotate(-135deg)',
    opacity: 0
  }
});

const flyTopLeft = keyframes({
  '0%': {
    transform: 'translate(0, 0) rotate(-55deg)',
    opacity: 1
  },
  '100%': {
    transform: 'translate(-150px, -100px) rotate(-55deg)',
    opacity: 0
  }
});

export const main = css({
  margin: '4rem auto',
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

export const counterButtons = css({
  display: 'flex',
  flexDirection: 'row'
});

export const buttonContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const buttonBorderHover = css({
  position: 'absolute',
  height: '68px',
  width: '68px',
  borderRadius: '50%',
  backgroundColor: colors.white,
  zIndex: 0
});

export const buttonBorderAnimate = css({
  animation: `${borderFade} 1.5s forwards`
});

export const button = css({
  border: `2px solid rgba(255, 255, 255, 0.4)`,
  borderRadius: '50%',
  backgroundColor: colors.backgroundLight,
  padding: '1.25rem 1.25rem 1.125rem 1.25rem',
  outline: 'none',
  zIndex: 2,
  ':hover': {
    border: '2px solid rgba(255, 255, 255, 1)',
    cursor: 'pointer'
  },
  ':active': {
    animation: `${growAndShrink} 200ms forwards`
  }
});

export const counter = css({
  height: '9rem',
  width: '9rem',
  borderRadius: '50%',
  border: `2px solid rgba(255, 255, 255, 0.4)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '2rem',
  zIndex: 4
});

export const counterBackground = css({
  height: '9rem',
  width: '9rem',
  borderRadius: '50%',
  position: 'absolute',
  backgroundColor: colors.backgroundLight,
  zIndex: 3
});

export const counterNumber = css({
  fontSize: '4rem',
  zIndex: 4
});

export const particles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1.25rem',
  height: '1.25rem',
  position: 'absolute',
  zIndex: 0
});

export const particle = css({
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '50%',
  marginLeft: 2,
  marginRight: 4,
  marginTop: 3
});

export const particleContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const particleRow = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
});

export const animateTop = css({
  animation: `${flyTop} 1s forwards`
});

export const animateTopRight = css({
  animation: `${flyTopRight} 1s forwards`
});

export const animateBottomRight = css({
  animation: `${flyBottomRight} 1s forwards`
});

export const animateBottomLeft = css({
  animation: `${flyBottomLeft} 1s forwards`
});

export const animateTopLeft = css({
  animation: `${flyTopLeft} 1s forwards`
});
