import UserGreeting from './usegreeting.jsx'

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} username="Bob"/>
      <UserGreeting isLoggedIn={false} username="Sbob"/>
      <UserGreeting/>
      <UserGreeting isLoggedIn={true} username="Lob"/>
      <UserGreeting isLoggedIn={true}/>
    </>
  )
}

export default App
