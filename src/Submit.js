import React from 'react';

class Submit extends React.Component {
  // this component should provide the user Input + Submit

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onClickSubmit = () => {
    this.props.handleSubmit(this.state.value);
    this.setState({
      value: ''
    })
  }

  handleKeyPress = (e) => {

    if(e.key === 'Enter') {
      this.props.handleSubmit(this.state.value);
        this.setState({
          value: ''
      })
    }
  }


  render() {
    return (
      <div className='ui text container'>
        <div className="ui fluid action input">
          <input type="text" placeholder="Chat Message..." onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={this.state.value} />
          <button className="ui button" onClick={this.onClickSubmit} >Submit</button>
        </div>
      </div>
    )
  }

}

export default Submit;