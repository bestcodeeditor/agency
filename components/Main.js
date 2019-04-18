import $ from "jquery";
import { MDBBtn } from "mdbreact";

const MainApp = () => (
  <div>
    {/*Main layout*/}
    <main>
      {/*Section: about*/}
      <section id="about" className="py-5">
        {/* Container */}
        <div className="container">
          {/* Section heading */}
          <h2 className="h1-responsive font-weight-bold text-center mb-5">
            Who We are
          </h2>
          {/* Section description */}
          <p className="lead grey-text text-center w-responsive mx-auto mb-5">
            TGS Solution is a rapidly growing Website Design,Development and
            custom software development company.
          </p>
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-lg-5 text-center text-lg-left">
              <img
                className="img-fluid"
                src="../static/images/banner1.jpg"
                alt="Sample image"
              />
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-lg-7">
              {/* Grid row */}
              <div className="row mb-3">
                {/* Grid column */}
                <div className="col-1">
                  <i className="fas fa-marker fa-lg orange-text" />
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-xl-10 col-md-11 col-10">
                  <h5 className="font-weight-bold mb-3">
                    Webiste Design & Development
                  </h5>
                  <p className="grey-text">
                    We provide Static and Dynamic Website Design and Development
                    in Nodejs using MongoDB,Angular 7,React,Ruby & Rails etc. We
                    also provide Content Management System(CMS) and E-commerce
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
              {/* Grid row */}
              <div className="row mb-3">
                {/* Grid column */}
                <div className="col-1">
                  <i className="fas fa-marker fa-lg orange-text" />
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-xl-10 col-md-11 col-10">
                  <h5 className="font-weight-bold mb-3">
                    Software Development
                  </h5>
                  <p className="grey-text">
                    We delevlop content management softwares,Customized
                    application based on customers demand, We have toplevel
                    software Engineers who develop softwares using latest
                    frameworks.
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
              {/*Grid row*/}
              <div className="row">
                {/* Grid column */}
                <div className="col-1">
                  <i className="fas fa-marker fa-lg orange-text" />
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-xl-10 col-md-11 col-10">
                  <h5 className="font-weight-bold mb-3">E-Commerce</h5>
                  <p className="grey-text mb-0">
                    We will design & develop a E-commerce website for your
                    business using latest technology which in turn will enhance
                    your productivity.
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/*Grid row*/}
            </div>
            {/*Grid column*/}
          </div>
          {/* Grid row */}
        </div>
        {/* Container */}
      </section>
      {/*Section: about*/}
      {/*Section: projects*/}
      {/*Section: projects*/}

      <section
        id="projects"
        className="text-center py-5"
        style={{ "background-color": "#eee" }}
      >
        {/* Container */}
        <div className="container">
          {/* Section heading */}
          <h2 className="h1-responsive font-weight-bold mb-5">
            Our latest Projects
          </h2>
          {/* Section description */}
          <p className="grey-text w-responsive mx-auto mb-5">
            Our highly experienced IT professionals produce an impressive, high
            performance website that will communicate your business to the
            world. We will implement the latest technologies in developing your
            website and our experienced marketing managers and consultants will
            drive qualified, targeted sales leads from the major search engines
            to your website
          </p>
          {/* Grid row */}
          <div className="row text-center">
            {/* Grid column */}
            <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
              {/*Featured image*/}
              <div className="view overlay rounded z-depth-1">
                <img
                  src="../static/images/content1.jpg"
                  className="img-fluid"
                  alt="Sample project image"
                />
                <a>
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              {/*Excerpt*/}
              <div className="card-body pb-0">
                <h4 className="font-weight-bold my-3">Ecommerce App</h4>
                <p className="grey-text">
                  We develop E-commerce App for desktop aswell as mobile built
                  with nodejs & mongodb backend , react frontend.
                </p>
                <a className="btn btn-purple btn-sm" href="#contact">
                  <i className="fas fa-clone left" /> Quote
                </a>
              </div>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
              {/*Featured image*/}
              <div className="view overlay rounded z-depth-1">
                <img
                  src="../static/images/content3.jpg"
                  className="img-fluid"
                  alt="Sample project image"
                />
                <a>
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              {/*Excerpt*/}
              <div className="card-body pb-0">
                <h4 className="font-weight-bold my-3">A Portfolio Website</h4>
                <p className="grey-text">
                  A portfolio website can cover a lot of bases. Generally
                  speaking, professionals, agencies require a creative medium to
                  display their work.
                </p>
                <a className="btn btn-purple btn-sm" href="#contact">
                  <i className="fas fa-clone left" /> Quote
                </a>
              </div>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-lg-4 col-md-6">
              {/*Featured image*/}
              <div className="view overlay rounded z-depth-1">
                <img
                  src="../static/images/content4.jpg"
                  className="img-fluid"
                  alt="Sample project image"
                />
                <a>
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              {/*Excerpt*/}
              <div className="card-body pb-0">
                <h4 className="font-weight-bold my-3">
                  Content Management System
                </h4>
                <p className="grey-text">
                  The CMS Administrator role is the highest level role
                  permission in dotCMS. This unique system role gives a user
                  access to all system portlets regardless of the role
                  permissions.
                </p>
                <a className="btn btn-purple btn-sm" href="#contact">
                  <i className="fas fa-clone left" /> Quote
                </a>
              </div>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Container */}
      </section>
      {/*Section: projects*/}

      <section id="services" className="text-center py-5">
        {/* Heading */}
        <h2 className="mb-5 font-weight-bold orange-text">Services</h2>
        {/*Grid row*/}
        <div className="row d-flex justify-content-center mb-4">
          {/*Grid column*/}
          <div className="col-md-8">
            {/* Description */}
            <p className="purple-text">
              We deliver Custom Application Development solutions within the
              context of your business objectives and strategies.
            </p>
            <style jsx>{`
              font-family: "Open Sans", sans-serif;
              font-size: 1.5rem;
            `}</style>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-4 mb-5">
            <i className="fas fa-rocket fa-4x orange-text" />
            <h4 className="my-4 font-weight-bold">
              Webiste Design & Development
            </h4>
            <p className="grey-text">
              We provide Static and Dynamic Website Design and Development using
              latest frameworks & technologies.
            </p>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-4 mb-1">
            <i className="fas fa-ethernet fa-4x orange-text" />
            <h4 className="my-4 font-weight-bold">
              Custom Software Development
            </h4>
            <p className="grey-text">
              We furnish Customized Software depvelopment at our office by
              expertize IT professionals here at our office.
            </p>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-4 mb-1">
            <i className="fab fa-connectdevelop fa-4x orange-text" />
            <h4 className="my-4 font-weight-bold">E-Commerce</h4>
            <p className="grey-text">
              We develop E-commerce websites for our customers have the skills
              that we have mastered here at TGS solutions.
            </p>
          </div>
          {/*Grid column*/}
        </div>

        <div className="row">
          {/*Grid column*/}
          <div className="col-md-4 mb-5">
            <i class="fas fa-id-badge fa-4x orange-text" />
            <h4 className="my-4 font-weight-bold">Mobile Applications</h4>
            <p className="grey-text">
              We Develop Android & IOS mobile applications by using Ionic,
              Reeact Native, Android Studio & Xcode
            </p>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-4 mb-1">
            <i className="fas fa-pen-square fa-4x orange-text" />
            <h4 className="my-4 font-weight-bold">Content Management</h4>
            <p className="grey-text">
              With content management facilities you get reconized your websites
              using meaningful contents which makes your website elegant.
            </p>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-4 mb-1">
            <i className="fas fa-globe fa-4x orange-text" />
            <h4 className="my-4 font-weight-bold">Online Solutions</h4>
            <p className="grey-text">
              We develop customised online solutions for management
              organisations,Schools etc.
            </p>
          </div>
          {/*Grid column*/}
        </div>

        {/*Grid row*/}
      </section>

      {/*Section: testimonials*/}
      <section
        id="testimonials"
        className="text-center py-5"
        style={{ backgroundColor: "#eee" }}
      >
        {/* Container */}
        <div className="container">
          {/* Section heading */}
          <h2 className="h1-responsive font-weight-bold mb-5">Testimonials</h2>
          {/* Carousel Wrapper */}
          <div
            id="carousel-example-1"
            className="carousel no-flex testimonial-carousel slide carousel-fade"
            data-ride="carousel"
            data-interval="false"
          >
            {/*Slides*/}
            <div className="carousel-inner" role="listbox">
              {/*First slide*/}
              <div className="carousel-item active">
                <div className="testimonial">
                  {/*Avatar*/}
                  <div className="avatar mx-auto mb-4">
                    <img
                      src="../static/images/author1.jpg"
                      className="rounded-circle img-fluid"
                      alt="First sample avatar image"
                      width="250"
                      height="250"
                    />
                  </div>
                  {/*Content*/}
                  <p>
                    <i className="fas fa-quote-left" /> TGS developed a customer
                    management system for our company which has awesome featutes
                    in contect with latest technologies and the application is
                    friedly towrads user interaction.
                  </p>
                  <h4 className="font-weight-bold">Samntha Joseph</h4>
                  <h6 className="font-weight-bold my-3">
                    Founder at San Management
                  </h6>
                  {/*Review*/}
                  <i className="fas fa-star amber-text"> </i>
                  <i className="fas fa-star amber-text"> </i>
                  <i className="fas fa-star amber-text"> </i>
                  <i className="fas fa-star amber-text"> </i>
                  <i className="fas fa-star-half-full amber-text"> </i>
                </div>
              </div>
              {/*First slide*/}
              {/*Second slide*/}
              <div className="carousel-item">
                <div className="testimonial">
                  {/*Avatar*/}
                  <div className="avatar mx-auto mb-4">
                    <img
                      src="../static/images/author5.jpg"
                      className="rounded-circle img-fluid"
                      alt="Second sample avatar image"
                    />
                  </div>
                  {/*Content*/}
                  <p>
                    <i className="fas fa-quote-left" /> Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore.
                  </p>
                  <h4 className="font-weight-bold">Maria Kate</h4>
                  <h6 className="font-weight-bold my-3">
                    Photographer at Studio LA
                  </h6>
                  {/*Review*/}
                  <i className="fas fa-star amber-text"> </i>
                  <i className="fas fa-star amber-text"> </i>
                  <i className="fas fa-star amber-text"> </i>
                  <i className="fas fa-star amber-text"> </i>
                  <i className="fas fa-star amber-text"> </i>
                </div>
              </div>
              {/*Second slide*/}
              {/*Third slide*/}
              <div className="carousel-item">
                <div className="testimonial">
                  {/*Avatar*/}
                  <div className="avatar mx-auto mb-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                      className="rounded-circle img-fluid"
                      alt="Third sample avatar image"
                    />
                  </div>
                  {/*Content*/}
                  <p>
                    <i className="fas fa-quote-left" /> Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium.
                  </p>
                  <h4 className="font-weight-bold">John Doe</h4>
                  <h6 className="font-weight-bold my-3">
                    Front-end Developer in NY
                  </h6>
                  {/*Review*/}
                  <i className="fas fa-star amber-text"> </i>
                  <i className="fas fa-star amber-text"> </i>
                  <i className="fas fa-star amber-text"> </i>
                  <i className="fas fa-star amber-text"> </i>
                  <i className="fas fa-star-o amber-text"> </i>
                </div>
              </div>
              {/*Third slide*/}
            </div>
            {/*Slides*/}
            {/*Controls*/}
            <a
              className="carousel-item-prev left carousel-control"
              href="#carousel-example-1"
              role="button"
              data-slide="prev"
            >
              <span className="icon-prev" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-item-next right carousel-control"
              href="#carousel-example-1"
              role="button"
              data-slide="next"
            >
              <span className="icon-next" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
            {/*Controls*/}
          </div>
          {/* Carousel Wrapper */}
        </div>
        {/* Container */}
      </section>
      {/*Section: testimonials*/}

      {/*Section: call to action*/}
      <div className="streak streak-md streak-photo">
        <div className="flex-center rgba-black-light pattern-1">
          <div className="white-text smooth-scroll mx-4">
            <h2 className="h2-responsive mb-5 wow fadeIn">
              You can place a quote.We will evaluate and getback.
            </h2>
            <div className="text-center">
              <a
                href="#contact"
                className="btn btn-outline-white wow fadeIn "
                data-offset={100}
                data-wow-delay="0.2s"
              >
                Quote
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          background: url("../static/images/banner2.jpg") center/cover fixed
            no-repeat;
        `}</style>
      </div>
      {/*Section: call to action*/}

      {/*Section: articles*/}
      <section id="articles" className="text-center py-5">
        {/* Container */}
        <div className="container">
          {/* Section heading */}
          <h2 className="h1-responsive font-weight-bold mb-5">Achievements</h2>
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-4 col-md-12 mb-4">
              {/* Card Narrower */}
              <div className="card card-cascade narrower">
                {/* Card image */}
                <div className="view view-cascade ">
                  <img
                    className="card-img-top"
                    src="../static/images/content1.jpg"
                    alt="Card image cap"
                  />
                  <a>
                    <div className="mask img-gradient" />
                  </a>
                </div>
                {/* Card content */}
                <div className="card-body card-body-cascade">
                  {/* Label */}
                  <h5 className="pink-text pb-2 pt-1">
                    <i className="fas fa-shopping-cart" /> Shopyfun
                  </h5>
                  {/* Title */}
                  <h4 className="font-weight-bold card-title">
                    A E-commerce App
                  </h4>
                  {/* Text */}
                  <p className="card-text">
                    Shopyfun is a E-commerce App for desktop aswell as mobile.
                    Built with nodejs & mongodb backend , react frontend.
                  </p>
                  {/* Button */}
                  <a className="btn btn-unique" href="#contact">
                    Quote
                  </a>
                </div>
              </div>
              {/* Card Narrower */}
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-4 col-md-6 mb-4">
              {/* Card Narrower */}
              <div className="card card-cascade narrower">
                {/* Card image */}
                <div className="view view-cascade ">
                  <img
                    className="card-img-top"
                    src="../static/images/content4.jpg"
                    alt="Card image cap"
                  />
                  <a>
                    <div className="mask img-gradient" />
                  </a>
                </div>
                {/* Card content */}
                <div className="card-body card-body-cascade">
                  {/* Label */}
                  <h5 className="pink-text pb-2 pt-1">
                    <i className="fas fa-book" /> Admin CMS
                  </h5>
                  {/* Title */}
                  <h4 className="font-weight-bold card-title">
                    A content management system
                  </h4>
                  {/* Text */}
                  <p className="card-text">
                    The CMS Administrator role is the highest level role
                    permission in dotCMS. This unique system role gives a user
                    access to all system portlets regardless of the role
                    permissions.
                  </p>
                  {/* Button */}
                  <a className="btn btn-unique">Quote</a>
                </div>
              </div>
              {/* Card Narrower */}
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-4 col-md-6 mb-4">
              {/* Card Narrower */}
              <div className="card card-cascade narrower">
                {/* Card image */}
                <div className="view view-cascade ">
                  <img
                    className="card-img-top"
                    src="../static/images/content3.jpg"
                    alt="Card image cap"
                  />
                  <a>
                    <div className="mask img-gradient" />
                  </a>
                </div>
                {/* Card content */}
                <div className="card-body card-body-cascade">
                  {/* Label */}
                  <h5 className="pink-text pb-2 pt-1">
                    <i className="far fa-bookmark" /> ARLO
                  </h5>
                  {/* Title */}
                  <h4 className="font-weight-bold card-title">
                    A Portfolio websie
                  </h4>
                  {/* Text */}
                  <p className="card-text">
                    A portfolio website can cover a lot of bases. Generally
                    speaking, professionals, agencies require a creative medium
                    to display their work.
                  </p>
                  {/* Button */}
                  <a className="btn btn-unique">Quote</a>
                </div>
              </div>
              {/* Card Narrower */}
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Container */}
        <style jsx>{`
          .img-gradient:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: inline-block;
            /* FF3.6+ */
            background: -webkit-gradient(
              linear,
              left top,
              left bottom,
              color-stop(0%, rgba(220, 66, 37, 0.5)),
              color-stop(100%, rgba(0, 47, 75, 0.5))
            );
            /* Chrome,Safari4+ */
            background: -webkit-linear-gradient(
              top,
              rgba(0, 47, 75, 0.5) 0%,
              rgba(220, 66, 37, 0.5) 100%
            );
            /* Chrome10+,Safari5.1+ */
            background: -o-linear-gradient(
              top,
              rgba(0, 47, 75, 0.5) 0%,
              rgba(220, 66, 37, 0.5) 100%
            );
            /* Opera 11.10+ */
            /* IE10+ */
            background: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(0, 47, 75, 0.5)),
              to(rgba(220, 66, 37, 0.5))
            );
            background: linear-gradient(
              to bottom,
              rgba(0, 47, 75, 0.5) 0%,
              rgba(220, 66, 37, 0.5) 100%
            );
            /* W3C */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002f4b', endColorstr='#00000000', GradientType=0);
            /* IE6-9 */
          }
        `}</style>
      </section>
      {/*Section: articles*/}

      {/*Section: contact*/}
      <section
        id="contact"
        className="py-5"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container">
          {/* Section heading */}
          <h2 class="h1-responsive font-weight-bold text-center mb-5">
            Contact us
          </h2>
          {/* Section description */}
          <p className="text-center w-responsive mx-auto mb-5">
            Get in touch with us so that we can take your organization to a new
            height.
          </p>
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                action="https://formspree.io/bestcodeeditor@gmail.com"
                method="POST"
              >
                {/* Grid row */}
                <div className="row">
                  {/* Grid column */}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="contact-name"
                        className="form-control"
                        placeholder="Your Name"
                      />
                      {/* <label htmlFor="contact-name" className>
                        Your name
                      </label> */}
                    </div>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="contact-email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      {/* <label htmlFor="contact-email" className>
                        Your email
                      </label> */}
                    </div>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row */}
                {/* Grid row */}
                <div className="row">
                  {/* Grid column */}
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="contact-Subject"
                        className="form-control"
                        placeholder="Subject"
                      />
                      {/* <label htmlFor="contact-Subject" className>
                        Subject
                      </label> */}
                    </div>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row */}
                {/* Grid row */}
                <div className="row">
                  {/* Grid column */}
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="contact-message"
                        className="form-control md-textarea"
                        placeholder="Your Message"
                        rows={3}
                        defaultValue={""}
                      />
                      {/* <label htmlFor="contact-message">Your message</label> */}
                    </div>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row */}

                <button className="btn btn-purple btn-md" value="Send">
                  Send
                </button>
              </form>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x purple-text" />
                  <p>New Delhi, CP, India</p>
                </li>
                <li>
                  <i className="fas fa-phone fa-2x mt-4 purple-text" />
                  <p>+ 9189654000000</p>
                </li>
                <li>
                  <i className="fas fa-envelope fa-2x mt-4 purple-text" />
                  <p className="mb-0">contact@tgssolutions.com</p>
                </li>
              </ul>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/*Section: contact*/}
    </main>
    {/*Main layout*/}
  </div>
);

// $(function() {
//   $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
// });

export default MainApp;
