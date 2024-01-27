import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import {useEffect, useState, useCallback} from "react";
import useInput from "../hooks/useInput.js";

export default function EffectSection() {
  const input = useInput()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effects</h3>
      <Button onClick={() => setModal(true)}>Открыть информацию</Button>
      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, deleniti eum facilis harum ipsa magnam,
          maiores minus nesciunt nostrum, officia optio provident quae quas sed suscipit vitae voluptas voluptatibus?
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>

      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className={'control'} {...input} />
          <h6>{input.value}</h6>
          <ul>
            {users
              .filter(user =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  )
}