import Link from 'next/link'
import { Component } from 'react'
import { headerStyles } from '../styles/HeaderStyles'
import { basics } from '../styles/baseStyles'
import { bg } from '../styles/baseStyles'

const linkStyle = {
  marginRight: 15,
  fontFamily: 'sans-serif'
}

const collapseNavBtn = () => {
  document.querySelector('#collapseNavBtn').addEventListener('click', () => {
    document.querySelector('.links').classList.toggle('hidden')
  })
}

const isActive = (currentPath, toCheck) => (
  toCheck !== "/"
  ? (
    currentPath.startsWith(toCheck) ? "active" : "" )
  : (
    (currentPath === "/" || currentPath === "/index") && "active"
  )
)

class Header extends Component {
  componentDidMount() {
    collapseNavBtn()
  }
  render() {
    // console.log(this.props)
    const path = this.props.url.pathname
    const isIndex = path === '/index' || path === '/'
    return (
      <div>
        <div className={isIndex ? 'bg-image1' : 'baseBg'}/>
        <div className={isIndex && 'bg-gradient'}/>
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
                  <a className={isActive(path, "/")}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className={isActive(path, "/about")}>About</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a className={isActive(path, "/portfolio")}>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className={isActive(path, "/contact")}>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="placeholder"></div>
        </nav>
        <style jsx global>{ basics }</style>
        <style jsx>{ headerStyles }</style>
        <style jsx>{ bg }</style>
      </div>
    )
  }
}

export default Header
