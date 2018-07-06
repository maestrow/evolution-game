import * as React from 'react';
import * as classNames from 'classnames';
import BaseComponent from 'utils/base-component'

export interface ITwoStateButtonItem {
  caption: string;
  checked: boolean;
}

export interface ITwoStateButtonProps extends React.ButtonHTMLAttributes<any>, ITwoStateButtonItem {
  cssRoot?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IState {
  highlighted: boolean;
}

export class TwoStateButton extends BaseComponent<ITwoStateButtonProps, IState> {

  constructor(props: ITwoStateButtonProps) {
    super(props);
    this.state = {
      highlighted: false,
    };
  }

  private handleMouseEnter = () => {
    this.setState ({ highlighted: true })
  }

  private handleMouseLeave = () => {
    this.setState ({ highlighted: false })
  }

  public render() {

    const { onClick, caption, cssRoot, ...rest } = this.props;

    const blockName = cssRoot || this.cssRoot;

    const styleClasses = classNames(blockName, {
      [`${blockName}--highlighted`]: this.state.highlighted,
      [`${blockName}--on`]: this.props.checked,
      [`${blockName}--off`]: !this.props.checked,
    });

    return (
      <button
        {...rest}
        type="button"
        className={styleClasses}
        onClick={onClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {caption}
      </button>
    )
  }
}
