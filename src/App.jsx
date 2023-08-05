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

    
    function add(){            
      set({title:eventTitle.current.value , date: eventDate.current.value , progressStatus:true , editStatus: false})
      handleDisplay()
    }

    function addAt(){
      const idx = prompt('Enter the position..')
      setAt(idx , {title:eventTitle.current.value , date: eventDate.current.value , progressStatus:true , editStatus: false})
      handleDisplay()
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
            removeOption= {removeCard}                     
            statusOption = {setStatusCard}/>
          )
      })      
    }
    
  return (
    <>
      <h1 className="text-8xl text-center">Memo</h1>
      <header className="grid grid-rows-2 grid-cols-4 gap-8 px-52 py-14 place-items-center sz425:csz425">
        <Label labelVal="Enter the event title" />
        <Input inputTitle={"Enter the title"} inputVal={eventTitle} />

        <Label labelVal="Enter the event date" />
        <Input inputTitle={"Enter the date"} inputVal={eventDate} />

        <div className='col-span-4 flex justify-around w-72 sz425:col-span-1'>
        <Buttons styleClass={'add-btn'} buttonsLabel="add"  handleClick= {add}/>        
        <Buttons styleClass={'add-btn'} buttonsLabel="addAt.."  handleClick= {addAt}/>        
        <Buttons styleClass={'rem-clr-btn'} buttonsLabel="clear" handleClick={clearCard} />
        </div>
      </header>

      <main className='relative'>      
        {isEmpty() ? <h1 className='text-center text-8xl font-bold sz425:text-2xl '>Add to the notes</h1> : newCards}
      </main>
    </>
  )
}

export default App
