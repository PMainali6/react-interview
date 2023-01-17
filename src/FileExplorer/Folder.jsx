import React, { useState } from 'react';

function FileFolder({ explorer }) {
    const [ expand, setExpand ] = useState(false);

    // console.log(`${explorer.name}: ${!!explorer.isFolder}`)
    if(explorer.isFolder) {
        return (
            <div style={{ fontSize: "1.5rem" }}>
                <div style={{ cursor: "pointer" }}
                    onClick={() => setExpand(!expand)}
                >{explorer.name}</div>
    
                <div style={{ paddingLeft: 15, display: expand ? "block" : "none" }}>
                    {explorer.children.map(child => {
                        return <FileFolder key={child.name} explorer={child} />
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div>{explorer.name}</div>
        )
    }
}

export default FileFolder;