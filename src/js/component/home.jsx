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

	/*const bottonDelete =(e)=>{
				const filtered = value.filter((value, currenteIndez) => index != currenteIndez)
		setValue(filtered)*/


const bottonDelete =(e)=>{
	const filtered = value.filter(item =>item != e)
	setValue(filtered)
	

}

	return (
					<div className="container ">
						
					<input type="text" onChange={change} onKeyDown={keyDown} value={inputValue} placeholder="write something..... "/>
					
					{value.map((value, index)=>{
							return <Imput name={value}
									key={index}
									Delete={bottonDelete}		
							/>			
					})}
				
				<div ><strong>El numero de tareas es : {value.length}</strong></div>
					</div>
					
	);
};

export default Home;



