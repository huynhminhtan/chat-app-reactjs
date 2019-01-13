import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCurrentConversationAction } from '../../redux/actions/currentConversationAction'
import { Icon, Badge } from 'antd';
import { loadMessagesAction } from '../../redux/actions/loadMessagesAction'
// import { $ } from '../utils/api';
// import '../../styles/style.css';
import { dataTest } from  '../../DataTest';

class ConversationItem extends Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick() {

        var type = this.props.group ? 'channel' : 'user';
        var id = this.props.id;
        var name = this.props.name;

        this.props.changeCurrentConversation({
            type,
            id,
            name
        });

        // load messate and store to state

        //// load test show chat message
        if (name == 'Uyển Vy')
            this.props.loadMessageOfCurrentConversation(dataTest.chatBody.message)
        else if (name == 'Class 12A')
            this.props.loadMessageOfCurrentConversation(dataTest.chatBody.message1)
        
        
            // var successLoadMsg = (res) => {
        //     console.log(res);
        //     if (res.body.status === 200) {
        //         this.props.loadMessage(res.body.list);
        //     }
        // }
        // var failureLoadMsg = (err) => {
        //     console.log(err);
        //     this.props.loadMessage([]);
        // }
        // var successUpdateStatus = (res) => {
        //     console.log(res);
        // }
        // var failureUpdateStatus = (err) => {
        //     console.log(err);
        // }

        // if (type === 'channel') {
        //     $.get('/channels/' + id).query({
        //         user: this.props.sign.user,
        //         token: this.props.sign.token
        //     }).then(successLoadMsg).catch(failureLoadMsg);
        //     $.put('/channels/' + id).query({
        //         user: this.props.sign.user,
        //         token: this.props.sign.token
        //     }).then(successUpdateStatus).catch(failureUpdateStatus);
        // } else if (type === 'user') {
        //     $.get('/conversations/' + id).query({
        //         user: this.props.sign.user,
        //         token: this.props.sign.token
        //     }).then(successLoadMsg).catch(failureLoadMsg);
        //     $.put('/conversations/' + id).query({
        //         user: this.props.sign.user,
        //         token: this.props.sign.token
        //     }).then(successUpdateStatus).catch(failureUpdateStatus);
        // }
    }

    render() {
        return (
            <div className="user-item" key={this.props.name} onClick={this.handleItemClick}>
                <Icon type={this.props.group ? 'usergroup-add' : 'user'} />
                <span className="nav-text">{this.props.name}</span>
                <div style={{ float: 'right' }}>
                    {/* { 
                this.props.numNewMsg > 0 
                ? <Badge count={this.props.numNewMsg} /> 
                : <div /> 
            } */}

                    {/* { 
                this.props.numNewMsg > 0 
                ? <span className="message-unread">{this.props.numNewMsg}</span>
                : <div /> 
            } */}

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentConversation: state.currentConversationReducer,
    // currentChat: state.currentChat
});

const mapDispatchToProps = (dispatch) => ({
    changeCurrentConversation: (currConversationObj) => dispatch(
        changeCurrentConversationAction(currConversationObj)
    ),
    // load list message of current conversation
    loadMessageOfCurrentConversation: (listMessages) => dispatch(
        loadMessagesAction(listMessages)
    )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConversationItem);
