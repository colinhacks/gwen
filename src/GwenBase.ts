import { GwenBaseBase } from './GwenBaseBase';
import { Gwen } from './external';

export class GwenBase extends GwenBaseBase {
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

  smup = (delta: (t: this) => this) => this.media({ min: this.theme.sm }, delta);
  mdup = (delta: (t: this) => this) => this.media({ min: this.theme.md }, delta);
  lgup = (delta: (t: this) => this) => this.media({ min: this.theme.lg }, delta);
  xlup = (delta: (t: this) => this) => this.media({ min: this.theme.xl }, delta);
  xsdown = (delta: (t: this) => this) => this.media({ max: this.theme.sm }, delta);
  smdown = (delta: (t: this) => this) => this.media({ max: this.theme.md }, delta);
  mddown = (delta: (t: this) => this) => this.media({ max: this.theme.lg }, delta);
  lgdown = (delta: (t: this) => this) => this.media({ max: this.theme.xl }, delta);
  xsonly = (delta: (t: this) => this) => this.media({ min: this.theme.xs, max: this.theme.sm }, delta);
  smonly = (delta: (t: this) => this) => this.media({ min: this.theme.sm, max: this.theme.md }, delta);
  mdonly = (delta: (t: this) => this) => this.media({ min: this.theme.md, max: this.theme.lg }, delta);
  lgonly = (delta: (t: this) => this) => this.media({ min: this.theme.lg, max: this.theme.xl }, delta);
  xlonly = (delta: (t: this) => this) => this.media({ min: this.theme.xl }, delta);
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
