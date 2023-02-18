import { ChangeEvent } from "react"
import { optionType } from "../types"
import Header from "./Header"
type Props = {
    term:string,
    options:[],
    onInputChange:(e:ChangeEvent<HTMLInputElement>)=> void,
    onOptionSelect:(option:optionType)=>void,
    onSubmit:()=>void,
}
const Search = ({term,options,onInputChange,onOptionSelect,onSubmit}:Props): JSX.Element => {
  return (
      <section className="w-full md:max-w-[500px] h-full lg:h-[500px] p-4 md:px-10 lg:p-24 flex flex-col text-center items-center justify-center text-zinc-700 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
        <Header />
        <div className="flex mt-10 md:mt-4 relative">
          <input 
            type="text" 
            value={term}
            className="px-2 py-1 rounded-l-md border-2 border-white"
            onChange={onInputChange} />
            <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
            {options.map((option:optionType,index:number)=>(
              <li key={option.name + '-' + index}>
                <button 
                onClick={()=>onOptionSelect(option)}
                  className="text-left text-sm w-full px-2 py-1 cursor-pointer hover:bg-zinc-700 hover:text-white">{option.name}
                </button>
              </li>
            ))}
            </ul>
          <button 
            className="rounded-r-md border-2 border-zinc-100 text-zinc-100 px-2 py-1 cursor-pointer hover:border-zinc-500 hover:text-zinc-500" 
            onClick={onSubmit}>search</button>
        </div>
      </section>
  )
}

export default Search