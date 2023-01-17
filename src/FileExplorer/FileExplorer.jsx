import React, { useEffect } from "react";
import FileFolder from "./Folder";
import { explorer } from './data';

export default function FileExplorer() {
    console.time();

    useEffect(() => { console.timeEnd() },[])
    return(
        <div>
            <h1>File Explorer</h1>
            <FileFolder explorer={explorer} />
        </div>
    )
}