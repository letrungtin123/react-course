import { useEffect, useState } from "react";
import UserItem from "./components/tutorial/user-item";
import { Employee } from "./types/user.type";
import CountdownTimer from "./components/countDownTimer";

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<Employee[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const [timer, setTimer] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="p-10">
      <button onClick={() => setToggle((prev) => !prev)}>count: {count}</button>

      {toggle ? <p>Xin chào</p> : <p>Thời gian: {timer}</p>}
	  <CountdownTimer />

      <div className="space-y-6 mt-6">
        {users.length === 0 && (
          <div className="italic text-center">Danh sách trống</div>
        )}
        {users &&
          users.length > 0 &&
          users.map((user) => <UserItem key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default App;
