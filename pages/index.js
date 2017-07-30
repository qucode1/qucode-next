import { Component } from 'react'
import Layout from '../comps/Layout'
import { fullscreen, hidden } from '../styles/baseStyles'

class Index extends Component {
  render () {
    const size = 50
    const sSize = 7
    return (
      <Layout url={this.props.url}>

        <main>
          <div className='container'>
            <div className='centeredBox'>
              <div className='row'>
                <div className='social column'>
                  <div className='icon hidden'></div>
                </div>
                <div className='social row'>
                  <div className='icon'></div>
                  <div className='icon'></div>
                </div>
                <div className='social column'>
                  <div className='icon hidden'></div>
                </div>
              </div>
              <div className='profileRow'>
                <div className='social column'>
                  <div className='icon'></div>
                  <div className='icon'></div>
                </div>
                <div className='profile'></div>
                <div className='social column'>
                  <div className='icon'></div>
                  <div className='icon'></div>
                </div>
              </div>
              <div className='row'>
                <div className='social column'>
                  <div className='icon hidden'></div>
                </div>
                <div className='social row'>
                  <div className='icon'></div>
                  <div className='icon'></div>
                </div>
                <div className='social column'>
                  <div className='icon hidden'></div>
                </div>
              </div>
            </div>
          </div>
          <style jsx global>{ fullscreen }</style>
          <style jsx global>{ hidden }</style>
          <style jsx>{`
            :root {
              --size: 50;
              --sSize: 7;
            }
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
              width: var(size)vW;
              height: var(size)vW;
              // background-color: rgba(101, 24, 212, 0.61)
            }
            .row {
              display: flex;
              justify-content: space-around;
              flex-direction: row;
              width: 50vW;
              height: 7vW
            }
            .profileRow {
              display: flex;
              justify-content: space-around;
              flex-direction: row;
              width: 50vW;
              height: 36vW
            }
            .column {
              display: flex;
              justify-content: space-around;
              flex-direction: column;
              height: 50vW;
              width: 7vW
            }
            .social.row {
              width: 36vW;
              height: 7vW
            }
            .social.column {
              width: 7vW;
              height: 36vW
            }
            .icon {
              background-color: rgba(85, 193, 0, 0.7);
              width: 7vW;
              height: 7vW;
            }
            .profile {
              background-color: rgba(37, 148, 254, 0.74);
              width: 36vw;
              height: 36vW;
              // margin: 5px
            }
          `}</style>
        </main>
      </Layout>
    )
  }
}

export default Index
