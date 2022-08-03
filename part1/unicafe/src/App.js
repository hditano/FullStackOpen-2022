import { useState } from 'react'

const Button = ({text, click}) => {
  return (
    <>
      <button onClick={click}>{text}</button>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good || neutral || bad) {
  return (
    <>
      <h2>Statistics</h2>
      <StatisticsLine text='Good' value={good}/>
      <StatisticsLine text='Neutral' value={neutral}/>
      <StatisticsLine text='Bad' value={bad}/>
      <StatisticsLine text='All' value={good + neutral + bad}/>
      <StatisticsLine text='Average' value={(good + neutral + bad) / good + neutral + bad}/>
      <StatisticsLine text='Positive' value={good / (good + neutral + bad) * 100}/>
    </>
  )
  }
  return (
    <h2>no feedback given</h2>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <>
      <p>{text}: {value}</p>
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
      <Button text='Good' click={handleGood} />
      <Button text='Neutral' click={handleNeutral} />
      <Button text='Bad' click={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )

}


export default App