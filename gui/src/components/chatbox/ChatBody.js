import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import ChatBodyItem from './ChatBodyItem';
// import '../styles/style.css';

import { dataTest } from  '../../DataTest';


const { Content } = Layout;

class ChatBody extends Component {

    componentDidUpdate() {
        var frame = document.getElementById('chat-content');
        if (frame) {
            frame.scrollTop = frame.scrollHeight;
        }    
        
    }

    render() {
        // const { message, currentChat, sign } = this.props;
        const { message, currentChat, sign } = dataTest.chatBody;
        const { listMessageOfCurrentCoversation, currentConversation } = this.props;

        if (message.length === 0) {
            return ( <Content>
                <div className='chat-frame-intro'>
                    <div className="title"> {
                        currentConversation.id.length === 0 
                        ? 'No conversation' 
                        : 'Let\'s start!'
                    } </div>
                    <div className="subtitle"> {
                        currentConversation.id.length === 0 
                        ? 'Please select a user, channel or create new conversation to continue'
                        : 'Send some interesting messages to start'
                    } </div>                    
                </div>
            </Content> );
        } else {
            return ( 
            <Content style={{overflow:'auto'}} ref={(ref) => { this.content = ref}} id='chat-content'>
            { listMessageOfCurrentCoversation.map(({msgId, user, time, message}) =>
                <ChatBodyItem key={msgId} user={user} time={time} msg={message} isMine={user === sign.user} />
            )}
            </Content>    
            );
        }    
    }
}

const mapStateToProps = state => ({
    // sign: state.sign,
    currentConversation: state.currentConversationReducer,
    // message: state.message
    listMessageOfCurrentCoversation: state.loadMessagesReducer
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatBody);

// export default ChatBody;