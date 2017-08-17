import { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import { duration, iconTransitionStyles } from '../../styles/transitionStyles'

class Icon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zIndex: -1
    }
    this.done = this.done.bind(this)
  }
  done () {
    this.setState({ zIndex: 0 })
  }
  render() {
    return (
      <Transition in={this.props.in} timeout={0} children={this.props.children} appear={true} addEndListener={(node, done) => {
        node.addEventListener('transitionend', this.done, done, false);
      }}>
        {(state) => (
          <div className={this.props.hidden ? 'icon hidden' : 'icon'} style={{...iconTransitionStyles[state], transition: `${duration}ms ease-in`, zIndex: this.state.zIndex}}>
            {this.props.children}
            <style jsx>{`
              .icon {
                width: var(--sSize);
                height: var(--sSize);
                display: flex;
                justify-content: center;
                align-items: center;
                transform: translate3d(-60%, -60%, 0px);
                z-index: -1;
                opacity: 0;
                position: relative
              }
            `}</style>
          </div>
        )}
      </Transition>
    )
  }
}

export default Icon
