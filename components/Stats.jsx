const Stats = () => {
  return (
    <div className="stats" style={{ opacity: 0.7 }}>
      <div>
        <h3>Controllers</h3>
        <div>
          <p>
            <span>1</span>
            <span>vBond</span>
          </p>
          <p>
            <span>2</span>
            <span>vSmart</span>
          </p>
          <p>
            <span>1</span>
            <span>vManage</span>
          </p>
        </div>
      </div>

      <span className="divider"></span>

      <div>
        <h3>Devices</h3>
        <p>
          <span>1</span>
          <span>Reachable</span>
        </p>
      </div>

      <span className="divider"></span>

      <div>
        <h3>Certificate Status</h3>
        <p>
          <span>1</span>
          <span>Warning</span>
        </p>
      </div>

      <span className="divider"></span>

      <div>
        <h3>Licencing</h3>
        <p>
          <span>1</span>
          <span>Assigned</span>
        </p>
      </div>

      <span className="divider"></span>

      <div>
        <h3>Reboot</h3>
        <p>
          <span>0</span>
          <span>last 24 hrs</span>
        </p>
      </div>
    </div>
  );
};
export default Stats;
