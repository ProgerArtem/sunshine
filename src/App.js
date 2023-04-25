import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
let absolute_rand = Math.random()
let root = ReactDOM.createRoot(
document.querySelector("#root")
);
function Sun(){
  absolute_rand=Math.random()
  const element = <h1>{absolute_rand}</h1>;
  root.render(element);
 
}
setInterval(Sun, 1000)

export default Sun;

