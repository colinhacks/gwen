import { css, cx, ObjectInterpolation } from 'emotion';
// import Color from 'color';

type CssArgs = Parameters<typeof css>;
// type CssArg = CssArgs[0];
type CSS = ObjectInterpolation<undefined>;

type CxArgs = Parameters<typeof cx>;

// export const gray = (factor: number) =>
//   Color('#ffffff')
//     .darken(factor / 100)
//     .hex();

// export const darken = (color: string, factor: number) =>
//   Color(color)
//     .darken(factor)
//     .hex();

// export const lighten = (color: string, factor: number) =>
//   Color(color)
//     .lighten(factor)
//     .hex();
// export const whiten = (color: string, factor: number) =>
//   Color(color)
//     .whiten(factor)
//     .hex();

// export const blacken = (color: string, factor: number) =>
//   Color(color)
//     .whiten(factor)
//     .hex();

// export const alpha = (color: string, factor: number) =>
//   Color(color)
//     .alpha(factor)
//     .hex();

export class G {
  className: string;
  constructor() {
    this.className = css({});
  }

  static get start() {
    return new G();
  }

  get end() {
    return this.className;
  }

  static css = css;

  protected _update = (...args: CxArgs) => {
    this.className = cx(this.className, ...args);
    return this;
  };

  css = (args: CssArgs) => {
    return this._update(css(args));
  };

  get row() {
    return this._update(
      css({
        display: 'flex',
        flexDirection: 'row',
      }),
    );
  }

  get rowr() {
    return this._update(
      css({
        display: 'flex',
        flexDirection: 'row-reverse',
      }),
    );
  }

  get col() {
    return this._update(
      css({
        display: 'flex',
        flexDirection: 'column',
      }),
    );
  }

  get colr() {
    return this._update(
      css({
        display: 'flex',
        flexDirection: 'column-reverse',
      }),
    );
  }

  get fw() {
    return this._update(css({ flexWrap: 'wrap' }));
  }

  get ac() {
    return this._update(css({ alignItems: 'center' }));
  }
  get astr() {
    return this._update(css({ alignItems: 'stretch' }));
  }
  get as() {
    return this._update(css({ alignItems: 'flex-start' }));
  }
  get ae() {
    return this._update(css({ alignItems: 'flex-end' }));
  }
  get ab() {
    return this._update(css({ alignItems: 'baseline' }));
  }

  get asc() {
    return this._update(css({ alignSelf: 'center' }));
  }
  get asstr() {
    return this._update(css({ alignSelf: 'stretch' }));
  }
  get ass() {
    return this._update(css({ alignSelf: 'flex-start' }));
  }
  get ase() {
    return this._update(css({ alignSelf: 'flex-end' }));
  }
  get asb() {
    return this._update(css({ alignSelf: 'baseline' }));
  }

  get jc() {
    return this._update(css({ justifyContent: 'center' }));
  }
  get js() {
    return this._update(css({ justifyContent: 'flex-start' }));
  }
  get je() {
    return this._update(css({ justifyContent: 'flex-end' }));
  }
  get jb() {
    return this._update(css({ justifyContent: 'space-between' }));
  }
  get ja() {
    return this._update(css({ justifyContent: 'space-around' }));
  }
  get jev() {
    return this._update(css({ justifyContent: 'space-evenly' }));
  }

  get white() {
    return this._update(css({ color: '#FFFFFF' }));
  }
  get cg0() {
    return this._update(css({ color: `#FFFFFF` }));
  }
  get cg1() {
    return this._update(css({ color: `#E6E6E6` }));
  }
  get cg2() {
    return this._update(css({ color: `#CDCDCD` }));
  }
  get cg3() {
    return this._update(css({ color: `#B3B3B3` }));
  }
  get cg4() {
    return this._update(css({ color: `#9a9a9a` }));
  }
  get cg5() {
    return this._update(css({ color: `#808080` }));
  }
  get cg6() {
    return this._update(css({ color: `#666666` }));
  }
  get cg7() {
    return this._update(css({ color: `#4d4d4d` }));
  }
  get cg8() {
    return this._update(css({ color: `#333333` }));
  }
  get cg9() {
    return this._update(css({ color: `#1a1a1a` }));
  }
  get cg10() {
    return this._update(css({ color: `#000000` }));
  }
  get black() {
    return this._update(css({ color: `#000000` }));
  }

  color = (val: CSS['color']) => {
    return this._update(css({ color: val }));
  };

  h = (val: CSS['height']) => {
    return this._update(css({ height: val }));
  };
  w = (val: CSS['width']) => {
    return this._update(css({ width: val }));
  };
  l = (val: CSS['left']) => {
    return this._update(css({ left: val }));
  };
  r = (val: CSS['right']) => {
    return this._update(css({ right: val }));
  };
  t = (val: CSS['top']) => {
    return this._update(css({ top: val }));
  };
  b = (val: CSS['bottom']) => {
    return this._update(css({ bottom: val }));
  };
  bg = (val: CSS['background']) => {
    return this._update(css({ background: val }));
  };
  td = (val: CSS['textDecoration']) => {
    return this._update(css({ textDecoration: val }));
  };

  p = (val: CSS['padding']) => {
    return this._update(css({ padding: val }));
  };
  pad = (val: CSS['padding']) => {
    return this._update(css({ padding: val }));
  };
  pt = (val: CSS['paddingTop']) => {
    return this._update(css({ paddingTop: val }));
  };
  pr = (val: CSS['paddingRight']) => {
    return this._update(css({ paddingRight: val }));
  };
  pb = (val: CSS['paddingBottom']) => {
    return this._update(css({ paddingBottom: val }));
  };
  pl = (val: CSS['paddingLeft']) => {
    return this._update(css({ paddingLeft: val }));
  };

  m = (val: CSS['margin']) => {
    return this._update(css({ margin: val }));
  };
  mgn = (val: CSS['margin']) => {
    return this._update(css({ margin: val }));
  };
  mt = (val: CSS['marginTop']) => {
    return this._update(css({ marginTop: val }));
  };
  mr = (val: CSS['marginRight']) => {
    return this._update(css({ marginRight: val }));
  };
  mb = (val: CSS['marginBottom']) => {
    return this._update(css({ marginBottom: val }));
  };
  ml = (val: CSS['marginLeft']) => {
    return this._update(css({ marginLeft: val }));
  };
  mv = (val: CSS['marginTop']) => {
    return this._update(css({ marginTop: val, marginBottom: val }));
  };
  mh = (val: CSS['marginTop']) => {
    return this._update(css({ marginLeft: val, marginRight: val }));
  };

  op = (opacity: number) => {
    return this._update(css({ opacity }));
  };

  get fs1() {
    return this._update(css({ fontSize: '1pt' }));
  }
  get fs2() {
    return this._update(css({ fontSize: '2pt' }));
  }
  get fs3() {
    return this._update(css({ fontSize: '3pt' }));
  }
  get fs4() {
    return this._update(css({ fontSize: '4pt' }));
  }
  get fs5() {
    return this._update(css({ fontSize: '5pt' }));
  }
  get fs6() {
    return this._update(css({ fontSize: '6pt' }));
  }
  get fs7() {
    return this._update(css({ fontSize: '7pt' }));
  }
  get fs8() {
    return this._update(css({ fontSize: '8pt' }));
  }
  get fs9() {
    return this._update(css({ fontSize: '9pt' }));
  }
  get fs10() {
    return this._update(css({ fontSize: '10pt' }));
  }
  get fs11() {
    return this._update(css({ fontSize: '11pt' }));
  }
  get fs12() {
    return this._update(css({ fontSize: '12pt' }));
  }
  get fs13() {
    return this._update(css({ fontSize: '13pt' }));
  }
  get fs14() {
    return this._update(css({ fontSize: '14pt' }));
  }
  get fs15() {
    return this._update(css({ fontSize: '15pt' }));
  }
  get fs16() {
    return this._update(css({ fontSize: '16pt' }));
  }
  get fs18() {
    return this._update(css({ fontSize: '18pt' }));
  }
  get fs20() {
    return this._update(css({ fontSize: '20pt' }));
  }
  get fs22() {
    return this._update(css({ fontSize: '22pt' }));
  }
  get fs24() {
    return this._update(css({ fontSize: '24pt' }));
  }
  get fs26() {
    return this._update(css({ fontSize: '26pt' }));
  }
  get fs28() {
    return this._update(css({ fontSize: '28pt' }));
  }
  get fs30() {
    return this._update(css({ fontSize: '30pt' }));
  }
  get fs32() {
    return this._update(css({ fontSize: '32pt' }));
  }
  get fs36() {
    return this._update(css({ fontSize: '36pt' }));
  }
  get fs40() {
    return this._update(css({ fontSize: '40pt' }));
  }
  get fs44() {
    return this._update(css({ fontSize: '44pt' }));
  }
  get fs48() {
    return this._update(css({ fontSize: '48pt' }));
  }
  get fs52() {
    return this._update(css({ fontSize: '52pt' }));
  }
  get fs56() {
    return this._update(css({ fontSize: '56pt' }));
  }
  get fs60() {
    return this._update(css({ fontSize: '60pt' }));
  }
  get fs64() {
    return this._update(css({ fontSize: '64pt' }));
  }
  get fs72() {
    return this._update(css({ fontSize: '72pt' }));
  }
  get fs80() {
    return this._update(css({ fontSize: '80pt' }));
  }
  get fs88() {
    return this._update(css({ fontSize: '88pt' }));
  }
  get fs96() {
    return this._update(css({ fontSize: '96pt' }));
  }
  get fs104() {
    return this._update(css({ fontSize: '104pt' }));
  }
  get fs112() {
    return this._update(css({ fontSize: '112pt' }));
  }
  get fs120() {
    return this._update(css({ fontSize: '120pt' }));
  }
  get fs128() {
    return this._update(css({ fontSize: '128pt' }));
  }

  get bold() {
    return this._update(css({ fontWeight: 'bold' }));
  }
  get bolder() {
    return this._update(css({ fontWeight: 'bolder' }));
  }
  get lighter() {
    return this._update(css({ fontWeight: 'lighter' }));
  }
  get fw1() {
    return this._update(css({ fontWeight: 100 }));
  }
  get fw2() {
    return this._update(css({ fontWeight: 200 }));
  }
  get fw3() {
    return this._update(css({ fontWeight: 300 }));
  }
  get fw4() {
    return this._update(css({ fontWeight: 400 }));
  }
  get fw5() {
    return this._update(css({ fontWeight: 500 }));
  }
  get fw6() {
    return this._update(css({ fontWeight: 600 }));
  }
  get fw7() {
    return this._update(css({ fontWeight: 700 }));
  }
  get fw8() {
    return this._update(css({ fontWeight: 800 }));
  }
  get fw9() {
    return this._update(css({ fontWeight: 900 }));
  }

  get wide() {
    return this._update(css({ width: '100%' }));
  }
  get tall() {
    return this._update(css({ height: '100%' }));
  }
  get fill() {
    return this.wide.tall;
  }

  get ul() {
    return this._update(css({ textDecoration: 'underline' }));
  }
  get upper() {
    return this._update(css({ textTransform: 'uppercase' }));
  }
  get lower() {
    return this._update(css({ textTransform: 'lowercase' }));
  }
  get caps() {
    return this._update(css({ textTransform: 'capitalize' }));
  }

  get tal() {
    return this._update(css({ textAlign: 'left' }));
  }
  get tac() {
    return this._update(css({ textAlign: 'center' }));
  }
  get tar() {
    return this._update(css({ textAlign: 'right' }));
  }

  mnh = (val: CSS['minHeight']) => {
    return this._update(css({ minHeight: val }));
  };
  mnw = (val: CSS['minWidth']) => {
    return this._update(css({ minWidth: val }));
  };
  mxh = (val: CSS['maxHeight']) => {
    return this._update(css({ maxHeight: val }));
  };
  mxw = (val: CSS['maxWidth']) => {
    return this._update(css({ maxWidth: val }));
  };

  bgc = (val: CSS['backgroundColor']) => {
    return this._update(css({ backgroundColor: val }));
  };

  hover = (...args: CxArgs) => {
    return this._update(css({ [`&:hover`]: cx(...args) }));
  };

  media = (cond: string, ...args: CxArgs) => {
    return this._update(css({ [`@media(${cond})`]: cx(...args) }));
  };

  mediamin = (px: number, ...args: CxArgs) => {
    return this._update(css({ [`@media(min-width: ${px}px)`]: cx(...args) }));
  };

  mediamax = (px: number, ...args: CxArgs) => {
    return this._update(css({ [`@media(max-width: ${px}px)`]: cx(...args) }));
  };

  checked = (...args: CxArgs) => {
    return this._update(css({ [`&:checked`]: cx(...args) }));
  };

  focus = (...args: CxArgs) => {
    return this._update(css({ [`&:focus`]: cx(...args) }));
  };

  focuswithin = (...args: CxArgs) => {
    return this._update(css({ [`&:focus-within`]: cx(...args) }));
  };
  visited = (...args: CxArgs) => {
    return this._update(css({ [`&:visited`]: cx(...args) }));
  };
  active = (...args: CxArgs) => {
    return this._update(css({ [`&:active`]: cx(...args) }));
  };
}

G.start
  .color('blue')
  .mb('asdf')
  .focus(G.css({ color: 'blue' })).end;

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
