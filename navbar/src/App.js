import logo from './logo.svg';
import './App.css';


function App() {
  const links =["Services", "Projects", "About"]
  return (
    <div className="main_div">
      <Logo/>
      <div className="links_div">
        {links.map(ele=>{
          return <Links name={ele}/>
        })}
      </div>
      <Btn/>
    </div>
  );
}

const Logo =()=>{
  return <h1>LOGOBAKERY</h1>
}

const Links =(props)=>{
  console.log(props);
  return <a href=''>{props.name}</a>
}

const Btn = ()=>{
  return <button>Contact</button>
}

export default App;
