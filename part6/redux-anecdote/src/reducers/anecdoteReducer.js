const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


//Action Creators

const voteDispatch = (id) => {
  return {
    type: 'updateVote',
    payload: {
      id: id,
    }
  }
}

const newNoteDispatch = (content) => {
  return {
    type: 'newNote',
    payload: {
      content,
    }
  }
}


const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'updateVote':
      const { id } = action.payload;
      return state.map(ele => ele.id === id ? { ...ele, votes: ele.votes + 1 } : ele)
    case 'newNote':
      const { content } = action.payload
      const newNote = {
        content: content,
        id: getId(),
        votes: 0
      }
      return [...state, newNote]
    default:
      return state
  }
}

export {
  voteDispatch,
  newNoteDispatch
}

export default reducer