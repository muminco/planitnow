import React from 'react';
import './EventDetails.css'

function EventDetails() {
    return (
        <div className="event-details-container">
            <div className="event-details">
                <ul>
                    <li><b>Name</b> <input type="text" className="name" /></li>
                    <li><b>Date(s)</b> <input type="date" className="startDate"/> to <input type="date" className="endDate"/></li>
                    <li><b>Time</b> <input style={{marginRight: '1em'}} type="time" className="startTime"/> to <input type="time" className="endTime"/></li>
                    <li><b>Duration</b> <input type="number" className="durationHours"/> <input type="text" className="durationType"/></li>
                    <li><b>Description</b> <textarea cols="40" rows="5" className="description"/></li>
                </ul>
            </div>
        </div>
    );
}

export default EventDetails;