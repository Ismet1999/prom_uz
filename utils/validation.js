function validation(rules = {}) {
  const numbers = rules.numbers || false
  const characters = rules.characters || false
  const cyrillic = rules.cyrillic || false
  const minLength = rules.minLength || 1
  const maxLength = rules.maxLength || 100

  return function (value) {
    const result = {
      state: true,
      numbers: true,
      characters: true,
      cyrillic: true,
      minLength: true,
      maxLength: true,
    }
    if (value.length < minLength) {
      result.state = false
      result.minLength = false
    }
    if (value.length > maxLength) {
      result.state = false
      result.maxLength = false
    }
    if (numbers && !/^[0-9]+$/.test(value)) {
      result.state = false
      result.numbers = false
    }
    if (characters && !/^[a-zA-Z0-9]+$/.test(value)) {
      result.state = false
      result.characters = false
    }
    if (cyrillic && !/^[а-яА-ЯёЁ]+$/.test(value)) {
      result.state = false
      result.cyrillic = false
    }
    if (result.state) {
      return Promise.resolve(result)
    }
    return Promise.reject(result)
  }
}
export default validation
