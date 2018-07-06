const path = require ('path')
const fs = require ('fs')

// Consts
const root = '../src/components'

// Args
const argsArr = process.argv.slice(2)
const args = {
  name: argsArr[0],
  cssClasses: String(argsArr[1]).toLowerCase() === 'cssclasses',
  cssRoot: String(argsArr[1]).toLowerCase() === 'cssroot'
};


const splitByCapitals = (str) => {
  return str.replace(/(?<=[A-Z])(?=[A-Z][a-z])|(?<=[^A-Z])(?=[A-Z])|(?<=[A-Za-z])(?=[^A-Za-z])/g, ' ').split(' ');
} 

const getCssName = componentName => splitByCapitals(componentName).map(i => i.toLowerCase()).join('-');

// #region Templates



const tsx = (name, cssName, withCssRoot) => {
  
  const iface = withCssRoot
    ? `  cssRoot?: string;\n`
    : '';

  const cssClassesLine = withCssRoot
    ? `const cssClasses = this.getCssClasses(['item1', 'item2'], this.props.cssRoot);\n    `
    : '';
  
  const root = withCssRoot
    ? 'cssClasses.root'
    : 'this.cssRoot';

  return (
`import * as React from 'react';
import * as cn from 'classnames';
import BaseComponent from 'utils/base-component';

export interface I${name}Props {
  className?: string;
${iface}}

export class ${name} extends BaseComponent<I${name}Props, never> {

  constructor(props: I${name}Props) {
    super(props);
  }

  public render() {
    ${cssClassesLine}const classNames = cn(${root}, this.props.className);
    return (
      <div
        className={classNames}
      >
        Hello from ${name}
      </div>
    );
  }
}
`);
}

const tsx_cssClasses = (name, cssName) => 
`import * as React from 'react';
import * as cn from 'classnames';
import BaseComponent from 'utils/base-component';

export interface I${name}CssClasses {
  root: string;
}

export interface I${name}Props {
  className?: string;
  cssClasses?: Partial<I${name}CssClasses>;
}

export class ${name} extends BaseComponent<I${name}Props, never> {

  constructor(props: I${name}Props) {
    super(props);
  }

  protected getDefaultCssClasses = (): I${name}CssClasses => {
    const root = this.cssRoot;
    return {
      root,
    }
  };

  public render() {
    const cssClasses = this.props.cssClasses || this.getDefaultCssClasses();
    const classNames = cn(cssClasses.root, this.props.className);
    return (
      <div
        className={classNames}
      >
        Hello from ${name}
      </div>
    );
  }
}
`

const mdTpl = (name) => 
`${name} sample:

    <${name} />
`

const scssTpl = (cssName) => 
`@import '../../styles/common.scss';

$component: '${cssName}';

.#{$component} {
  &__element {}
}

`

// #endregion

const createCmp = (args) => {
  const cssName = getCssName (args.name);
  const cmpPath = path.resolve(__dirname, root, cssName);
  fs.mkdir(cmpPath);
  const tsxContent = args.cssClasses 
    ? tsx_cssClasses(args.name, cssName) 
    : tsx(args.name, cssName, args.cssRoot);
  [
    [`${cssName}.tsx` , tsxContent],
    [`${cssName}.scss`, scssTpl(cssName)],
    [`${cssName}.md`  , mdTpl(args.name)]
  ].forEach(i => {
    const fileName = path.resolve(cmpPath, i[0]);
    fs.writeFileSync(fileName, i[1], 'utf-8');
  })
}

createCmp(args)