import './App.css'
import './t.png'
import ReactLogo from './logo.png'
import Certificate from './certificate.png'
function App() {
  return (
    <>
    {/* First page */}
    <div className='logo'>
      <img style={{ width: 180, height: 180 }} src={ReactLogo} alt="eweS" />
    </div>
    <div className='info'>
      <p >Hi, My name is Rahul and <br />
      I'm a Full Stack Web-Developer</p>
    </div>
      <div >
        <ul className='Nav'> 
          <button className='b'>Home</button>
          <button className='b'>About</button>
          <button className='b'>Contact</button>
          <a href="https://github.com/rahul2271" target='_blank'><button className='b'>Github</button></a>
        </ul>
      </div>
      <div className=''>
        {/* <button className='Resume'>Resume</button> */}
        <a href="https://flowcv.com/resume/rfl0mw0hsn" target='_blank'><button className='Resume'>Resume</button></a>
      </div>
      <div>
      <img style={{ width: 600, height: 400 }} className='certificate' src={Certificate} alt="yftf" />
      </div>
    </>

  )
}

export default App;
