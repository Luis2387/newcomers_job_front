const TopCardBlock = ({ posted, applicants, hired }) => {
  const cardContent = [
    {
      id: 1,
      icon: "flaticon-briefcase",
      countNumber: posted,
      metaName: "Posted Jobs",
      uiClass: "ui-blue",
    },
    {
      id: 2,
      icon: "la-file-invoice",
      countNumber: applicants,
      metaName: "Application",
      uiClass: "ui-red",
    },    
    {
      id: 3,
      icon: "la-bookmark-o",
      countNumber: hired,
      metaName: "Hired",
      uiClass: "ui-green",
    },
  ];

  return (
    <>
      {cardContent.map((item) => (
        <div
          className="ui-block col-xl-4 col-lg-9 col-md-9 col-sm-9"
          key={item.id}
        >
          <div className={`ui-item ${item.uiClass}`}>
            <div className="left">
              <i className={`icon la ${item.icon}`}></i>
            </div>
            <div className="right">
              <h4>{item.countNumber}</h4>
              <p>{item.metaName}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCardBlock;
