
import "./App.css"


function App() {
  const mobile = ["Android", "Blckberry","Iphone","Windows Phone"];
  const manufact = ["Samsung", "HTC","Micromax","Apple"];
  return (
    <div className="App">
        <div className ="Mobile">
        <h1>Mobile Operating System</h1>
         <ul>
           {mobile.map((e)=>{
             return <li>{e}</li>
           })}
         </ul>
      </div>
      <div className ="Manu">
        <h1>Mobile Manufacturers</h1>
        <ul type ="square">
          {manufact.map((e)=>{
            return <li>{e}</li>
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;
