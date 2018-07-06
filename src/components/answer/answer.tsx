import * as React from 'react';
import * as cn from 'classnames';
import BaseComponent from 'utils/base-component';

export interface IAnswerProps {
  question: string;
  answer: string;
}

export class Answer extends BaseComponent<IAnswerProps, never> {

  public render() {
    const classNames = cn(this.cssRoot);
    return (
      <div
        className={classNames}
      >
        <div>{this.props.question}</div>
        <div>{this.props.answer}</div>
      </div>
    );
  }
}
