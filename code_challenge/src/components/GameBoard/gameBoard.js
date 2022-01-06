import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import './gameBoard.css';


class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: ''
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event) {
        const name = event.target.id;
        console.log(name);
        console.log(this.state[name].iconName);
        if (this.state[name].iconName === 'times' || this.state[name].iconName === 'circle') {
            alert('Please select an open square.')
        } else {
            if (this.props.currentPlayer === this.props.player1) {
                this.setState({ [name]: faTimes })
            } else {
                this.setState({ [name]: faCircle })
            }
        
            this.props.changeCurrentPlayer();
        }
    }

    render() {
        const { one, two, three, four, five, six, seven, eight, nine } = this.state;
        
        return (
            <div className="gameBoard-main">
                <div className="row">
                    <div id='one' onClick={this.handleClick}><FontAwesomeIcon className="fontIcon" icon={one} /></div>
                    <div id='two' onClick={this.handleClick}><FontAwesomeIcon className="fontIcon" icon={two} /></div>
                    <div id='three' onClick={this.handleClick}><FontAwesomeIcon className="fontIcon" icon={three} /></div>
                </div>
                <div className="row">
                    <div id='four' onClick={this.handleClick}><FontAwesomeIcon className="fontIcon" icon={four} /></div>
                    <div id='five' onClick={this.handleClick}><FontAwesomeIcon className="fontIcon" icon={five} /></div>
                    <div id='six' onClick={this.handleClick}><FontAwesomeIcon className="fontIcon" icon={six} /></div>
                </div>
                <div className="row">
                    <div id='seven' onClick={this.handleClick}><FontAwesomeIcon className="fontIcon" icon={seven} /></div>
                    <div id='eight' onClick={this.handleClick}><FontAwesomeIcon className="fontIcon" icon={eight} /></div>
                    <div id='nine' onClick={this.handleClick}><FontAwesomeIcon className="fontIcon" icon={nine} /></div>
                </div>
            </div>
        );
    }
}

export default GameBoard;