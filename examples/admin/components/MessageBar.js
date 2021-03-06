import React from 'react';
import {
  Icon,
} from 'amazeui-react';

const MessageBar = React.createClass({
  render() {
    const {
      className,
      ...props
      } = this.props;

    return (
      <div
        {...props}
        className={`adm-msg-bar ${className}`}
      >
        {this.props.children}
      </div>
    );
  }
});

export default MessageBar;
