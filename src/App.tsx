import { useCallback, useState } from "react";
import Button from "./Button/Button";


const App = () => {
    const processFile = useCallback(async () => {
        console.log("read file...", file);
    },[])

    const [file, setFile] = useState("");

    return (
        <div>
            <h1>Hello Electron TypeScript React App!</h1>;
            <input onChange={(event) => setFile(event.target.value)}></input>
            <Button onClick={processFile}></Button>
        </div>
    )
}

export default App;
