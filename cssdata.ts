declare namespace MDN {
  interface Property {
    syntax: string;
    media: string;
    inherited: boolean;
    animationType: string;
    percentages: string;
    groups: string[];
    initial: string;
    appliesto: string;
    computed: string | string[];
    order: string;
    status: string;
    mdn_url?: string;
  }

  interface Properties {
    [property: string]: Property;
  }

  interface Syntax {
    syntax: string;
  }

  interface Syntaxes {
    [property: string]: Syntax;
  }

  interface Selector {
    syntax: string;
    groups: string[];
    status: string;
  }

  interface Selectors {
    [selector: string]: Selector;
  }

  interface Types {
    [name: string]: any;
  }

  interface Descriptor {
    syntax: string;
    media: string;
    percentages: string | string[];
    initial: string | string[];
    computed: string | string[];
    order: string;
  }

  interface Descriptors {
    [descriptor: string]: Descriptor;
  }

  interface AtRule {
    syntax: string;
    interfaces: string[];
    groups: string[];
    descriptors: Descriptors;
    status: string;
  }

  interface AtRules {
    [name: string]: AtRule;
  }

  interface L10N {
    [key: string]: {
      'en-US': string;
    };
  }
}

declare module 'cssdata/css/properties.json' {
  var properties: MDN.Properties;
  export = properties;
}

declare module 'cssdata/css/syntaxes.json' {
  var syntaxes: MDN.Syntaxes;
  export = syntaxes;
}

declare module 'cssdata/css/selectors.json' {
  var selectors: MDN.Selectors;
  export = selectors;
}

declare module 'cssdata/css/types.json' {
  var types: MDN.Types;
  export = types;
}

declare module 'cssdata/css/at-rules.json' {
  var atRules: MDN.AtRules;
  export = atRules;
}

declare module 'cssdata/l10n/css.json' {
  var l10n: MDN.L10N;
  export = l10n;
}
