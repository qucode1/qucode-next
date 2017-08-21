import Link from 'next/link'
import { Component } from 'react'
import { headerStyles } from '../styles/HeaderStyles'
import { basics } from '../styles/baseStyles'
import { colors } from '../styles/baseStyles'
import { bg } from '../styles/baseStyles'

const linkStyle = {
  marginRight: 15,
  fontFamily: 'sans-serif'
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
              <p>QuCode </p>
              <p>Webdevelopment</p>
            </div>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link prefetch href="/">
                  <a className={isActive(path, "/")}><i className="fa fa-home" aria-hidden="true" aria-label="go back home"></i> <span className="navLinkLabel"> Home</span></a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/about">
                  <a className={isActive(path, "/about")}><i className="fa fa-address-card-o" aria-hidden="true" aria-label="infos about me"></i> <span className="navLinkLabel">About</span></a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/portfolio">
                  <a className={isActive(path, "/portfolio")}><i className="fa fa-picture-o" aria-hidden="true" aria-label="my portfolio"></i> <span className="navLinkLabel">Portfolio</span></a>
                </Link>
              </li>
              <li>
                <Link prefetch href="/contact">
                  <a className={isActive(path, "/contact")}><i className="fa fa-envelope-o" aria-hidden="true" aria-label="contact me"></i> <span className="navLinkLabel">Contact</span></a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="placeholder"></div>
        </nav>
        <style jsx global>{ colors }</style>
        <style jsx global>{ basics }</style>
        <style jsx>{ headerStyles }</style>
        <style jsx>{ bg }</style>
      </div>
    )
  }
}

export default Header
