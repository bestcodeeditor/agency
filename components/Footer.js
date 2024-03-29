const Footer = () => (
  <div>
    <footer className="page-footer font-small pt-4">
      {/* Footer Elements */}
      <div className="container">
        {/* Social buttons */}
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-gplus mx-1">
              <i className="fab fa-google-plus-g"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
        {/* Social buttons */}
      </div>
      {/* Footer Elements */}
      {/* Copyright */}
      <div className="footer-copyright text-center py-3">
        © 2018 Copyright:
        <a href="./"> TGS Solutions</a>
      </div>
      {/* Copyright */}
    </footer>
    {/*Footer */}
    <style jsx>{`
      .top-nav-collapse {
        background-color: #563e91 !important;
      }

      .top-nav-collapse,
      .page-footer {
        background-color: #563e91 !important;
      }
    `}</style>
  </div>
);

export default Footer;
