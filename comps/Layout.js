import Header from './Header'
import Head from 'next/head'
import react from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Transition from 'react-transition-group/Transition'
import pageTransition from '../styles/transitionStyles'

const layoutStyle = {
  fontFamily: 'sans-serif'
}

class Layout extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "QuCode | Webdevelopment"
    }
  }
  render () {
    return (
      <div style={layoutStyle}>
        <Head>
          <title>{this.state.title}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
        </Head>
        <Header url={this.props.url}/>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
