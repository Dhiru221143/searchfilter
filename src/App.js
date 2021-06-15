
import React,{useState,useEffect} from 'react';
import  Axios from 'axios' ;
import './App.css';

function App() {
const[data,setData]=useState([])
const[input,setInput]=useState('')
const[output,setOutput]=useState([])

useEffect( ()=>{
  async function getData(){
    const res=await Axios.get("https://disease.sh/v3/covid-19/countries")
    setData(res.data)
  }
  getData()
},[])

useEffect( ()=>{
  setOutput([])
  data.filter(val=>{
    if(val.country.toLowerCase().includes(input.toLowerCase())){
      setOutput(output=>[...output,val])
    }
  })
},[input])



return (
  <div className="App">
  { /*search bar*/}
  <div className="search-bar">
    <input onChange={e=>setInput(e.target.value)} type="text" placeholder="search"/>
  </div>

  { /*OUTPUT*/}
  <div className="output">
    {
      output.map(item=>(<p>{item.country}</p>))
    }
  </div>
  </div>

);
  }
export default  App