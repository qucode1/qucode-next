import { Component } from 'react'
import Layout from '../comps/Layout'
import fetch from 'isomorphic-unfetch'

import { aboutStyles } from '../styles/aboutStyles'

const Skill = (props) => (
  <div key={props._id}>
    <p>{props.name}</p>
    <div className="prog-cont">
      <div className="prog-val" style={{width: props.progress, backgroundColor: props.color}}></div>
    </div>
    <img src={props.image} />
    <style jsx>{`
      .prog-cont {
        width: 90%;
        height: 10px;
        border-radius: 10px;
        background-color: lightgrey;
        margin: auto;
      }
      .prog-val {
        width: 50%;
        height: 100%;
        border-radius: 10px;
        background-color: purple
      }
    `}</style>
  </div>
)

class About extends Component {
  static async getInitialProps() {
    let skills = await fetch('http://localhost:3001/skills')
    let texts = await fetch('http://localhost:3001/texts/c/about')
    texts = await texts.json()
    skills = await skills.json()

    return { skills, texts }
  }
  render () {
    console.log(this.props.texts)
    return (
      <Layout url={this.props.url}>
        <main>
          <div className="container">

            <div className="row">
              <div className="title">
                <p>Name</p>
              </div>
              <div className="content">
                <p>Yannick Panis</p>
              </div>
            </div>
            <div className="row">
              <div className="title">
                <p>Goal</p>
              </div>
              <div className="content">
                <p>{this.props.texts.find(text => text.name === "goal").content}</p>
              </div>
            </div>
            <div className="row">
              <div className="title">
                <p>Skills</p>
              </div>
              <div className="content">
              {this.props.skills.map((skill) => (
                <Skill key={skill._id} {...skill}/>
              ))}
              </div>
            </div>
            <div className="row">
              <div className="title">
                <p>Currently Learning</p>
              </div>
              <div className="content">
                <p>{this.props.texts.find(text => text.name === "learning").content}</p>
              </div>
            </div>
            <div className="row">
              <div className="title">
                <p>My Story</p>
              </div>
              <div className="content">
                <p>{this.props.texts.find(text => text.name === "story-en").content}</p>
                <p>{this.props.texts.find(text => text.name === "story-de").content}</p>
              </div>
            </div>
          </div>
        </main>
        <style jsx>{ aboutStyles }</style>
      </Layout>
    )
  }
}

export default About
