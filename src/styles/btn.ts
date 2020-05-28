import Color from 'color';
import { css, cx } from 'emotion';

export const base = css({
  border: 'none',
  borderRadius: '4px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontWeight: 900,
});

export const threeD = css({
  position: 'relative',
  bottom: '2px',
  boxShadow: '0px 1px 0px rgba(0,0,0,0.5)',
  [`&:hover`]: {
    bottom: '0px',
  },
});

export const bgColor = (col: string) =>
  css({
    backgroundColor: col,

    [`&:hover`]: {
      backgroundColor: Color(col)
        .darken(0.1)
        .hex(),
    },
    [`&:active`]: {
      backgroundColor: Color(col)
        .darken(0.2)
        .hex(),
    },
  });

export const shadowColor = (col: string) =>
  css({
    boxShadow: `0px 3px 0px ${Color(col)
      .darken(0.2)
      .hex()}`,
    [`&:hover`]: {
      boxShadow: `0px 1px 0px ${Color(col)
        .darken(0.2)
        .hex()}`,
    },
    [`&:active`]: {},
  });

export const xs = css({
  fontSize: '10px',
  padding: '5px 5px',
});

export const sm = css({
  fontSize: '12px',
  padding: '7px 10px',
});

export const md = css({
  fontSize: '14px',
  padding: '10px 20px',
});

export const lg = css({
  fontSize: '14px',
  padding: '13px 30px',
});

export const xl = css({
  fontSize: '14px',
  padding: '16px 50px',
});

export const solid = (color: string) =>
  cx(
    threeD,
    bgColor(color),
    shadowColor(color),
    css({
      color: 'white',
    }),
  );

export const link = (color: string) =>
  cx(
    bgColor('white'),
    css({
      color: color,
    }),
  );
