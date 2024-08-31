import React, { useState } from 'react';
import { db } from './firebase'; // Ensure the correct path to your firebase file
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const BookTable = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'bookings'), {
        name,
        email,
        phone,
        timestamp: new Date()
      });
      navigate('/thank-you');
    } catch (error) {
      console.error('Error booking table: ', error);
    }
  };

  return (
    <div className="booking-form">
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
};

export default BookTable;
