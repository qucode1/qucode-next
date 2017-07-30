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
          <style jsx global>{`
            :root {
            --size: 50vW;
            --sSize: 8vW;
            --x: calc(var(--size) - var(--sSize));
            --y: calc(var(--x) - var(--sSize));
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
            .row {
              display: flex;
              justify-content: space-around;
              flex-direction: row;
              width:  var(--size);
              height: var(--sSize)
            }
            .profileRow {
              display: flex;
              justify-content: space-around;
              flex-direction: row;
              width: var(--size);
              height: var(--y);
            }
            .column {
              display: flex;
              justify-content: space-around;
              flex-direction: column;
              height: var(--size);
              width: var(--sSize)
            }
            .social.row {
              width: var(--y);
              height: var(--sSize)
            }
            .social.column {
              width: var(--sSize);
              height: var(--y);
            }
            .icon {
              background-color: rgba(85, 193, 0, 0.7);
              width: var(--sSize);
              height: var(--sSize);
            }
            .profile {
              background-color: rgba(37, 148, 254, 0.74);
              width: var(--y);
              height: var(--y);
              // margin: 5px
            }
          `}</style>
        </main>
      </Layout>
    )
  }
}

export default Index
