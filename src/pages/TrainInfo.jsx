import { useLocation } from 'react-router-dom';
import TrainCard from '../components/TrainCard';
//import './TrainInfo.css';

const TrainInfo = () => {
  const location = useLocation();
  const searchParams = location.state?.searchParams || {};

  // Mock train data - in a real app, this would come from an API
  const trains = [
    {
      id: 1,
      name: "Subarna Express",
      number: "701",
      from: "Dhaka",
      to: "Chittagong",
      departureTime: "07:00 AM",
      arrivalTime: "12:30 PM",
      duration: "5h 30m",
      classes: [
        { type: "First Class", price: 1200 },
        { type: "Second Class", price: 800 },
        { type: "Third Class", price: 500 }
      ]
    },
    {
      id: 2,
      name: "Mohanagar Provati",
      number: "703",
      from: "Dhaka",
      to: "Chittagong",
      departureTime: "08:00 AM",
      arrivalTime: "01:45 PM",
      duration: "5h 45m",
      classes: [
        { type: "First Class", price: 1100 },
        { type: "Second Class", price: 750 },
        { type: "Third Class", price: 450 }
      ]
    }
  ];

  return (
    <div className="train-info-page">
      <h2>Available Trains</h2>
      <div className="search-summary">
        <p>From: <strong>{searchParams.from || 'Not specified'}</strong></p>
        <p>To: <strong>{searchParams.to || 'Not specified'}</strong></p>
        <p>Date: <strong>{searchParams.date || 'Not specified'}</strong></p>
        <p>Class: <strong>{searchParams.class || 'Not specified'}</strong></p>
      </div>
      <div className="trains-list">
        {trains.map(train => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
};

export default TrainInfo;