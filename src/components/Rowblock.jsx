import { useGame } from "../contexts/NumContext"
import NumberBlock from "./NumberBlock"

const RowBlock = ({row,i }) => {
    // console.log(row)
    const { arr, setArr, pickupArray, setPickupArray, levelup, setLevelup, setGameover,setScore}=useGame()

    return (
      <div className='flex '>
        {
          row.map((rowElement, j) => (
            <NumberBlock key={j}  i={i} j={j} rowElement={rowElement} 
            />
          ))
        }
      </div>
    )
}
export default RowBlock