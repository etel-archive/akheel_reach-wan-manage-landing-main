const DeviceHealth = () => {
  return (
    <div className="device-health" style={{ '--v1': '82%', '--v2': '12%' }}>
      <div>
        <h3>Device Health</h3>
        <div>
          <div className="chart donut"></div>
          <div className="chart-value">(79) Devices</div>
        </div>
      </div>
      <div className="chart-options">
        <p>
          <span className="green"></span>&nbsp; Good
        </p>
        <p>
          <span className="yellow"></span>&nbsp; Fair
        </p>
        <p>
          <span className="red"></span>&nbsp; Poor
        </p>
      </div>
    </div>
  );
};
export default DeviceHealth;
