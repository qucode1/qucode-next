import { Component } from 'react'

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

export default Column
