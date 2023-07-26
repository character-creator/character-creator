export class CharacterClass {
  constructor(type) {
    this.type = type;
  }

  get attributes() {
    switch (this.type) {
      case "warrior":
        return {
          strength: 3,
          dexterity: 2,
          inteligence: 1,
        };
      case "archer":
        return {
          strength: 2,
          dexterity: 3,
          inteligence: 1,
        };
      case "mage":
        return {
          strength: 1,
          dexterity: 1,
          inteligence: 4,
        };
      default:
        throw new Error("Invalid character class type");
    }
  }
}
