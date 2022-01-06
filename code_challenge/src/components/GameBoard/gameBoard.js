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
            nine: '',
            winner: '',
            disableBoard: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.checkForWinner = this.checkForWinner.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.resetPlayers = this.resetPlayers.bind(this);
    }

    checkForWinner() {
        let winner;
        if ((this.state.one.iconName === 'times' && this.state.two.iconName === 'times' && this.state.three.iconName === 'times') || (this.state.one.iconName === 'circle' && this.state.two.iconName === 'circle' && this.state.three.iconName === 'circle')) {
            winner = this.state.one.iconName;
        } else if ((this.state.four.iconName === 'times' && this.state.five.iconName === 'times' && this.state.six.iconName === 'times') || (this.state.four.iconName === 'circle' && this.state.five.iconName === 'circle' && this.state.six.iconName === 'circle')) {
            winner = this.state.four.iconName;
        } else if ((this.state.seven.iconName === 'times' && this.state.eight.iconName === 'times' && this.state.nine.iconName === 'times') || (this.state.seven.iconName === 'circle' && this.state.eight.iconName === 'circle' && this.state.nine.iconName === 'circle')) {
            winner = this.state.seven.iconName;
        } else if ((this.state.one.iconName === 'times' && this.state.four.iconName === 'times' && this.state.seven.iconName === 'times') || (this.state.one.iconName === 'circle' && this.state.four.iconName === 'circle' && this.state.seven.iconName === 'circle')) {
            winner = this.state.one.iconName;
        } else if ((this.state.two.iconName === 'times' && this.state.five.iconName === 'times' && this.state.eight.iconName === 'times') || (this.state.two.iconName === 'circle' && this.state.five.iconName === 'circle' && this.state.eight.iconName === 'circle')) {
            winner = this.state.two.iconName;
        } else if ((this.state.three.iconName === 'times' && this.state.six.iconName === 'times' && this.state.nine.iconName === 'times') || (this.state.three.iconName === 'circle' && this.state.six.iconName === 'circle' && this.state.nine.iconName === 'circle')) {
            winner = this.state.three.iconName;
        } else if ((this.state.one.iconName === 'times' && this.state.five.iconName === 'times' && this.state.nine.iconName === 'times') || (this.state.one.iconName === 'circle' && this.state.five.iconName === 'circle' && this.state.nine.iconName === 'circle')) {
            winner = this.state.one.iconName;
        } else if ((this.state.three.iconName === 'times' && this.state.five.iconName === 'times' && this.state.seven.iconName === 'times') || (this.state.three.iconName === 'circle' && this.state.five.iconName === 'circle' && this.state.seven.iconName === 'circle')) {
            winner = this.state.three.iconName;
        } else {
            winner = '';
        }

        if (winner === 'times') {
            this.setState({ winner: this.props.player1 }, () => {
                alert(`${this.state.winner} wins the game!`);
                this.setState({ disableBoard: true });
            })
        }
        else if (winner === 'circle') {
            this.setState({ winner: this.props.player2 }, () => {
                alert(`${this.state.winner} wins the game!`);
                this.setState({ disableBoard: true });
            })
        }
    }



    handleClick(event) {
        const name = event.target.id;
        if (this.state.disableBoard === false) {
            if (this.state[name].iconName === 'times' || this.state[name].iconName === 'circle') {
                alert('Please select an open square.')
            } else {
                if (this.props.currentPlayer === this.props.player1) {
                    this.setState({ [name]: faTimes }, this.checkForWinner)
                } else {
                    this.setState({ [name]: faCircle }, this.checkForWinner)
                }
                this.props.changeCurrentPlayer();
            }
        }
    }

    resetGame() {
        this.setState({
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: '',
            winner: '',
            disableBoard: false
        })
    }

    resetPlayers() {
        this.resetGame();
        this.props.clearPlayers();
    }

    render() {
        const { one, two, three, four, five, six, seven, eight, nine } = this.state;

        return (
            <div className="gameBoard-main">
                <div>
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
                <div className="reset">
                    <button onClick={this.resetGame}>Play Again?</button>
                    <button onClick={this.resetPlayers}>Change Players?</button>
                </div>
            </div>
        );
    }
}

export default GameBoard;