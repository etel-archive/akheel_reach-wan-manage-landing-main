import AltNav from '../components/Alt-Nav';
import ControlStats from '../components/Control-stats';
import DeviceHealth from '../components/Device-health';
import Stats from '../components/Stats';

function App() {
  return (
    <div className="container">
      {/* Secondary nav */}
      <AltNav />

      <hr />

      <Stats />

      <hr />

      <div className="stats-charts">
        <ControlStats />
        <DeviceHealth />
      </div>
    </div>
  );
}

export default App;
