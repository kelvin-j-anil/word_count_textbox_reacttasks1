import React, {Component,useState} from 'react'

function WordCountTextBox(){
    const [text,setText] = useState('');

    const handleTextChange = (event) => {
        const newText = event.target.value;
        setText(newText)
    }


const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

return (
    <div className='Word-Count-Box'>
        <span className='Writing'><h1>Responsive Paragraph Word Counter</h1></span>
        <textarea rows = "10" cols ="60" placeholder='Enter the text' value={text} onChange={handleTextChange}/>
        <div className='Word-Count'> Word Count: {wordCount}</div>
    </div>
)
}


export default WordCountTextBox