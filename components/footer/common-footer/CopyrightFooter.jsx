const CopyrightFooter = () => {
  return (
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="outer-box">
          <div className="copyright-text">
            © {new Date().getFullYear()} {" "}
           
            . All Right Reserved.
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
