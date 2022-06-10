const React = require('react');
const classNames = require('classnames');

const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];
var createReactClass = require('create-react-class');

const Row = createReactClass({
  render() {
    const { reverse, className, children, ...other} = this.props;

    const modificators = ['flex-row'];
    let passingProps = {};
    for (let key in other) {
      if (modificatorKeys.indexOf(key) > -1) {
        const value = other[key];
        if (value) {
          modificators.push(`${key}-${value}`);
        }
      } else {
        passingProps[key] = other[key];
      }
    }

    if (reverse) {
      modificators.push('reverse');
    }

    const _className = classNames(className, modificators);

    return (
      <div {...passingProps} className={_className}>
        {children}
      </div>
    );
  }
});

module.exports = Row;
