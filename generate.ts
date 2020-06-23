import Color from 'color';
import fs from 'fs';
import { skip17 } from './skip17';

const range = (start: number, end: number) => {
  const arr: number[] = [];
  for (let k = start; k <= end; k++) {
    arr.push(k);
  }
  return arr;
};

const weights = range(1, 9);
const list20 = range(0, 20);
const list100 = range(0, 100);
const list256 = range(0, 255);

const Gwen: string[] = [];
Gwen.push(`import { GwenBase } from './GwenBase';`);
Gwen.push('export class G extends GwenBase {\n');

// const myArr = new Array(100);

const flexs = list20.map(k => `  get f${k}() { return this.css({ flex: ${k} })}`).join('\n');
Gwen.push(flexs);

const wpcts = list20.map(k => `  get w${k * 5}pct() { return this.css({ width: "${5 * k}%" })}`).join('\n');
Gwen.push(wpcts);

const hpcts = list20.map(k => `  get h${k * 5}pct() { return this.css({ height: "${5 * k}%" })}`).join('\n');
Gwen.push(hpcts);

const cgs = list256
  .map(
    k =>
      `  get cg${k}() { return this.css({ color: "${Color('#ffffff')
        .darken(k / 256)
        .hex()}" }); }`,
  )
  .join('\n');
Gwen.push(cgs);

const fws = weights.map(k => `  get fw${k}00() { return this.css({ fontWeight: ${k}00 })}`).join('\n');
Gwen.push(fws);

const fss = skip17
  .slice(0, 40)
  .map(k => `  get fs${k}() { return this.css({ fontSize: "${k}pt" })}`)
  .join('\n');
Gwen.push(fss);

// .w80p

// h: height
const hs = skip17.map(k => `  get h${k}() { return this.css({ height: "${k}px" })}`).join('\n');
Gwen.push(hs);

// w: width
const ws = skip17.map(k => `  get w${k}() { return this.css({ width: "${k}px" })}`).join('\n');
Gwen.push(ws);

// l: left
const ls = skip17.map(k => `  get l${k}() { return this.css({ left: "${k}px" })}`).join('\n');
Gwen.push(ls);

// r: right
const rs = skip17.map(k => `  get r${k}() { return this.css({ right: "${k}px" })}`).join('\n');
Gwen.push(rs);

// t: top
const ts = skip17.map(k => `  get t${k}() { return this.css({ top: "${k}px" })}`).join('\n');
Gwen.push(ts);

// b: bottom
const bs = skip17.map(k => `  get b${k}() { return this.css({ bottom: "${k}px" })}`).join('\n');
Gwen.push(bs);

// p: padding
const ps = skip17.map(k => `  get p${k}() { return this.css({ padding: "${k}px" })}`).join('\n');
Gwen.push(ps);

// pt: paddingTop
const pts = skip17.map(k => `  get pt${k}() { return this.css({ paddingTop: "${k}px" })}`).join('\n');
Gwen.push(pts);

// pr: paddingRight
const prs = skip17.map(k => `  get pr${k}() { return this.css({ paddingRight: "${k}px" })}`).join('\n');
Gwen.push(prs);

// pb: paddingBottom
const pbs = skip17.map(k => `  get pb${k}() { return this.css({ paddingBottom: "${k}px" })}`).join('\n');
Gwen.push(pbs);

// pl: paddingLeft
const pls = skip17.map(k => `  get pl${k}() { return this.css({ paddingLeft: "${k}px" })}`).join('\n');
Gwen.push(pls);

// pv: paddingLeft
const pvs = skip17
  .map(k => `  get pv${k}() { return this.css({ paddingTop: "${k}px", paddingBottom: "${k}px" })}`)
  .join('\n');
Gwen.push(pvs);

// ph: paddingLeft
const phs = skip17
  .map(k => `  get ph${k}() { return this.css({ paddingLeft: "${k}px", paddingRight: "${k}px" })}`)
  .join('\n');
Gwen.push(phs);

// m: margin
const ms = skip17.map(k => `  get m${k}() { return this.css({ margin: "${k}px" })}`).join('\n');
Gwen.push(ms);

// mt: marginTop
const mts = skip17.map(k => `  get mt${k}() { return this.css({ marginTop: "${k}px" })}`).join('\n');
Gwen.push(mts);

// mr: marginRight
const mrs = skip17.map(k => `  get mr${k}() { return this.css({ marginRight: "${k}px" })}`).join('\n');
Gwen.push(mrs);

// mb: marginBottom
const mbs = skip17.map(k => `  get mb${k}() { return this.css({ marginBottom: "${k}px" })}`).join('\n');
Gwen.push(mbs);

// ml: marginLeft
const mls = skip17.map(k => `  get ml${k}() { return this.css({ marginLeft: "${k}px" })}`).join('\n');
Gwen.push(mls);

// mv: marginTop
const mvs = skip17
  .map(k => `  get mv${k}() { return this.css({ marginTop: "${k}px", marginBottom: "${k}px" })}`)
  .join('\n');
Gwen.push(mvs);

// mh: marginTop
const mhs = skip17
  .map(k => `  get mh${k}() { return this.css({ marginLeft: "${k}px", marginRight: "${k}px" })}`)
  .join('\n');
Gwen.push(mhs);

// mnh: minHeight
const mnhs = skip17.map(k => `  get mnh${k}() { return this.css({ minHeight: "${k}px" })}`).join('\n');
Gwen.push(mnhs);

// mnw: minWidth
const mnws = skip17.map(k => `  get mnw${k}() { return this.css({ minWidth: "${k}px" })}`).join('\n');
Gwen.push(mnws);

// mxh: maxHeight
const mxhs = skip17.map(k => `  get mxh${k}() { return this.css({ maxHeight: "${k}px" })}`).join('\n');
Gwen.push(mxhs);

// mxw: maxWidth
const mxws = skip17.map(k => `  get mxw${k}() { return this.css({ maxWidth: "${k}px" })}`).join('\n');
Gwen.push(mxws);

// op: opacity
const ops = list100.map(k => `  get op${k}() { return this.css({ opacity: 0.${k} }) }`).join('\n');
Gwen.push(ops);

Gwen.push(`\n}`);

console.log(`${__dirname}/src/Gwen.ts`);
fs.writeFileSync(`${__dirname}/src/Gwen.ts`, Gwen.join('\n'), 'utf8');
