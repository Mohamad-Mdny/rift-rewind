import { useId } from "react";

export function Form() {
  const ageInputId = useId();
  return (
    <>
        <input name="Riot Username" placeholder="Riot Username" className="border rounded text-stone-950 px-4 py-1"/>
      <hr />
      <input id={ageInputId} name="Riot Tag" placeholder="Tag" className="border rounded text-stone-950 text-center px-5 py-2"/>
    </>
  );

}

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <Form />
    </div>
  );
}

export default App;
