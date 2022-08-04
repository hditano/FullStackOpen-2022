const Course = ({data}) => {
  return (
    <>
      <Header title={data}/>
      <Content content={data}/>
      <Total totalExercises={data}/>
    </>
  )
}

const Header = ({title}) => {
  return (
    <h1>{title.name}</h1>
  )
}

const Content = ({content}) => {

  return (
    <>
      {content.parts.map(ele => {
        return (
          <Part key={ele.id} name={ele.name} exercises={ele.exercises}/>
        )
      })}
    </>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>{name}:  {exercises}</p>
  )
}


const Total = ({totalExercises}) => {
  let myData = totalExercises.parts.map(ele => ele.exercises).reduce((sum, item) => sum + item, 0);
  return (
    <p>Total of exercises: {myData}</p>
  )
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
        <Course data={course} />
      </>
  )
}

export default App