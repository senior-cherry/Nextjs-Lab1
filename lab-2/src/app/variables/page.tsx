'use client';

const Variables = ({variable, var_console}) => {
    console.log(var_console)
    return (
        <div>
           <p>{variable}</p>
        </div>
    );
}

export default Variables;