// Main navigation

const HeaderApp = () => (
  <div>
    <header>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="../static/images/logo.png"
              alt="logo"
              width="70"
              height="70"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto smooth-scroll">
              <li className="nav-item">
                <a className="nav-link" href="#intro">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" data-offset="90">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects" data-offset="90">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" data-offset="90">
                  services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials" data-offset="30">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#articles" data-offset="90">
                  achievements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" data-offset="90">
                  Contact
                </a>
              </li>
            </ul>
            {/* Social Icon  */}
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com">
                  <i className="fab fa-facebook-f light-green-text-2" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.twitter.com">
                  <i className="fab fa-twitter light-green-text-2" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.instagram.com">
                  <i className="fab fa-instagram light-green-text-2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar */}
      {/* Full Page Intro */}
      <div className="view">
        <video
          className="video-intro"
          poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
          playsInline
          autoPlay
          muted
          loop
        >
          <source
            src="https://mdbootstrap.com/img/video/animation.mp4"
            type="video/mp4"
          />
        </video>
        {/* Mask & flexbox options*/}
        <div className="mask rgba-gradient d-flex justify-content-center align-items-center">
          {/* Content */}
          <div className="container px-md-3 px-sm-0">
            {/*Grid row*/}
            <div className="row wow fadeIn">
              {/*Grid column*/}
              <div className="col-md-12 mb-4 white-text text-center wow fadeIn">
                <h3 className="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">
                  TSG Solution
                </h3>
                <hr className="hr-light my-4 w-75" />
                <h4 className="subtext-header mt-2 mb-4">
                  TGS Solution is a creative technology company providing key
                  digital services and focused on helping our clients to build a
                  successful business on web and mobile.
                </h4>
                <a
                  href="#contact"
                  className="btn btn-rounded btn-outline-white"
                >
                  <i className="fas fa-hotel" /> Get Fee Quote
                </a>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Content */}
        </div>
        {/* Mask & flexbox options*/}
      </div>
      {/* Full Page Intro */}
    </header>
    <style jsx>{`
      @media (max-width: 740px) {
        .view {
          height: 100vh;
        }
      }

      .top-nav-collapse {
        background-color: #563e91 !important;
      }

      .navbar:not(.top-nav-collapse) {
        background: transparent !important;
      }

      @media (max-width: 991px) {
        .navbar:not(.top-nav-collapse) {
          background: #563e91 !important;
        }
      }

      .rgba-gradient {
        background: rgba(35, 7, 77, 0.6); /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to right,
          rgba(204, 83, 51, 0.6),
          rgba(35, 7, 77, 0.6)
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          rgba(204, 83, 51, 0.6),
          rgba(35, 7, 77, 0.6)
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
    `}</style>
  </div>
);

export default HeaderApp;
