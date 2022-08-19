import {useState} from 'react';
import Form from './components/Form';

function App() {
  
  const [status, setStatus] = useState(false);

  console.log(status)

  return (
    <div>
      <form>
	<Form onStatusChange={setStatus} status={status}/>
      </form>
    </div>
  )
}

export default App
