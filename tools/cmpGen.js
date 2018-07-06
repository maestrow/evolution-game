const path = require ('path')
const fs = require ('fs')

// Consts
const root = '../src/components'

// Args
const args = process.argv.slice(2)
const cmpName = args[0]

const splitByCapitals = (str) => {
  return str.replace(/(?<=[A-Z])(?=[A-Z][a-z])|(?<=[^A-Z])(?=[A-Z])|(?<=[A-Za-z])(?=[^A-Za-z])/g, ' ').split(' ');
} 

const getCssName = componentName => splitByCapitals(componentName).map(i => i.toLowerCase()).join('-');

// #region Templates

const tsxTpl = (name, cssName) => 
`import * as React from 'react';
import * as classNames from 'classnames';

export interface I${name}Props {

}

export class ${name} extends React.Component<I${name}Props, never> {

  constructor(props: I${name}Props) {
    super(props);
  }

  public render() {
    const cssClasses = classNames('${cssName}');
    return (
      <div
        className={cssClasses}
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
`@import '../../styles/main.scss';

$component: '${cssName}';

.#{$component} {
  &__element {}
}

`

// #endregion

const createCmp = (name) => {
  const cssName = getCssName (name);
  const cmpPath = path.resolve(__dirname, root, cssName);
  fs.mkdir(cmpPath);
  [
    [`${cssName}.tsx` , tsxTpl(name, cssName)],
    [`${cssName}.scss`, scssTpl(cssName)],
    [`${cssName}.md`  , mdTpl(name)]
  ].forEach(i => {
    const fileName = path.resolve(cmpPath, i[0]);
    fs.writeFileSync(fileName, i[1], 'utf-8');
  })
}

createCmp(cmpName)