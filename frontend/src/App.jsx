import { useState } from "react";


function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll_no, setRollNo] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [userclass, setUserClass] = useState("");
  const [subject, setSubject] = useState("");
  const [section, setSection] = useState("");

  const handleRegister = async(name, email, roll_no, contact, address, zipcode, country, state, city, userclass, subject, section) => {
    // console.log("click")
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({name, email, roll_no, contact, address, zipcode, country, state, city, userclass, subject, section}),
      };

    const data = await fetch("http://localhost:5000/register", options)
    await data.json();
    console.log('data: ', data);
    
    console.log("user created")
    // console.log({name:name, email, roll_no, contact, address, zipcode, country, state, city, userclass, subject, section});
  }

  return (
    <div className="App">
      <h1>User Register</h1>
      <label htmlFor="">name</label>
      <input type="text" onChange={(e)=> setName(e.target.value)}/>
      <label htmlFor="">email</label>
      <input type="text" onChange={(e)=> setEmail(e.target.value)} />
      <label htmlFor="">roll_no</label>
      <input type="text" onChange={(e)=> setRollNo(e.target.value)} />
      <label htmlFor="">contact</label>
      <input type="text" onChange={(e)=> setContact(e.target.value)} />
      <label htmlFor="">address</label>
      <input type="text" onChange={(e)=> setAddress(e.target.value)}/>
      <label htmlFor="">zipcode</label>
      <input type="text" onChange={(e)=> setZipCode(e.target.value)}/>
      <label htmlFor="">country</label>
      <input type="text" onChange={(e)=> setCountry(e.target.value)} />
      <label htmlFor="">state</label>
      <input type="text" onChange={(e)=> setState(e.target.value)} />
      <label htmlFor="">city</label>
      <input type="text" onChange={(e)=> setCity(e.target.value)} />
      <label htmlFor=""> user class</label>
      <input type="text" onChange={(e)=> setUserClass(e.target.value)} />
      <label htmlFor="">subject</label>
      <input type="text" onChange={(e)=> setSubject(e.target.value)} />
      <label htmlFor="">section</label>
      <input type="text" onChange={(e)=> setSection(e.target.value)} />

      <button onClick={()=> handleRegister(name, email, roll_no, contact, address, zipcode, country, state, city, userclass, subject, section)}>Submit</button>
    </div>
  );
}

export default App;
