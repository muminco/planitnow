import React from 'react';
import './ShareEvent.css'

function ShareEvent() {

    return (
        <div className="share-event-container">
            <div className="share-event">
                <ul>
                    <b style={{verticalAlign: 'middle'}}>Share</b> <input type="text" className="share"/>
                </ul>
                <hr size="4" width="90%" color="grey"/>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <button style={{marginRight: '20px', cursor: 'pointer'}}>Add Your Schedule</button>
                    <button style={{cursor: 'pointer'}}>Edit Your Schedule</button>
                </div>
            </div>
        </div>
    );
}

export default ShareEvent;