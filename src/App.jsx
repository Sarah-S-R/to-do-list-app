import "./styles.css"


export default function App () {
  return <>
  
  <form className = "new-item-form">
  </form>
  <h1 className = "header">Todo List</h1>
  <ul className = "list">
    <li>
      <label>
        <input type = "checkbox"></input>
        Item 1
      </label>
      <button className = "Btn Btn-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type = "checkbox"></input>
        Item 1
      </label>
      <button className = "Btn Btn-danger">Delete</button>
    </li>

  </ul>
 </>

}
