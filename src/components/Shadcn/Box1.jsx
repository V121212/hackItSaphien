import Home from "../../Pages/Home"

function Box1(props) {
  return (
    <div className= " p-3.5 flex flex-col w-80 h-40 bg-slate-300 rounded-1xl items-center rounded-2xl hover:scale-150 hover:ml-36 hover:transition: duration-1000 hover:cursor-pointer">
        <div className="text-1xl font-bold "> {props.title} </div>
        <div className="text-sm  text-center "> {props.body}</div>
    </div>
  )
}

export default Box1