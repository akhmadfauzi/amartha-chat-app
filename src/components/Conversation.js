import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/conversation.scss';

export class Conversation extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="conversation">
                <div className="conversation__empty">
                    <p>Oops! there is not conversation.</p>
                    <p>Start chat with your friends !</p> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversation)
