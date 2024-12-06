import { useState } from 'react'
import './App.css'
import './output.css'
import verify from './components/verify'

function App() {
  const [password, setPassword] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPassword = e.target.value;
    setPassword(selectedPassword)
    console.log(password);
  }

  return (
    <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-24">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Password Strength Checker</h2>
      </div>
      <div className="flex flex-col max-w-md space-y-5">
        <input
          onChange={handleInput} 
          value={password}
          type="text"
          placeholder="type here your password"
          className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
        />
        {verify({password})}
      </div>
    </div> 
  )
}

export default App
