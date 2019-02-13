import React, {Component} from 'react';
import FlipMove from 'react-flip-move';
import Player from './Player';
import PropTypes from 'prop-types';

export default class PlayerList extends Component {
    renderPlayers () {
        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Add your first player to get start</p>
                </div>        
            )
        } else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player}/>
            })
        }
    }
    render () {
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                        {this.renderPlayers()}
                </FlipMove>
            </div>
        )
    }
}
PlayerList.propTypes = {
    players: PropTypes.array.isRequired,
}