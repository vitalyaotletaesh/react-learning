import Button from "./Button/Button.jsx";

export default function TabsSection({ active, onChange }) {
  return (
    <>
      <section style={{textAlign: 'center', margin: '20px 0'}}>
        <Button isActive={active === 'main'} onClick={() => onChange('main')}>Главная</Button>
        <Button isActive={active === 'profile'} onClick={() => onChange('profile')}>Профиль</Button>
        <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button>
        <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>Effect</Button>
      </section>
    </>
  )
}