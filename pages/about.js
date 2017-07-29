import { Component } from 'react'
import Layout from '../comps/Layout'

class About extends Component {
  render () {
    return (
      <Layout url={this.props.url}>
        <main>
          <div>
            <p>About</p>
          </div>
        </main>
      </Layout>
    )
  }
}

export default About
