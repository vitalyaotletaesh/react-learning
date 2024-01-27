import logo from '/logo-50.png'
import {useEffect, useState} from "react"
import { styled } from 'styled-components'
// import './Header.css'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, []);

  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt=""/>
        <h3>Pear</h3>
      </div>
      <b> {'Текущее время: ' + currentTime.toLocaleTimeString()} </b>
    </HeaderContainer>
  )
}