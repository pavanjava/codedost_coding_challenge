import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { TextArea } from './components/TextArea';

export const TextAnalysisContext = React.createContext<any>(null);

const App = () => {

  const [chars, setChars] = useState(0);
  const [words, setWords] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paras, setParas] = useState(0);

  return (
    <div className="App">
      <TextAnalysisContext.Provider value={{ chars, words, sentences, paras, setChars, setWords, setSentences, setParas }}>
        <Header />
        <TextArea />
      </TextAnalysisContext.Provider>
    </div>
  );
}

export default App;
