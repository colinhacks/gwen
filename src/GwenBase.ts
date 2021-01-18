import { css, CSSObject } from '@emotion/css';
import hash from 'object-hash';
type CssArgs = Parameters<typeof css>;

if (typeof window !== 'undefined') {
  (window as any).hash = hash;
}

export type GwenTheme = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  sansFont: string;
  serifFont: string;
};

const flattenArg = (arg: any) => {
  let allArgs: GwenBase[] = [];

  if (arg instanceof GwenBase) {
    allArgs.push(arg);
  } else if (Array.isArray(arg)) {
    for (const item of arg) {
      allArgs = [...allArgs, ...flattenArg(item)];
    }
  } else if (typeof arg === 'object') {
    for (const k in arg) {
      allArgs = [...allArgs, ...flattenArg(arg[k])];
    }
  }

  return allArgs;
};

const DEFAULT_THEME: GwenTheme = {
  xs: '420px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  sansFont: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  serifFont: `Georgia, Cambria, "Times New Roman", Times, serif`,
};

export interface GwenParams {
  theme?: Partial<GwenTheme>;
  cssArray?: CssArgs;
}

export class GwenBase<Params extends GwenParams = GwenParams> {
  protected params: Params;

  get theme() {
    const finalTheme: GwenTheme = {
      ...DEFAULT_THEME,
      ...this.params.theme,
    };
    if (this.params.theme?.sansFont) finalTheme.sansFont = `"${this.params.theme.sansFont}", ${DEFAULT_THEME.sansFont}`;
    if (this.params.theme?.serifFont)
      finalTheme.serifFont = `"${this.params.theme.serifFont}", ${DEFAULT_THEME.serifFont}`;
    return finalTheme;
  }

  get cssArray() {
    return this.params.cssArray || [];
  }

  // static create(theme: Partial<GwenTheme> = {}, params: Partial<Omit<GwenParams, 'theme'>> = {}) {
  //   const finalTheme: GwenTheme = {
  //     ...DEFAULT_THEME,
  //     ...theme,
  //   };
  //   if (theme?.sansFont) finalTheme.sansFont = `"${theme?.sansFont}", ${DEFAULT_THEME.sansFont}`;
  //   if (theme?.serifFont) finalTheme.serifFont = `"${theme?.serifFont}", ${DEFAULT_THEME.serifFont}`;

  //   const finalParams = {
  //     cssArray: params.cssArray || [],
  //     theme: finalTheme,
  //   };
  //   return new GwenBase(finalParams);
  // }

  constructor(params: Params) {
    this.params = params;
  }

  get class() {
    return css(...this.cssArray);
  }

  static css = css;
  // static cx = cx;

  // protected _update = (...args: CxArgs) => {
  //   this.className = cx(this.className, ...args);
  //   return this;
  // };

  _cache: { [k: string]: GwenBase } = {};
  _hashcache: { obj: any; hash: string }[] = [];

  _gethash(obj: any) {
    // const itemIndex = this._hashcache.indexOf(obj);
    // if (itemIndex !== -1) {
    //   // console.log('hashcache hit!');
    //   return this._hashcache[itemIndex].hash;
    // } else {
    //   // console.log(`computing hash`);
    // console.log(obj);
    // console.log(`hash: ${hash}`);
    const newhash = hash(obj);
    //   this._hashcache.push({ obj, hash: newhash });
    return newhash;
    // }
  }

  reset(): this {
    if (this._cache['__clear']) {
      return this._cache['__clear'] as any;
    }
    const newInstance = new (this as any).constructor({
      ...this.params,
      cssArray: [],
    });
    this._cache['__clear'] = newInstance;
    return newInstance;
  }

  css(...args: CssArgs): this {
    const hashKey = this._gethash(args);
    if (this._cache[hashKey]) {
      return this._cache[hashKey] as any;
    }

    const newInstance = new (this as any).constructor({
      ...this.params,
      cssArray: [...this.cssArray, ...args],
    });
    this._cache[hashKey] = newInstance;

    return newInstance;
  }

  mix(...args: GwenBase[]): this {
    let mixedCss: CssArgs = [];
    for (const arg of args) {
      mixedCss = [...mixedCss, ...arg.cssArray];
    }
    return this.css(mixedCss);
  }
  alignContent(arg: CSSObject['alignContent']) {
    return this.css({ alignContent: arg });
  }
  alignItems(arg: CSSObject['alignItems']) {
    return this.css({ alignItems: arg });
  }
  alignSelf(arg: CSSObject['alignSelf']) {
    return this.css({ alignSelf: arg });
  }
  all(arg: CSSObject['all']) {
    return this.css({ all: arg });
  }
  animation(arg: CSSObject['animation']) {
    return this.css({ animation: arg });
  }
  animationDelay(arg: CSSObject['animationDelay']) {
    return this.css({ animationDelay: arg });
  }
  animationDirection(arg: CSSObject['animationDirection']) {
    return this.css({ animationDirection: arg });
  }
  animationDuration(arg: CSSObject['animationDuration']) {
    return this.css({ animationDuration: arg });
  }
  animationFillMode(arg: CSSObject['animationFillMode']) {
    return this.css({ animationFillMode: arg });
  }
  animationIterationCount(arg: CSSObject['animationIterationCount']) {
    return this.css({ animationIterationCount: arg });
  }
  animationName(arg: CSSObject['animationName']) {
    return this.css({ animationName: arg });
  }
  animationPlayState(arg: CSSObject['animationPlayState']) {
    return this.css({ animationPlayState: arg });
  }
  animationTimingFunction(arg: CSSObject['animationTimingFunction']) {
    return this.css({ animationTimingFunction: arg });
  }
  backfaceVisibility(arg: CSSObject['backfaceVisibility']) {
    return this.css({ backfaceVisibility: arg });
  }
  background(arg: CSSObject['background']) {
    return this.css({ background: arg });
  }
  backgroundAttachment(arg: CSSObject['backgroundAttachment']) {
    return this.css({ backgroundAttachment: arg });
  }
  backgroundBlendMode(arg: CSSObject['backgroundBlendMode']) {
    return this.css({ backgroundBlendMode: arg });
  }
  backgroundClip(arg: CSSObject['backgroundClip']) {
    return this.css({ backgroundClip: arg });
  }
  backgroundColor(arg: CSSObject['backgroundColor']) {
    return this.css({ backgroundColor: arg });
  }
  backgroundImage(arg: CSSObject['backgroundImage']) {
    return this.css({ backgroundImage: arg });
  }
  backgroundOrigin(arg: CSSObject['backgroundOrigin']) {
    return this.css({ backgroundOrigin: arg });
  }
  backgroundPosition(arg: CSSObject['backgroundPosition']) {
    return this.css({ backgroundPosition: arg });
  }
  backgroundRepeat(arg: CSSObject['backgroundRepeat']) {
    return this.css({ backgroundRepeat: arg });
  }
  backgroundSize(arg: CSSObject['backgroundSize']) {
    return this.css({ backgroundSize: arg });
  }
  border(arg: CSSObject['border']) {
    return this.css({ border: arg });
  }
  borderBottom(arg: CSSObject['borderBottom']) {
    return this.css({ borderBottom: arg });
  }
  borderBottomColor(arg: CSSObject['borderBottomColor']) {
    return this.css({ borderBottomColor: arg });
  }
  borderBottomLeftRadius(arg: CSSObject['borderBottomLeftRadius']) {
    return this.css({ borderBottomLeftRadius: arg });
  }
  borderBottomRightRadius(arg: CSSObject['borderBottomRightRadius']) {
    return this.css({ borderBottomRightRadius: arg });
  }
  borderBottomStyle(arg: CSSObject['borderBottomStyle']) {
    return this.css({ borderBottomStyle: arg });
  }
  borderBottomWidth(arg: CSSObject['borderBottomWidth']) {
    return this.css({ borderBottomWidth: arg });
  }
  borderCollapse(arg: CSSObject['borderCollapse']) {
    return this.css({ borderCollapse: arg });
  }
  borderColor(arg: CSSObject['borderColor']) {
    return this.css({ borderColor: arg });
  }
  borderImage(arg: CSSObject['borderImage']) {
    return this.css({ borderImage: arg });
  }
  borderImageOutset(arg: CSSObject['borderImageOutset']) {
    return this.css({ borderImageOutset: arg });
  }
  borderImageRepeat(arg: CSSObject['borderImageRepeat']) {
    return this.css({ borderImageRepeat: arg });
  }
  borderImageSlice(arg: CSSObject['borderImageSlice']) {
    return this.css({ borderImageSlice: arg });
  }
  borderImageSource(arg: CSSObject['borderImageSource']) {
    return this.css({ borderImageSource: arg });
  }
  borderImageWidth(arg: CSSObject['borderImageWidth']) {
    return this.css({ borderImageWidth: arg });
  }
  borderLeft(arg: CSSObject['borderLeft']) {
    return this.css({ borderLeft: arg });
  }
  borderLeftColor(arg: CSSObject['borderLeftColor']) {
    return this.css({ borderLeftColor: arg });
  }
  borderLeftStyle(arg: CSSObject['borderLeftStyle']) {
    return this.css({ borderLeftStyle: arg });
  }
  borderLeftWidth(arg: CSSObject['borderLeftWidth']) {
    return this.css({ borderLeftWidth: arg });
  }
  borderRadius(arg: CSSObject['borderRadius']) {
    return this.css({ borderRadius: arg });
  }
  borderRight(arg: CSSObject['borderRight']) {
    return this.css({ borderRight: arg });
  }
  borderRightColor(arg: CSSObject['borderRightColor']) {
    return this.css({ borderRightColor: arg });
  }
  borderRightStyle(arg: CSSObject['borderRightStyle']) {
    return this.css({ borderRightStyle: arg });
  }
  borderRightWidth(arg: CSSObject['borderRightWidth']) {
    return this.css({ borderRightWidth: arg });
  }
  borderSpacing(arg: CSSObject['borderSpacing']) {
    return this.css({ borderSpacing: arg });
  }
  borderStyle(arg: CSSObject['borderStyle']) {
    return this.css({ borderStyle: arg });
  }
  borderTop(arg: CSSObject['borderTop']) {
    return this.css({ borderTop: arg });
  }
  borderTopColor(arg: CSSObject['borderTopColor']) {
    return this.css({ borderTopColor: arg });
  }
  borderTopLeftRadius(arg: CSSObject['borderTopLeftRadius']) {
    return this.css({ borderTopLeftRadius: arg });
  }
  borderTopRightRadius(arg: CSSObject['borderTopRightRadius']) {
    return this.css({ borderTopRightRadius: arg });
  }
  borderTopStyle(arg: CSSObject['borderTopStyle']) {
    return this.css({ borderTopStyle: arg });
  }
  borderTopWidth(arg: CSSObject['borderTopWidth']) {
    return this.css({ borderTopWidth: arg });
  }
  borderWidth(arg: CSSObject['borderWidth']) {
    return this.css({ borderWidth: arg });
  }
  bottom(arg: CSSObject['bottom']) {
    return this.css({ bottom: arg });
  }
  boxDecorationBreak(arg: CSSObject['boxDecorationBreak']) {
    return this.css({ boxDecorationBreak: arg });
  }
  boxShadow(arg: CSSObject['boxShadow']) {
    return this.css({ boxShadow: arg });
  }
  boxSizing(arg: CSSObject['boxSizing']) {
    return this.css({ boxSizing: arg });
  }
  breakAfter(arg: CSSObject['breakAfter']) {
    return this.css({ breakAfter: arg });
  }
  breakBefore(arg: CSSObject['breakBefore']) {
    return this.css({ breakBefore: arg });
  }
  breakInside(arg: CSSObject['breakInside']) {
    return this.css({ breakInside: arg });
  }
  captionSide(arg: CSSObject['captionSide']) {
    return this.css({ captionSide: arg });
  }
  caretColor(arg: CSSObject['caretColor']) {
    return this.css({ caretColor: arg });
  }
  cha(arg: CSSObject['charSet']) {
    return this.css({ cha: arg });
  }
  clear(arg: CSSObject['clear']) {
    return this.css({ clear: arg });
  }
  clip(arg: CSSObject['clip']) {
    return this.css({ clip: arg });
  }
  clipPath(arg: CSSObject['clipPath']) {
    return this.css({ clipPath: arg });
  }
  color(arg: CSSObject['color']) {
    return this.css({ color: arg });
  }
  columnCount(arg: CSSObject['columnCount']) {
    return this.css({ columnCount: arg });
  }
  columnFill(arg: CSSObject['columnFill']) {
    return this.css({ columnFill: arg });
  }
  columnGap(arg: CSSObject['columnGap']) {
    return this.css({ columnGap: arg });
  }
  columnRule(arg: CSSObject['columnRule']) {
    return this.css({ columnRule: arg });
  }
  columnRuleColor(arg: CSSObject['columnRuleColor']) {
    return this.css({ columnRuleColor: arg });
  }
  columnRuleStyle(arg: CSSObject['columnRuleStyle']) {
    return this.css({ columnRuleStyle: arg });
  }
  columnRuleWidth(arg: CSSObject['columnRuleWidth']) {
    return this.css({ columnRuleWidth: arg });
  }
  columnSpan(arg: CSSObject['columnSpan']) {
    return this.css({ columnSpan: arg });
  }
  columnWidth(arg: CSSObject['columnWidth']) {
    return this.css({ columnWidth: arg });
  }
  columns(arg: CSSObject['columns']) {
    return this.css({ columns: arg });
  }
  content(arg: CSSObject['content']) {
    return this.css({ content: arg });
  }
  counterIncrement(arg: CSSObject['counterIncrement']) {
    return this.css({ counterIncrement: arg });
  }
  counterReset(arg: CSSObject['counterReset']) {
    return this.css({ counterReset: arg });
  }
  cursor(arg: CSSObject['cursor']) {
    return this.css({ cursor: arg });
  }
  direction(arg: CSSObject['direction']) {
    return this.css({ direction: arg });
  }
  display(arg: CSSObject['display']) {
    return this.css({ display: arg });
  }
  emptyCells(arg: CSSObject['emptyCells']) {
    return this.css({ emptyCells: arg });
  }
  filter(arg: CSSObject['filter']) {
    return this.css({ filter: arg });
  }
  flex(arg: CSSObject['flex']) {
    return this.css({ flex: arg });
  }
  flexBasis(arg: CSSObject['flexBasis']) {
    return this.css({ flexBasis: arg });
  }
  flexDirection(arg: CSSObject['flexDirection']) {
    return this.css({ flexDirection: arg });
  }
  flexFlow(arg: CSSObject['flexFlow']) {
    return this.css({ flexFlow: arg });
  }
  flexGrow(arg: CSSObject['flexGrow']) {
    return this.css({ flexGrow: arg });
  }
  flexShrink(arg: CSSObject['flexShrink']) {
    return this.css({ flexShrink: arg });
  }
  flexWrap(arg: CSSObject['flexWrap']) {
    return this.css({ flexWrap: arg });
  }
  float(arg: CSSObject['float']) {
    return this.css({ float: arg });
  }
  font(arg: CSSObject['font']) {
    return this.css({ font: arg });
  }
  fontFace(arg: CSSObject['fontFace']) {
    return this.css({ fontFace: arg });
  }
  fontFamily(arg: CSSObject['fontFamily']) {
    return this.css({ fontFamily: arg });
  }
  fontFeatureSettings(arg: CSSObject['fontFeatureSettings']) {
    return this.css({ fontFeatureSettings: arg });
  }
  fontKerning(arg: CSSObject['fontKerning']) {
    return this.css({ fontKerning: arg });
  }
  fontSize(arg: CSSObject['fontSize']) {
    return this.css({ fontSize: arg });
  }
  fontSizeAdjust(arg: CSSObject['fontSizeAdjust']) {
    return this.css({ fontSizeAdjust: arg });
  }
  fontStretch(arg: CSSObject['fontStretch']) {
    return this.css({ fontStretch: arg });
  }
  fontStyle(arg: CSSObject['fontStyle']) {
    return this.css({ fontStyle: arg });
  }
  fontVariant(arg: CSSObject['fontVariant']) {
    return this.css({ fontVariant: arg });
  }
  fontVariantCaps(arg: CSSObject['fontVariantCaps']) {
    return this.css({ fontVariantCaps: arg });
  }
  fontWeight(arg: CSSObject['fontWeight']) {
    return this.css({ fontWeight: arg });
  }
  grid(arg: CSSObject['grid']) {
    return this.css({ grid: arg });
  }
  gridArea(arg: CSSObject['gridArea']) {
    return this.css({ gridArea: arg });
  }
  gridAutoColumns(arg: CSSObject['gridAutoColumns']) {
    return this.css({ gridAutoColumns: arg });
  }
  gridAutoFlow(arg: CSSObject['gridAutoFlow']) {
    return this.css({ gridAutoFlow: arg });
  }
  gridAutoRows(arg: CSSObject['gridAutoRows']) {
    return this.css({ gridAutoRows: arg });
  }
  gridColumn(arg: CSSObject['gridColumn']) {
    return this.css({ gridColumn: arg });
  }
  gridColumnEnd(arg: CSSObject['gridColumnEnd']) {
    return this.css({ gridColumnEnd: arg });
  }
  gridColumnGap(arg: CSSObject['gridColumnGap']) {
    return this.css({ gridColumnGap: arg });
  }
  gridColumnStart(arg: CSSObject['gridColumnStart']) {
    return this.css({ gridColumnStart: arg });
  }
  gridGap(arg: CSSObject['gridGap']) {
    return this.css({ gridGap: arg });
  }
  gridRow(arg: CSSObject['gridRow']) {
    return this.css({ gridRow: arg });
  }
  gridRowEnd(arg: CSSObject['gridRowEnd']) {
    return this.css({ gridRowEnd: arg });
  }
  gridRowGap(arg: CSSObject['gridRowGap']) {
    return this.css({ gridRowGap: arg });
  }
  gridRowStart(arg: CSSObject['gridRowStart']) {
    return this.css({ gridRowStart: arg });
  }
  gridTemplate(arg: CSSObject['gridTemplate']) {
    return this.css({ gridTemplate: arg });
  }
  gridTemplateAreas(arg: CSSObject['gridTemplateAreas']) {
    return this.css({ gridTemplateAreas: arg });
  }
  gridTemplateColumns(arg: CSSObject['gridTemplateColumns']) {
    return this.css({ gridTemplateColumns: arg });
  }
  gridTemplateRows(arg: CSSObject['gridTemplateRows']) {
    return this.css({ gridTemplateRows: arg });
  }
  hangingPunctuation(arg: CSSObject['hangingPunctuation']) {
    return this.css({ hangingPunctuation: arg });
  }
  height(arg: CSSObject['height']) {
    return this.css({ height: arg });
  }
  hyphens(arg: CSSObject['hyphens']) {
    return this.css({ hyphens: arg });
  }
  isolation(arg: CSSObject['isolation']) {
    return this.css({ isolation: arg });
  }
  justifyContent(arg: CSSObject['justifyContent']) {
    return this.css({ justifyContent: arg });
  }
  left(arg: CSSObject['left']) {
    return this.css({ left: arg });
  }
  letterSpacing(arg: CSSObject['letterSpacing']) {
    return this.css({ letterSpacing: arg });
  }
  lineHeight(arg: CSSObject['lineHeight']) {
    return this.css({ lineHeight: arg });
  }
  listStyle(arg: CSSObject['listStyle']) {
    return this.css({ listStyle: arg });
  }
  listStyleImage(arg: CSSObject['listStyleImage']) {
    return this.css({ listStyleImage: arg });
  }
  listStylePosition(arg: CSSObject['listStylePosition']) {
    return this.css({ listStylePosition: arg });
  }
  listStyleType(arg: CSSObject['listStyleType']) {
    return this.css({ listStyleType: arg });
  }
  margin(arg: CSSObject['margin']) {
    return this.css({ margin: arg });
  }
  marginBottom(arg: CSSObject['marginBottom']) {
    return this.css({ marginBottom: arg });
  }
  marginLeft(arg: CSSObject['marginLeft']) {
    return this.css({ marginLeft: arg });
  }
  marginRight(arg: CSSObject['marginRight']) {
    return this.css({ marginRight: arg });
  }
  marginTop(arg: CSSObject['marginTop']) {
    return this.css({ marginTop: arg });
  }
  maxHeight(arg: CSSObject['maxHeight']) {
    return this.css({ maxHeight: arg });
  }
  maxWidth(arg: CSSObject['maxWidth']) {
    return this.css({ maxWidth: arg });
  }
  minHeight(arg: CSSObject['minHeight']) {
    return this.css({ minHeight: arg });
  }
  minWidth(arg: CSSObject['minWidth']) {
    return this.css({ minWidth: arg });
  }
  mixBlendMode(arg: CSSObject['mixBlendMode']) {
    return this.css({ mixBlendMode: arg });
  }
  objectFit(arg: CSSObject['objectFit']) {
    return this.css({ objectFit: arg });
  }
  objectPosition(arg: CSSObject['objectPosition']) {
    return this.css({ objectPosition: arg });
  }
  opacity(arg: CSSObject['opacity']) {
    return this.css({ opacity: arg });
  }
  order(arg: CSSObject['order']) {
    return this.css({ order: arg });
  }
  outline(arg: CSSObject['outline']) {
    return this.css({ outline: arg });
  }
  outlineColor(arg: CSSObject['outlineColor']) {
    return this.css({ outlineColor: arg });
  }
  outlineOffset(arg: CSSObject['outlineOffset']) {
    return this.css({ outlineOffset: arg });
  }
  outlineStyle(arg: CSSObject['outlineStyle']) {
    return this.css({ outlineStyle: arg });
  }
  outlineWidth(arg: CSSObject['outlineWidth']) {
    return this.css({ outlineWidth: arg });
  }
  overflow(arg: CSSObject['overflow']) {
    return this.css({ overflow: arg });
  }
  overflowX(arg: CSSObject['overflowX']) {
    return this.css({ overflowX: arg });
  }
  overflowY(arg: CSSObject['overflowY']) {
    return this.css({ overflowY: arg });
  }
  padding(arg: CSSObject['padding']) {
    return this.css({ padding: arg });
  }
  paddingBottom(arg: CSSObject['paddingBottom']) {
    return this.css({ paddingBottom: arg });
  }
  paddingLeft(arg: CSSObject['paddingLeft']) {
    return this.css({ paddingLeft: arg });
  }
  paddingRight(arg: CSSObject['paddingRight']) {
    return this.css({ paddingRight: arg });
  }
  paddingTop(arg: CSSObject['paddingTop']) {
    return this.css({ paddingTop: arg });
  }
  pageBreakAfter(arg: CSSObject['pageBreakAfter']) {
    return this.css({ pageBreakAfter: arg });
  }
  pageBreakBefore(arg: CSSObject['pageBreakBefore']) {
    return this.css({ pageBreakBefore: arg });
  }
  pageBreakInside(arg: CSSObject['pageBreakInside']) {
    return this.css({ pageBreakInside: arg });
  }
  perspective(arg: CSSObject['perspective']) {
    return this.css({ perspective: arg });
  }
  perspectiveOrigin(arg: CSSObject['perspectiveOrigin']) {
    return this.css({ perspectiveOrigin: arg });
  }
  pointerEvents(arg: CSSObject['pointerEvents']) {
    return this.css({ pointerEvents: arg });
  }
  position(arg: CSSObject['position']) {
    return this.css({ position: arg });
  }
  quotes(arg: CSSObject['quotes']) {
    return this.css({ quotes: arg });
  }
  resize(arg: CSSObject['resize']) {
    return this.css({ resize: arg });
  }
  right(arg: CSSObject['right']) {
    return this.css({ right: arg });
  }
  scrollBehavior(arg: CSSObject['scrollBehavior']) {
    return this.css({ scrollBehavior: arg });
  }
  tabSize(arg: CSSObject['tabSize']) {
    return this.css({ tabSize: arg });
  }
  tableLayout(arg: CSSObject['tableLayout']) {
    return this.css({ tableLayout: arg });
  }
  textAlign(arg: CSSObject['textAlign']) {
    return this.css({ textAlign: arg });
  }
  textAlignLast(arg: CSSObject['textAlignLast']) {
    return this.css({ textAlignLast: arg });
  }
  textDecoration(arg: CSSObject['textDecoration']) {
    return this.css({ textDecoration: arg });
  }
  textDecorationColor(arg: CSSObject['textDecorationColor']) {
    return this.css({ textDecorationColor: arg });
  }
  textDecorationLine(arg: CSSObject['textDecorationLine']) {
    return this.css({ textDecorationLine: arg });
  }
  textDecorationStyle(arg: CSSObject['textDecorationStyle']) {
    return this.css({ textDecorationStyle: arg });
  }
  textIndent(arg: CSSObject['textIndent']) {
    return this.css({ textIndent: arg });
  }
  textJustify(arg: CSSObject['textJustify']) {
    return this.css({ textJustify: arg });
  }
  textOverflow(arg: CSSObject['textOverflow']) {
    return this.css({ textOverflow: arg });
  }
  textShadow(arg: CSSObject['textShadow']) {
    return this.css({ textShadow: arg });
  }
  textTransform(arg: CSSObject['textTransform']) {
    return this.css({ textTransform: arg });
  }
  top(arg: CSSObject['top']) {
    return this.css({ top: arg });
  }
  transform(arg: CSSObject['transform']) {
    return this.css({ transform: arg });
  }
  transformOrigin(arg: CSSObject['transformOrigin']) {
    return this.css({ transformOrigin: arg });
  }
  transformStyle(arg: CSSObject['transformStyle']) {
    return this.css({ transformStyle: arg });
  }
  transition(arg: CSSObject['transition']) {
    return this.css({ transition: arg });
  }
  transitionDelay(arg: CSSObject['transitionDelay']) {
    return this.css({ transitionDelay: arg });
  }
  transitionDuration(arg: CSSObject['transitionDuration']) {
    return this.css({ transitionDuration: arg });
  }
  transitionProperty(arg: CSSObject['transitionProperty']) {
    return this.css({ transitionProperty: arg });
  }
  transitionTimingFunction(arg: CSSObject['transitionTimingFunction']) {
    return this.css({ transitionTimingFunction: arg });
  }
  unicodeBidi(arg: CSSObject['unicodeBidi']) {
    return this.css({ unicodeBidi: arg });
  }
  userSelect(arg: CSSObject['userSelect']) {
    return this.css({ userSelect: arg });
  }
  verticalAlign(arg: CSSObject['verticalAlign']) {
    return this.css({ verticalAlign: arg });
  }
  visibility(arg: CSSObject['visibility']) {
    return this.css({ visibility: arg });
  }
  whiteSpace(arg: CSSObject['whiteSpace']) {
    return this.css({ whiteSpace: arg });
  }
  width(arg: CSSObject['width']) {
    return this.css({ width: arg });
  }
  wordBreak(arg: CSSObject['wordBreak']) {
    return this.css({ wordBreak: arg });
  }
  wordSpacing(arg: CSSObject['wordSpacing']) {
    return this.css({ wordSpacing: arg });
  }
  wordWrap(arg: CSSObject['wordWrap']) {
    return this.css({ wordWrap: arg });
  }
  writingMode(arg: CSSObject['writingMode']) {
    return this.css({ writingMode: arg });
  }
  zIndex(arg: CSSObject['zIndex']) {
    return this.css({ zIndex: arg });
  }
}
