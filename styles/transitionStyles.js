export const duration = 300

export const pageTransition = 1000

export const profileTransitionStyles = {
  entering: {
    transform: 'scale(0.3)',
    opacity: 0
  },
  entered: {
    transform: 'scale(1)',
    opacity: 1
  }
}

export const iconTransitionStyles = {
  entering: {
    transform: 'translate3d(-60%, -60%, 0px)',
    opacity: 0
  },
  entered: {
    transform: 'translate3d(0px, 0px, 0px)',
    opacity: 1
  }
}

export const indexTransitionStyles = {
  entering: {
    transform: 'translateX(100%)'
  },
  entered: {
    transform: 'translateX(0)'
  },
  exiting: {
    transform: 'translate(0)'
  },
  exited: {
    transform: 'translate(-100%)'
  }
}
