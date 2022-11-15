import React ,{useState}from "react";
import Imput from "./imput";


//include images into your bundle


//create your first component
const Home = () => {

	const [inputValue, setinputValue] = useState("");
	const [value, setValue]= useState([]);
	

	const change =(event)=>{
		setinputValue(event.target.value)
	};


	const keyDown  =(event)=>{
       if (event.keyCode == "13" && inputValue){
         setValue([...value, inputValue])
		 setinputValue("");
		
	} }

	



	return (

					<div className="container ">
						
					<input type="text" onChange={change} onKeyDown={keyDown} value={inputValue} placeholder="write something..... "/>
					
					
					{value.map((value)=>{
							return <Imput name={value}/>
							
							
					})}
					
					</div>

	);
};

export default Home;


//<button type="button" class="btn-close" aria-label="Close"></button>