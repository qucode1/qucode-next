import { Component } from 'react'

import { formStyles, button } from '../../styles/formStyles'


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

export default Input
