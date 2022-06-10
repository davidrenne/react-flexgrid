const React = require('react');
const classNames = require('classnames');
var createReactClass = require('create-react-class');

const Grid = createReactClass({
  render() {
    const { fluid, className, ...other} = this.props;
    const containerClass = fluid ? 'container-flex-fluid' : 'container';
    const _className = classNames(className, containerClass);

    return (
      <div {...other} className={_className}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Grid;
