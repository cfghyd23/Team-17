



import React, { useState } from 'react';
import BloodbankNavBar from './BloodbankNavBar';

function AcceptorList() {
  const [request, setRequest] = useState(false);
 
    let data = [
      {
        name:"Soumya",
        phoneno:9345621785,
        place:"Hyderabad"
      },
      {
        name:"Likitha",
        phoneno:8309030130,
        place:"Hyderabad"
      },
      {
        name:"spoorthi",
        phoneno:9542012045,
        place:"Hyderabad"
      },
      {
        name:"kalyani",
        phoneno:9345621785,
        place:"Hyderabad"
      },
      {
        name:"yashi",
        phoneno:8309030130,
        place:"Hyderabad"
      },
      {
        name:"gayatri",
        phoneno:9542012045,
        place:"Hyderabad"
      },
      {
        name:"Arsiya",
        phoneno:7629888421,
        place:"Warangal"
      },
      {
        name:"Ramu",
        phoneno:8765432154,
        place:"Warangal"
      },
      {
        name:"Vennela",
        phoneno:7629888421,
        place:"Warangal"
      },
      {
        name:"Ramesh",
        phoneno:8765432154,
        place:"Warangal"
      },
      {
        name:"Archana",
        phoneno:7629888421,
        place:"Warangal"
      },
      {
        name:"Raghu",
        phoneno:8765432154,
        place:"Warangal"
      },
      {
        name:"Sumathi",
        phoneno:9345621785,
        place:"Nizamabad"
      },
      {
        name:"Priya",
        phoneno:8309030130,
        place:"Nizamabad"
      },
      {
        name:"amulya",
        phoneno:9345621785,
        place:"Nizamabad"
      },
      {
        name:"karthika",
        phoneno:8309030130,
        place:"Nizamabad"
      },
      {
        name:"Soumya",
        phoneno:9345621785,
        place:"Nizamabad"
      },
      {
        name:"Likitha",
        phoneno:8309030130,
        place:"Nizamabad"
      },
      {
        name:"spoorthi",
        phoneno:9542012045,
        place:"Nizamabad"
      },
      {
        name:"kalyani",
        phoneno:9345621785,
        place:"Nizamabad"
      },
      {
        name:"yashi",
        phoneno:8309030130,
        place:"Nizamabad"
      },
      {
        name:"gayatri",
        phoneno:9542012045,
        place:"Nizamabad"
      },
      {
               name:"Abhigna",
               phoneno:9000400640,
               place:"Karimnagar"
             },
             {
               name:"Vivek",
               phoneno:9182012045,
               place:"Karimnagar"
             },
             {
               name:"Ramya",
               phoneno:9000400640,
               place:"Karimnagar"
             },
             {
               name:"Vani",
               phoneno:9182012045,
               place:"Karimnagar"
             },
             {
               name:"Mallika",
               phoneno:9000400640,
               place:"Karimnagar"
             },
             {
               name:"Anil",
               phoneno:9182012045,
               place:"Karimnagar"
             },
             {
               name:"Reethika",
               phoneno:6300567818,
               place:"Khammam"
             },
             {
               name:"Prathyush",
               phoneno:9253794719,
               place:"Khammam"
             },
             {
               name:"Ankith",
               phoneno:6300567818,
               place:"Khammam"
             },
             {
               name:"Anvith",
               phoneno:9253794719,
               place:"Khammam"
             },
             {
               name:"Ramani",
               phoneno:6300567818,
               place:"Khammam"
             },
             {
               name:"Prathyusha",
               phoneno:9253794719,
               place:"Khammam"
             },
             {
               name:"Radhika",
               phoneno:6300567818,
               place:"Khammam"
             },
             {
               name:"Pallavi",
               phoneno:9253794719,
               place:"Khammam"
             },
             {
               name:"prasad",
               phoneno:965321789,
               place:"Hyderabad"
             },
             {
               name:"Mudrika",
               phoneno:7642931990,
               place:"Hyderabad"
             },
             {
               name:"Sumathi",
               phoneno:9345621785,
               place:"Hyderabad"
             },
             {
               name:"Priya",
               phoneno:8309030130,
               place:"Hyderabad"
             },
             {
               name:"amulya",
               phoneno:9345621785,
               place:"Hyderabad"
             },
             {
               name:"karthika",
               phoneno:8309030130,
               place:"Hyderabad"
             },
             
    ];
  

  return (
    <div>
      <BloodbankNavBar />
      <br />
      <div className="container">
        <table className="table table-bordered table-striped mt-5">
          <thead className="thead-dark">
            <tr>
              <th>Acceptor Name</th>
              <th>Contact</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {data.map((bank, index) => (
              <tr key={index}>
                <td>{bank.name}</td>
                <td>{bank.phoneno}</td>
                <td>{bank.place}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AcceptorList;
