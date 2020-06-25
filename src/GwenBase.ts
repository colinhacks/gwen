import { GwenBaseBase } from './GwenBaseBase';
import { Gwen } from './external';
export class GwenBase extends GwenBaseBase {
  get row() {
    return this.css({
      display: 'flex',
      flexDirection: 'row',
    });
  }
  get fdr() {
    return this.css({
      display: 'flex',
      flexDirection: 'row',
    });
  }
  get fdrr() {
    return this.css({
      display: 'flex',
      flexDirection: 'row-reverse',
    });
  }
  get fdc() {
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
  get fdcr() {
    return this.css({
      display: 'flex',
      flexDirection: 'column-reverse',
    });
  }
  get fww() {
    return this.css({ flexWrap: 'wrap' });
  }
  get fwwr() {
    return this.css({ flexWrap: 'wrap-reverse' });
  }
  get fwnw() {
    return this.css({ flexWrap: 'nowrap' });
  }
  get aic() {
    return this.css({ alignItems: 'center' });
  }
  get aist() {
    return this.css({ alignItems: 'stretch' });
  }
  get aifs() {
    return this.css({ alignItems: 'flex-start' });
  }
  get aife() {
    return this.css({ alignItems: 'flex-end' });
  }
  get aib() {
    return this.css({ alignItems: 'baseline' });
  }
  get asc() {
    return this.css({ alignSelf: 'center' });
  }
  get ass() {
    return this.css({ alignSelf: 'stretch' });
  }
  get asfs() {
    return this.css({ alignSelf: 'flex-start' });
  }
  get asfe() {
    return this.css({ alignSelf: 'flex-end' });
  }
  get asb() {
    return this.css({ alignSelf: 'baseline' });
  }
  get jcc() {
    return this.css({ justifyContent: 'center' });
  }
  get jcfs() {
    return this.css({ justifyContent: 'flex-start' });
  }
  get jcfe() {
    return this.css({ justifyContent: 'flex-end' });
  }
  get jcsb() {
    return this.css({ justifyContent: 'space-between' });
  }
  get jcsa() {
    return this.css({ justifyContent: 'space-around' });
  }
  get jcse() {
    return this.css({ justifyContent: 'space-evenly' });
  }
  get jic() {
    return this.css({ justifyItems: 'center' });
  }
  get jis() {
    return this.css({ justifyItems: 'start' });
  }
  get jie() {
    return this.css({ justifyItems: 'end' });
  }
  get jist() {
    return this.css({ justifyItems: 'stretch' });
  }
  get jib() {
    return this.css({ justifyItems: 'baseline' });
  }
  get jifb() {
    return this.css({ justifyItems: 'first baseline' });
  }
  get jilb() {
    return this.css({ justifyItems: 'last baseline' });
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
  get visible() {
    return this.css({ visibility: 'visible' });
  }
  get hidden() {
    return this.css({ visibility: 'hidden' });
  }
  get wbn() {
    return this.css({ wordBreak: 'normal' });
  }
  get wbba() {
    return this.css({ wordBreak: 'break-all' });
  }
  get wbka() {
    return this.css({ wordBreak: 'keep-all' });
  }
  get wbbw() {
    return this.css({ wordBreak: 'break-word' });
  }
  get toc() {
    return this.css({ textOverflow: 'clip' });
  }
  get toe() {
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
  hover = (delta: (t: this) => this) => {
    const newInst: this = new (this as any).constructor();
    return this.css({ [`&:hover`]: delta(newInst).class });
  };

  pseudo = (cond: string, delta: (t: this) => this) => {
    const newInst: this = new (this as any).constructor();
    return this.css({
      [`&${cond}`]: delta(newInst).class,
    });
  };

  media = (conditions: { min?: string; max?: string }, delta: (t: this) => this) => {
    const newInst: this = new (this as any).constructor();
    return this.css({
      [`@media only screen ${conditions.min ? ` and (min-width: ${conditions.min})` : ``} ${
        conditions.max ? ` and (max-width: ${conditions.max})` : ''
      }`]: delta(newInst).class,
    });
  };
  selector = (cond: string, delta: (t: Gwen) => Gwen) => {
    const newInst: Gwen = new (this as any).constructor();
    return this.css({
      [cond]: delta(newInst).class,
    });
  };
  smup = (delta: (t: this) => this) => this.media({ min: this.finalTheme.sm }, delta);
  mdup = (delta: (t: this) => this) => this.media({ min: this.finalTheme.md }, delta);
  lgup = (delta: (t: this) => this) => this.media({ min: this.finalTheme.lg }, delta);
  xlup = (delta: (t: this) => this) => this.media({ min: this.finalTheme.xl }, delta);
  xsdown = (delta: (t: this) => this) => this.media({ max: this.finalTheme.sm }, delta);
  smdown = (delta: (t: this) => this) => this.media({ max: this.finalTheme.md }, delta);
  mddown = (delta: (t: this) => this) => this.media({ max: this.finalTheme.lg }, delta);
  lgdown = (delta: (t: this) => this) => this.media({ max: this.finalTheme.xl }, delta);
  xsonly = (delta: (t: this) => this) => this.media({ min: this.finalTheme.xs, max: this.finalTheme.sm }, delta);
  smonly = (delta: (t: this) => this) => this.media({ min: this.finalTheme.sm, max: this.finalTheme.md }, delta);
  mdonly = (delta: (t: this) => this) => this.media({ min: this.finalTheme.md, max: this.finalTheme.lg }, delta);
  lgonly = (delta: (t: this) => this) => this.media({ min: this.finalTheme.lg, max: this.finalTheme.xl }, delta);
  xlonly = (delta: (t: this) => this) => this.media({ min: this.finalTheme.xl }, delta);
  checked = (delta: (t: this) => this) => this.pseudo(`:checked`, delta);
  focus = (delta: (t: this) => this) => this.pseudo(`:focus`, delta);
  focusWithin = (delta: (t: this) => this) => this.pseudo(`:focus-within`, delta);
  visited = (delta: (t: this) => this) => this.pseudo(`:visited`, delta);
  active = (delta: (t: this) => this) => this.pseudo(`:active`, delta);
  empty = (delta: (t: this) => this) => this.pseudo(`:empty`, delta);
  enabled = (delta: (t: this) => this) => this.pseudo(`:enabled`, delta);
  firstOfType = (delta: (t: this) => this) => this.pseudo(`:first-of-type`, delta);
  lastOfType = (delta: (t: this) => this) => this.pseudo(`:last-of-type`, delta);
  firstChild = (delta: (t: this) => this) => this.pseudo(`:first-child`, delta);
  lastChild = (delta: (t: this) => this) => this.pseudo(`:last-child`, delta);
  nthChild = (n: number | string, delta: (t: this) => this) => this.pseudo(`:nth-child(${n})`, delta);
  if = (condition: any, delta: (t: this) => this) => {
    if (condition) return delta(this);
    return this;
  };
}
