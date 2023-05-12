import { useDispatch, useSelector } from "react-redux"
import { buyChicken } from "../redux/chicken/chickenActions"

const HookChickenReducer = () => {
    const numOfChickens = useSelector(state => state.chicken.numOfChickens)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of Hook Chickens - {numOfChickens}</h2>
            <button onClick={() => dispatch(buyChicken())}>Buy Hook Chickens</button>
        </div>
    )
}
export default HookChickenReducer