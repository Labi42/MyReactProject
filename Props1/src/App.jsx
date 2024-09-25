import Student from "./Student.jsx"

function App() {
    return (
      <>
        <Student name="Bob" age={18} isstudent={true}/>
        <Student name="Tom" age={28} isstudent={false}/>
        <Student age={98}/>
        <Student/>
        <Student/>
      </>
    )
}

export default App
