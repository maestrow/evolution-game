import * as React from 'react';
import * as classNames from 'classnames';
import { TwoStateButton } from '../two-state-button/two-state-button';
import BaseComponent from 'utils/base-component';

interface IState<TItem> {
  checkedFn: (item: TItem) => boolean;
  captionFn: (item: TItem) => string;
}

export interface IButtonGroupCssClasses {
  root: string;
  item: string;
}

export interface IButtonGroupProps<TItem> {
  className?: string;
  items: Array<TItem>;
  checkedFn?: (item: TItem) => boolean;
  captionFn?: (item: TItem) => string;
  onClick: (index: number, item: TItem) => void;
  cssClasses?: Partial<IButtonGroupCssClasses>;
}

const defaultCaptionFn = (item: any) => item.caption;

const defaultCheckedFn = (item: any) => item.checked;

export class ButtonGroup<TItem> extends BaseComponent<IButtonGroupProps<TItem>, IState<TItem>> {

  public static getDerivedStateFromProps<TItem>(props: IButtonGroupProps<TItem>) {
    return {
      captionFn: props.captionFn || defaultCaptionFn,
      checkedFn: props.checkedFn || defaultCheckedFn,
    };
  }

  constructor(props: IButtonGroupProps<TItem>) {
    super(props);
    this.state = ButtonGroup.getDerivedStateFromProps(props);
  }

  private handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const i = Number (event.currentTarget.name);
    this.props.onClick(i, this.props.items[i]);
  }

  private getDefaultCssClasses = (): IButtonGroupCssClasses => {
    return {
      root: this.cssRoot,
      item: this.cssRoot + '__item',
    }
  }

  public render() {
    const cssClasses = this.props.cssClasses || this.getDefaultCssClasses()
    const cssClassNames = classNames(cssClasses.root, this.props.className);
    return (
      <div
        className={cssClassNames}
      >
        {this.props.items.map((i, index) =>
          <TwoStateButton
            key={index}
            name={String(index)}
            cssRoot={cssClasses.item}
            caption={this.state.captionFn(i)}
            checked={this.state.checkedFn(i)}
            onClick={this.handleClick}
          />,
        )}

      </div>
    );
  }
}
