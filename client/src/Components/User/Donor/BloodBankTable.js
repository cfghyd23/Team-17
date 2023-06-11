import React, { useState } from 'react';
import './Donor.css';

const BloodBankTable = ({ data }) => {
  const filteredData = data.filter((bank) => bank.place === 'Karimnagar');
  const [selectedBank, setSelectedBank] = useState(null);

  const handleSelectBank = (bank) => {
    setSelectedBank(bank);
  };

  const handleCreateAppointment = () => {
    if (selectedBank) {
      alert(`Appointment booked for ${selectedBank.name}`);
    } else {
      alert('Please select a blood bank before creating an appointment.');
    }
  };

  if (filteredData.length === 0) {
    return (
      <div className="mt-5">
        <p className="text-danger ms-4">
          No matching blood banks found for the given area.
        </p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="table mt-5 w-75 mx-auto">
        <thead>
          <tr>
            <th>Select</th>
            <th>Blood Bank Name</th>
            <th>Area</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((bank, index) => (
            <tr key={index}>
              <td>
                <input
                  type="radio"
                  name="bank"
                  id={`bank${index}`}
                  checked={selectedBank === bank}
                  onChange={() => handleSelectBank(bank)}
                />
              </td>
              <td>{bank.name}</td>
              <td>{bank.area}</td>
              <td>{bank.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-end mt-4">
        <button
          className="btn btn-primary create-appointment-button"
          onClick={handleCreateAppointment}
        >
          Create Appointment
        </button>
      </div>
    </div>
  );
};

export default BloodBankTable;
