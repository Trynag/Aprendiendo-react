// eslint-disable-next-line react/prop-types
export const Notes = ({ title, body }) => {
  return (
    <li>
      <h2> {title} </h2>
      <small> {body} </small>
    </li>
  )
}
