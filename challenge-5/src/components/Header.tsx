import { useContext } from "react"
import { TextAnalysisContext } from "../App"

export const Header = () => {

    const context = useContext(TextAnalysisContext);
    const { chars, words, sentences, paras } = context;

    return (
        <div style={{ width: '100%', border: '1px solid black', borderRadius:'4px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '10px' }}>
                    <h3>Charecters</h3>
                    <p>{chars}</p>
                </div>
                <div style={{ padding: '10px' }}>
                    <h3>Words</h3>
                    <p>{words}</p>
                </div>
                <div style={{ padding: '10px' }}>
                    <h3>Sentences</h3>
                    <p>{sentences}</p>
                </div>
                <div style={{ padding: '10px' }}>
                    <h3>Paragraphs</h3>
                    <p>{paras}</p>
                </div>
            </div>
        </div>
    )
}