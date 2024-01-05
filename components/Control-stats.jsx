const ControlStats = () => {
  return (
    <div className="control-stats" style={{ '--v1': '99%', '--v2': '22%' }}>
      <div>
        <h3>ControlStats</h3>
        <div>
          <div className="chart donut"></div>
          <div className="chart-value">(78) Devices</div>
        </div>
      </div>
      <div className="chart-options">
        <p>
          <span className="green"></span>&nbsp; Up
        </p>
        <p>
          <span className="yellow"></span>&nbsp; Partial
        </p>
        <p>
          <span className="red"></span>&nbsp; Down
        </p>
      </div>
    </div>
  );
};
export default ControlStats;
