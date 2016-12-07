import React, { Component } from 'react';
import Alphabet from '../../components/Alphabet/Alphabet';
import Category from '../../components/Category/Category';
import GameResult from '../../components/GameResult/GameResult';
import GuessesLeft from '../../components/GuessesLeft/GuessesLeft';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import NewWord from '../../components/NewWord/NewWord';
import Word from '../../components/Word/Word';
import dictionary_fi from '../../dictionaries/dictionary-fi';
import dictionary_en from '../../dictionaries/dictionary-en';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.handleLanguageClick = this.handleLanguageClick.bind(this);
    this.handleLetterClick = this.handleLetterClick.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  getInitialState(language = 'gb') {
    const alphabet = language === 'gb' ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ';
    const letters = [...alphabet].map(letter => ({letter, disabled: false}));

    const dictionaries = new Map();
    dictionaries.set('fi', dictionary_fi);
    dictionaries.set('gb', dictionary_en);

    const dictionary = dictionaries.get(language);
    const category = this.randomCategory(dictionary);
    const word = [...this.randomWord(category)].map(letter => ({letter, disabled: false}));
    const guessedLetters = new Set();
    const guessesLeft = 5;
    const guessedTheWord = false;

    return {
      letters,
      language,
      category,
      word,
      guessedLetters,
      guessesLeft,
      guessedTheWord
    };
  }

  randomCategory(dictionary) {
    const categories = [];

    for (const entry of dictionary.entries()) {
      let [index, object] = entry;
      categories.push(object);
    }

    return categories[Math.floor(Math.random() * categories.length)];
  }

  randomWord(category) {
    return category.words[Math.floor(Math.random() * category.words.length)].toUpperCase();
  }

  handleLanguageClick(language) {
    this.setState(this.getInitialState(language));
  }

  handleLetterClick(selectedLetter) {
    this.updateGameStatus(this.state, selectedLetter);
  }

  updateGameStatus(state, selectedLetter) {
    if (state.guessesLeft > 0 && !state.guessedTheWord) {
      const nextState = Object.assign({}, state);
      const alreadyGuessedLetter = state.guessedLetters.has(selectedLetter);

      if (!alreadyGuessedLetter) {
        nextState.guessedLetters.add(selectedLetter);
        nextState.letters.find(letter => letter.letter === selectedLetter).disabled = 'disabled';
      }

      const guessedTheWord = nextState.word
        .filter(letter => !['-', ' '].includes(letter.letter))
        .every(letter => nextState.guessedLetters.has(letter.letter));

      const lettersFoundInWord = nextState.word.filter(letter => letter.letter === selectedLetter).length > 0;

      if (guessedTheWord) {
        nextState.guessedTheWord = true;
      } else if (!alreadyGuessedLetter && !lettersFoundInWord) {
        nextState.guessesLeft--;
      }

      nextState.word.forEach(letter => letter.letter === selectedLetter ? letter.disabled = 'disabled' : '');

      this.setState(nextState);
    }
  }

  newGame() {
    this.setState(this.getInitialState(this.state.language));
  }

  render() {
    const languages = ['fi', 'gb'];

    return (
      <div>
        <Alphabet letters={this.state.letters} onClick={this.handleLetterClick} />
        <Category category={this.state.category} />
        <Word word={this.state.word} />
        <GuessesLeft guessesLeft={this.state.guessesLeft} />
        <LanguageSwitcher languages={languages} onClick={this.handleLanguageClick} />
        <NewWord onClick={this.newGame} />
        <GameResult
          guessedTheWord={this.state.guessedTheWord}
          guessesLeft={this.state.guessesLeft}
          onClick={this.newGame} />
      </div>
    );
  }
}

export default App;
