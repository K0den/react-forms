/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React     = require('react/addons');
var cx        = require('classnames');
var PropTypes = React.PropTypes;

var Hint = React.createClass({

  propTypes: {
    hint: PropTypes.string.isRequired,
    className: PropTypes.string
  },

  render(): ?ReactElement {
    var {hint, className, ...props} = this.props;
    return (
      <span {...props} className={cx('rf-Hint', className)}>{hint}</span>
    );
  }
});

module.exports = Hint;
