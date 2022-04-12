import './cssdata';
import PROPS from 'cssdata/css/properties.json';
// import SYNTAXES from 'cssdata/css/syntaxes.json';

const ABBRS: {
  prop: string;
  abbr: string;
  values: string[];
}[] = [];

for (const propName in PROPS) {
  const propData = PROPS[propName];
  // console.log(propName);
  // console.log(propData);
  ABBRS.push({
    prop: propName,
    abbr: propName
      .split('-')
      .map(el => el[0])
      .join(''),
    values: propData.syntax
      .replace(/[\[\]]/, '')
      .trim()
      .split(' | '),
  });
}

console.log(ABBRS);
