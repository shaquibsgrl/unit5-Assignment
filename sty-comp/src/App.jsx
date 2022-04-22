import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, DefaultButton,DashedButton,TextButton, LinkButton} from './components/buttons'

function App() {

  return (
    <div className="App">
      <Button >Primary Button</Button>

      <DefaultButton>Default Button</DefaultButton>

      <DashedButton>Dashed Button</DashedButton>
     

      <TextButton>Text Button</TextButton>


      <LinkButton>Link Button</LinkButton>
    </div>
  )
}

export default App
