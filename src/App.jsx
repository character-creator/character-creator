import { useState } from "react";

function App() {
  const [characterClass, setCharacterClass] = useState("archer");

  return (
    <main className="h-full container mx-auto">
      <h1>Character Creator</h1>
      <div className="bg-slate-100 max-w-xl mx-auto">
        <h3>Class:</h3>
        <select
          value={characterClass}
          onChange={(e) => setCharacterClass(e.target.value)}
        >
          <option value="warrior">Warrior</option>
          <option value="archer">Archer</option>
          <option value="mage">Mage</option>
        </select>
        <h3>Attributes:</h3>
        <ul>
          <li>Strength: 1</li>
          <li>Agility: 1</li>
          <li>Intelligence: 1</li>
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
