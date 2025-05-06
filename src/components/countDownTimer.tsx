import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [inputSeconds, setInputSeconds] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    if (secondsLeft === 0) {
      setIsRunning(false);
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const handleStart = () => {
    if (inputSeconds > 0) {
      setSecondsLeft(inputSeconds);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setInputSeconds(0);
    setSecondsLeft(0);
  };

  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto space-y-4">
      <div>
        <label>Nhập số giây:</label>
        <input
          type="number"
          min="0"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(Number(e.target.value))}
          disabled={isRunning}
          className="border p-2 rounded w-full mt-1"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleStart}
          disabled={isRunning || inputSeconds <= 0}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Bắt đầu
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      <div className="text-center font-semibold text-xl">
        {isRunning || secondsLeft > 0
          ? `Còn lại: ${secondsLeft} giây`
          : secondsLeft === 0 && inputSeconds > 0
          ? "Hết giờ!"
          : "Chưa bắt đầu"}
      </div>
    </div>
  );
};

export default CountdownTimer;
