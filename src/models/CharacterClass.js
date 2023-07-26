export class CharacterClass {
  constructor(type) {
    this.type = type;
  }

  get attributes() {
    return {
      strength: 3,
      dexterity: 2,
      inteligence: 1,
    };
  }
}
