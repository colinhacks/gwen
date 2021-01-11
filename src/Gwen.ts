import { GwenBase, GwenParams } from './GwenBase';
import { ObjectInterpolation } from 'emotion';
import Color from 'color';
type CSS = ObjectInterpolation<undefined>;

export class Gwen<Params extends GwenParams = GwenParams> extends GwenBase<Params> {
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
  get column() {
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
  get nowrap() {
    return this.css({ flexWrap: 'nowrap' });
  }
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
  get jc() {
    return this.css({ justifyContent: 'center' });
  }
  get js() {
    return this.css({ justifyContent: 'flex-start' });
  }
  get je() {
    return this.css({ justifyContent: 'flex-end' });
  }
  get jsb() {
    return this.css({ justifyContent: 'space-between' });
  }
  get jsa() {
    return this.css({ justifyContent: 'space-around' });
  }
  get jse() {
    return this.css({ justifyContent: 'space-evenly' });
  }
  get white() {
    return this.css({ color: '#FFFFFF' });
  }
  get black() {
    return this.css({ color: `#000000` });
  }
  get underline() {
    return this.css({ textDecoration: 'underline' });
  }
  get tdn() {
    return this.css({ textDecoration: 'none' });
  }
  get visible() {
    return this.css({ visibility: 'visible' });
  }
  get hidden() {
    return this.css({ visibility: 'hidden' });
  }
  get scroll() {
    return this.css({ overflow: 'scroll' });
  }
  get scrollx() {
    return this.css({ overflowX: 'scroll' });
  }
  get scrolly() {
    return this.css({ overflowY: 'scroll' });
  }
  get pointer() {
    return this.css({ cursor: 'pointer' });
  }
  get ellipsis() {
    return this.css({ textOverflow: 'ellipsis' });
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
  get uppercase() {
    return this.css({ textTransform: 'uppercase' });
  }
  get lowercase() {
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
  get taj() {
    return this.css({ textAlign: 'justify' });
  }
  get fullw() {
    return this.css({ width: '100vw' });
  }
  get fullh() {
    return this.css({ height: '100vh' });
  }
  get full() {
    return this.css({ height: '100vh', width: '100vw' });
  }
  get ofh() {
    return this.css({ overflow: 'hidden' });
  }
  get ofv() {
    return this.css({ overflow: 'visible' });
  }
  get ofs() {
    return this.css({ overflow: 'scroll' });
  }
  get ofa() {
    return this.css({ overflow: 'auto' });
  }
  get smallcaps() {
    return this.css({ fontVariant: 'small-caps' });
  }
  /**
   * @property allsmallcaps
   * @description { fontVariant: "all-small-caps" }
   */
  get allsmallcaps() {
    return this.css({ fontVariant: 'all-small-caps' });
  }
  get bn() {
    return this.css({ border: 'none' });
  }

  get sans() {
    return this.css({ fontSize: this.theme.sansFont });
  }
  get serif() {
    return this.css({ fontSize: this.theme.serifFont });
  }

  // TODO: cursors

  hover(delta: (t: this) => this) {
    return this.css({ [`&:hover`]: delta(this.reset()).class });
  }

  pseudo(cond: string, delta: (t: this) => this) {
    return this.css({
      [`&${cond}`]: delta(this.reset()).class,
    });
  }

  media(conditions: { min?: string; max?: string }, delta: (t: this) => this) {
    return this.css({
      [`@media only screen ${conditions.min ? ` and (min-width: ${conditions.min})` : ``} ${
        conditions.max ? ` and (max-width: ${conditions.max})` : ''
      }`]: delta(this.reset()).class,
    });
  }

  selector(cond: string, delta: (t: this) => this) {
    // const newInst: Gwen = new (this as any).constructor(this.theme);
    return this.css({
      [cond]: delta(this.reset()).class,
    });
  }

  smup(delta: (t: this) => this) {
    return this.media({ min: this.theme.sm }, delta);
  }
  mdup(delta: (t: this) => this) {
    return this.media({ min: this.theme.md }, delta);
  }
  lgup(delta: (t: this) => this) {
    return this.media({ min: this.theme.lg }, delta);
  }
  xlup(delta: (t: this) => this) {
    return this.media({ min: this.theme.xl }, delta);
  }
  xsdown(delta: (t: this) => this) {
    return this.media({ max: this.theme.sm }, delta);
  }
  smdown(delta: (t: this) => this) {
    return this.media({ max: this.theme.md }, delta);
  }
  mddown(delta: (t: this) => this) {
    return this.media({ max: this.theme.lg }, delta);
  }
  lgdown(delta: (t: this) => this) {
    return this.media({ max: this.theme.xl }, delta);
  }
  xsonly(delta: (t: this) => this) {
    return this.media({ min: this.theme.xs, max: this.theme.sm }, delta);
  }
  smonly(delta: (t: this) => this) {
    return this.media({ min: this.theme.sm, max: this.theme.md }, delta);
  }
  mdonly(delta: (t: this) => this) {
    return this.media({ min: this.theme.md, max: this.theme.lg }, delta);
  }
  lgonly(delta: (t: this) => this) {
    return this.media({ min: this.theme.lg, max: this.theme.xl }, delta);
  }
  xlonly(delta: (t: this) => this) {
    return this.media({ min: this.theme.xl }, delta);
  }
  checked(delta: (t: this) => this) {
    return this.pseudo(`:checked`, delta);
  }
  focus(delta: (t: this) => this) {
    return this.pseudo(`:focus`, delta);
  }
  focusWithin(delta: (t: this) => this) {
    return this.pseudo(`:focus-within`, delta);
  }
  visited(delta: (t: this) => this) {
    return this.pseudo(`:visited`, delta);
  }
  active(delta: (t: this) => this) {
    return this.pseudo(`:active`, delta);
  }
  empty(delta: (t: this) => this) {
    return this.pseudo(`:empty`, delta);
  }
  enabled(delta: (t: this) => this) {
    return this.pseudo(`:enabled`, delta);
  }
  firstOfType(delta: (t: this) => this) {
    return this.pseudo(`:first-of-type`, delta);
  }
  lastOfType(delta: (t: this) => this) {
    return this.pseudo(`:last-of-type`, delta);
  }
  firstChild(delta: (t: this) => this) {
    return this.pseudo(`:first-child`, delta);
  }
  lastChild(delta: (t: this) => this) {
    return this.pseudo(`:last-child`, delta);
  }
  nthChild(n: number | string, delta: (t: this) => this) {
    return this.pseudo(`:nth-child(${n})`, delta);
  }
  if(condition: any, ifDelta: (t: this) => this, elseDelta?: (t: this) => this) {
    if (condition) return ifDelta(this);
    if (elseDelta) return elseDelta(this);
    return this;
  }

  bgc(arg: CSS['backgroundColor']) {
    return this.css({ backgroundColor: arg });
  }

  get shadow0() {
    return this.css({ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.06);' });
  }
  get shadow1() {
    return this.css({ boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.06);' });
  }
  get shadow2() {
    return this.css({ boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.06);' });
  }
  get shadow3() {
    return this.css({ boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.06);' });
  }
  get shadow4() {
    return this.css({ boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.06);' });
  }
  get shadow5() {
    return this.css({ boxShadow: '0 8px 11px 0 rgba(0, 0, 0, 0.1), 0 5px 5px 0 rgba(0, 0, 0, 0.06);' });
  }
  get shadow6() {
    return this.css({ boxShadow: '0 11px 17px 0 rgba(0, 0, 0, 0.1), 0 8px 8px 0 rgba(0, 0, 0, 0.06);' });
  }
  get shadow7() {
    return this.css({ boxShadow: '0 17px 26px 0 rgba(0, 0, 0, 0.1), 0 11px 11px 0 rgba(0, 0, 0, 0.06);' });
  }
  get shadow8() {
    return this.css({ boxShadow: '0 26px 38px 0 rgba(0, 0, 0, 0.1), 0 17px 17px 0 rgba(0, 0, 0, 0.06);' });
  }
  get shadow9() {
    return this.css({ boxShadow: '0 38px 58px 0 rgba(0, 0, 0, 0.1), 0 26px 26px 0 rgba(0, 0, 0, 0.06);' });
  }
  get shadow10() {
    return this.css({ boxShadow: '0 58px 86px 0 rgba(0, 0, 0, 0.1), 0 38px 38px 0 rgba(0, 0, 0, 0.06);' });
  }

  get fw1() {
    return this.css({ fontWeight: 100 });
  }
  get fw2() {
    return this.css({ fontWeight: 200 });
  }
  get fw3() {
    return this.css({ fontWeight: 300 });
  }
  get fw4() {
    return this.css({ fontWeight: 400 });
  }
  get fw5() {
    return this.css({ fontWeight: 500 });
  }
  get fw6() {
    return this.css({ fontWeight: 600 });
  }
  get fw7() {
    return this.css({ fontWeight: 700 });
  }
  get fw8() {
    return this.css({ fontWeight: 800 });
  }
  get fw9() {
    return this.css({ fontWeight: 900 });
  }
  fs(size: number) {
    return this.css({ fontSize: `${size}pt` });
  }

  h(...args: Parameters<GwenBase['height']>) {
    return this.height(...args);
  }
  w(...args: Parameters<GwenBase['width']>) {
    return this.width(...args);
  }
  l(...args: Parameters<GwenBase['left']>) {
    return this.left(...args);
  }
  r(...args: Parameters<GwenBase['right']>) {
    return this.right(...args);
  }
  t(...args: Parameters<GwenBase['top']>) {
    return this.top(...args);
  }
  b(...args: Parameters<GwenBase['bottom']>) {
    return this.bottom(...args);
  }

  p(...args: Parameters<GwenBase['padding']>) {
    return this.padding(...args);
  }
  pb(...args: Parameters<GwenBase['paddingBottom']>) {
    return this.paddingBottom(...args);
  }
  pt(...args: Parameters<GwenBase['paddingTop']>) {
    return this.paddingTop(...args);
  }
  pl(...args: Parameters<GwenBase['paddingLeft']>) {
    return this.paddingLeft(...args);
  }
  pr(...args: Parameters<GwenBase['paddingRight']>) {
    return this.paddingRight(...args);
  }
  pv(arg: CSS['paddingTop']) {
    return this.pt(arg).pb(arg);
  }
  ph(arg: CSS['paddingRight']) {
    return this.pl(arg).pr(arg);
  }

  m(...args: Parameters<GwenBase['margin']>) {
    return this.margin(...args);
  }
  mb(...args: Parameters<GwenBase['marginBottom']>) {
    return this.marginBottom(...args);
  }
  mt(...args: Parameters<GwenBase['marginTop']>) {
    return this.marginTop(...args);
  }
  ml(...args: Parameters<GwenBase['marginLeft']>) {
    return this.marginLeft(...args);
  }
  mr(...args: Parameters<GwenBase['marginRight']>) {
    return this.marginRight(...args);
  }
  mv(arg: CSS['marginTop']) {
    return this.mt(arg).mb(arg);
  }
  mh(arg: CSS['marginRight']) {
    return this.ml(arg).mr(arg);
  }

  mxh(...args: Parameters<GwenBase['maxHeight']>) {
    return this.maxHeight(...args);
  }
  mnh(...args: Parameters<GwenBase['minHeight']>) {
    return this.minHeight(...args);
  }
  mxw(...args: Parameters<GwenBase['maxWidth']>) {
    return this.maxWidth(...args);
  }
  mnw(...args: Parameters<GwenBase['minWidth']>) {
    return this.minWidth(...args);
  }

  f(...args: Parameters<GwenBase['flex']>) {
    return this.flex(...args);
  }

  cg(k: number) {
    return this.css({
      color: Color('#ffffff')
        .darken(k / 100)
        .toString(),
    });
  }

  cgo(k: number) {
    return this.css({
      color: `rgba(0, 0, 0, ${(k / 100.0).toFixed(2)}`,
    });
  }

  op(...args: Parameters<GwenBase['opacity']>) {
    return this.opacity(...args);
  }
  br(...args: Parameters<GwenBase['borderRadius']>) {
    return this.borderRadius(...args);
  }
}
