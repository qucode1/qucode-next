import { Component } from 'react'

import { formStyles } from '../../styles/formStyles'

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

export default Textarea
