import { Component } from 'react'
import Layout from '../comps/Layout'
import Icon from '../comps/index/Icon'
import ProfileImg from '../comps/index/Profile'
import Row from '../comps/index/Row'
import Column from '../comps/index/Column'
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Transition from 'react-transition-group/Transition'
import { duration, pageTransition, indexTransitionStyles } from '../styles/transitionStyles'

import { fullscreen, hidden, colors } from '../styles/baseStyles'
import { dimensions, indexBasics } from '../styles/indexStyles'

const Slide = (props) => (
  <Transition in={props.in} children={props.children} timeout={pageTransition}>
    {(state) => (
      <div style={{
        transform: 'translateX(100%)',
        position: 'relative',
        ... indexTransitionStyles[state]
      }}>
        {props.children}
      </div>
    )}
  </Transition>
)

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      in: false,
      icons: false,
      profile: false,
    })
    this.handleIconState = this.handleIconState.bind(this)
    this.handleProfileState = this.handleProfileState.bind(this)
  }
  componentDidMount() {
    this.setState({
      profile: true
    })
  }
  handleIconState () {
    this.setState({
      icons: true
    })
  }
  handleProfileState() {
    this.setState({
      profile: true
    })
  }
  render () {
    return (
      <Layout url={this.props.url} >
        <main >
          <div className='container'>
            <div className='centeredBox'>
              {/* Placeholder Row for equal icon spacing (Upper Right) */}
              <Row>
                <Column>
                  <Icon hidden/>
                </Column>
                <Row social>
                  <Icon hidden/>
                  <Icon hidden/>
                </Row>
                <Column>
                  <Icon hidden/>
                </Column>
              </Row>
              {/* Image Row with Lower Right Icons*/}
              <Row profile>
                <Column>
                  <Icon hidden/>
                  <Icon hidden/>
                </Column>
                <ProfileImg key='profileImg' in={this.state.profile} timeout={duration} unmountOnExit={true} handleIconState={this.handleIconState}>
                  <div className='profileImg'>
                    <img src="/static/profile.jpg" />
                  </div>
                </ProfileImg>
                <Column>
                  <Icon key='github' in={this.state.icons} timeout={duration}>
                    <a className="socialLink" href='https://github.com/qucode1' target="_blank">
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                  </Icon>
                  <Icon key='twitter' in={this.state.icons} timeout={duration}>
                    <a className="socialLink" href='https://twitter.com/qucode' target="_blank">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </Icon>
                </Column>
              </Row>
              {/* Lower Left Icons*/}
              <Row>
                <Column>
                  <Icon hidden/>
                </Column>
                <Row social>
                  <Icon key='trello' in={this.state.icons} timeout={duration}>
                    <a className="socialLink" href='https://trello.com/yannickpanis' target="_blank">
                      <i className="fa fa-trello" aria-hidden="true"></i>
                    </a>
                  </Icon>
                  <Icon key='codepen' in={this.state.icons} timeout={duration}>
                    <a className="socialLink" href='https://codepen.io/Quinius/' target="_blank">
                      <i className="fa fa-codepen" aria-hidden="true"></i>
                    </a>
                  </Icon>
                </Row>
                <Column>
                  <Icon hidden/>
                </Column>
              </Row>
            </div>
          </div>
          <style jsx global>{ colors }</style>
          <style jsx global>{ fullscreen }</style>
          <style jsx global>{ hidden }</style>
          <style jsx global>{ dimensions }</style>
          <style jsx global>{ indexBasics }</style>
        </main>
      </Layout>
    )
  }
}

export default Index
