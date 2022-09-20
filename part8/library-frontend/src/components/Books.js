//const Books = (props) => {
//  if (!props.show) {
//    return null
//  }
//
//  console.log(props.books.map(a => a)
//
//  const books = []
//
//  return (
//    <div>
//      <h2>books</h2>
//
//      <table>
//        <tbody>
//          <tr>
//            <th></th>
//            <th>author</th>
//            <th>published</th>
//          </tr>
//          {props.books.map((a) => (
//            <tr key={a.title}>
//              <td>{a.title}</td>
//            </tr>
//          ))}
//        </tbody>
//      </table>
//    </div>
//  )
//}
//
//export default Books

import React from 'react'

function Books({books, show}) {

  if(!show) {
    return null;
  }

  console.log(books.map(a => a))

  return (
    <div>
      <h2>Books</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Author</th>
            <th>published</th>
          </tr>
          {books.map((a) => {
            return (
            <tr>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  )
}

export default Books