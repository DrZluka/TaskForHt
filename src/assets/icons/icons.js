import React from "react";

export const iconsDefs = {
    addNewTask:{
        className: 'icon icon-plus',
        viewBox:'0 0 32 32',
        width: '1em',
        height: '1em',
        body: (
            <path fill="currentColor" d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552
             0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552
              0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"/>
        )
    },
    taskDone:{
        className: 'icon icon-checkmark',
        viewBox:'0 0 32 32',
        width: '1em',
        height: '1em',
        body: (
            <path fill="currentColor" d="M27 4l-15 15-7-7-5 5 12 12 20-20z"/>
        )
    },
    deleteTask:{
        className: 'icon icon-bin2',
        viewBox:'0 0 32 32',
        width: '1em',
        height: '1em',
        body: (
            <path fill="currentColor" d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z"/>
        )
    },
    editTask:{
        className: 'icon-pencil',
        viewBox:'0 0 32 32',
        width: '1em',
        height: '1em',
        body: (
            <path fill="currentColor" d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"/>
        )
    },
    saveEditTask:{
        className: 'icon-folder-download',
        viewBox:'0 0 32 32',
        width: '1em',
        height: '1em',
        body: (
            <path fill="currentColor" d="M18 8l-4-4h-14v26h32v-22h-14zM16 27l-7-7h5v-8h4v8h5l-7 7z"/>
        )
    }
}
