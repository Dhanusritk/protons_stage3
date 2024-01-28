import React, { useState } from 'react';
import moment from 'moment';
import './Timeslot.css';

const Timeslot = () => {
  const intime = "12:00 AM";
  const outtime = "11:00 PM";
  const [result, setResult] = useState([]);

  function intervals(startString, endString) {
    const start = moment(startString, 'hh:mm A');
    const end = moment(endString, 'hh:mm A');

    const current = moment(start);

    while (current <= end) {
      result.push({
        start: current.format('hh:mm A'),
        end: current.add(1, 'hour').format('hh:mm A'),
      });
    }

    return result;
  }

  intervals(intime, outtime);

  return (
    <div className='slots'>
      {result && result.length > 0 ? (
        result.map((slot, index) => (
          <button key={index} className='slot-button'>{`${slot.start} to ${slot.end}`}</button>
        ))
      ) : null}
    </div>
  );
};

export default Timeslot;
