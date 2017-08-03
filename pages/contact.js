import { Component } from 'react'
import Layout from '../comps/Layout'

import { container } from '../styles/baseStyles'
import { formStyles } from '../styles/formStyles'

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
        <label className={ (this.state.isActive ? "isActive " : "") + (this.state.isFilled ? "isFilled" : "") }ref={(label) => {this.Label = label}} htmlFor={this.props.name}>{this.props.label}</label>
        <input onFocus={this.handleFocus} onBlur={this.handleFocus} id={this.props.name} name={this.props.name} type={this.props.type} placeholder={this.props.label} required={this.props.required}/>
      <style jsx>{ formStyles }</style>
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
        <label className={ (this.state.isActive ? "isActive " : "") + (this.state.isFilled ? "isFilled" : "") } ref={(area) => {this.TextArea = area}} htmlFor={this.props.name}>{this.props.label}</label>
        <textarea id={this.props.name} onFocus={this.handleFocus} onBlur={this.handleFocus} cols={this.props.cols} rows={this.props.rows} placeholder={this.props.label} required={this.props.required} ></textarea>
        <style jsx>{ formStyles }</style>
      </div>
    )
  }
}

class Form extends Component {
  render() {
    return (
      <form className={this.props.class}>
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
    return (
      <Layout url={this.props.url}>
        <main>
          <div className="container">
            <Form class="contact-form">
              <Input name="name" label="Full Name" type="text" required />
              <Input name="email" label="Email Address" type="text" required />
              <Input name="subject" label="Subject" type="text" required />
              <Input name="tel" label="Phone Number" type="text" />
              <Textarea name="message" label="Your message" cols={30} rows={5} required />
            </Form>
          </div>
        </main>
        <style jsx>{ container }</style>
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
