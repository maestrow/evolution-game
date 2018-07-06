import * as React from 'react'
import { IButtonGroupCssClasses, ButtonGroup } from '../button-group/button-group'
import { ITwoStateButtonItem } from '../two-state-button/two-state-button';
import BaseComponent from 'utils/base-component';

export interface IBadgeGroupProps {
  name: string;
  items: Array<ITwoStateButtonItem>;
  onClick: (index: number, item: ITwoStateButtonItem) => void;
}

export class BadgeGroup extends BaseComponent<IBadgeGroupProps, never> {

  protected buttonGroupCssClasses = (): IButtonGroupCssClasses => {
    return {
      root: `${this.cssRoot}__body`,
      item: 'badge',
    }
  }

  public render() {
    const cssClasses = this.getCssClasses(['name']);
    return (
      <div className={cssClasses.root}>
        <div className={cssClasses.name}>
          {this.props.name}
        </div>
        <ButtonGroup
          cssClasses={this.buttonGroupCssClasses()}
          items={this.props.items}
          onClick={this.props.onClick}
        />
      </div>
    )
  }
}

export default BadgeGroup;
