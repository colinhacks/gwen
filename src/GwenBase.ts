import { css, cx } from 'emotion';

type CssArgs = Parameters<typeof css>;
// type CSS = ObjectInterpolation<undefined>;
type CxArgs = Parameters<typeof cx>;

type GwenTheme = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  sansFont: string;
  serifFont: string;

  // primary: string;
  // accent: string;
};

export class GwenBase {
  protected defaultTheme: GwenTheme = {
    xs: '400px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    sansFont: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    serifFont: `Georgia, Cambria, "Times New Roman", Times, serif`,
    //  primary: '#4BBAAB',
    //  accent: '#302E2E',
  };
  theme: Partial<GwenTheme> = {};
  protected finalTheme: GwenTheme;

  protected className: string;

  constructor() {
    this.className = css({});
    this.finalTheme = {
      ...this.defaultTheme,
      ...this.theme,
    };
  }

  get stop() {
    return this.className;
  }

  static css = css;
  static cx = cx;

  protected _update = (...args: CxArgs) => {
    this.className = cx(this.className, ...args);
    return this;
  };

  css = (...args: CssArgs): this => {
    return this._update(css(...args));
  };

  cx = (...args: CxArgs) => {
    return this._update(cx(...args));
  };

  get row() {
    return this.css({
      display: 'flex',
      flexDirection: 'row',
    });
  }

  get rowr() {
    return this.css({
      display: 'flex',
      flexDirection: 'row-reverse',
    });
  }

  get col() {
    return this.css({
      display: 'flex',
      flexDirection: 'column',
    });
  }

  get colr() {
    return this.css({
      display: 'flex',
      flexDirection: 'column-reverse',
    });
  }

  get wrap() {
    return this.css({ flexWrap: 'wrap' });
  }
  get wrapr() {
    return this.css({ flexWrap: 'wrap-reverse' });
  }
  get nw() {
    return this.css({ flexWrap: 'nowrap' });
  }

  // get aic() {
  //   return this.css({ alignItems: 'center' });
  // }
  // get ais() {
  //   return this.css({ alignItems: 'stretch' });
  // }
  // get aifs() {
  //   return this.css({ alignItems: 'flex-start' });
  // }
  // get aife() {
  //   return this.css({ alignItems: 'flex-end' });
  // }
  // get aib() {
  //   return this.css({ alignItems: 'baseline' });
  // }

  get ac() {
    return this.css({ alignItems: 'center' });
  }
  get ast() {
    return this.css({ alignItems: 'stretch' });
  }
  get as() {
    return this.css({ alignItems: 'flex-start' });
  }
  get ae() {
    return this.css({ alignItems: 'flex-end' });
  }
  get ab() {
    return this.css({ alignItems: 'baseline' });
  }

  // get asc() {
  //   return this.css({ alignSelf: 'center' });
  // }
  // get asst() {
  //   return this.css({ alignSelf: 'stretch' });
  // }
  // get asfs() {
  //   return this.css({ alignSelf: 'flex-start' });
  // }
  // get asfe() {
  //   return this.css({ alignSelf: 'flex-end' });
  // }
  // get asb() {
  //   return this.css({ alignSelf: 'baseline' });
  // }

  // get jcc() {
  //   return this.css({ justifyContent: 'center' });
  // }
  // get jcfs() {
  //   return this.css({ justifyContent: 'flex-start' });
  // }
  // get jcfe() {
  //   return this.css({ justifyContent: 'flex-end' });
  // }
  // get jcsb() {
  //   return this.css({ justifyContent: 'space-between' });
  // }
  // get jcsa() {
  //   return this.css({ justifyContent: 'space-around' });
  // }
  // get jcse() {
  //   return this.css({ justifyContent: 'space-evenly' });
  // }

  get jc() {
    return this.css({ justifyContent: 'center' });
  }
  get js() {
    return this.css({ justifyContent: 'flex-start' });
  }
  get je() {
    return this.css({ justifyContent: 'flex-end' });
  }
  //  get jsb() {
  //    return this.css({ justifyContent: 'space-between' });
  //  }
  //  get jsa() {
  //    return this.css({ justifyContent: 'space-around' });
  //  }
  //  get jse() {
  //    return this.css({ justifyContent: 'space-evenly' });
  //  }

  get white() {
    return this.css({ color: '#FFFFFF' });
  }

  get black() {
    return this.css({ color: `#000000` });
  }

  get underline() {
    return this.css({ textDecoration: 'underline' });
  }

  get overline() {
    return this.css({ textDecoration: 'underline' });
  }

  get bold() {
    return this.css({ fontWeight: 'bold' });
  }
  get bolder() {
    return this.css({ fontWeight: 'bolder' });
  }
  get lighter() {
    return this.css({ fontWeight: 'lighter' });
  }

  get wide() {
    return this.css({ width: '100%' });
  }
  get tall() {
    return this.css({ height: '100%' });
  }
  get fill() {
    return this.wide.tall;
  }

  get upper() {
    return this.css({ textTransform: 'uppercase' });
  }
  get lower() {
    return this.css({ textTransform: 'lowercase' });
  }
  get caps() {
    return this.css({ textTransform: 'capitalize' });
  }

  get tal() {
    return this.css({ textAlign: 'left' });
  }
  get tac() {
    return this.css({ textAlign: 'center' });
  }
  get tar() {
    return this.css({ textAlign: 'right' });
  }

  get vw100() {
    return this.css({ width: '100vw' });
  }
  get vh100() {
    return this.css({ height: '100vh' });
  }
  get fullpage() {
    return this.vw100.vh100;
  }

  hover = (...args: CxArgs) => {
    return this.css({ [`&:hover`]: cx(...args) });
  };

  selector = (cond: string, delta: (t: this) => this) => {
    const newInst: this = new (this as any).constructor();
    console.log(newInst);
    return this.css({
      [cond]: delta(newInst).stop,
    });
  };

  pseudo = (cond: string, delta: (t: this) => this) => {
    const newInst: this = new (this as any).constructor();
    console.log(newInst);
    return this.css({
      [cond]: delta(newInst).stop,
    });
  };

  xs = (delta: (t: this) => this) => this.pseudo(`@media only screen and (min-width: ${this.finalTheme.xs})`, delta);
  sm = (delta: (t: this) => this) => this.pseudo(`@media only screen and (min-width: ${this.finalTheme.sm})`, delta);
  md = (delta: (t: this) => this) => this.pseudo(`@media only screen and (min-width: ${this.finalTheme.md})`, delta);
  lg = (delta: (t: this) => this) => this.pseudo(`@media only screen and (min-width: ${this.finalTheme.lg})`, delta);
  xl = (delta: (t: this) => this) => this.pseudo(`@media only screen and (min-width: ${this.finalTheme.xl})`, delta);

  xsonly = (delta: (t: this) => this) =>
    this.pseudo(
      `@media only screen and (min-width: ${this.finalTheme.xs}px ) and (max-width: ${this.finalTheme.sm}px)`,
      delta,
    );
  smonly = (delta: (t: this) => this) =>
    this.pseudo(
      `@media only screen and (min-width: ${this.finalTheme.sm}px ) and (max-width: ${this.finalTheme.md}px)`,
      delta,
    );
  mdonly = (delta: (t: this) => this) =>
    this.pseudo(
      `@media only screen and (min-width: ${this.finalTheme.md}px ) and (max-width: ${this.finalTheme.lg}px)`,
      delta,
    );
  lgonly = (delta: (t: this) => this) =>
    this.pseudo(
      `@media only screen and (min-width: ${this.finalTheme.lg}px ) and (max-width: ${this.finalTheme.xl}px)`,
      delta,
    );
  xlonly = (delta: (t: this) => this) =>
    this.pseudo(`@media only screen and (min-width: ${this.finalTheme.xl}px )`, delta);

  // link = (delta: (t: this) => this) => this.pseudo(`&:link`, delta);
  checked = (delta: (t: this) => this) => this.pseudo(`&:checked`, delta);
  focus = (delta: (t: this) => this) => this.pseudo(`&:focus`, delta);
  focusWithin = (delta: (t: this) => this) => this.pseudo(`&:focus-within`, delta);
  visited = (delta: (t: this) => this) => this.pseudo(`&:visited`, delta);
  active = (delta: (t: this) => this) => this.pseudo(`&:active`, delta);
  empty = (delta: (t: this) => this) => this.pseudo(`&:empty`, delta);
  enabled = (delta: (t: this) => this) => this.pseudo(`&:enabled`, delta);
  firstOfType = (delta: (t: this) => this) => this.pseudo(`&:first-of-type`, delta);
  lastOfType = (delta: (t: this) => this) => this.pseudo(`&:last-of-type`, delta);
  firstChild = (delta: (t: this) => this) => this.pseudo(`&:first-child`, delta);
  lastChild = (delta: (t: this) => this) => this.pseudo(`&:last-child`, delta);
  nthChild = (n: number | string, delta: (t: this) => this) => this.pseudo(`&:nth-child(${n})`, delta);
  if = (condition: any, delta: (t: this) => this) => {
    if (condition) return delta(this);
    return this;
  };
}

// const b = 'asdf'; // background
// const ba = 'asdf'; // background-attachment
// const bbm = 'asdf'; // background-blend-mode
// const bc = 'asdf'; // background-clip
// const bc = 'asdf'; // background-color
// const bi = 'asdf'; // background-image
// const bo = 'asdf'; // background-origin
// const bp = 'asdf'; // background-position
// const br = 'asdf'; // background-repeat
// const bs = 'asdf'; // background-size
// const b = 'asdf'; // border
// const bb = 'asdf'; // border-bottom
// const bbc = 'asdf'; // border-bottom-color
// const bblr = 'asdf'; // border-bottom-left-radius
// const bbrr = 'asdf'; // border-bottom-right-radius
// const bbs = 'asdf'; // border-bottom-style
// const bbw = 'asdf'; // border-bottom-width
// const bc = 'asdf'; // border-collapse
// const bc = 'asdf'; // border-color
// const bi = 'asdf'; // border-image
// const bio = 'asdf'; // border-image-outset
// const bir = 'asdf'; // border-image-repeat
// const bis = 'asdf'; // border-image-slice
// const bis = 'asdf'; // border-image-source
// const biw = 'asdf'; // border-image-width
// const bl = 'asdf'; // border-left
// const blc = 'asdf'; // border-left-color
// const bls = 'asdf'; // border-left-style
// const blw = 'asdf'; // border-left-width
// const br = 'asdf'; // border-radius
// const br = 'asdf'; // border-right
// const brc = 'asdf'; // border-right-color
// const brs = 'asdf'; // border-right-style
// const brw = 'asdf'; // border-right-width
// const bs = 'asdf'; // border-spacing
// const bs = 'asdf'; // border-style
// const bt = 'asdf'; // border-top
// const btc = 'asdf'; // border-top-color
// const btlr = 'asdf'; // border-top-left-radius
// const btrr = 'asdf'; // border-top-right-radius
// const bts = 'asdf'; // border-top-style
// const btw = 'asdf'; // border-top-width
// const bw = 'asdf'; // border-width
// const bs = 'asdf'; // box-shadow
// const bs = 'asdf'; // box-sizing
// const baasd:CSS['breakAfter'] = 'asdf'; // break-after
// const bb = 'asdf'; // break-before
// const bi = 'asdf'; // break-inside
// const cc = 'asdf'; // column-count
// const cf = 'asdf'; // column-fill
// const cg = 'asdf'; // column-gap
// const cr = 'asdf'; // column-rule
// const crc = 'asdf'; // column-rule-color
// const crs = 'asdf'; // column-rule-style
// const crw = 'asdf'; // column-rule-width
// const cs = 'asdf'; // column-span
// const cw = 'asdf'; // column-width
// const c = 'asdf'; // columns
// const c = 'asdf'; // cursor
// const d = 'asdf'; // display
// const f = 'asdf'; // filter
// const f = 'asdf'; // flex
// const fb = 'asdf'; // flex-basis
// const fd = 'asdf'; // flex-direction
// const ff = 'asdf'; // flex-flow
// const fg = 'asdf'; // flex-grow
// const fs = 'asdf'; // flex-shrink
// const fw = 'asdf'; // flex-wrap
// const f = 'asdf'; // float
// const f = 'asdf'; // font
// const g = 'asdf'; // grid
// const ga = 'asdf'; // grid-area
// const gac = 'asdf'; // grid-auto-columns
// const gaf = 'asdf'; // grid-auto-flow
// const gar = 'asdf'; // grid-auto-rows
// const gc = 'asdf'; // grid-column
// const gce = 'asdf'; // grid-column-end
// const gcg = 'asdf'; // grid-column-gap
// const gcs = 'asdf'; // grid-column-start
// const gg = 'asdf'; // grid-gap
// const gr = 'asdf'; // grid-row
// const gre = 'asdf'; // grid-row-end
// const grg = 'asdf'; // grid-row-gap
// const grs = 'asdf'; // grid-row-start
// const gt = 'asdf'; // grid-template
// const gta = 'asdf'; // grid-template-areas
// const gtc = 'asdf'; // grid-template-columns
// const gtr = 'asdf'; // grid-template-rows
// const h = 'asdf'; // hyphens
// const ls = 'asdf'; // letter-spacing
// const lh = 'asdf'; // line-height
// const ls = 'asdf'; // list-style
// const lsi = 'asdf'; // list-style-image
// const lsp = 'asdf'; // list-style-position
// const lst = 'asdf'; // list-style-type
// const o = 'asdf'; // opacity
// const o = 'asdf'; // order
// const o = 'asdf'; // outline
// const oc = 'asdf'; // outline-color
// const oo = 'asdf'; // outline-offset
// const os = 'asdf'; // outline-style
// const ow = 'asdf'; // outline-width
// const o = 'asdf'; // overflow
// const o = 'asdf'; // overflow-x
// const o = 'asdf'; // overflow-y
// const p = 'asdf'; // padding
// const pb = 'asdf'; // padding-bottom
// const pl = 'asdf'; // padding-left
// const pr = 'asdf'; // padding-right
// const pt = 'asdf'; // padding-top
// const pba = 'asdf'; // page-break-after
// const pbb = 'asdf'; // page-break-before
// const pbi = 'asdf'; // page-break-inside
// const p = 'asdf'; // position
// const q = 'asdf'; // quotes
// const td = 'asdf'; // text-decoration
// const tdc = 'asdf'; // text-decoration-color
// const tdl = 'asdf'; // text-decoration-line
// const tds = 'asdf'; // text-decoration-style
// type sdf = CSS['breakAfter']
