import React from 'react';
import Chat from './Chat';
import Submit from './Submit';
import fire from './fire';

class ChatList extends React.Component {

  // this component should keep track of the chats in a simple array
  state = {
    chats: []
  }

  componentWillMount() {
    let messagesRef = fire.database().ref('messages').orderByKey();
    messagesRef.on('child_added', snapshot => {

      let message = {id: snapshot.key, text: snapshot.val(), timestamp: Date.now()};
      this.setState({
        chats: [message].concat(this.state.chats)
      })
    })

    messagesRef.on('child_removed', snapshot => {
      
      this.deleteMessage(snapshot.key);
    })

    messagesRef.on('child_changed', snapshot => {
      let updatedPostId = snapshot.key;
      let updatedMessage = snapshot.val();
      this.updateMessage(updatedPostId, updatedMessage);
    })

  }


  updateMessage = (messageId, messageText) => {
    let previousChats = this.state.chats;

    let newChats = previousChats.map((chat) => {
      if(chat.id === messageId) {
        chat.text = messageText;
        return chat;
      } else {
        return chat;
      }
    })

    this.setState({
      chats: newChats
    })
  }

  deleteMessage = (messageId) => {
    
    let previousChats = this.state.chats;
    const newChats = previousChats.filter((chat) => {
        
        return chat.id !== messageId
    });



    this.setState({
      chats: newChats
    })
  }
  
  handleSubmit = (submitText) => {
   
    fire.database().ref('messages').push(submitText);
  }

  handleClickDelete = (messageId) => {
    
    fire.database().ref('messages').child(messageId).remove()

  }

  handleClickEdit = (messageId, messageText) => {
    
    let newPostKey = fire.database().ref('messages').child(messageId).set(messageText);
    
  }
  
  render() {
    
    
    let tempChats = this.state.chats;
    const sortedChats = tempChats.sort((a, b) => {
      
      return a.timestamp - b.timestamp;
    })

    const chats = sortedChats.map((chat) => {
          
          return  (
            <Chat 
              text={chat.text} 
              key={chat.id} 
              id={chat.id} 
              handleClickDelete={this.handleClickDelete}
              handleClickEdit={this.handleClickEdit} 
              handleSubmit={this.handleSubmit}
              />
          )
      })

    
    return (
      <div className='ui text container'>
        {chats}
        <Submit handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default ChatList;