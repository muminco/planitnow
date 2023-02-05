import React from 'react';
import './ShareEvent.css'

function ShareEvent() {

    return (
        <div className="share-event-container">
            <div className="share-event">
                <label>Share: </label>
                <input type="text" className="share"/>
                <hr size="4" width="90%" color="grey"/>
                <button>Add Your Schedule</button>
                <button>Edit Your Schedule</button>
            </div>
        </div>
    );
}

export default ShareEvent;