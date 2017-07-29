import { Component } from 'react'
import Layout from '../comps/Layout'

class Contact extends Component {
  render () {
    return (
      <Layout url={this.props.url}>
        <main>
          <div>
            <p>Contact</p>
          </div>
        </main>
      </Layout>
    )
  }
}

export default Contact
