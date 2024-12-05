class Cat {
  constructor({ name }) {
    this.name = name
  }

  meow() {
    return 'Meow!'
  }

  static sortByName(cats) {
    return cats.sort((a, b) => a.name.localeCompare(b.name))
  }
}

export default Cat
