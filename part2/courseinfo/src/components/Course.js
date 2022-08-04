import {Header, Content, Total} from '../App';

const Course = ({data}) => {
    return (
      <>
        <Header title={data.name}/>
        <Content content={data.parts}/>
        {<Total finalCount={data.parts.map(ele => ele.exercises).reduce((sum, item) => sum + item)} />}
      </>
    )
  }

  export default Course;