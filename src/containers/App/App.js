import React, { Component, Fragment } from 'react'
import Alphabet from '../../components/Alphabet/Alphabet'
import Category from '../../components/Category/Category'
import GameResult from '../../components/GameResult/GameResult'
import GuessesLeft from '../../components/GuessesLeft/GuessesLeft'
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher'
import NewWord from '../../components/NewWord/NewWord'
import Word from '../../components/Word/Word'
import dictionary_en from '../../dictionaries/dictionary-en'
import dictionary_fi from '../../dictionaries/dictionary-fi'
import dictionary_es from '../../dictionaries/dictionary-es'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.changeLanguage = this.changeLanguage.bind(this)
    this.selectLetter = this.selectLetter.bind(this)
    this.startNewGame = this.startNewGame.bind(this)
    this.addKeyPressListener()
  }

  initialState(language = 'gb') {
    const alphabet = this.getAlphabet(language)
    const letters = [...alphabet].map(letter => ({letter, disabled: false}))
    const dictionaries = this.getDictionaries()
    const dictionary = dictionaries.get(language)
    const category = this.randomCategory(dictionary)
    const word = [...this.randomWord(category)].map(letter => ({letter, disabled: false}))
    const guessedLetters = new Set()
    const guessesLeft = 5
    const guessedTheWord = false

    return {
      alphabet,
      letters,
      language,
      category,
      word,
      guessedLetters,
      guessesLeft,
      guessedTheWord
    }
  }

  getAlphabet(language) {
    return language === 'gb'
      ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      : language === 'fi'
      ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'
      : language === 'es'
      ? 'AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ'
      : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  getDictionaries() {
    const dictionaries = new Map()
    dictionaries.set('fi', dictionary_fi)
    dictionaries.set('gb', dictionary_en)
    dictionaries.set('es', dictionary_es)

    return dictionaries
  }

  randomCategory(dictionary) {
    const categories = []

    for (const entry of dictionary.entries()) {
      let [index, object] = entry
      categories.push(object)
    }

    return categories[Math.floor(Math.random() * categories.length)]
  }

  randomWord(category) {
    return category.words[Math.floor(Math.random() * category.words.length)].toUpperCase()
  }

  changeLanguage(language) {
    this.setState(this.initialState(language))
  }

  selectLetter(selectedLetter) {
    this.updateGameStatus(this.state, selectedLetter)
  }

  updateGameStatus(state, selectedLetter) {
    if (state.guessesLeft > 0 && !state.guessedTheWord) {
      const nextState = {...state}
      const alreadyGuessedLetter = state.guessedLetters.has(selectedLetter)

      if (!alreadyGuessedLetter) {
        nextState.guessedLetters.add(selectedLetter)
        nextState.letters.find(letter => letter.letter === selectedLetter).disabled = true
      }

      const guessedTheWord = nextState.word
        .filter(letter => !['-', ' '].includes(letter.letter))
        .every(letter => nextState.guessedLetters.has(letter.letter))

      const lettersFoundInWord = nextState.word.filter(letter => letter.letter === selectedLetter).length > 0

      if (guessedTheWord) {
        nextState.guessedTheWord = true
      } else if (!alreadyGuessedLetter && !lettersFoundInWord) {
        nextState.guessesLeft--
      }

      nextState.word.forEach(letter => letter.letter === selectedLetter ? letter.disabled = true : '')

      this.setState(nextState)
    }
  }

  startNewGame() {
    this.setState(this.initialState(this.state.language))
  }

  addKeyPressListener() {
    document.addEventListener('keydown', (event) => {
      const letter = event.key.toUpperCase()

      if (this.state.alphabet.includes(letter)) {
        this.selectLetter(letter)
      }
    })
  }

  render() {
    const languages = ['fi', 'gb', 'es']

    return (
      <Fragment>
        <Alphabet letters={this.state.letters} onClick={this.selectLetter} />
        <Category category={this.state.category} />
        <Word word={this.state.word} />
        <div className="footer">
          <GuessesLeft guessesLeft={this.state.guessesLeft} />
          <GameResult guessedTheWord={this.state.guessedTheWord} guessesLeft={this.state.guessesLeft} />
          <LanguageSwitcher languages={languages} onClick={this.changeLanguage} />
          <NewWord onClick={this.startNewGame} />
        </div>
      </Fragment>
    )
  }
}

export default App
