import { css, cx } from 'emotion';
import Color from 'color';

export const theme = {
  teal: '#078399',
  red: '#86151b',
  green: '#027a42',
  blue: '#0d93ad',
  yellow: '#c5b503',
  pink: `#FC0077`,
  primary: `#FC0077`,
  secondary: `#FC0077`,
  black: '#000',
  gray: (factor: number) =>
    Color('#ffffff')
      .darken(factor / 100)
      .hex(),
  white: '#fff',
  sans: 'Merriweather Sans',
  serif: 'EB Garamond',
};

export const smallBreak = '500px';
export const mediumBreak = '900px';
export const largeBreak = '2000px';

export const row = css({
  display: 'flex',
  flexDirection: 'row',
});

export const col = css({
  display: 'flex',
  flexDirection: 'column',
});

export const ac = css({ alignItems: 'center' });
export const astr = css({ alignItems: 'stretch' });
export const as = css({ alignItems: 'flex-start' });
export const ae = css({ alignItems: 'flex-end' });
export const ab = css({ alignItems: 'baseline' });

export const jc = css({ justifyContent: 'center' });
export const js = css({ justifyContent: 'flex-start' });
export const je = css({ justifyContent: 'flex-end' });
export const jb = css({ justifyContent: 'space-between' });
export const ja = css({ justifyContent: 'space-around' });
export const jev = css({ justifyContent: 'space-evenly' });

export const fw = css({ width: '100vw' });
export const fh = css({ height: '100vh' });
export const full = cx(css({ top: 0, left: 0 }), fw, fh);
export const center = cx(col, ac, jc);

export const label = css({
  color: theme.gray(40),
  textTransform: 'uppercase',
  fontWeight: 800,
});

export const color = (color: string) =>
  css({
    color,
  });

export const fs8 = css({ fontSize: '8pt' });
export const fs9 = css({ fontSize: '9pt' });
export const fs10 = css({ fontSize: '10pt' });
export const fs11 = css({ fontSize: '11pt' });
export const fs12 = css({ fontSize: '12pt' });
export const fs13 = css({ fontSize: '13pt' });
export const fs14 = css({ fontSize: '14pt' });
export const fs15 = css({ fontSize: '15pt' });
export const fs16 = css({ fontSize: '16pt' });
export const fs18 = css({ fontSize: '18pt' });
export const fs20 = css({ fontSize: '20pt' });
export const fs22 = css({ fontSize: '22pt' });
export const fs24 = css({ fontSize: '24pt' });
export const fs26 = css({ fontSize: '26pt' });
export const fs28 = css({ fontSize: '28pt' });
export const fs30 = css({ fontSize: '30pt' });
export const fs32 = css({ fontSize: '32pt' });
export const fs36 = css({ fontSize: '36pt' });
export const fs40 = css({ fontSize: '40pt' });

export const fw1 = css({ fontWeight: 100 });
export const fw2 = css({ fontWeight: 200 });
export const fw3 = css({ fontWeight: 300 });
export const fw4 = css({ fontWeight: 400 });
export const fw5 = css({ fontWeight: 500 });
export const fw6 = css({ fontWeight: 600 });
export const fw7 = css({ fontWeight: 700 });
export const fw8 = css({ fontWeight: 800 });
export const fw9 = css({ fontWeight: 900 });

export const wide = css({ width: '100%' });
export const tall = css({ height: '100%' });
export const fill = cx(wide, tall);

export const sans = css({
  fontFamily: `"${theme.sans}", 'Helvetica', 'Arial',
    sans-serif`,
});

export const serif = css({
  fontFamily: `"${theme.serif}", "Times New Roman", Times, serif`,
});

export const app = cx(
  full,
  css({
    fontFamily: `"${theme.sans}", 'Helvetica', 'Arial',
    sans-serif`,
  }),
);
