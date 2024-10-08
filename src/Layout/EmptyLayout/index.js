import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class EmptyLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <div className="onesignal-customlink-container">{children}</div>
      </Fragment>
    );
  }
}

EmptyLayout.propTypes = {
  children: PropTypes.any.isRequired
};

export default EmptyLayout;
