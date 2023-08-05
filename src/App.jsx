import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Input from './Utils/Inputs/Input'
import Label from './Utils/Labels/Label'
import Buttons from './Utils/Buttons/Buttons'
import get from './Services/get'
import set from './Services/set'
import setAt from './Services/setAt'
import setStatus from './Services/setStatus'
import remove from './Services/remove'
import clear from './Services/clear'
import Cards from './Components/Cards/Cards'
import './App.css'
import isEmpty from './Services/isEmpty'

function App() {

  const eventTitle = useRef()
  const eventDate = useRef()
  const [displayCards , setDisplayCards] = useState([])

  function handleDisplay(){
    setDisplayCards(get())
  }

    
  // const  handleEventTitleChange = (e)=>{
  //       eventTitle = e.target.value;
  //   }

  // const  handleEventDateChange = (e)=>{
  //      eventDate = e.target.value;
  //   }


  // const handleDisplayCards = ()=>{
  //     setDisplayCards(()=>{
  //       const newDisplayCards = get();
  //       console.log(newDisplayCards)        
  //       return newDisplayCards
  //     })
  //    }
    
    function add(){            
      set({title:eventTitle.current.value , date: eventDate.current.value , progressStatus:true , editStatus: false})
      handleDisplay()
    }

    function addAt(){
      const idx = prompt('Enter the position..')
      setAt(idx , {title:eventTitle.current.value , date: eventDate.current.value , progressStatus:true , editStatus: false})
      handleDisplay()
    }

    const editCard = (e)=>{
      console.log("edit Later")      
    }

    const removeCard = (e)=>{
        remove(e)
        handleDisplay()
    }

    const setStatusCard = (e)=>{
        setStatus(e)
        handleDisplay()
    }

    const clearCard = ()=>{
      clear()
      handleDisplay()
    }

    useEffect(()=>{
      setDisplayCards(get())
    },[])

    let newCards = undefined;    
    if(displayCards.length != 0 ){
      newCards = displayCards.map((obj,index)=>{
          return (
            <Cards 
            key={index} 
            cardId={index} 
            cardTitle = {obj.title} 
            cardDate = {obj.date} 
            editOption = {editCard}
            removeOption= {removeCard}                     
            statusOption = {setStatusCard}/>
          )
      })      
    }
    
  return (
    <>
      <h1>Memo</h1>
      <header>
        <Label labelVal="Enter the event title" />
        <Input inputTitle={"Enter the title"} inputVal={eventTitle} />

        <Label labelVal="Enter the event date" />
        <Input inputTitle={"Enter the date"} inputVal={eventDate} />

        <Buttons buttonsLabel="add"  handleClick= {add}/>        
        <Buttons buttonsLabel="addAt.."  handleClick= {addAt}/>        
        <Buttons buttonsLabel="clear" handleClick={clearCard} />
      </header>

      <main>      
        {isEmpty() ? <h1>Add to the notes</h1> : newCards}
      </main>
    </>
  )
}

export default App
