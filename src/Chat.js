import React from 'react';
import EditForm from './EditForm';

class Chat extends React.Component {
  // this is a single Chat. It simple renders the text from props

  state = {
    editForm: false
  }

  
  onClickDelete = () => {
    this.props.handleClickDelete(this.props.id);
  }

  onClickEdit = () => {
    // this.props.handleClickEdit(this.props.id);
    this.setState({
      editForm: true
    })
  }

  handleClickEdit = (messageText) => {
    this.props.handleClickEdit(this.props.id, messageText)
    this.setState({
      editForm: false
    })
    
  }

  render() {

    if(this.state.editForm) {
      return (
        <EditForm value={this.props.text} handleClickEdit={this.handleClickEdit} />
      )
    } else {
      return (
      
        <div className='ui segment'>
          
            <p> {this.props.text} </p>
            <button onClick={this.onClickDelete} className='ui icon button'> <i className='trash icon' /> </button>
            <button onClick={this.onClickEdit} className='ui icon button'> <i className='edit icon' /> </button>
          
        </div>
      
    )
    }

    
  }
}

export default Chat;