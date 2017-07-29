import { Component } from 'react'
import Layout from '../comps/Layout'

class Portfolio extends Component {
  render () {
    return (
      <Layout url={this.props.url}>
        <main>
          <div>
            <p>Portfolio</p>
          </div>
        </main>
      </Layout>
    )
  }
}

export default Portfolio
