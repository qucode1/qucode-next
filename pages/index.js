import { Component } from 'react'
import Layout from '../comps/Layout'
import { fullscreen, hidden, colors } from '../styles/baseStyles'

const Icon = (props) => (
  <div className={props.hidden ? 'icon hidden' : 'icon'}>
    {props.children}
    <style jsx>{`
      .icon {
        // background-color: #e9e9e9;
        width: var(--sSize);
        height: var(--sSize);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)

const Row = (props) => (
  <div className={(props.social ? 'social ' : '') + (props.profile ? 'profile ' : '') + 'row'}>
    {props.children}
    <style jsx>{`
      .row {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        width:  var(--size);
        height: var(--sSize)
      }
      .profile.row {
        height: var(--y);
      }
      .social.row {
        width: var(--y);
        height: var(--sSize)
      }
    `}</style>
  </div>
)

const Column = (props) => (
  <div className='column'>
    {props.children}
    <style jsx>{`
      .column {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        width: var(--sSize);
        height: var(--y);
      }
    `}</style>
  </div>
)

class Index extends Component {
  render () {
    return (
      <Layout url={this.props.url}>

        <main>
          <div className='container'>
            <div className='centeredBox'>
              {/* Placeholder Row for equal icon spacing (Upper Right) */}
              <Row>
                <Column>
                  <Icon hidden/>
                </Column>
                <Row social>
                  <Icon hidden/>
                  <Icon hidden/>
                </Row>
                <Column>
                  <Icon hidden/>
                </Column>
              </Row>
              {/* Image Row with Lower Right Icons*/}
              <Row profile>
                <Column>
                  <Icon hidden/>
                  <Icon hidden/>
                </Column>
                <div className='profileImg'>
                  <img src="/static/profile.jpg" />
                </div>
                <Column>
                  <Icon>
                    <a className="socialLink" href='https://github.com/qucode1' target="_blank">
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                  </Icon>
                  <Icon>
                    <a className="socialLink" href='https://twitter.com/qucode' target="_blank">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </Icon>
                </Column>
              </Row>
              {/* Lower Left Icons*/}
              <Row>
                <Column>
                  <Icon hidden/>
                </Column>
                <Row social>
                  <Icon>
                    <a className="socialLink" href='https://trello.com/yannickpanis' target="_blank">
                      <i className="fa fa-trello" aria-hidden="true"></i>
                    </a>
                  </Icon>
                  <Icon>
                    <a className="socialLink" href='https://codepen.io/Quinius/' target="_blank">
                      <i className="fa fa-codepen" aria-hidden="true"></i>
                    </a>
                  </Icon>
                </Row>
                <Column>
                  <Icon hidden/>
                </Column>
              </Row>
            </div>
          </div>
          <style jsx global>{ colors }</style>
          <style jsx global>{ fullscreen }</style>
          <style jsx global>{ hidden }</style>
          <style jsx global>{`
            :root {
            --size: 65vW;
            --sSize: 10.4vW;
            --x: calc(var(--size) - var(--sSize));
            --y: calc(var(--x) - var(--sSize));
            }
            body {
              overflow: hidden
            }
            @media only screen and (min-width: 690px) {
              :root {
                --size: 450px;
                --sSize: 72px;
                --x: calc(var(--size) - var(--sSize));
                --y: calc(var(--x) - var(--sSize));
              }
            }
          `}</style>
          <style jsx>{`
            .container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .centeredBox {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              transform: rotateZ(45deg);
              width: var(--size);
              height: var(--size);
              // background-color: rgba(101, 24, 212, 0.61)
            }
            .profileImg {
              background-color: rgba(37, 148, 254, 0.74);
              width: var(--y);
              height: var(--y);
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center
              // margin: 5px
            }
            .profileImg > img {
              transform: rotateZ(-45deg);
              width: 145%
            }
            .fa {
              transform: rotate(-45deg);
              font-size: 7vW
              // 3.5em
            }
            .socialLink {
              color: var(--white)
            }
            .socialLink:hover, .socialLink:focus {
              color: var(--yellow);
              text-decoration: none
            }
            @media only screen and (min-width: 690px) {
              .fa {
                font-size: 3em
              }
            }
          `}</style>
        </main>
      </Layout>
    )
  }
}

export default Index
