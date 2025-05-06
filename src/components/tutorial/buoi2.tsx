import { useState } from "react";
import "./App.css";

const App = () => {
  const arrays = ["Apple", "Banana", "Orange"];

  const [count, setCount] = useState<number>(0);

  const [user, setUser] = useState({
    name: "abc",
    age: 0,
    email: "example@gmail.com",
  });
  const [users, setUsers] = useState([]);

  const handleChangeName = (event) => {
    const value = event.target.value;
    setUser({
      name: value,
      age: user.age,
      email: user.email,
    });
  };

  const handleChangeAge = (event) => {
    const value = event.target.value;
    setUser({
      name: user.name,
      age: value,
      email: user.email,
    });
  };

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setUser({
      name: user.name,
      age: user.age,
      email: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, user]);
    setUser({
      name: "",
      age: 0,
      email: "",
    });
  };

  const abc = [1, 2, 3];

  const number = 4;
  const newArray = [...abc, number];

  return (
    <div>
      <p className="text-3xl font-bold underline text-lime-500">
        You clicked {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>

      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={user.name}
          onChange={(e) => handleChangeName(e)}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={user.age}
          onChange={(e) => handleChangeAge(e)}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={user.email}
          onChange={(e) => handleChangeEmail(e)}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>

        <ol>
          {users.map((user) => {
            return (
              <li key={user.name}>
                <span>{user.name}</span>
                <span>{user.age}</span>
                <span>{user.email}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
