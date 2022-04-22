//import "../components/button.css"

import styled from 'styled-components'

// export const Button =({children})=>{
//     return <button className="btn">{children} </button>
// }

const Button = styled.button`
  background: transparent;
 border: none;

  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  background-color: blue;

`
const DefaultButton = styled(Button)`
  color:black;
  background-color:transparent;
  border-color:black;
  border:1px solid;
`;
const DashedButton = styled(Button)`
  color:black;
  background-color:transparent;
  border-color:black;
  border:1px dashed
`;
const TextButton = styled(Button)`
  color:black;
  background-color:transparent;
  border-color:black;
 
`;

const LinkButton = styled(Button)`
  color:rgb(52, 122, 235);
  background-color:transparent;
  border-color:black;
`;


export { Button, DefaultButton,DashedButton ,TextButton,LinkButton}