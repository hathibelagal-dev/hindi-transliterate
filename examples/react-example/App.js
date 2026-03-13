import React, { useState } from 'react';
import { useTransliterate, Transliterate } from '../../src/react';

function App() {
  const [input, setInput] = useState("नमस्ते भारत");
  const [isSanskrit, setIsSanskrit] = useState(false);

  // Example of using the hook
  const hookResult = useTransliterate(input, isSanskrit);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Hindi Transliterate React Example</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <textarea 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          rows="4"
          cols="50"
          style={{ fontSize: '1.2rem', padding: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          <input 
            type="checkbox" 
            checked={isSanskrit} 
            onChange={(e) => setIsSanskrit(e.target.checked)} 
          />
          Sanskrit Mode
        </label>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h3>Transliteration Results:</h3>
        
        <p>
          <strong>Using Hook:</strong> {hookResult}
        </p>

        <p>
          <strong>Using Component:</strong> 
          <Transliterate 
            text={input} 
            sanskritMode={isSanskrit} 
            as="span" 
            style={{ color: 'blue', fontWeight: 'bold' }} 
          />
        </p>
      </div>
    </div>
  );
}

export default App;
