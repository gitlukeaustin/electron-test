import { useCallback, useState } from "react";
import Button from "./Button/Button";

const fs = require('fs');

const App = () => {
    const processFile = useCallback(async () => {
        fs.readFile(file, (error: any, data: any) => {
            if (error) throw error;
            console.log("got data from file", data);
        })
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
