const Notification = () => {
  return (
    <ul className="notification-list">
      <li>
        {/* <span className="icon flaticon-briefcase"></span> */}
        <strong>Henry Wilson</strong> applied for a job
        <span className="colored"> Product Designer</span>
      </li>
      {/* End li */}

      <li className="notification-list">
        {/* <span className="icon flaticon-briefcase"></span> */}
        <strong>Raul Costa</strong> applied for a job
        <span className="colored"> Product Manager, Risk</span>
      </li>
      {/* End li */}
    </ul>
  );
};

export default Notification;
