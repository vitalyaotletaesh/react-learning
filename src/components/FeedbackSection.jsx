import Button from "./Button/Button.jsx";
import {useState, useRef} from "react";


function StateVsRef() {
  const input = useRef()
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('')

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setShow(true)
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        onKeyDown={handleKeyDown}
        className={'control'}
      />
    </div>
  )
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: 'help',
  })
  // const [name, setName] = useState('')
  // const [hasError, setHasError] = useState(true)
  // const [reason, setReason] = useState('help')

  function handleNameChange(event) {
    // setName(event.target.value)
    // setHasError(event.target.value.trim().length === 0)
    setForm((prev) => ({
      ...prev, // БЕЗ ЭТОЙ ЗАПИСИ, СТЭЙТЫ, КОТОРЫЕ НЕ МЕНЯЮТСЯ В setForm ПРОСТО ИСЧЕЗНУТ !!!
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }))
  }

  function ToggleError() {
    // setHasError((prev) => !prev) // БЕРЁТ ПРЕДЫДУЩЕЕ ЗНАЧЕНИЕ СТЭЙТА И МЕНЯЕТ ЕГО
  }

  return (
    <>
      <section>
        <h2>Обратная связь</h2>

        <Button onClick={ToggleError}>Toggle Error</Button>
        <form style={{marginBottom: '20px'}}>
          <label htmlFor="name">Ваше имя</label>
          <input type="text" className={'control'} id={'name'} value={form.name} onChange={handleNameChange}
                 style={{border: form.hasError ? '1px solid red' : null}}/>

          <label htmlFor="reason">Причина обращения</label>
          <select
            id="reason"
            className={'control'}
            value={form.reason}
            onChange={event =>
              setForm(prev => ({...prev, reason: event.target.value}))
            }
          >
            <option value="error">Ошибка</option>
            <option value="help">Нужна помощь</option>
            <option value="suggest">Предложение</option>
          </select>

          {/*<pre>*/}
          {/*  {JSON.stringify(form, null, 2)}*/}
          {/*</pre>*/}

          <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
        </form>

        <hr/>
        <StateVsRef/>
      </section>
    </>
  )
}