import * as React from 'react';
import { getCssName } from './get-css-name';

export default class BaseComponent<TProps, TState> extends React.Component<TProps, TState> {
  protected get cssRoot() {
    return getCssName(this.constructor.name);
  }

  protected getCssClasses = (items: Array<string>, root?: string): any => {
    const r = root || this.cssRoot;
    return items.reduce((acc, i) => {
      acc[i] = r + '__' + i;
      return acc;
    }, {
      root: r,
    } as any);
  }
}
