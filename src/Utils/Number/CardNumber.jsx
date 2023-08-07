export default function CardNumber(props){
    return(
        <p className="absolute flex justify-center items-center font-bold rounded-tr-xl text-2xl bg-black text-yellow-300 w-6 h-6 top-0 right-0" >{props.numberId + 1}</p>
    )
}