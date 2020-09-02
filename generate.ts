import Color from 'color';
import fs from 'fs';
// import { skip17 } from './skip17';

const range = (start: number, end: number) => {
  const arr: number[] = [];
  for (let k = start; k <= end; k++) {
    arr.push(k);
  }
  return arr;
};

const weights = range(1, 9);
const list10 = range(0, 10);
const list25 = range(0, 25);
const list100 = range(0, 100);
const base25 = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  30,
  35,
  40,
  45,
  50,
  55,
  60,
  65,
  70,
  75,
  80,
  85,
  90,
  95,
  100,
  105,
  110,
  115,
  120,
  125,
  150,
  175,
  200,
  225,
  250,
  275,
  300,
  325,
  350,
  375,
  400,
  425,
  450,
  475,
  500,
  525,
  550,
  575,
  600,
  625,
  650,
  675,
  700,
  725,
  750,
  775,
  800,
  825,
  850,
  875,
  900,
  925,
  950,
  975,
  1000,
  1100,
  1200,
  1300,
  1400,
  1500,
  1600,
  1700,
  1800,
  1900,
  2000,
];
// const list256 = range(0, 255);

const Definition: string[] = [];
Definition.push(`import { GwenBase } from './GwenBase';`);
Definition.push('export class Gwen extends GwenBase {\n');
// Definition.push(`  static make = (...args:Gwen[])=>{
//     return new gwen.mix(...args);
//   }`);

// const myArr = new Array(100);

const flexs = list25.map(k => `  get f${k}() { return this.css({ flex: ${k} })}`).join('\n');
Definition.push(flexs);

const wpcts = list25.map(k => `  get w${k * 5}pct() { return this.css({ width: "${5 * k}%" })}`).join('\n');
Definition.push(wpcts);

const hpcts = list25.map(k => `  get h${k * 5}pct() { return this.css({ height: "${5 * k}%" })}`).join('\n');
Definition.push(hpcts);

const cgs = list100
  .map(
    k =>
      `  get cg${k}() { return this.css({ color: "${Color('#ffffff')
        .darken(k / 100)
        .hex()}" }); }`,
  )
  .join('\n');
Definition.push(cgs);

const cgos = list100
  .map(k => `  get cgo${k}() { return this.css({ color: "rgba(0, 0, 0, ${(k / 100.0).toFixed(2)})" }); }`)
  .join('\n');
Definition.push(cgos);

const shadows = list10
  .map(k => {
    const prev = Math.round(Math.pow(1.5, k - 1));
    const curr = Math.round(Math.pow(1.5, k));
    const next = Math.round(Math.pow(1.5, k + 1));
    const shadow1 = `0 ${curr}px ${next}px 0 rgba(0, 0, 0, 0.1)`;
    const shadow2 = `0 ${prev}px ${prev}px 0 rgba(0, 0, 0, 0.06)`;
    return `  get shadow${k}() { return this.css({ boxShadow: "${shadow1}, ${shadow2};" }); }`;
  })
  .join('\n');
Definition.push(shadows);

const fws = weights.map(k => `  get fw${k}() { return this.css({ fontWeight: ${k}00 })}`).join('\n');
Definition.push(fws);

const fss = base25
  .slice(0, 40)
  .map(k => `  get fs${k}() { return this.css({ fontSize: "${k}pt" })}`)
  .join('\n');
Definition.push(fss);

// .w80p

// h: height
const hs = base25.map(k => `  get h${k}() { return this.css({ height: "${k}px" })}`).join('\n');
Definition.push(hs);

// w: width
const ws = base25.map(k => `  get w${k}() { return this.css({ width: "${k}px" })}`).join('\n');
Definition.push(ws);

// l: left
const ls = base25.map(k => `  get l${k}() { return this.css({ left: "${k}px" })}`).join('\n');
Definition.push(ls);

// r: right
const rs = base25.map(k => `  get r${k}() { return this.css({ right: "${k}px" })}`).join('\n');
Definition.push(rs);

// t: top
const ts = base25.map(k => `  get t${k}() { return this.css({ top: "${k}px" })}`).join('\n');
Definition.push(ts);

// b: bottom
const bs = base25.map(k => `  get b${k}() { return this.css({ bottom: "${k}px" })}`).join('\n');
Definition.push(bs);

// p: padding
const ps = base25.map(k => `  get p${k}() { return this.css({ padding: "${k}px" })}`).join('\n');
Definition.push(ps);

// pt: paddingTop
const pts = base25.map(k => `  get pt${k}() { return this.css({ paddingTop: "${k}px" })}`).join('\n');
Definition.push(pts);

// pr: paddingRight
const prs = base25.map(k => `  get pr${k}() { return this.css({ paddingRight: "${k}px" })}`).join('\n');
Definition.push(prs);

// pb: paddingBottom
const pbs = base25.map(k => `  get pb${k}() { return this.css({ paddingBottom: "${k}px" })}`).join('\n');
Definition.push(pbs);

// pl: paddingLeft
const pls = base25.map(k => `  get pl${k}() { return this.css({ paddingLeft: "${k}px" })}`).join('\n');
Definition.push(pls);

// pv: paddingLeft
const pvs = base25
  .map(k => `  get pv${k}() { return this.css({ paddingTop: "${k}px", paddingBottom: "${k}px" })}`)
  .join('\n');
Definition.push(pvs);

// ph: paddingLeft
const phs = base25
  .map(k => `  get ph${k}() { return this.css({ paddingLeft: "${k}px", paddingRight: "${k}px" })}`)
  .join('\n');
Definition.push(phs);

// m: margin
const ms = base25.map(k => `  get m${k}() { return this.css({ margin: "${k}px" })}`).join('\n');
Definition.push(ms);

// mt: marginTop
const mts = base25.map(k => `  get mt${k}() { return this.css({ marginTop: "${k}px" })}`).join('\n');
Definition.push(mts);

// mr: marginRight
const mrs = base25.map(k => `  get mr${k}() { return this.css({ marginRight: "${k}px" })}`).join('\n');
Definition.push(mrs);

// mb: marginBottom
const mbs = base25.map(k => `  get mb${k}() { return this.css({ marginBottom: "${k}px" })}`).join('\n');
Definition.push(mbs);

// ml: marginLeft
const mls = base25.map(k => `  get ml${k}() { return this.css({ marginLeft: "${k}px" })}`).join('\n');
Definition.push(mls);

// mv: marginTop
const mvs = base25
  .map(k => `  get mv${k}() { return this.css({ marginTop: "${k}px", marginBottom: "${k}px" })}`)
  .join('\n');
Definition.push(mvs);

// mh: marginTop
const mhs = base25
  .map(k => `  get mh${k}() { return this.css({ marginLeft: "${k}px", marginRight: "${k}px" })}`)
  .join('\n');
Definition.push(mhs);

// mnh: minHeight
const mnhs = base25.map(k => `  get mnh${k}() { return this.css({ minHeight: "${k}px" })}`).join('\n');
Definition.push(mnhs);

// mnw: minWidth
const mnws = base25.map(k => `  get mnw${k}() { return this.css({ minWidth: "${k}px" })}`).join('\n');
Definition.push(mnws);

// mxh: maxHeight
const mxhs = base25.map(k => `  get mxh${k}() { return this.css({ maxHeight: "${k}px" })}`).join('\n');
Definition.push(mxhs);

// mxw: maxWidth
const mxws = base25.map(k => `  get mxw${k}() { return this.css({ maxWidth: "${k}px" })}`).join('\n');
Definition.push(mxws);

// op: opacity
const opacities = list100.map(k => `  get op${k}() { return this.css({ opacity: ${k / 100} }) }`).join('\n');
Definition.push(opacities);

// TODO: border radius
// op: opacity
const brs = list100.map(k => `  get br${k}() { return this.css({ borderRadius: "${k}px" }) }`).join('\n');
Definition.push(brs);

Definition.push(`\n}`);

console.log(`${__dirname}/src/Gwen.ts`);
fs.writeFileSync(`${__dirname}/src/Gwen.ts`, Definition.join('\n'), 'utf8');
