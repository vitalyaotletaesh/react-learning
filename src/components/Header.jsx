import logo from '/logo-50.png'
import {useState} from "react";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date())

  setInterval(() => setCurrentTime(new Date()), 1000)

  return (
    <header>
      <div>
        <img src={logo} alt=""/>
        <h3>Pear</h3>
      </div>
      <b> {'Текущее время: ' + currentTime.toLocaleTimeString()} </b>
    </header>
  )
}