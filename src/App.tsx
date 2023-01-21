import { NightVision } from 'night-vision'
import React from 'react';

// Generate some random data
function data() {
  return Array(30).fill(1).map((x, i) => [
    new Date(`${i + 1} Nov 2022 GMT+0000`).getTime(),
    i * Math.random()
  ]);
};

function App() {

  const didLogRef = React.useRef(false);
  React.useEffect(() => {
    // In this case, whether we are mounting or remounting,
    // we use a ref so that we only log an impression once.
    if (didLogRef.current == false) {
      didLogRef.current = true;

      const chart = new NightVision('chart-container', {autoResize: true,});
      chart.data = {
        panes: [{
          id: 0,
          uuid: '',
          overlays: []
        }],
      };

    }
  }, []);

  return (
    <div id="chart-container"></div>
  );
};

export default App;
