import React from 'react';
import {FormTask} from "./FormTask";

export const Header =({className, ...rest})=>  {
        return (
            <div className={className}>
                <h1>Mark List</h1>
                <FormTask {...rest}/>
            </div>
        );
}
