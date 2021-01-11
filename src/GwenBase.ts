import { css, ObjectInterpolation } from 'emotion';
import hash from 'object-hash';
type CssArgs = Parameters<typeof css>;
type CSS = ObjectInterpolation<undefined>;

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
  alignContent(arg: CSS['alignContent']) {
    return this.css({ alignContent: arg });
  }
  alignItems(arg: CSS['alignItems']) {
    return this.css({ alignItems: arg });
  }
  alignSelf(arg: CSS['alignSelf']) {
    return this.css({ alignSelf: arg });
  }
  all(arg: CSS['all']) {
    return this.css({ all: arg });
  }
  animation(arg: CSS['animation']) {
    return this.css({ animation: arg });
  }
  animationDelay(arg: CSS['animationDelay']) {
    return this.css({ animationDelay: arg });
  }
  animationDirection(arg: CSS['animationDirection']) {
    return this.css({ animationDirection: arg });
  }
  animationDuration(arg: CSS['animationDuration']) {
    return this.css({ animationDuration: arg });
  }
  animationFillMode(arg: CSS['animationFillMode']) {
    return this.css({ animationFillMode: arg });
  }
  animationIterationCount(arg: CSS['animationIterationCount']) {
    return this.css({ animationIterationCount: arg });
  }
  animationName(arg: CSS['animationName']) {
    return this.css({ animationName: arg });
  }
  animationPlayState(arg: CSS['animationPlayState']) {
    return this.css({ animationPlayState: arg });
  }
  animationTimingFunction(arg: CSS['animationTimingFunction']) {
    return this.css({ animationTimingFunction: arg });
  }
  backfaceVisibility(arg: CSS['backfaceVisibility']) {
    return this.css({ backfaceVisibility: arg });
  }
  background(arg: CSS['background']) {
    return this.css({ background: arg });
  }
  backgroundAttachment(arg: CSS['backgroundAttachment']) {
    return this.css({ backgroundAttachment: arg });
  }
  backgroundBlendMode(arg: CSS['backgroundBlendMode']) {
    return this.css({ backgroundBlendMode: arg });
  }
  backgroundClip(arg: CSS['backgroundClip']) {
    return this.css({ backgroundClip: arg });
  }
  backgroundColor(arg: CSS['backgroundColor']) {
    return this.css({ backgroundColor: arg });
  }
  backgroundImage(arg: CSS['backgroundImage']) {
    return this.css({ backgroundImage: arg });
  }
  backgroundOrigin(arg: CSS['backgroundOrigin']) {
    return this.css({ backgroundOrigin: arg });
  }
  backgroundPosition(arg: CSS['backgroundPosition']) {
    return this.css({ backgroundPosition: arg });
  }
  backgroundRepeat(arg: CSS['backgroundRepeat']) {
    return this.css({ backgroundRepeat: arg });
  }
  backgroundSize(arg: CSS['backgroundSize']) {
    return this.css({ backgroundSize: arg });
  }
  border(arg: CSS['border']) {
    return this.css({ border: arg });
  }
  borderBottom(arg: CSS['borderBottom']) {
    return this.css({ borderBottom: arg });
  }
  borderBottomColor(arg: CSS['borderBottomColor']) {
    return this.css({ borderBottomColor: arg });
  }
  borderBottomLeftRadius(arg: CSS['borderBottomLeftRadius']) {
    return this.css({ borderBottomLeftRadius: arg });
  }
  borderBottomRightRadius(arg: CSS['borderBottomRightRadius']) {
    return this.css({ borderBottomRightRadius: arg });
  }
  borderBottomStyle(arg: CSS['borderBottomStyle']) {
    return this.css({ borderBottomStyle: arg });
  }
  borderBottomWidth(arg: CSS['borderBottomWidth']) {
    return this.css({ borderBottomWidth: arg });
  }
  borderCollapse(arg: CSS['borderCollapse']) {
    return this.css({ borderCollapse: arg });
  }
  borderColor(arg: CSS['borderColor']) {
    return this.css({ borderColor: arg });
  }
  borderImage(arg: CSS['borderImage']) {
    return this.css({ borderImage: arg });
  }
  borderImageOutset(arg: CSS['borderImageOutset']) {
    return this.css({ borderImageOutset: arg });
  }
  borderImageRepeat(arg: CSS['borderImageRepeat']) {
    return this.css({ borderImageRepeat: arg });
  }
  borderImageSlice(arg: CSS['borderImageSlice']) {
    return this.css({ borderImageSlice: arg });
  }
  borderImageSource(arg: CSS['borderImageSource']) {
    return this.css({ borderImageSource: arg });
  }
  borderImageWidth(arg: CSS['borderImageWidth']) {
    return this.css({ borderImageWidth: arg });
  }
  borderLeft(arg: CSS['borderLeft']) {
    return this.css({ borderLeft: arg });
  }
  borderLeftColor(arg: CSS['borderLeftColor']) {
    return this.css({ borderLeftColor: arg });
  }
  borderLeftStyle(arg: CSS['borderLeftStyle']) {
    return this.css({ borderLeftStyle: arg });
  }
  borderLeftWidth(arg: CSS['borderLeftWidth']) {
    return this.css({ borderLeftWidth: arg });
  }
  borderRadius(arg: CSS['borderRadius']) {
    return this.css({ borderRadius: arg });
  }
  borderRight(arg: CSS['borderRight']) {
    return this.css({ borderRight: arg });
  }
  borderRightColor(arg: CSS['borderRightColor']) {
    return this.css({ borderRightColor: arg });
  }
  borderRightStyle(arg: CSS['borderRightStyle']) {
    return this.css({ borderRightStyle: arg });
  }
  borderRightWidth(arg: CSS['borderRightWidth']) {
    return this.css({ borderRightWidth: arg });
  }
  borderSpacing(arg: CSS['borderSpacing']) {
    return this.css({ borderSpacing: arg });
  }
  borderStyle(arg: CSS['borderStyle']) {
    return this.css({ borderStyle: arg });
  }
  borderTop(arg: CSS['borderTop']) {
    return this.css({ borderTop: arg });
  }
  borderTopColor(arg: CSS['borderTopColor']) {
    return this.css({ borderTopColor: arg });
  }
  borderTopLeftRadius(arg: CSS['borderTopLeftRadius']) {
    return this.css({ borderTopLeftRadius: arg });
  }
  borderTopRightRadius(arg: CSS['borderTopRightRadius']) {
    return this.css({ borderTopRightRadius: arg });
  }
  borderTopStyle(arg: CSS['borderTopStyle']) {
    return this.css({ borderTopStyle: arg });
  }
  borderTopWidth(arg: CSS['borderTopWidth']) {
    return this.css({ borderTopWidth: arg });
  }
  borderWidth(arg: CSS['borderWidth']) {
    return this.css({ borderWidth: arg });
  }
  bottom(arg: CSS['bottom']) {
    return this.css({ bottom: arg });
  }
  boxDecorationBreak(arg: CSS['boxDecorationBreak']) {
    return this.css({ boxDecorationBreak: arg });
  }
  boxShadow(arg: CSS['boxShadow']) {
    return this.css({ boxShadow: arg });
  }
  boxSizing(arg: CSS['boxSizing']) {
    return this.css({ boxSizing: arg });
  }
  breakAfter(arg: CSS['breakAfter']) {
    return this.css({ breakAfter: arg });
  }
  breakBefore(arg: CSS['breakBefore']) {
    return this.css({ breakBefore: arg });
  }
  breakInside(arg: CSS['breakInside']) {
    return this.css({ breakInside: arg });
  }
  captionSide(arg: CSS['captionSide']) {
    return this.css({ captionSide: arg });
  }
  caretColor(arg: CSS['caretColor']) {
    return this.css({ caretColor: arg });
  }
  cha(arg: CSS['charSet']) {
    return this.css({ cha: arg });
  }
  clear(arg: CSS['clear']) {
    return this.css({ clear: arg });
  }
  clip(arg: CSS['clip']) {
    return this.css({ clip: arg });
  }
  clipPath(arg: CSS['clipPath']) {
    return this.css({ clipPath: arg });
  }
  color(arg: CSS['color']) {
    return this.css({ color: arg });
  }
  columnCount(arg: CSS['columnCount']) {
    return this.css({ columnCount: arg });
  }
  columnFill(arg: CSS['columnFill']) {
    return this.css({ columnFill: arg });
  }
  columnGap(arg: CSS['columnGap']) {
    return this.css({ columnGap: arg });
  }
  columnRule(arg: CSS['columnRule']) {
    return this.css({ columnRule: arg });
  }
  columnRuleColor(arg: CSS['columnRuleColor']) {
    return this.css({ columnRuleColor: arg });
  }
  columnRuleStyle(arg: CSS['columnRuleStyle']) {
    return this.css({ columnRuleStyle: arg });
  }
  columnRuleWidth(arg: CSS['columnRuleWidth']) {
    return this.css({ columnRuleWidth: arg });
  }
  columnSpan(arg: CSS['columnSpan']) {
    return this.css({ columnSpan: arg });
  }
  columnWidth(arg: CSS['columnWidth']) {
    return this.css({ columnWidth: arg });
  }
  columns(arg: CSS['columns']) {
    return this.css({ columns: arg });
  }
  content(arg: CSS['content']) {
    return this.css({ content: arg });
  }
  counterIncrement(arg: CSS['counterIncrement']) {
    return this.css({ counterIncrement: arg });
  }
  counterReset(arg: CSS['counterReset']) {
    return this.css({ counterReset: arg });
  }
  cursor(arg: CSS['cursor']) {
    return this.css({ cursor: arg });
  }
  direction(arg: CSS['direction']) {
    return this.css({ direction: arg });
  }
  display(arg: CSS['display']) {
    return this.css({ display: arg });
  }
  emptyCells(arg: CSS['emptyCells']) {
    return this.css({ emptyCells: arg });
  }
  filter(arg: CSS['filter']) {
    return this.css({ filter: arg });
  }
  flex(arg: CSS['flex']) {
    return this.css({ flex: arg });
  }
  flexBasis(arg: CSS['flexBasis']) {
    return this.css({ flexBasis: arg });
  }
  flexDirection(arg: CSS['flexDirection']) {
    return this.css({ flexDirection: arg });
  }
  flexFlow(arg: CSS['flexFlow']) {
    return this.css({ flexFlow: arg });
  }
  flexGrow(arg: CSS['flexGrow']) {
    return this.css({ flexGrow: arg });
  }
  flexShrink(arg: CSS['flexShrink']) {
    return this.css({ flexShrink: arg });
  }
  flexWrap(arg: CSS['flexWrap']) {
    return this.css({ flexWrap: arg });
  }
  float(arg: CSS['float']) {
    return this.css({ float: arg });
  }
  font(arg: CSS['font']) {
    return this.css({ font: arg });
  }
  fontFace(arg: CSS['fontFace']) {
    return this.css({ fontFace: arg });
  }
  fontFamily(arg: CSS['fontFamily']) {
    return this.css({ fontFamily: arg });
  }
  fontFeatureSettings(arg: CSS['fontFeatureSettings']) {
    return this.css({ fontFeatureSettings: arg });
  }
  fontKerning(arg: CSS['fontKerning']) {
    return this.css({ fontKerning: arg });
  }
  fontSize(arg: CSS['fontSize']) {
    return this.css({ fontSize: arg });
  }
  fontSizeAdjust(arg: CSS['fontSizeAdjust']) {
    return this.css({ fontSizeAdjust: arg });
  }
  fontStretch(arg: CSS['fontStretch']) {
    return this.css({ fontStretch: arg });
  }
  fontStyle(arg: CSS['fontStyle']) {
    return this.css({ fontStyle: arg });
  }
  fontVariant(arg: CSS['fontVariant']) {
    return this.css({ fontVariant: arg });
  }
  fontVariantCaps(arg: CSS['fontVariantCaps']) {
    return this.css({ fontVariantCaps: arg });
  }
  fontWeight(arg: CSS['fontWeight']) {
    return this.css({ fontWeight: arg });
  }
  grid(arg: CSS['grid']) {
    return this.css({ grid: arg });
  }
  gridArea(arg: CSS['gridArea']) {
    return this.css({ gridArea: arg });
  }
  gridAutoColumns(arg: CSS['gridAutoColumns']) {
    return this.css({ gridAutoColumns: arg });
  }
  gridAutoFlow(arg: CSS['gridAutoFlow']) {
    return this.css({ gridAutoFlow: arg });
  }
  gridAutoRows(arg: CSS['gridAutoRows']) {
    return this.css({ gridAutoRows: arg });
  }
  gridColumn(arg: CSS['gridColumn']) {
    return this.css({ gridColumn: arg });
  }
  gridColumnEnd(arg: CSS['gridColumnEnd']) {
    return this.css({ gridColumnEnd: arg });
  }
  gridColumnGap(arg: CSS['gridColumnGap']) {
    return this.css({ gridColumnGap: arg });
  }
  gridColumnStart(arg: CSS['gridColumnStart']) {
    return this.css({ gridColumnStart: arg });
  }
  gridGap(arg: CSS['gridGap']) {
    return this.css({ gridGap: arg });
  }
  gridRow(arg: CSS['gridRow']) {
    return this.css({ gridRow: arg });
  }
  gridRowEnd(arg: CSS['gridRowEnd']) {
    return this.css({ gridRowEnd: arg });
  }
  gridRowGap(arg: CSS['gridRowGap']) {
    return this.css({ gridRowGap: arg });
  }
  gridRowStart(arg: CSS['gridRowStart']) {
    return this.css({ gridRowStart: arg });
  }
  gridTemplate(arg: CSS['gridTemplate']) {
    return this.css({ gridTemplate: arg });
  }
  gridTemplateAreas(arg: CSS['gridTemplateAreas']) {
    return this.css({ gridTemplateAreas: arg });
  }
  gridTemplateColumns(arg: CSS['gridTemplateColumns']) {
    return this.css({ gridTemplateColumns: arg });
  }
  gridTemplateRows(arg: CSS['gridTemplateRows']) {
    return this.css({ gridTemplateRows: arg });
  }
  hangingPunctuation(arg: CSS['hangingPunctuation']) {
    return this.css({ hangingPunctuation: arg });
  }
  height(arg: CSS['height']) {
    return this.css({ height: arg });
  }
  hyphens(arg: CSS['hyphens']) {
    return this.css({ hyphens: arg });
  }
  isolation(arg: CSS['isolation']) {
    return this.css({ isolation: arg });
  }
  justifyContent(arg: CSS['justifyContent']) {
    return this.css({ justifyContent: arg });
  }
  left(arg: CSS['left']) {
    return this.css({ left: arg });
  }
  letterSpacing(arg: CSS['letterSpacing']) {
    return this.css({ letterSpacing: arg });
  }
  lineHeight(arg: CSS['lineHeight']) {
    return this.css({ lineHeight: arg });
  }
  listStyle(arg: CSS['listStyle']) {
    return this.css({ listStyle: arg });
  }
  listStyleImage(arg: CSS['listStyleImage']) {
    return this.css({ listStyleImage: arg });
  }
  listStylePosition(arg: CSS['listStylePosition']) {
    return this.css({ listStylePosition: arg });
  }
  listStyleType(arg: CSS['listStyleType']) {
    return this.css({ listStyleType: arg });
  }
  margin(arg: CSS['margin']) {
    return this.css({ margin: arg });
  }
  marginBottom(arg: CSS['marginBottom']) {
    return this.css({ marginBottom: arg });
  }
  marginLeft(arg: CSS['marginLeft']) {
    return this.css({ marginLeft: arg });
  }
  marginRight(arg: CSS['marginRight']) {
    return this.css({ marginRight: arg });
  }
  marginTop(arg: CSS['marginTop']) {
    return this.css({ marginTop: arg });
  }
  maxHeight(arg: CSS['maxHeight']) {
    return this.css({ maxHeight: arg });
  }
  maxWidth(arg: CSS['maxWidth']) {
    return this.css({ maxWidth: arg });
  }
  minHeight(arg: CSS['minHeight']) {
    return this.css({ minHeight: arg });
  }
  minWidth(arg: CSS['minWidth']) {
    return this.css({ minWidth: arg });
  }
  mixBlendMode(arg: CSS['mixBlendMode']) {
    return this.css({ mixBlendMode: arg });
  }
  objectFit(arg: CSS['objectFit']) {
    return this.css({ objectFit: arg });
  }
  objectPosition(arg: CSS['objectPosition']) {
    return this.css({ objectPosition: arg });
  }
  opacity(arg: CSS['opacity']) {
    return this.css({ opacity: arg });
  }
  order(arg: CSS['order']) {
    return this.css({ order: arg });
  }
  outline(arg: CSS['outline']) {
    return this.css({ outline: arg });
  }
  outlineColor(arg: CSS['outlineColor']) {
    return this.css({ outlineColor: arg });
  }
  outlineOffset(arg: CSS['outlineOffset']) {
    return this.css({ outlineOffset: arg });
  }
  outlineStyle(arg: CSS['outlineStyle']) {
    return this.css({ outlineStyle: arg });
  }
  outlineWidth(arg: CSS['outlineWidth']) {
    return this.css({ outlineWidth: arg });
  }
  overflow(arg: CSS['overflow']) {
    return this.css({ overflow: arg });
  }
  overflowX(arg: CSS['overflowX']) {
    return this.css({ overflowX: arg });
  }
  overflowY(arg: CSS['overflowY']) {
    return this.css({ overflowY: arg });
  }
  padding(arg: CSS['padding']) {
    return this.css({ padding: arg });
  }
  paddingBottom(arg: CSS['paddingBottom']) {
    return this.css({ paddingBottom: arg });
  }
  paddingLeft(arg: CSS['paddingLeft']) {
    return this.css({ paddingLeft: arg });
  }
  paddingRight(arg: CSS['paddingRight']) {
    return this.css({ paddingRight: arg });
  }
  paddingTop(arg: CSS['paddingTop']) {
    return this.css({ paddingTop: arg });
  }
  pageBreakAfter(arg: CSS['pageBreakAfter']) {
    return this.css({ pageBreakAfter: arg });
  }
  pageBreakBefore(arg: CSS['pageBreakBefore']) {
    return this.css({ pageBreakBefore: arg });
  }
  pageBreakInside(arg: CSS['pageBreakInside']) {
    return this.css({ pageBreakInside: arg });
  }
  perspective(arg: CSS['perspective']) {
    return this.css({ perspective: arg });
  }
  perspectiveOrigin(arg: CSS['perspectiveOrigin']) {
    return this.css({ perspectiveOrigin: arg });
  }
  pointerEvents(arg: CSS['pointerEvents']) {
    return this.css({ pointerEvents: arg });
  }
  position(arg: CSS['position']) {
    return this.css({ position: arg });
  }
  quotes(arg: CSS['quotes']) {
    return this.css({ quotes: arg });
  }
  resize(arg: CSS['resize']) {
    return this.css({ resize: arg });
  }
  right(arg: CSS['right']) {
    return this.css({ right: arg });
  }
  scrollBehavior(arg: CSS['scrollBehavior']) {
    return this.css({ scrollBehavior: arg });
  }
  tabSize(arg: CSS['tabSize']) {
    return this.css({ tabSize: arg });
  }
  tableLayout(arg: CSS['tableLayout']) {
    return this.css({ tableLayout: arg });
  }
  textAlign(arg: CSS['textAlign']) {
    return this.css({ textAlign: arg });
  }
  textAlignLast(arg: CSS['textAlignLast']) {
    return this.css({ textAlignLast: arg });
  }
  textDecoration(arg: CSS['textDecoration']) {
    return this.css({ textDecoration: arg });
  }
  textDecorationColor(arg: CSS['textDecorationColor']) {
    return this.css({ textDecorationColor: arg });
  }
  textDecorationLine(arg: CSS['textDecorationLine']) {
    return this.css({ textDecorationLine: arg });
  }
  textDecorationStyle(arg: CSS['textDecorationStyle']) {
    return this.css({ textDecorationStyle: arg });
  }
  textIndent(arg: CSS['textIndent']) {
    return this.css({ textIndent: arg });
  }
  textJustify(arg: CSS['textJustify']) {
    return this.css({ textJustify: arg });
  }
  textOverflow(arg: CSS['textOverflow']) {
    return this.css({ textOverflow: arg });
  }
  textShadow(arg: CSS['textShadow']) {
    return this.css({ textShadow: arg });
  }
  textTransform(arg: CSS['textTransform']) {
    return this.css({ textTransform: arg });
  }
  top(arg: CSS['top']) {
    return this.css({ top: arg });
  }
  transform(arg: CSS['transform']) {
    return this.css({ transform: arg });
  }
  transformOrigin(arg: CSS['transformOrigin']) {
    return this.css({ transformOrigin: arg });
  }
  transformStyle(arg: CSS['transformStyle']) {
    return this.css({ transformStyle: arg });
  }
  transition(arg: CSS['transition']) {
    return this.css({ transition: arg });
  }
  transitionDelay(arg: CSS['transitionDelay']) {
    return this.css({ transitionDelay: arg });
  }
  transitionDuration(arg: CSS['transitionDuration']) {
    return this.css({ transitionDuration: arg });
  }
  transitionProperty(arg: CSS['transitionProperty']) {
    return this.css({ transitionProperty: arg });
  }
  transitionTimingFunction(arg: CSS['transitionTimingFunction']) {
    return this.css({ transitionTimingFunction: arg });
  }
  unicodeBidi(arg: CSS['unicodeBidi']) {
    return this.css({ unicodeBidi: arg });
  }
  userSelect(arg: CSS['userSelect']) {
    return this.css({ userSelect: arg });
  }
  verticalAlign(arg: CSS['verticalAlign']) {
    return this.css({ verticalAlign: arg });
  }
  visibility(arg: CSS['visibility']) {
    return this.css({ visibility: arg });
  }
  whiteSpace(arg: CSS['whiteSpace']) {
    return this.css({ whiteSpace: arg });
  }
  width(arg: CSS['width']) {
    return this.css({ width: arg });
  }
  wordBreak(arg: CSS['wordBreak']) {
    return this.css({ wordBreak: arg });
  }
  wordSpacing(arg: CSS['wordSpacing']) {
    return this.css({ wordSpacing: arg });
  }
  wordWrap(arg: CSS['wordWrap']) {
    return this.css({ wordWrap: arg });
  }
  writingMode(arg: CSS['writingMode']) {
    return this.css({ writingMode: arg });
  }
  zIndex(arg: CSS['zIndex']) {
    return this.css({ zIndex: arg });
  }
}
