import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { auth } from './firebase';
import { toast } from 'react-toastify'; // Import toast function from react-toastify

const db = firebase.firestore();

const Reminder = () => {
  const [reminderText, setReminderText] = useState('');

  const handleSetReminder = async () => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('User not signed in.');

      await db.collection('reminders').add({
        userId: user.uid,
        text: reminderText,
        dueDate: new Date(), // Set the due date of the reminder
      });
      console.log('Reminder set successfully.');

      // Show reminder notification
      toast.info(`Reminder set for "${reminderText}"`, {
        autoClose: 5000,
      });
    } catch (error) {
      console.error('Error setting reminder:', error);
    }
  };

  return (
    <div>
      <h2>Set Reminder</h2>
      <input type="text" value={reminderText} onChange={(e) => setReminderText(e.target.value)} placeholder="Enter reminder text" />
      <button onClick={handleSetReminder}>Set Reminder</button>
    </div>
  );
};

export default Reminder;