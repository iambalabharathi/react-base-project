import React, {useState, useEffect} from 'react'

function App (props) {
    const [timesClicked, setTimesClicked] = useState(0);

    return (
    <div className="p-6">
        <h1 className="text-3xl font-medium">Practice React Application</h1>
        <h4 className="text-sm mt-5 mb-5">{timesClicked} times.</h4>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={() => setTimesClicked(timesClicked+1)}>Click Me</button>
    </div>
    )
}

export default App;