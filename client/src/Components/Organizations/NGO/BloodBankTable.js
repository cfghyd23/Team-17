import React from 'react';

const BloodBankTable = ({ area, data ,onRequest}) => {
  // Filter the blood bank data based on the given area and blood type
  const filteredData = data.filter(
   
    (bank) => bank.place === area
  );
 

  if (filteredData.length === 0) {
    return <div className='mt-5'>
    <p className='text-danger ms-4'>No matching volunteers.</p>
    <button className='mt-5 mx-5 btn btn-info' onClick={onRequest}>Send Request</button>
  </div>;
  }

  return (
    <table className="table mt-5 w-75 mx-auto">
      <thead>
        <tr>
          <th>Vounteer Name</th>
          <th>Contact</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((bank, index) => (
          <tr key={index}>
            <td>{bank.name}</td>
            <td>{bank.phoneno}</td>
            <td>{bank.place}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BloodBankTable;
