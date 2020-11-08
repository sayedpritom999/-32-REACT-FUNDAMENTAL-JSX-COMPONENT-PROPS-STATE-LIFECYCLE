import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const products = [
    {name: "Photoshop", price: "$100"},
    {name: "Illustrator", price: "$100"},
    {name: "PDF Reader", price: "$50"}
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        {products.map(pd => 
          <Product product = {pd}></Product>)}
        <Users></Users>
      </header>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: "1px solid, gray",
    borderRadius: "10px",
    backgroundColor: "lightGray",
    height: "200px",
    width: "300px",
    margin: "10px"
  }
  const {name, price} = props.product;
  console.log(name, price);
  return (
    <div style = {productStyle}>
      <h3>{name} </h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(props) {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Users(props) {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [0])
  return (
    <div>
      <h3>Dynamic Users{users.length}</h3>
      {users.map(user => <li>{user.name}</li>)}
    </div>
  )
}

export default App;
