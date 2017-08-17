import { Component } from 'react'

class Info extends Component {
  render() {
    return (
      <div>
        {!this.props.info
        ? (this.props.info !== false
          ? <div></div>
          : <div className='info failure'>❗ Message could not be sent! Please try again later. ❗</div>)
        : (this.props.info !== true
          ? <div className='info'>{ this.props.info } 💬</div>
          : <div className='info success'>Message has been sent! ✔</div>)
        }
        <style jsx>{`
          .info {
            padding: 5px 15px;
            background-color: rgb(144, 215, 255);
            border-radius: 5px;
            margin: 10px auto;
          }
          .success {
            background-color: rgb(162, 241, 8)
          }
          .failure {
            background-color: rgb(255, 55, 55)
          }
        `}
        </style>
      </div>
    )
  }
}

export default Info
