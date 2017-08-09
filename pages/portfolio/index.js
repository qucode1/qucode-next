import { Component } from 'react'
import Layout from '../../comps/Layout'
import { colors } from '../../styles/baseStyles'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Modal = (props) => (
  <div className="dark fullscreen container" onClick={props.onClick}>

    <p className="close">X</p>
    <img src={props.image} alt={props.name} />
    <div className="infos">
      <p>{props.name}</p>
      <p>{props.description}</p>
      <div>
        {props.tags.map(tag => (
          <p key={tag} className="tag">{tag}</p>
        ))}
      </div>

    </div>
    <style jsx>{`
      .fullscreen {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 100;
        color: var(--blue)
      }
      .dark {
        background-color: rgba(0,0,0,0.8)
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px
      }
      .infos {
        display: flex;
        flex-direction: column
      }
      .tags {
        display: flex;
      }
      .tag {
        background-color: var(--yellow);
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        color: black;
        display: inline-block
      }
      img {
        width: 100%
      }
      .close {
        align-self: flex-end;
        padding: 5px;
        margin: 0;
        margin-right: 5%;
        font-size: 2em;
        color: var(--yellow);
        cursor: pointer
      }
      @media only screen and (min-width: 800px) {
        img {
        width: 70%;
        min-width: 800px
        }
      }
    `}</style>
  </div>
)
const Card = (props) => (

  <div className="card" onClick={(e) => props.onClick(e, props.project)}>
    <div className="corner tl"></div>
    <div className="corner tr"></div>
    <div className="corner br"></div>
    <div className="corner bl"></div>
    <div className="wrapper">
      <img src={props.project.image} alt={props.project.name} />
    </div>
    <style jsx>{`
      .card {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60vW;
        height: 34.625vW;
        max-width: 297px;
        max-height: 170.13px;
        margin: 5px;
      }
      .card:hover .corner, .card:focus .corner {
        width: 30.2vW;
        height: 17.35vW;
        max-width: 149px;
        max-height: 86px;
      }
      .corner {
        position: absolute;
        width: 0vW;
        height: 0vW;
        max-width: 30px;
        max-height: 30px;
        background-color: var(--yellow);
        transition: 0.25s ease-in-out
      }
      .tl {
        top: 0;
        left: 0;
      }
      .tr {
        top: 0;
        right: 0;
      }
      .br {
        bottom: 0;
        right: 0
      }
      .bl {
        bottom: 0;
        left: 0
      }
      .wrapper {
        width: 58vW;
        height: 32.625vW;
        max-width: 290px;
        max-height: 163.125px;
        background-color: lightgrey;
        z-index: 2;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center
      }
      img {
        height: 100%
      }
    `}</style>
  </div>
)

class Portfolio extends Component {
  static async getInitialProps() {
    let projects = await fetch(`${process.env.PUBLICAPI}projects`)
    projects = await projects.json()
    return {projects}
  }
  constructor(props) {
    super(props)
    this.state = {
      modalOn: false,
      modalData: {}
    }
    this.handleModal = this.handleModal.bind(this)
  }
  handleModal (e, data) {
    this.state.modalOn
    ? (
      (e.target.classList.contains("container")
      && this.setState({ modalOn: false, modalData: {}}))
      || (e.target.classList.contains("close")
      && this.setState({ modalOn: false, modalData: {}}))
    )
    : this.setState({ modalOn: true, modalData: data})
  }
  render () {
    return (
      <Layout url={this.props.url}>
        <main>
          <div className="gallery">
            {this.props.projects.map(project =>
              (<Card key={project._id} project={project} onClick={this.handleModal} />)
            )}
            <p>TESTING PROJECT API. Projects should be listed here</p>
          </div>
          {this.state.modalOn && <Modal {...this.state.modalData} onClick={this.handleModal}/>}
        </main>
        <style jsx global>{ colors }</style>
        <style jsx>{`
          .gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            margin-top: 30px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Portfolio