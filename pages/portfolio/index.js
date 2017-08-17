import { Component } from 'react'
import Layout from '../../comps/Layout'
import { colors } from '../../styles/baseStyles'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
const variables = require('../../variables.json')
import Modal from '../../comps/portfolio/Modal'
import Card from '../../comps/portfolio/Card'
import Transition from 'react-transition-group/Transition'
import { galleryTransition, galleryTransitionStyles } from '../../styles/transitionStyles'

class Portfolio extends Component {
  static async getInitialProps() {
    let projects = await fetch(`${variables.PUBLICAPI}projects`)
    projects = await projects.json()
    return {projects}
  }
  constructor(props) {
    super(props)
    this.state = {
      modalOn: false,
      modalData: {},
      gallery: false
    }
    this.handleModal = this.handleModal.bind(this)
  }
  componentDidMount() {
    this.setState({ gallery: true })
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
    const galleryDefaultStyle = {
      transform: 'scale(0.3)',
      opacity: 0
    }
    return (
      <Layout url={this.props.url}>
        <main>
          <Transition in={this.state.gallery} timeout={0} appear={true} >
            {(state) => (
              <div>
                <div className="gallery" style={{...galleryDefaultStyle, ...galleryTransitionStyles[state], transition: `${galleryTransition}ms ease-in`}}>
                  {this.props.projects.map(project =>
                    (<Card key={project._id} project={project} onClick={this.handleModal} />)
                  )}
                </div>
                {this.state.modalOn && <Modal {...this.state.modalData} onClick={this.handleModal}/>}
              </div>
            )}
          </Transition>
        </main>
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
