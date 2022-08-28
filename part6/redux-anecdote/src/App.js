import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notifications from './components/Notification';

const App = () => {
  return (
    <div>
      <Notifications />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>

  );
};

export default App;
