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
    }
}
