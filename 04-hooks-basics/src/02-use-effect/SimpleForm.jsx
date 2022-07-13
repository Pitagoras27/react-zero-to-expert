import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  useEffect(() => {
    // console.log('componentDidMount of ciclelife');
  }, []);
  
  const [inputValue, setInputValue] = useState({
    name: 'Carlos',
    email: ''
  })

  const { name, email} = inputValue;

  const handleChange = ({target}) => {
    const { name, value } = target;
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, email);
  }

  useEffect(() => {
    // console.log('inputValue changed!');
  }, [inputValue]);

  useEffect(() => {
    // console.log('email changed!');
  }, [email]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        onChange={handleChange}
        className="form-control mt-2"
        value={name}
      />
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={handleChange}
        className="form-control mt-2"
        value={email}
      />
      <button type="submit" className="btn btn-primary">Submit</button>

      {(name === 'Carlos2') && <Message />}

    </form>
  )
}