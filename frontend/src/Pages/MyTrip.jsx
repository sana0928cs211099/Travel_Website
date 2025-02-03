
import React from 'react';
import '../Styles/mytrip.css';

const TripStatus = ({ status }) => {
    const statusIcons = {
        booked: 'ri-plane-fill',
        canceled: 'ri-close-circle-fill',
        completed: 'ri-check-double-fill',
    };

    return (
        <div className={`trip-status ${status}`}>
            <i className={`ri ${statusIcons[status]}`}></i>
            <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
        </div>
    );
};

const TripDetails = ({ trip }) => {
    return (
        <div className="trip-details">
            <h2>Trip to {trip.destination}</h2>
            <TripStatus status={trip.status} />
            <p>Date: {trip.date}</p>
            <p>Time: {trip.time}</p>
            <p>Price: ${trip.price}</p>
        </div>
    );
};

const MyTrip = () => {
    const trip = {
        destination: 'New York',
        status: 'booked', // can be 'booked', 'canceled', or 'completed'
        date: 'November 15, 2024',
        time: '10:00 AM',
        price: 299,
    };

    return (
        <div className="app">
            <h1>Your Booked Trip</h1>
            <TripDetails trip={trip} />
        </div>
    );
};

export default MyTrip