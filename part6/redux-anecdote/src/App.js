import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notifications from './components/Notification';
import FilterList from './components/FilterList';

const App = () => {
  return (
    <div>
      <Notifications />
      <h2>Anecdotes</h2>
      <FilterList />
      <AnecdoteList />
      <AnecdoteForm />
    </div>

  );
};

export default App;
