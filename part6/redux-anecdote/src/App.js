import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notifications from './components/Notification';
import FilterList from './components/FilterList';
import noteServices from './services/notes';
import { useEffect } from "react";
import { setNotes } from "./features/reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await noteServices.getAll();
      dispatch(setNotes(response));
    }
    fetchData()
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
