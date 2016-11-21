const React = require('react');
const classNames = require('classnames');
const ReactSwipe = require('react-swipe');

const SwitchCard = React.createClass({
  render() {
    const trimClass = classNames({
      'test': true
    });
    return (
      <div className={trimClass}>
        <ReactSwipe />
      </div>
    );
  }
});

module.exports = SwitchCard;
