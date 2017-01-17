'use strict';

import React from 'react';

require('styles/company/Widget.css');

class WidgetComponent extends React.Component {
  render() {
    return (
      <div className="widget-component">
        Please edit src/components/company//WidgetComponent.js to update this component!
      </div>
    );
  }
}

WidgetComponent.displayName = 'CompanyWidgetComponent';

// Uncomment properties you need
// WidgetComponent.propTypes = {};
// WidgetComponent.defaultProps = {};

export default WidgetComponent;
