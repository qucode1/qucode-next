import { Component } from 'react'
import Layout from '../comps/Layout'
import axios from 'axios'
import Transition from 'react-transition-group/Transition'

import { container } from '../styles/baseStyles'
import { colors } from '../styles/baseStyles'
import { formStyles, button } from '../styles/formStyles'
import { contactFormTransition, contactFormTransitionStyles } from '../styles/transitionStyles'

import Info from '../comps/contact/Info'
import Input from '../comps/contact/Input'
import Textarea from '../comps/contact/Textarea'
import Form from '../comps/contact/Form'


const variables = require('../variables.json')

const postRoute = `${variables.PUBLICAPI}contact`

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      tel: '',
      info: '',
      contactForm: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRequiredShadow = this.handleRequiredShadow.bind(this)
    this.changeInput = this.changeInput.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  handleRequiredShadow (e) {
    e.target.classList.remove('noShadow')
  }
  handleSubmit (e) {
    e.preventDefault()
    // console.log("handleSubmit")
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
      message: '',
      info: 'Please wait...'
    })

    this.onFormSubmit({
      name: userName,
      email: userEmail,
      subject: userSubject,
      tel: userTel,
      message: userMessage
    }, function(data) {
      // console.log("onFormSubmit callback")
      // console.log(data)
      // pass data to status message
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
    // console.log("onFormSubmit")
    axios.post(postRoute, {...data})
    .then(function(res) {
      callback(data)
      this.setState({ info: true })
      // console.log(res)
    }.bind(this))
    .catch(function (err) {
      this.setState({ info: false })
      console.error(err)
    }.bind(this))
  }
  componentDidMount() {
    this.setState({ contactForm: true })
  }
  render () {
    const contactFormDefaultStyle = {
      transform: 'scale(0.3)',
      opacity: 0
    }
    return (
      <Layout url={this.props.url}>
        <main>
          <Transition in={this.state.contactForm} timeout={0} appear={true} >
            {(state) => (
              <div className="container"  style={{...contactFormDefaultStyle, ...contactFormTransitionStyles[state], transition: `${contactFormTransition}ms ease-in`}}>
                <Info info={ this.state.info } />
                <Form class="contact-form" onSubmit={ this.handleSubmit }>
                  <Input name="name" placeholder="Full Name" type="text" required value={ this.state.name } onChange={ this.changeInput } onBlur={ this.handleRequiredShadow }/>
                  <Input name="email" placeholder="Email Address" type="email" required value={ this.state.email } onChange={ this.changeInput } onBlur={ this.handleRequiredShadow }/>
                  <Input name="subject" placeholder="Subject" type="text" required value={ this.state.subject } onChange={ this.changeInput } onBlur={ this.handleRequiredShadow }/>
                  <Input name="tel" placeholder="Phone Number (optional)" type="tel" value={ this.state.tel } onChange={ this.changeInput } onBlur={ this.handleRequiredShadow }/>
                  <Textarea name="message" placeholder="Your message" cols={30} rows={5} value={ this.state.message } onChange={ this.changeInput } onBlur={ this.handleRequiredShadow }required />
                  <Input type="submit" />
                </Form>
              </div>
            )}
          </Transition>
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
