import { css } from 'emotion';

import { theme } from '../internal';

export const base = css({
  fontSize: '16px',
  backgroundColor: theme.gray(4),
  borderRadius: '4px',
  border: `2px solid ${theme.gray(20)}`,
  position: 'relative',
  transition: '0.1s',
  [`&:focus-within`]: {
    border: `2px solid ${theme.gray(40)}`,
  },

  [`& input`]: {
    fontSize: '16px',
    background: 'none',
    border: 'none',
    padding: '22px 18px',
    width: '100%',
    transition: '0.1s',
  },
  [`&:focus-within input`]: {
    padding: '32px 18px 12px 18px',
  },

  [`& p`]: {
    transition: '0.1s',
    color: theme.gray(40),
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: '13px',
    margin: '0px',
    //  height: '20px',
    height: '0px',
    overflow: 'hidden',

    position: 'absolute',
    top: '8px',
    left: '18px',
    //  display: 'none',
  },
  [`&:focus-within p`]: {
    height: 'auto',
    //  display: 'block',
  },
});
