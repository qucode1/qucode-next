import { Component } from 'react'
import Layout from '../comps/Layout'

import { container } from '../styles/baseStyles'
import { colors } from '../styles/baseStyles'
import { formStyles, button } from '../styles/formStyles'

const variables = require('../variables.json')

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFilled: false,
      isActive: false
    }
    this.handleFocus = this.handleFocus.bind(this)
  }
  handleFocus (e) {
    // console.log(this.Label);
    e.nativeEvent.type === "focus"
    ? this.setState({ isActive: true })
    : this.setState({ isActive: false })
    e.target.value.length >= 1
    ? this.setState({ isFilled: true })
    : this.setState({ isFilled: false })
  }
  render() {
    return (
      <div>
        <label className={ (this.state.isActive
                            ? "isActive " : "") + (this.state.isFilled ? "isFilled"
                            : "") }
               ref={(label) => {this.Label = label}}
               htmlFor={this.props.name}>
          {this.props.placeholder}
        </label>
        <input onFocus={this.handleFocus}
               onBlur={this.handleFocus}
               id={this.props.name}
               className={this.props.type === "submit" && "button"}
               {...this.props}
        />
      <style jsx>{ formStyles }</style>
      <style jsx>{ button }</style>
      <style jsx>{`
        .button {
          background-color: var(--yellow);
          color: var(--black)
        }
      `}
      </style>
      </div>
    )
  }
}

class Textarea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFilled: false,
      isActive: false
    }
    this.handleFocus = this.handleFocus.bind(this)
  }
  handleFocus (e) {
    // console.log(e.nativeEvent.type);
    e.nativeEvent.type === "focus"
    ? this.setState({ isActive: true })
    : this.setState({ isActive: false })
    e.target.value.length >= 1
    ? this.setState({ isFilled: true })
    : this.setState({ isFilled: false })
  }
  render() {
    return(
      <div>
        <label className={ (this.state.isActive
                            ? "isActive " : "") + (this.state.isFilled ? "isFilled"
                            : "") }
               ref={(area) => {this.TextArea = area}}
               htmlFor={this.props.name}>
          {this.props.placeholder}
        </label>
        <textarea id={this.props.name}
                  onFocus={this.handleFocus}
                  onBlur={this.handleFocus}
                  {...this.props}>
        </textarea>
        <style jsx>{ formStyles }</style>
      </div>
    )
  }
}

class Form extends Component {
  render() {
    return (
      <form action={this.props.action} method={this.props.method} className={this.props.class}>
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

class Contact extends Component {
  render () {
    const postRoute = `${variables.PUBLICAPI}contact`
    return (
      <Layout url={this.props.url}>
        <main>
          <div className="container">
            <Form action={postRoute} method="post" class="contact-form">
              <Input name="name" placeholder="Full Name" type="text" required />
              <Input name="email" placeholder="Email Address" type="email" required />
              <Input name="subject" placeholder="Subject" type="text" required />
              <Input name="tel" placeholder="Phone Number" type="tel" />
              <Textarea name="message" placeholder="Your message" cols={30} rows={5} required />
              <Input type="submit" />
            </Form>
          </div>
        </main>
        <style jsx>{ container }</style>
        <style jsx global>{ colors }</style>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center
          }
        `}</style>
      </Layout>
    )
  }
}

export default Contact
