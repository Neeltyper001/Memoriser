export default function get(){
    if(JSON.parse(localStorage.getItem(0)) == null){
        return []
    }

    else{
        return JSON.parse(localStorage.getItem(0))
    }
}