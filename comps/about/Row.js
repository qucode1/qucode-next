import { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import { aboutRowTransition, rowTransitionStyles } from '../../styles/transitionStyles'

const Row = (props) => (
  <Transition in={props.in} timeout={aboutRowTransition} children={props.children} appear={true} >
    {(state) => (
      <div className="row" style={{...rowTransitionStyles[state], transition: `${aboutRowTransition}ms ease-in`}}>
        {props.children}
        <style jsx>{`
          .row {
            display: flex;
            flex-direction: column;
            background-color: #eaf8ff;
            transform: translateX(-100%) scale(0.3);
            opacity: 0
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
    )}
  </Transition>
)

export default Row
