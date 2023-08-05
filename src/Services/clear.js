export default function clear(){

    if(localStorage.length == 0){
        alert("Items already cleared nothing to clear!!")
    }

    else {
        if(!confirm('This will remove all the items are you sure')){}
        else
        localStorage.clear()
    }
}