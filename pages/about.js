import { Component } from 'react'
import Layout from '../comps/Layout'
import fetch from 'isomorphic-unfetch'
const variables = require('../variables.json')
// import { aboutStyles } from '../styles/aboutStyles'
import { container } from '../styles/baseStyles'
import Transition from 'react-transition-group/Transition'
import { aboutRowTransition, containerTransitionStyles } from '../styles/transitionStyles'

import Skill from '../comps/about/Skill'
import Row from '../comps/about/Row'
import Item from '../comps/about/Item'

class About extends Component {
  static async getInitialProps() {
    let rows = await fetch(`${variables.PUBLICAPI}about/rows`)
    rows = await rows.json()

    return { rows }
  }
  constructor(props) {
    super(props)
    const rowObjects = {}
    props.rows.map( row => {
      let rowName = row.name
      return rowObjects[rowName] = false
    })
    this.state = ({
      rows: {
        ...rowObjects
        // name: false,
        // goal: false,
        // skills: false,
        // learning: false,
        // story: false
      },
      currentRow: 0,
      container: false
    })
    this.handleRowStates = this.handleRowStates.bind(this)
  }
  keys() {
    return Object.keys(this.state.rows)
  }
  handleRowStates() {

    let row = this.keys()
    let rows = this.state.rows
    rows[row[this.state.currentRow]] = true
    let currentRow = ++this.state.currentRow
    this.setState({
      rows,
      currentRow
    })
    // console.log(this.state.rows)
    // console.log(this.state.currentRow)
    if(this.state.currentRow <= row.length - 1) {
      // console.log("timeout")
      setTimeout(this.handleRowStates, aboutRowTransition / 3)
    }
  }
  componentDidMount() {
    this.setState({ container: true })
    this.handleRowStates()
  }
  render () {
    // console.log(this.props.texts)
    const calcDuration = aboutRowTransition + this.props.rows.length * 1 / 3 * aboutRowTransition
    const containerDefaultStyle = {
      height: 0
    }
    return (
      <Layout url={this.props.url}>
        <main>
          <Transition in={this.state.container} timeout={calcDuration} appear={true} >
            {(state) => (
              <div className="container" style={{...containerDefaultStyle, ...containerTransitionStyles[state], transition: `${calcDuration}ms ease-in`}}>
                {this.props.rows.map( row => (
                  <Row key={row.name} in={this.state.rows[row.name]} timeout={aboutRowTransition}>
                    <Item class='title'>
                      <p>{row.name}</p>
                    </Item>
                    <Item class='content'>
                      <p>{row.text && row.text.content}</p>
                      {row.skills.map((skill) => (
                        <Skill key={skill._id} {...skill}/>
                      ))}
                    </Item>
                  </Row>
                ))}

              </div>
            )}
          </Transition>
        </main>
        <style jsx>{ container }</style>
      </Layout>
    )
  }
}

export default About
