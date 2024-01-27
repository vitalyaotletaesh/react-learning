import Button from "./Button/Button.jsx";
import {useState} from "react";

export default function TypeProgramSection() {
  const [contentType, setContentType] = useState('work')

  const handleClickChangeContentType = (type) => {
    setContentType(type)
  }

  return (
    <>
      <section className={'typeProgramSection'}>
        <Button isActive={contentType === 'work'}
                onClick={() => handleClickChangeContentType('work')}>Work</Button>
        <Button isActive={contentType === 'learning'}
                onClick={() => handleClickChangeContentType('learning')}>Learning</Button>
        <Button isActive={contentType === 'games'}
                onClick={() => handleClickChangeContentType('games')}>Games</Button>
      </section>

      {!contentType && <div>{'No content'}</div>}
      {contentType && <section>{contentType}</section>}
    </>
  )

}