import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral} </p>
      <p>Bad: {props.bad} </p>
      <p>All: {props.good + props.neutral + props.bad}</p>
      <p>Average: {(props.good + props.neutral + props.bad) / props.good + props.neutral + props.bad}</p>
      <p>Positive: {props.good / (props.good + props.neutral + props.bad) * 100}%</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood} >Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )

}


export default App