class Concept {
  id: string;

  text: string;

  constructor(text: string) {
    this.id = new Date().getTime().toString();
    this.text = text;
  }
}

export default Concept;
