import React, { Component } from 'react';
import '../styles/style.css';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Sidebar from './sidebar/Sidebar'
import ChatHeader from "./chatbox/ChatHeader";
import ChatBody from './chatbox/ChatBody';
import ChatFooter from './chatbox/ChatFooter';
import { loadListConversations } from '../services/conversationsService'


class Chat extends Component {

    componentDidMount() {
        // load list conversations
        this.props.loadListConversations();
    }

    render() {
        return (
            <Layout className='chat-container'>
                <Sidebar />
                <Layout style={{height:'100vh'}}>
                    <ChatHeader />
                    <ChatBody />
                    <ChatFooter />
                </Layout>
            </Layout>
        );
    }

}

const mapStateToProps = state => ({
    sign: state.sign,
    currentChat: state.currentChat
});

const mapDispatchToProps = {
    loadListConversations
};
// loadConversationList: (listConversation) => dispatch(loadConversationList(listConversation)),
    // loadChannelList: (listChannel) => dispatch(loadChannelList(listChannel)),
    // connectSocket: (connection) => dispatch(connectSocket(connection)),
    // chatMessage: (chatObj) => dispatch(chatMessage(chatObj)),
    // createConversation: (info) => dispatch(createConversation(info)),
    // createChannel: (info) => dispatch(createChannel(info))

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);

// export default Chat;