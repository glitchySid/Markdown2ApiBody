import './App.css'
import React, { useState } from 'react';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const handleChange = (event) => {
    let value = event.target.value;
    // add \n for new line 
    value = value.replace(/\r\n|\r|\n/g, '\\n');
    console.log(value);
    setMarkdown(value);
  }

 const handleCopyClick = async () => {
    if (markdown) { // Only attempt to copy if there's text
      try {
        await navigator.clipboard.writeText(markdown);
        setCopyStatus('Copied!');
        // Optionally, clear the status after a short delay
        setTimeout(() => setCopyStatus(''), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
        setCopyStatus('Failed to copy.');
      }
    } else {
      setCopyStatus('No text to copy.');
    }
  };
  return (
    <>
      <div>
        <h1>Markdown to Api Body</h1>
        <textarea type="text" text="Enter your markdown" onChange={handleChange}/>

        <p>{markdown}</p>

        {/* Copy Button */}
        <button type="button" onClick={handleCopyClick}>
          Copy Text
        </button>
        {copyStatus && <p>{copyStatus}</p>} {/* Display copy status */}
      </div>
    </>
  )
}

export default App
