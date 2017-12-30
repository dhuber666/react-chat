import React from 'react';

class EditForm extends React.Component {

  state = {
    value: this.props.value
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onClickSubmit = () => {
    this.props.handleClickEdit(this.state.value);
    
  }

  handleKeyPress = (e) => {

    if(e.key === 'Enter') {
      this.props.handleClickEdit(this.state.value);
        
    }
  }

  render() {
    return(
      <div className='ui text container'>
        <div className="ui fluid action input">
          <input type="text" placeholder="Chat Message..." onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={this.state.value} />
          <button className="ui button" onClick={this.onClickSubmit} >Submit</button>
        </div>
      </div>
    )
  }
}

export default EditForm;