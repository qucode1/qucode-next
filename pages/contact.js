import { Component } from 'react'
import Layout from '../comps/Layout'
import axios from 'axios'

import { container } from '../styles/baseStyles'
import { colors } from '../styles/baseStyles'
import { formStyles, button } from '../styles/formStyles'

const variables = require('../variables.json')

const postRoute = `${variables.PUBLICAPI}contact`

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
//   return {
//   if(!props.info && props.info !== false) return null
//   else if(!props.info) {
//     <div>Message could not be sent! Please try again later.</div>
//   }
//   else if( props.info && props.info !== true ) {
//     <div>{ props.info }</div>
//   } else {
//     <div>Message has been sent!</div>
//   }
// }

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
               value={this.props.value}
               onChange={this.props.onChange}
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
                  {...this.props}
                  value={this.props.value}
                  onChange={this.props.onChange}
                  >
        </textarea>
        <style jsx>{ formStyles }</style>
      </div>
    )
  }
}

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

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      tel: '',
      info: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeInput = this.changeInput.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log("handleSubmit")
    let userName = this.state.name.trim()
    let userEmail = this.state.email.trim()
    let userSubject = this.state.subject.trim()
    let userTel = this.state.tel.trim()
    let userMessage = this.state.message

    if(!userName || !userEmail || !userSubject || !userMessage) return

    this.setState({
      name: '',
      email: '',
      subject: '',
      tel: '',
      info: 'Please wait...'
    })

    this.onFormSubmit({
      name: userName,
      email: userEmail,
      subject: userSubject,
      tel: userTel,
      message: userMessage
    }, function(data) {
      console.log("onFormSubmit callback")
      console.log(data)
      // this.setState({ info: data })
    }.bind(this))
  }

  changeInput (e) {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  onFormSubmit (data, callback) {
    console.log("onFormSubmit")
    axios.post(postRoute, {...data})
    .then(function(res) {
      callback(data)
      this.setState({ info: true })
      console.log(res)
    }.bind(this))
    .catch(function (err) {
      this.setState({ info: false })
      console.error(err)
    }.bind(this))
  }

  render () {
    return (
      <Layout url={this.props.url}>
        <main>
          <div className="container">
            <Info info={ this.state.info } />
            <Form class="contact-form" onSubmit={ this.handleSubmit }>
              <Input name="name" placeholder="Full Name" type="text" required value={ this.state.name } onChange={ this.changeInput }/>
              <Input name="email" placeholder="Email Address" type="email" required value={ this.state.email } onChange={ this.changeInput }/>
              <Input name="subject" placeholder="Subject" type="text" required value={ this.state.subject } onChange={ this.changeInput }/>
              <Input name="tel" placeholder="Phone Number" type="tel" value={ this.state.tel } onChange={ this.changeInput }/>
              <Textarea name="message" placeholder="Your message" cols={30} rows={5} value={ this.state.message } onChange={ this.changeInput } required />
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
