import HookMouse from './HookMouse';
import { useState } from "react"


const MouseContainer = () => {
	const [display, setDisplay] = useState(true)

	return(
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle Display</button>
			{display && <HookMouse />}
		</div>
	)

}

export default MouseContainer