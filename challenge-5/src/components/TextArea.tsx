import { useContext, useState } from "react";
import { TextAnalysisContext } from "../App";

export const TextArea = () => {

  const context = useContext(TextAnalysisContext);
  const { setChars, setWords, setSentences, setParas } = context;

  const [text, setText] = useState("");

  const handleTextChange = (event: any) => {
    setText(event.target.value);
    setChars(text.length + 1);
    setWords(text.split(" ").length);
    setSentences(text.split(".").length);
    setParas(text.split("\n").length);
  }

  return (
    <textarea
      style={{
        width: '100%',
        height: '300px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        resize: 'none',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        lineHeight: '1.5',
        marginTop: '10px'
      }}
      placeholder="Enter your text here..."
      onChange={handleTextChange} value={text}/>
  );
}