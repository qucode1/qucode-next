import { Component } from 'react'

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

export default Row
