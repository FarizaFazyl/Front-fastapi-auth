import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [quote, setQuote] = useState("")
  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
    .then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data); // return {quote: ""}
      setQuote(data.message);
    })
  }, []);

  return (
    <div>
      <img src='kanye.svg' alt="kanye picture" className='logo'/>
      <h3>Kanye once said:</h3>
      <div className='quote-block'>{quote}</div>
    </div>
  )
}

export default App