import React ,{useState}from "react";


//include images into your bundle


//create your first component
const Home = () => {

	const [inputValue, setinputValue] = useState();

     

	const change =(event)=>{
		setinputValue(event.target.value)
	};

	const keyUp =(event)=>{
       if (event.keyCode=== "13" ){
    
	}
}

	return (

		<div className="container">
			
		<input onChange ={change} value={inputValue} onKeyUp ={keyUp} placeholder="write something..... "/>
		<ul> 
		<li>{inputValue ? inputValue : " "}</li>
      </ul>
		</div>
	);
};

export default Home;


