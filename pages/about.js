import { Component } from 'react'
import Layout from '../comps/Layout'
import fetch from 'isomorphic-unfetch'

import { aboutStyles } from '../styles/aboutStyles'

const Skill = (props) => (
  <div className="skill" key={props._id}>
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <p>{props.name}</p>
      <img src={props.image} style={{height: "45px"}}/>
    </div>
    <div className="prog-cont">
      <div className="prog-val" style={{width: props.progress, backgroundColor: props.color}}></div>
    </div>
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
      .skill {
        width: 45%
      }
    `}</style>
  </div>
)

const Row = (props) => (
  <div className="row">
    {props.children}
    <style jsx>{`
      .row {
        display: flex;
        flex-direction: column
      }
      .row:nth-child(even) {
        background-color: #fff
      }
      @media only screen and (min-width: 600px) {
        .row {
          flex-direction: row
        }
      }
    `}</style>
  </div>
)

const Item = (props) => (
  <div className={props.class}>
    {props.children}
    <style jsx>{`
      .title, .content {
        padding: 0 5px
      }
      .title {
        flex: 1;
        font-weight: bold
      }
      .content {
        flex: 3;
        display: flex;
        flex-wrap: wrap
      }
      @media only screen and (min-width: 600px) {
        .title {
          padding: 5px;
          border-right: 2px solid rgb(13, 100, 148);
          color: white;
          font-weight: normal
          text-align: right;
          letter-spacing: 1.5px;
          background-image: linear-gradient(to bottom, rgb(54, 173, 239), rgb(32, 161, 232));
        }
        .content {
          padding: 5px
        }
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

            <Row>
              <Item class="title">
                <p>Name</p>
              </Item>
              <Item class="content">
                <p>Yannick Panis</p>
              </Item>
            </Row>
            <Row>
              <Item class="title">
                <p>Goal</p>
              </Item>
              <Item class="content">
                <p>{this.props.texts.find(text => text.name === "goal").content}</p>
              </Item>
            </Row>
            <Row>
              <Item class="title">
                <p>Skills</p>
              </Item>
              <Item class="content">
              {this.props.skills.map((skill) => (
                <Skill key={skill._id} {...skill}/>
              ))}
              </Item>
            </Row>
            <Row>
              <Item class="title">
                <p>Currently Learning</p>
              </Item>
              <Item class="content">
                <p>{this.props.texts.find(text => text.name === "learning").content}</p>
              </Item>
            </Row>
            <Row>
              <Item class="title">
                <p>My Story</p>
              </Item>
              <Item class="content">
                <p>{this.props.texts.find(text => text.name === "story-en").content}</p>
                <p>{this.props.texts.find(text => text.name === "story-de").content}</p>
              </Item>
            </Row>
          </div>
        </main>
        <style jsx>{ aboutStyles }</style>
      </Layout>
    )
  }
}

export default About
