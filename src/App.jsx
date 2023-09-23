import './App.css'
// import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefFrom from './components/RefFrom/RefFrom'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefullForm from './components/StatefullForm/StatefullForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log("Sign uo data : ", data);
  }
  const handleUpdateProfile = data => {
    console.log("Update data : ", data);
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={"Sign Up"} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>

      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
          <div>
            <h2>Update profile</h2>
            <p>Always keep your profile update</p>
          </div>
      </ReusableForm>

    </>
  )
}

export default App
