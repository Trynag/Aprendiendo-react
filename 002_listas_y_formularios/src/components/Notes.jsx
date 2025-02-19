export const Notes = ({ categories = [], content, message }) => {
  return (
    <li>
      <p> {content} </p>
      <small> {message} </small>

      {
        categories.map(categories => (
          <small key={categories}>
            {categories}
          </small>
        ))
      }
    </li>
  )
}
