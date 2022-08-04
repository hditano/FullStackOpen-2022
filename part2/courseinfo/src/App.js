import Course from "./components/Course"

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Content = ({content}) => {
  
  return (
    <>
      {content.map(ele => <Part key={ele.id} name={ele.name} exercises={ele.exercises}  />)}
    </>
  )
  
}

const Part = ({name, exercises}) => {
  return (
    <p>{name}:  {exercises}</p>
  )
}


const Total = ({finalCount}) => {
  return (
    <p>Total of Exercises: {finalCount}</p>
  )
}



const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



  return (
     <>
      {courses.map(ele => {
        return <Course key={ele.id} data={ele}/>
      })}
     </>
  )
}

export {
  Header,
  Content,
  Total
}

export default App