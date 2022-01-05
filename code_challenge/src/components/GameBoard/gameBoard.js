import React from 'react';

import './gameBoard.css';


class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            row1: '',
            row2: '',
            row3: ''
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event){
        const name = event.target.id;
        console.log(name);
        if(this.props.currentPlayer === this.props.player1){
            
        }
    }

    render() {
        return (
            <div className="gameBoard-main">
                <div className="row">
                    <div id='one' onClick={this.handleClick}>1</div>
                    <div id='two' onClick={this.handleClick}>2</div>
                    <div id='three' onClick={this.handleClick}>3</div>
                </div>
                <div className="row">
                    <div id='four' onClick={this.handleClick}>4</div>
                    <div id='five' onClick={this.handleClick}>5</div>
                    <div id='six' onClick={this.handleClick}>6</div>
                </div>
                <div className="row">
                    <div id='seven' onClick={this.handleClick}>7</div>
                    <div id='eight' onClick={this.handleClick}>8</div>
                    <div id='nine' onClick={this.handleClick}>9</div>
                </div>
            </div>
        );
    }
}

export default GameBoard;