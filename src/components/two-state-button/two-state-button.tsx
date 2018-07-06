import * as React from 'react';
import * as classNames from 'classnames';
import { getCssBlockName } from 'utils/getCssBlockName'

export interface ITwoStateButtonProps {
  caption: string;
  checked: boolean;
  onClick: () => void;
}

interface IState {
  highlighted: boolean;
}

export class TwoStateButton extends React.Component<ITwoStateButtonProps, IState> {

  constructor(props: ITwoStateButtonProps) {
    super(props);
    this.state = {
      highlighted: false,
    };
  }

  protected get blockName() {
    return getCssBlockName(this.constructor.name);
  }

  private handleMouseEnter = () => {
    this.setState ({ highlighted: true })
  }

  private handleMouseLeave = () => {
    this.setState ({ highlighted: false })
  }

  public render() {

    const styleClasses = classNames(this.blockName, {
      [`${this.blockName}--highlighted`]: this.state.highlighted,
      [`${this.blockName}--on`]: this.props.checked,
      [`${this.blockName}--off`]: !this.props.checked,
    });

    return (
      <button
        type="button"
        className={styleClasses}
        onClick={this.props.onClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.caption}
      </button>
    )
  }
}
