import get from "./get"
export default function set(item){      
    if(item.date == '' || item.title == '')  {
        alert("Cannot Enter the empty item")
    }

    else{
        
        if(localStorage.length == 0){
            const newQ = []
            newQ.push(item)
            localStorage.setItem(0,JSON.stringify(newQ))
        }
        else{
          const oldQ = get()
            oldQ.push(item)
            localStorage.removeItem(0)
            localStorage.setItem(0,JSON.stringify(oldQ))    
        }
    }
    // if(localStorage.length == 0)    {        
    //     if(item.date != '' && item.title != ''){
    //         let newQ = []
    //         newQ.push(item)
    //         localStorage.setItem(0 , JSON.stringify(newQ))
    //         console.log(localStorage.getItem(0))            
    //     }

    //     else{
    //         alert("Empty items cannot be inserted!")
    //     }
    // }
    // else{
    //     const oldQ = get();
    //     console.log(oldQ)
    //     localStorage.removeItem(0);
    //     const newQ = oldQ.push(item);
    //     localStorage.setItem(0 , JSON.stringify(newQ));
    //     console.log(localStorage.getItem(0))
    // }
}