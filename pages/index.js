import { Component } from 'react'
import Layout from '../comps/Layout'

class Index extends Component {
  render () {
    return (
      <Layout url={this.props.url}>
        <main>
          <div>
            <p>Index</p>
          </div>
        </main>
      </Layout>
    )
  }
}

export default Index
