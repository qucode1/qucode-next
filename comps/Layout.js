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
          <meta name="theme-color" content="rgb(31, 164, 237)" />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="QuCode | Javascript Developer" />
          <meta name="twitter:site" content="@qucode" />
          <meta name="twitter:description" content="I am am a web developer, focusing on javascript with Node.js, react & mongodb." />
          <meta name="twitter:image" content="/static/gallery.png" />
          <meta name="twitter:image:alt" content="QuCode Landing Page" />
          <meta name="twitter:creator" content="@qucode" />
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
        </Head>
        <Header url={this.props.url}/>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
