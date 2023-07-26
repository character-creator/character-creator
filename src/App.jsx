import { useState } from "react";
import { CharacterClass } from "./models/characterClass";

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
          <p>Empty</p>
        </div>
      </div>
    </main>
  );
}

export default App;
