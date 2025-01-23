// front-end/src/components/Widgets.js

import React from 'react';

const Widgets = () => {
  return (
    <div className="widgets">
      <h3>Dashboard Widgets</h3>
      <div className="widget"> {/* Example of widget */}
        <p>Stock Trends</p>
        {/* You can include a chart or graph here */}
      </div>
    </div>
  );
};

export default Widgets;
