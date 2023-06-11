import React from 'react';

const BloodBankTable = ({ area, bloodType, data ,onRequest}) => {
  // Filter the blood bank data based on the given area and blood type
  const filteredData = data.filter(
    (bank) => bank.area.toLowerCase() === area.toLowerCase() && bank.stock[bloodType]
  );

  if (filteredData.length === 0) {
    return <div className='mt-5'>
    <p className='text-danger ms-4'>No matching blood banks found for the given area and blood type.</p>
    <button className='mt-5 mx-5 btn btn-info' onClick={onRequest}>Send Request</button>
  </div>;
  }

  return (
    <table className="table mt-5 w-75 mx-auto">
      <thead>
        <tr>
          <th>Blood Bank Name</th>
          <th>Stock</th>
          <th>Contact No</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((bank, index) => (
          <tr key={index}>
            <td>{bank.bloodbankname}</td>
            <td>{bank.stock[bloodType]}</td>
            <td>{bank.contactNo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BloodBankTable;
