import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/hello")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch((err) => setMsg("Error: " + err));
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">{msg}</h1>
    </div>
  );
}

export default App;
