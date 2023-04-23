import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const inputRef = useRef()
  const image1Ref = useRef()
  const image2Ref = useRef()
  const video1Ref = useRef()
  
  useEffect(() => {
    inputRef.current.focus();
  }, [])

    
    function changeImage(imageRef, imageName, change) {
      if (change === true) {
        if (imageName === 'cat1') {
          imageRef.current.src = 'src/cat1-modified.jpg';
        } else if (imageName === 'cat2') {
          imageRef.current.src = 'src/cat2-modified.jpg';
        }
      } else {
        if (imageName === 'cat1') {
          imageRef.current.src = 'src/cat1.jpg';
        } else if (imageName === 'cat2') {
          imageRef.current.src = 'src/cat2.jpg';
        }
      }
    }
    function playVideo(){
      video1Ref.current.play();
    }
    function pauseVideo(){
      video1Ref.current.pause();
    }
    const src =
    "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  
    
  return (
    <div className="App">
      <h3>Enter your name</h3>
      <br />
      <input type='text' ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <h3>My name is {name}</h3>

      <br />
      <img src='src/cat1.jpg' ref={image1Ref} onMouseOver={() => changeImage(image1Ref, 'cat1', true)} onMouseOut={() => changeImage(image1Ref, 'cat1', false)} width={"200px"} height={"120px"} />
      &nbsp;  &nbsp;  
      <img src='src/cat2.jpg' ref={image2Ref} onMouseOver={() => changeImage(image2Ref, 'cat2', true)} onMouseOut={() => changeImage(image2Ref, 'cat2', false)} width={"200px"} height={"px"} />
     <br/>
      <video ref={video1Ref} width="65%">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
   <br/>
    <button  onClick={()=>playVideo()}>Play</button>
    <button onClick={()=>pauseVideo()}>Pause</button>
    </div>
  )
}

export default App
