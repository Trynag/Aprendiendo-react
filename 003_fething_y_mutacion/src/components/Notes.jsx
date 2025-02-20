// eslint-disable-next-line react/prop-types
export const Notes = ({ title, body }) => {
  return (
    <li>
      <p> {title} </p>
      <small> {body} </small>
    </li>
  )
}
