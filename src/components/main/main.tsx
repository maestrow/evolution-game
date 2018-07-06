import * as React from 'react';
import * as cn from 'classnames';
import BaseComponent from 'utils/base-component';
// import Router from 'universal-router'

export interface IMainProps {
}

export class Main extends BaseComponent<IMainProps, never> {

  constructor(props: IMainProps) {
    super(props);
  }

  public render() {
    const classNames = cn(this.cssRoot);
    return (
      <div
        className={classNames}
      >
        wef
      </div>
    );
  }
}
