import React from 'react';
import './EventDetails.css'

function EventDetails() {
    return (
        <div className="event-details-container">
            <div className="event-details">
                <label>Name: </label>
                <input type="text" className="name" /><br/>
                <label>Date(s): </label>
                <input type="date" className="startDate"/>
                <label> to </label>
                <input type="date" className="endDate"/><br/>
                <label>Time: </label>
                <input type="time" className="startTime"/>
                <label> to </label>
                <input type="time" className="endTime"/><br/>
                <label>Duration: </label>
                <input type="number" className="durationHours"/>
                <input type="text" className="durationType"/><br/>
                <label>Description: </label>
                <textarea cols="40" rows="5" className="description"/>
            </div>
        </div>
    );
}

export default EventDetails;