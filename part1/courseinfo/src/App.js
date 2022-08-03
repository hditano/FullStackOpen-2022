const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.name}/>
      <Content name={course.parts[0].name} exercises={course.parts[0].name}/>
      <Content name={course.parts[1].name} exercises={course.parts[1].name}/>
      <Content name={course.parts[2].name} exercises={course.parts[2].name}/>
      <Totals total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Content = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Totals = (props) => {
  return (
    <p>Number of exercises {props.total} </p>
  )
}

export default App