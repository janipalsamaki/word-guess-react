import React, { Component, Fragment } from 'react'
import Alphabet from '../../components/Alphabet'
import Category from '../../components/Category'
import GameResult from '../../components/GameResult'
import GuessesLeft from '../../components/GuessesLeft'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { LetterType } from '../../components/Letter'
import NewWord from '../../components/NewWord'
import Word from '../../components/Word'
import dictionary_en from '../../dictionaries/dictionary-en'
import dictionary_fi from '../../dictionaries/dictionary-fi'
import dictionary_es from '../../dictionaries/dictionary-es'
import './App.css'

interface State {
  alphabet: string
  letters: LetterType[]
  category: any
  guessedLetters: Set<string>
  guessedTheWord: boolean
  guessesLeft: number
  language: string
  word: LetterType[]
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = this.initialState()
    this.changeLanguage = this.changeLanguage.bind(this)
    this.selectLetter = this.selectLetter.bind(this)
    this.startNewGame = this.startNewGame.bind(this)
    this.addKeyPressListener()
  }

  initialState(language: string = 'gb'): State {
    const alphabet: string = this.getAlphabet(language)

    const letters: LetterType[] = Array.from(alphabet).map(letter => ({
      letter,
      disabled: false
    }))

    const dictionaries = this.getDictionaries()
    const dictionary: Object | undefined = dictionaries.get(language)
    const category = this.randomCategory(dictionary)

    const word: LetterType[] = Array.from(this.randomWord(category)).map(
      letter => ({
        letter,
        disabled: false
      })
    )

    const guessedLetters: Set<string> = new Set()
    const guessesLeft: number = 5
    const guessedTheWord: boolean = false

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

  getAlphabet(language: string): string {
    const defaultAlphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    return language === 'gb'
      ? defaultAlphabet
      : language === 'fi'
      ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'
      : language === 'es'
      ? 'AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ'
      : defaultAlphabet
  }

  getDictionaries(): Map<string, Object> {
    const dictionaries: Map<string, Object> = new Map()
    dictionaries.set('fi', dictionary_fi)
    dictionaries.set('gb', dictionary_en)
    dictionaries.set('es', dictionary_es)

    return dictionaries
  }

  randomCategory(dictionary: any) {
    const categories = []

    for (const entry of dictionary.entries()) {
      // eslint-disable-next-line
      let [index, object] = entry
      categories.push(object)
    }

    return categories[Math.floor(Math.random() * categories.length)]
  }

  randomWord(category: { words: string[] }): string {
    return category.words[
      Math.floor(Math.random() * category.words.length)
    ].toUpperCase()
  }

  changeLanguage(language: string): void {
    this.setState(this.initialState(language))
  }

  selectLetter(selectedLetter: string): void {
    this.updateGameStatus(this.state, selectedLetter)
  }

  updateGameStatus(state: State, selectedLetter: string): void {
    if (state.guessesLeft > 0 && !state.guessedTheWord) {
      const nextState: State = { ...state }
      const alreadyGuessedLetter: boolean = state.guessedLetters.has(
        selectedLetter
      )

      if (!alreadyGuessedLetter) {
        nextState.guessedLetters.add(selectedLetter)
        const letter: LetterType | undefined = nextState.letters.find(
          letter => letter.letter === selectedLetter
        )

        if (letter) {
          letter.disabled = true
        }
      }

      const guessedTheWord: boolean = nextState.word
        .filter(letter => !['-', ' '].includes(letter.letter))
        .every(letter => nextState.guessedLetters.has(letter.letter))

      const lettersFoundInWord: boolean =
        nextState.word.filter(letter => letter.letter === selectedLetter)
          .length > 0

      if (guessedTheWord) {
        nextState.guessedTheWord = true
      } else if (!alreadyGuessedLetter && !lettersFoundInWord) {
        nextState.guessesLeft--
      }

      nextState.word.forEach(letter =>
        letter.letter === selectedLetter ? (letter.disabled = true) : ''
      )

      this.setState(nextState)
    }
  }

  startNewGame(): void {
    this.setState(this.initialState(this.state.language))
  }

  addKeyPressListener(): void {
    document.addEventListener('keydown', event => {
      const letter: string = event.key.toUpperCase()

      if (this.state.alphabet.includes(letter)) {
        this.selectLetter(letter)
      }
    })
  }

  render() {
    const languages: string[] = ['fi', 'gb', 'es']

    return (
      <Fragment>
        <p className="sr-only">
          Welcome to play word guess game. Try to guess the word from the given
          category. Use keyboard to guess the letters.
        </p>
        <Alphabet letters={this.state.letters} onClick={this.selectLetter} />
        <Category category={this.state.category} />
        <Word
          word={this.state.word}
          guessedTheWord={this.state.guessedTheWord}
        />
        <div className="footer">
          <GuessesLeft guessesLeft={this.state.guessesLeft} />
          <GameResult
            guessedTheWord={this.state.guessedTheWord}
            guessesLeft={this.state.guessesLeft}
          />
          <LanguageSwitcher
            languages={languages}
            onClick={this.changeLanguage}
          />
          <NewWord onClick={this.startNewGame} />
        </div>
      </Fragment>
    )
  }
}

export default App
