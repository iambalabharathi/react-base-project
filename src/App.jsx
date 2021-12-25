import React, {useState, useEffect} from 'react'

function App (props) {
    const [timesClicked, setTimesClicked] = useState(0);

    useEffect(() => {
        document.getElementById('txt-times-clicked').innerHTML = `${timesClicked}`
    })
    return (
    <div>
        <h1 className="text-2xl font-bold">Hello {props.name}! </h1>
        <h4 id='txt-times-clicked'>timesClicked</h4>
        <button onClick={() => setTimesClicked(timesClicked+1)}>Click Me</button>
    </div>
    )
}

export default App;