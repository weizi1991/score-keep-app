import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPositions} from './../imports/api/players';

import App from './../imports/ui/App';

Meteor.startup(() => {
  //call tracker.autorun
  Tracker.autorun (() => {
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let positionedPlayer = calculatePlayerPositions(players);
    let title = 'Score Keep';
    let subtitle ='created by Zi';
    ReactDOM.render (<App title={title} subtitle={subtitle} players={positionedPlayer}/>, document.getElementById('app'));
  })
});