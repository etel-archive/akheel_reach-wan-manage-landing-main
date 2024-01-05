const AltNav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item selected">Overview</li>
        {['services', 'products', 'customers', 'Tunnels', 'Security'].map(
          (item) => (
            <li key={item} className="nav-item">
              {item}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};
export default AltNav;
