import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import './playerinfo.css';

import GameBoard from '../GameBoard/gameBoard';

class PlayerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerInfo: false,
            player1Name: 'Joelle',
            player2Name: 'Mike',
            currentPlayer: 'Joelle'
        };

        this.handlePlayerInfo = this.handlePlayerInfo.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        if (!this.playerInfo) {

        } else {

        }
    }

    handlePlayerInfo() {
        this.setState({
            playerInfo: true,
            currentPlayer: this.state.player1Name
        })
    }

    handleInput(event) {
        const { name } = event.target;
        let value = event.target.value;
        this.setState({ [name]: value });
    }



    render() {
        const { currentPlayer, player1Name, player2Name } = this.state;
        return (
            <div className="game">
                <div className="player-main">
                    {true ? (
                        <div className="playerDisplay">
                            <h2 className={(currentPlayer === player1Name ? 'active' : '')}><FontAwesomeIcon className="fontIcon" icon={faTimes} />{player1Name}</h2>
                            <h2 className={(currentPlayer === player2Name ? 'active' : '')}><FontAwesomeIcon className="fontIcon" icon={faCircle} />{player2Name}</h2>
                        </div>
                    ) : (
                        <div className="playerInput" >
                            <label>Player 1 Name
                                <input type="text" value={player1Name} name="player1Name" onChange={this.handleInput}></input>
                            </label>
                            <label>Player 2 Name
                                <input type="text" value={player2Name} name="player2Name" onChange={this.handleInput}></input>
                            </label>
                            <button onClick={this.handlePlayerInfo}>Start Game</button>
                        </div>
                    )}
                </div>
                <GameBoard currentPlayer={currentPlayer} player1={player1Name} player2={player2Name} />
            </div>
        )
    }
}


export default PlayerInfo;