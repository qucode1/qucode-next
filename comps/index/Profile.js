import { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import { duration, profileTransitionStyles } from '../../styles/transitionStyles'


const ProfileImg = (props) => (
  <Transition in={props.in} timeout={0} children={props.children} appear={true} addEndListener={(node, done) => {
    node.addEventListener('transitionend', props.handleIconState, done, false);
  }}>
    {(state) => (
      <div className='profileAnimationStyles' style={{...profileTransitionStyles[state], transition: `${duration}ms ease-in`}}>
        {props.children}
        <style jsx>{`
          .profileAnimationStyles {
            transform: scale(0.3);
            opacity: 0;
          }
        `}</style>
      </div>
    )}
  </Transition>
)

export default ProfileImg
