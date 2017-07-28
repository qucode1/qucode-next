import Link from 'next/link'
import { Component } from 'react'
import { headerStyles, base } from './HeaderStyles'

const linkStyle = {
  marginRight: 15,
  fontFamily: 'sans-serif'
}

const collapseNavBtn = () => {
  document.querySelector('#collapseNavBtn').addEventListener('click', () => {
    document.querySelector('.links').classList.toggle('hidden')
  })
}

class Header extends Component {
  componentDidMount() {
    collapseNavBtn()
  }
  render() {
    return (
      <div>
        <div className="bg-image1"/>
        <div className="bg-image2"/>
        <nav>
          <div className="topNav">
            <img src="/static/logo.png"/>
            <div className="logo">
              <p>QuCode</p>
              <p>Webdevelopment</p>
            </div>
            <div id="collapseNavBtn">
              <svg
                 className="toggle-menu-button js-toggle-menu-button"
                 width="30px"
                 height="40px"
                 viewBox="0 0 30 40"
              >
              <path d="M0,9 l15,0 l15,0" />
              <path d="M0,20 l15,0 l15,0" />
              <path d="M0,31 l15,0 l15,0" />
              </svg>
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
        <style jsx global>{ base }</style>
        <style jsx>{ headerStyles }</style>
      </div>
    )
  }
}

export default Header
