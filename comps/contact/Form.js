import { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <form className={this.props.class} onSubmit={ this.props.onSubmit }>
        {this.props.children}
        <style jsx>{`
          form {
            width: 100%;
            padding: 5px;
          }
        `}</style>
      </form>
    )
  }
}

export default Form
