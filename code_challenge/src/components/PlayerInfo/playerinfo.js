import React from 'react';


class PlayerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerInfo: false,
            player1Name: '',
            player2Name: '',

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
            playerInfo: true
        })
    }

    handleInput(event) {
        const { name } = event.target;
        let value = event.target.value;
        console.log(value);
        this.setState({ [name]: value });
    }



    render() {
        const { playerInfo, player1Name, player2Name } = this.state;
        return (
            <div className="player-main">
                {playerInfo ? ('') : (
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
        )
    }
}


export default PlayerInfo;