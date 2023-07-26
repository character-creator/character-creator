import { useState } from "react";
import { CharacterClass } from "./models/CharacterClass";

function App() {
  const [classType, setClassType] = useState("archer");
  const newClass = new CharacterClass(classType);

  return (
    <main className="h-full container mx-auto">
      <h1>Character Creator</h1>
      <div className="bg-slate-100 max-w-xl mx-auto">
        <h3>Class:</h3>
        <select
          value={classType}
          onChange={(e) => setClassType(e.target.value)}
        >
          <option value="warrior">Warrior</option>
          <option value="archer">Archer</option>
          <option value="mage">Mage</option>
        </select>
        <h3>Attributes:</h3>
        <ul>
          <li>Strength: {newClass.attributes.strength}</li>
          <li>Dexterity: {newClass.attributes.dexterity}</li>
          <li>Intelligence: {newClass.attributes.inteligence}</li>
        </ul>
        <h3>Inventory:</h3>
        <div>
          <ul className="grid grid-cols-3 gap-1 h-52 w-52">
            <li className="border border-slate-300 bg-slate-200 rounded-lg"></li>
            <li className="border border-slate-300 bg-slate-200 rounded-lg"></li>
            <li className="border border-slate-300 bg-slate-200 rounded-lg"></li>
            <li className="border border-slate-300 bg-slate-200 rounded-lg"></li>
            <li className="border border-slate-300 bg-slate-200 rounded-lg"></li>
            <li className="border border-slate-300 bg-slate-200 rounded-lg"></li>
            <li className="border border-slate-300 bg-slate-200 rounded-lg"></li>
            <li className="border border-slate-300 bg-slate-200 rounded-lg"></li>
            <li className="border border-slate-300 bg-slate-200 rounded-lg"></li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
