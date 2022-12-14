import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [likable, setLikable] = useState(0);

  function handleVotes() {
    let copy_votes = [
      ...votes
    ]

    copy_votes[selected] += 1;
    setVotes(copy_votes)
    setLikable(copy_votes.indexOf(Math.max(...copy_votes)))
  }

  console.log(likable)
  console.log(votes)


  return (
    <div>
      {anecdotes[selected]}
      <br></br>
      <Button randomQuote={() => setSelected(Math.floor(Math.random() * anecdotes.length))}/>
      <ButtonVote votes={handleVotes}/>
      <h3>Anecdote with most votes</h3>
      <p>{votes === false ? 'no votes yet' :  anecdotes[likable]}</p>
      <p>Vote Count: {votes[likable]}</p>
    </div>
  )
}

const Button = ({randomQuote}) => {
  return (
    <button onClick={randomQuote}>next anecdote</button>
  )
}

const ButtonVote = ({votes}) => {
  return (
    <button onClick={votes}>Vote</button>
  )
}

export default App