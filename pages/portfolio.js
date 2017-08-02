import { Component } from 'react'
import Layout from '../comps/Layout'
import Link from 'next/link'

const Card = (props) => (
  <Link href="#">
    <a className="card">
      <div className="corner tl"></div>
      <div className="corner tr"></div>
      <div className="corner br"></div>
      <div className="corner bl"></div>
      <div className="wrapper"></div>
      <style jsx>{`
        .card {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60vW;
          height: 33.75vW;
          max-width: 300px;
          max-height: 168.75px;
          margin: 5px;
        }
        .card:hover .corner, .card:focus .corner {
          width: 31vW;
          height: 17.875vW;
          max-width: 156px;
          max-height: 90.375px;
        }
        .corner {
          position: absolute;
          width: 0vW;
          height: 0vW;
          max-width: 30px;
          max-height: 30px;
          background-color: rgb(31, 164, 237);
          transition: 0.25s ease-out
        }
        .tl {
          top: 0;
          left: 0;
        }
        .tr {
          top: 0;
          right: 0;
        }
        .br {
          bottom: 0;
          right: 0
        }
        .bl {
          bottom: 0;
          left: 0
        }
        .wrapper {
          width: 58vW;
          height: 31.75vW;
          max-width: 290px;
          max-height: 158.75px;
          background-color: lightgrey;
          z-index: 2
        }
      `}</style>
    </a>
  </Link>
)

class Portfolio extends Component {
  render () {
    return (
      <Layout url={this.props.url}>
        <main>
          <div className="gallery">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
        <style jsx>{`
          .gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            margin-top: 30px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Portfolio
