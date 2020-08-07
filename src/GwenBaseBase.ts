import { css, cx, ObjectInterpolation } from 'emotion';

type CssArgs = Parameters<typeof css>;
type CSS = ObjectInterpolation<undefined>;
type CxArgs = Parameters<typeof cx>;

export type GwenTheme = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  sansFont: string;
  serifFont: string;
};

type GwenParams = {
  cxArray: CxArgs;
};

const flattenArg = (arg: any) => {
  let allArgs: GwenBaseBase[] = [];

  if (arg instanceof GwenBaseBase) {
    allArgs.push(arg);
  } else if (Array.isArray(arg)) {
    for (const item of arg) {
      allArgs = [...allArgs, ...flattenArg(item)];
    }
    // allArgs = [...allArgs, ...flattenArgs(arg)];
  } else if (typeof arg === 'object') {
    for (const k in arg) {
      allArgs = [...allArgs, ...flattenArg(arg[k])];
    }
  }

  return allArgs;
};

export class GwenBaseBase {
  protected defaultTheme: GwenTheme = {
    xs: '420px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    sansFont: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    serifFont: `Georgia, Cambria, "Times New Roman", Times, serif`,
  };
  // theme: Partial<GwenTheme> = {};

  protected theme: GwenTheme;
  protected params: GwenParams;

  constructor(theme: Partial<GwenTheme> = {}, params: GwenParams = { cxArray: [] }) {
    this.params = params;
    this.theme = {
      ...this.defaultTheme,
      ...theme,
      sansFont: `"${theme.sansFont}", ${this.defaultTheme.sansFont}`,
      serifFont: `"${theme.serifFont}", ${this.defaultTheme.serifFont}`,
    };
  }

  get class() {
    return cx(...this.params.cxArray);
  }

  static css = css;
  static cx = cx;

  // protected _update = (...args: CxArgs) => {
  //   this.className = cx(this.className, ...args);
  //   return this;
  // };

  css = (...args: CssArgs): this => {
    return new (this as any).constructor({
      ...this.params,
      cxArray: [...this.params.cxArray, css(...args)],
    });
  };

  cx = (...args: CxArgs): this => {
    return new (this as any).constructor({
      ...this.params,
      cxArray: [...this.params.cxArray, ...args],
    });
    // return this._update(cx(...args));
  };

  mix = (...args: (GwenBaseBase | GwenBaseBase[])[]): this => {
    let allArgs: any = [];
    for (const arg of args) {
      if (arg instanceof GwenBaseBase) {
        allArgs.push(arg);
      } else if (Array.isArray(arg)) {
        allArgs = [...allArgs, ...arg];
      }
    }
    return this.cx(...flattenArg(args).map(x => x.class));
  };

  alignContent = (arg: CSS['alignContent']) => this.css({ alignContent: arg });
  alignItems = (arg: CSS['alignItems']) => this.css({ alignItems: arg });
  alignSelf = (arg: CSS['alignSelf']) => this.css({ alignSelf: arg });
  all = (arg: CSS['all']) => this.css({ all: arg });
  animation = (arg: CSS['animation']) => this.css({ animation: arg });
  animationDelay = (arg: CSS['animationDelay']) => this.css({ animationDelay: arg });
  animationDirection = (arg: CSS['animationDirection']) => this.css({ animationDirection: arg });
  animationDuration = (arg: CSS['animationDuration']) => this.css({ animationDuration: arg });
  animationFillMode = (arg: CSS['animationFillMode']) => this.css({ animationFillMode: arg });
  animationIterationCount = (arg: CSS['animationIterationCount']) => this.css({ animationIterationCount: arg });
  animationName = (arg: CSS['animationName']) => this.css({ animationName: arg });
  animationPlayState = (arg: CSS['animationPlayState']) => this.css({ animationPlayState: arg });
  animationTimingFunction = (arg: CSS['animationTimingFunction']) => this.css({ animationTimingFunction: arg });
  backfaceVisibility = (arg: CSS['backfaceVisibility']) => this.css({ backfaceVisibility: arg });
  background = (arg: CSS['background']) => this.css({ background: arg });
  backgroundAttachment = (arg: CSS['backgroundAttachment']) => this.css({ backgroundAttachment: arg });
  backgroundBlendMode = (arg: CSS['backgroundBlendMode']) => this.css({ backgroundBlendMode: arg });
  backgroundClip = (arg: CSS['backgroundClip']) => this.css({ backgroundClip: arg });
  backgroundColor = (arg: CSS['backgroundColor']) => this.css({ backgroundColor: arg });
  backgroundImage = (arg: CSS['backgroundImage']) => this.css({ backgroundImage: arg });
  backgroundOrigin = (arg: CSS['backgroundOrigin']) => this.css({ backgroundOrigin: arg });
  backgroundPosition = (arg: CSS['backgroundPosition']) => this.css({ backgroundPosition: arg });
  backgroundRepeat = (arg: CSS['backgroundRepeat']) => this.css({ backgroundRepeat: arg });
  backgroundSize = (arg: CSS['backgroundSize']) => this.css({ backgroundSize: arg });
  border = (arg: CSS['border']) => this.css({ border: arg });
  borderBottom = (arg: CSS['borderBottom']) => this.css({ borderBottom: arg });
  borderBottomColor = (arg: CSS['borderBottomColor']) => this.css({ borderBottomColor: arg });
  borderBottomLeftRadius = (arg: CSS['borderBottomLeftRadius']) => this.css({ borderBottomLeftRadius: arg });
  borderBottomRightRadius = (arg: CSS['borderBottomRightRadius']) => this.css({ borderBottomRightRadius: arg });
  borderBottomStyle = (arg: CSS['borderBottomStyle']) => this.css({ borderBottomStyle: arg });
  borderBottomWidth = (arg: CSS['borderBottomWidth']) => this.css({ borderBottomWidth: arg });
  borderCollapse = (arg: CSS['borderCollapse']) => this.css({ borderCollapse: arg });
  borderColor = (arg: CSS['borderColor']) => this.css({ borderColor: arg });
  borderImage = (arg: CSS['borderImage']) => this.css({ borderImage: arg });
  borderImageOutset = (arg: CSS['borderImageOutset']) => this.css({ borderImageOutset: arg });
  borderImageRepeat = (arg: CSS['borderImageRepeat']) => this.css({ borderImageRepeat: arg });
  borderImageSlice = (arg: CSS['borderImageSlice']) => this.css({ borderImageSlice: arg });
  borderImageSource = (arg: CSS['borderImageSource']) => this.css({ borderImageSource: arg });
  borderImageWidth = (arg: CSS['borderImageWidth']) => this.css({ borderImageWidth: arg });
  borderLeft = (arg: CSS['borderLeft']) => this.css({ borderLeft: arg });
  borderLeftColor = (arg: CSS['borderLeftColor']) => this.css({ borderLeftColor: arg });
  borderLeftStyle = (arg: CSS['borderLeftStyle']) => this.css({ borderLeftStyle: arg });
  borderLeftWidth = (arg: CSS['borderLeftWidth']) => this.css({ borderLeftWidth: arg });
  borderRadius = (arg: CSS['borderRadius']) => this.css({ borderRadius: arg });
  borderRight = (arg: CSS['borderRight']) => this.css({ borderRight: arg });
  borderRightColor = (arg: CSS['borderRightColor']) => this.css({ borderRightColor: arg });
  borderRightStyle = (arg: CSS['borderRightStyle']) => this.css({ borderRightStyle: arg });
  borderRightWidth = (arg: CSS['borderRightWidth']) => this.css({ borderRightWidth: arg });
  borderSpacing = (arg: CSS['borderSpacing']) => this.css({ borderSpacing: arg });
  borderStyle = (arg: CSS['borderStyle']) => this.css({ borderStyle: arg });
  borderTop = (arg: CSS['borderTop']) => this.css({ borderTop: arg });
  borderTopColor = (arg: CSS['borderTopColor']) => this.css({ borderTopColor: arg });
  borderTopLeftRadius = (arg: CSS['borderTopLeftRadius']) => this.css({ borderTopLeftRadius: arg });
  borderTopRightRadius = (arg: CSS['borderTopRightRadius']) => this.css({ borderTopRightRadius: arg });
  borderTopStyle = (arg: CSS['borderTopStyle']) => this.css({ borderTopStyle: arg });
  borderTopWidth = (arg: CSS['borderTopWidth']) => this.css({ borderTopWidth: arg });
  borderWidth = (arg: CSS['borderWidth']) => this.css({ borderWidth: arg });
  bottom = (arg: CSS['bottom']) => this.css({ bottom: arg });
  boxDecorationBreak = (arg: CSS['boxDecorationBreak']) => this.css({ boxDecorationBreak: arg });
  boxShadow = (arg: CSS['boxShadow']) => this.css({ boxShadow: arg });
  boxSizing = (arg: CSS['boxSizing']) => this.css({ boxSizing: arg });
  breakAfter = (arg: CSS['breakAfter']) => this.css({ breakAfter: arg });
  breakBefore = (arg: CSS['breakBefore']) => this.css({ breakBefore: arg });
  breakInside = (arg: CSS['breakInside']) => this.css({ breakInside: arg });
  captionSide = (arg: CSS['captionSide']) => this.css({ captionSide: arg });
  caretColor = (arg: CSS['caretColor']) => this.css({ caretColor: arg });
  cha = (arg: CSS['charSet']) => this.css({ cha: arg });
  clear = (arg: CSS['clear']) => this.css({ clear: arg });
  clip = (arg: CSS['clip']) => this.css({ clip: arg });
  clipPath = (arg: CSS['clipPath']) => this.css({ clipPath: arg });
  color = (arg: CSS['color']) => this.css({ color: arg });
  columnCount = (arg: CSS['columnCount']) => this.css({ columnCount: arg });
  columnFill = (arg: CSS['columnFill']) => this.css({ columnFill: arg });
  columnGap = (arg: CSS['columnGap']) => this.css({ columnGap: arg });
  columnRule = (arg: CSS['columnRule']) => this.css({ columnRule: arg });
  columnRuleColor = (arg: CSS['columnRuleColor']) => this.css({ columnRuleColor: arg });
  columnRuleStyle = (arg: CSS['columnRuleStyle']) => this.css({ columnRuleStyle: arg });
  columnRuleWidth = (arg: CSS['columnRuleWidth']) => this.css({ columnRuleWidth: arg });
  columnSpan = (arg: CSS['columnSpan']) => this.css({ columnSpan: arg });
  columnWidth = (arg: CSS['columnWidth']) => this.css({ columnWidth: arg });
  columns = (arg: CSS['columns']) => this.css({ columns: arg });
  content = (arg: CSS['content']) => this.css({ content: arg });
  counterIncrement = (arg: CSS['counterIncrement']) => this.css({ counterIncrement: arg });
  counterReset = (arg: CSS['counterReset']) => this.css({ counterReset: arg });
  cursor = (arg: CSS['cursor']) => this.css({ cursor: arg });
  direction = (arg: CSS['direction']) => this.css({ direction: arg });
  display = (arg: CSS['display']) => this.css({ display: arg });
  emptyCells = (arg: CSS['emptyCells']) => this.css({ emptyCells: arg });
  filter = (arg: CSS['filter']) => this.css({ filter: arg });
  flex = (arg: CSS['flex']) => this.css({ flex: arg });
  flexBasis = (arg: CSS['flexBasis']) => this.css({ flexBasis: arg });
  flexDirection = (arg: CSS['flexDirection']) => this.css({ flexDirection: arg });
  flexFlow = (arg: CSS['flexFlow']) => this.css({ flexFlow: arg });
  flexGrow = (arg: CSS['flexGrow']) => this.css({ flexGrow: arg });
  flexShrink = (arg: CSS['flexShrink']) => this.css({ flexShrink: arg });
  flexWrap = (arg: CSS['flexWrap']) => this.css({ flexWrap: arg });
  float = (arg: CSS['float']) => this.css({ float: arg });
  font = (arg: CSS['font']) => this.css({ font: arg });
  fontFace = (arg: CSS['fontFace']) => this.css({ fontFace: arg });
  fontFamily = (arg: CSS['fontFamily']) => this.css({ fontFamily: arg });
  fontFeatureSettings = (arg: CSS['fontFeatureSettings']) => this.css({ fontFeatureSettings: arg });
  fontKerning = (arg: CSS['fontKerning']) => this.css({ fontKerning: arg });
  fontSize = (arg: CSS['fontSize']) => this.css({ fontSize: arg });
  fontSizeAdjust = (arg: CSS['fontSizeAdjust']) => this.css({ fontSizeAdjust: arg });
  fontStretch = (arg: CSS['fontStretch']) => this.css({ fontStretch: arg });
  fontStyle = (arg: CSS['fontStyle']) => this.css({ fontStyle: arg });
  fontVariant = (arg: CSS['fontVariant']) => this.css({ fontVariant: arg });
  fontVariantCaps = (arg: CSS['fontVariantCaps']) => this.css({ fontVariantCaps: arg });
  fontWeight = (arg: CSS['fontWeight']) => this.css({ fontWeight: arg });
  grid = (arg: CSS['grid']) => this.css({ grid: arg });
  gridArea = (arg: CSS['gridArea']) => this.css({ gridArea: arg });
  gridAutoColumns = (arg: CSS['gridAutoColumns']) => this.css({ gridAutoColumns: arg });
  gridAutoFlow = (arg: CSS['gridAutoFlow']) => this.css({ gridAutoFlow: arg });
  gridAutoRows = (arg: CSS['gridAutoRows']) => this.css({ gridAutoRows: arg });
  gridColumn = (arg: CSS['gridColumn']) => this.css({ gridColumn: arg });
  gridColumnEnd = (arg: CSS['gridColumnEnd']) => this.css({ gridColumnEnd: arg });
  gridColumnGap = (arg: CSS['gridColumnGap']) => this.css({ gridColumnGap: arg });
  gridColumnStart = (arg: CSS['gridColumnStart']) => this.css({ gridColumnStart: arg });
  gridGap = (arg: CSS['gridGap']) => this.css({ gridGap: arg });
  gridRow = (arg: CSS['gridRow']) => this.css({ gridRow: arg });
  gridRowEnd = (arg: CSS['gridRowEnd']) => this.css({ gridRowEnd: arg });
  gridRowGap = (arg: CSS['gridRowGap']) => this.css({ gridRowGap: arg });
  gridRowStart = (arg: CSS['gridRowStart']) => this.css({ gridRowStart: arg });
  gridTemplate = (arg: CSS['gridTemplate']) => this.css({ gridTemplate: arg });
  gridTemplateAreas = (arg: CSS['gridTemplateAreas']) => this.css({ gridTemplateAreas: arg });
  gridTemplateColumns = (arg: CSS['gridTemplateColumns']) => this.css({ gridTemplateColumns: arg });
  gridTemplateRows = (arg: CSS['gridTemplateRows']) => this.css({ gridTemplateRows: arg });
  hangingPunctuation = (arg: CSS['hangingPunctuation']) => this.css({ hangingPunctuation: arg });
  height = (arg: CSS['height']) => this.css({ height: arg });
  hyphens = (arg: CSS['hyphens']) => this.css({ hyphens: arg });
  isolation = (arg: CSS['isolation']) => this.css({ isolation: arg });
  justifyContent = (arg: CSS['justifyContent']) => this.css({ justifyContent: arg });
  left = (arg: CSS['left']) => this.css({ left: arg });
  letterSpacing = (arg: CSS['letterSpacing']) => this.css({ letterSpacing: arg });
  lineHeight = (arg: CSS['lineHeight']) => this.css({ lineHeight: arg });
  listStyle = (arg: CSS['listStyle']) => this.css({ listStyle: arg });
  listStyleImage = (arg: CSS['listStyleImage']) => this.css({ listStyleImage: arg });
  listStylePosition = (arg: CSS['listStylePosition']) => this.css({ listStylePosition: arg });
  listStyleType = (arg: CSS['listStyleType']) => this.css({ listStyleType: arg });
  margin = (arg: CSS['margin']) => this.css({ margin: arg });
  marginBottom = (arg: CSS['marginBottom']) => this.css({ marginBottom: arg });
  marginLeft = (arg: CSS['marginLeft']) => this.css({ marginLeft: arg });
  marginRight = (arg: CSS['marginRight']) => this.css({ marginRight: arg });
  marginTop = (arg: CSS['marginTop']) => this.css({ marginTop: arg });
  maxHeight = (arg: CSS['maxHeight']) => this.css({ maxHeight: arg });
  maxWidth = (arg: CSS['maxWidth']) => this.css({ maxWidth: arg });
  minHeight = (arg: CSS['minHeight']) => this.css({ minHeight: arg });
  minWidth = (arg: CSS['minWidth']) => this.css({ minWidth: arg });
  mixBlendMode = (arg: CSS['mixBlendMode']) => this.css({ mixBlendMode: arg });
  objectFit = (arg: CSS['objectFit']) => this.css({ objectFit: arg });
  objectPosition = (arg: CSS['objectPosition']) => this.css({ objectPosition: arg });
  opacity = (arg: CSS['opacity']) => this.css({ opacity: arg });
  order = (arg: CSS['order']) => this.css({ order: arg });
  outline = (arg: CSS['outline']) => this.css({ outline: arg });
  outlineColor = (arg: CSS['outlineColor']) => this.css({ outlineColor: arg });
  outlineOffset = (arg: CSS['outlineOffset']) => this.css({ outlineOffset: arg });
  outlineStyle = (arg: CSS['outlineStyle']) => this.css({ outlineStyle: arg });
  outlineWidth = (arg: CSS['outlineWidth']) => this.css({ outlineWidth: arg });
  overflow = (arg: CSS['overflow']) => this.css({ overflow: arg });
  overflowX = (arg: CSS['overflowX']) => this.css({ overflowX: arg });
  overflowY = (arg: CSS['overflowY']) => this.css({ overflowY: arg });
  padding = (arg: CSS['padding']) => this.css({ padding: arg });
  paddingBottom = (arg: CSS['paddingBottom']) => this.css({ paddingBottom: arg });
  paddingLeft = (arg: CSS['paddingLeft']) => this.css({ paddingLeft: arg });
  paddingRight = (arg: CSS['paddingRight']) => this.css({ paddingRight: arg });
  paddingTop = (arg: CSS['paddingTop']) => this.css({ paddingTop: arg });
  pageBreakAfter = (arg: CSS['pageBreakAfter']) => this.css({ pageBreakAfter: arg });
  pageBreakBefore = (arg: CSS['pageBreakBefore']) => this.css({ pageBreakBefore: arg });
  pageBreakInside = (arg: CSS['pageBreakInside']) => this.css({ pageBreakInside: arg });
  perspective = (arg: CSS['perspective']) => this.css({ perspective: arg });
  perspectiveOrigin = (arg: CSS['perspectiveOrigin']) => this.css({ perspectiveOrigin: arg });
  pointerEvents = (arg: CSS['pointerEvents']) => this.css({ pointerEvents: arg });
  position = (arg: CSS['position']) => this.css({ position: arg });
  quotes = (arg: CSS['quotes']) => this.css({ quotes: arg });
  resize = (arg: CSS['resize']) => this.css({ resize: arg });
  right = (arg: CSS['right']) => this.css({ right: arg });
  scrollBehavior = (arg: CSS['scrollBehavior']) => this.css({ scrollBehavior: arg });
  tabSize = (arg: CSS['tabSize']) => this.css({ tabSize: arg });
  tableLayout = (arg: CSS['tableLayout']) => this.css({ tableLayout: arg });
  textAlign = (arg: CSS['textAlign']) => this.css({ textAlign: arg });
  textAlignLast = (arg: CSS['textAlignLast']) => this.css({ textAlignLast: arg });
  textDecoration = (arg: CSS['textDecoration']) => this.css({ textDecoration: arg });
  textDecorationColor = (arg: CSS['textDecorationColor']) => this.css({ textDecorationColor: arg });
  textDecorationLine = (arg: CSS['textDecorationLine']) => this.css({ textDecorationLine: arg });
  textDecorationStyle = (arg: CSS['textDecorationStyle']) => this.css({ textDecorationStyle: arg });
  textIndent = (arg: CSS['textIndent']) => this.css({ textIndent: arg });
  textJustify = (arg: CSS['textJustify']) => this.css({ textJustify: arg });
  textOverflow = (arg: CSS['textOverflow']) => this.css({ textOverflow: arg });
  textShadow = (arg: CSS['textShadow']) => this.css({ textShadow: arg });
  textTransform = (arg: CSS['textTransform']) => this.css({ textTransform: arg });
  top = (arg: CSS['top']) => this.css({ top: arg });
  transform = (arg: CSS['transform']) => this.css({ transform: arg });
  transformOrigin = (arg: CSS['transformOrigin']) => this.css({ transformOrigin: arg });
  transformStyle = (arg: CSS['transformStyle']) => this.css({ transformStyle: arg });
  transition = (arg: CSS['transition']) => this.css({ transition: arg });
  transitionDelay = (arg: CSS['transitionDelay']) => this.css({ transitionDelay: arg });
  transitionDuration = (arg: CSS['transitionDuration']) => this.css({ transitionDuration: arg });
  transitionProperty = (arg: CSS['transitionProperty']) => this.css({ transitionProperty: arg });
  transitionTimingFunction = (arg: CSS['transitionTimingFunction']) => this.css({ transitionTimingFunction: arg });
  unicodeBidi = (arg: CSS['unicodeBidi']) => this.css({ unicodeBidi: arg });
  userSelect = (arg: CSS['userSelect']) => this.css({ userSelect: arg });
  verticalAlign = (arg: CSS['verticalAlign']) => this.css({ verticalAlign: arg });
  visibility = (arg: CSS['visibility']) => this.css({ visibility: arg });
  whiteSpace = (arg: CSS['whiteSpace']) => this.css({ whiteSpace: arg });
  width = (arg: CSS['width']) => this.css({ width: arg });
  wordBreak = (arg: CSS['wordBreak']) => this.css({ wordBreak: arg });
  wordSpacing = (arg: CSS['wordSpacing']) => this.css({ wordSpacing: arg });
  wordWrap = (arg: CSS['wordWrap']) => this.css({ wordWrap: arg });
  writingMode = (arg: CSS['writingMode']) => this.css({ writingMode: arg });
  zIndex = (arg: CSS['zIndex']) => this.css({ zIndex: arg });

  bgc = (arg: CSS['backgroundColor']) => this.css({ backgroundColor: arg });
  bb = (arg: CSS['borderTop']) => this.css({ borderTop: arg });
  bt = (arg: CSS['borderTop']) => this.css({ borderTop: arg });
  bl = (arg: CSS['borderTop']) => this.css({ borderTop: arg });
  br = (arg: CSS['borderTop']) => this.css({ borderTop: arg });
}
