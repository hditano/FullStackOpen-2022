const Header = ({ course }) => <h1>{course.name}</h1>


// Will calculate total exercises.
const total = (data) => {
  return data.parts.reduce((sum, list) => {
    return sum + list.exercises;
  }, 0)
}

// Renders total of exercises, and passes data received as a prop to function total with data argument.
const RenderTotal = ({data}) => <p>Total of Exercises: {total(data)} </p>


const Course = ({data}) => {
  return data.parts.map((ele) => {
    return <p key={ele.id}>{ele.name} {ele.exercises}</p>
  })
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
      <>
        <Header course={course} />
        <Course key={course} data={course} />
        <RenderTotal data={course} />
      </>
  )
}

export default App