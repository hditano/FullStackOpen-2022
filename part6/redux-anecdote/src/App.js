import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notifications from './components/Notification';
import FilterList from './components/FilterList';
import { useEffect } from "react";
import { initializeNotes } from "./features/reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes())
  }, [dispatch])

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
