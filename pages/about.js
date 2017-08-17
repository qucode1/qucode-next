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
    let skills = await fetch(`${variables.PUBLICAPI}skills`)
    let texts = await fetch(`${variables.PUBLICAPI}texts/c/about`)
    texts = await texts.json()
    skills = await skills.json()

    return { skills, texts }
  }
  constructor(props) {
    super(props)
    this.state = ({
      rows: {
        name: false,
        goal: false,
        skills: false,
        learning: false,
        story: false
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
    const calcDuration = aboutRowTransition + 4 * 1 / 3 * aboutRowTransition
    const containerDefaultStyle = {
      height: 0
    }
    return (
      <Layout url={this.props.url}>
        <main>
          <Transition in={this.state.container} timeout={calcDuration} appear={true} >
            {(state) => (
              <div className="container" style={{...containerDefaultStyle, ...containerTransitionStyles[state], transition: `${calcDuration}ms ease-in`}}>

                <Row key='name' in={this.state.rows.name} timeout={aboutRowTransition}>
                  <Item class="title">
                    <p>Name</p>
                  </Item>
                  <Item class="content">
                    <p>Yannick Panis</p>
                  </Item>
                </Row>
                <Row key='goal' in={this.state.rows.goal} timeout={aboutRowTransition}>
                  <Item class="title">
                    <p>Goal</p>
                  </Item>
                  <Item class="content">
                    <p>{this.props.texts.find(text => text.name === "goal").content}</p>
                  </Item>
                </Row>
                <Row key='skills' in={this.state.rows.skills} timeout={aboutRowTransition}>
                  <Item class="title">
                    <p>Skills</p>
                  </Item>
                  <Item class="content">
                  {this.props.skills.map((skill) => (
                    <Skill key={skill._id} {...skill}/>
                  ))}
                  </Item>
                </Row>
                <Row key='learning' in={this.state.rows.learning} timeout={aboutRowTransition}>
                  <Item class="title">
                    <p>Currently Learning</p>
                  </Item>
                  <Item class="content">
                    <p>{this.props.texts.find(text => text.name === "learning").content}</p>
                  </Item>
                </Row>
                <Row key='story' in={this.state.rows.story} timeout={aboutRowTransition}>
                  <Item class="title">
                    <p>My Story</p>
                  </Item>
                  <Item class="content">
                    <p>{this.props.texts.find(text => text.name === "story-en").content}</p>
                    <p>{this.props.texts.find(text => text.name === "story-de").content}</p>
                  </Item>
                </Row>
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
