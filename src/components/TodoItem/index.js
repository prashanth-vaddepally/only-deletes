// Write your code here
import './index.css'
const TodoItem = props => {
  const {deleteUser} = props
  const {title, id} = deleteUser
  const deleting = () => {
    deleteUser(id)
  }
  return (
    <div className="theoutside">
      <p>{title}</p>
      <button type="button" className="the-button" onClick={deleting}>
        Delete
      </button>
    </div>
  )
}
export default TodoItem
