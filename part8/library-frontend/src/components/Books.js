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