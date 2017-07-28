import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  fontFamily: 'sans-serif'
}

const Header = () => (
  <div>
    <div className="bg-image1"/>
    <div className="bg-image2"/>
    <nav>
      <div className="topNav">
        <svg></svg>
        <div className="logo">
          <p>QuCode</p>
          <p>Webdevelopment</p>
        </div>
        <div id="collapseNavBtn">
          <p><i className="fa fa-bars"></i></p>
        </div>
      </div>
      <div className="links hidden">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="placeholder"></div>
    </nav>
    <img src="/static/bg.jpg" />
    <style jsx>{`
      .bg-image1 {
        position: fixed;
        left: 0;
        right: 0;
        z-index: -1;
        display: block;
        background-image: url("/static/node_icon.png");
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        width: 100%;
        height: 100%;
        filter: grayscale(100%) brightness(50%)
      }
      .bg-image2 {
        position: fixed;
        left: 0;
        right: 0;
        z-index: -1;
        display: block;
        background-image: linear-gradient(to bottom right, rgba(31, 164, 237, 0.78), rgba(7, 27, 37, 0.84));
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

export default Header
