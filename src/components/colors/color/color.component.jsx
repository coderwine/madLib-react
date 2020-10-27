import React from 'react';

export default function Color(props) {

    // console.log('Color:', props.colorState);

    return (
        <>

        {
            props.arr.map((x, i) => {
                // console.log(x)
                
            return(<button index={i} className={`cardClass`} style={{backgroundColor: `${x}`}} id={x} onMouseDown={props.selected}>
                {props.answer === true ? 'CORRECT' : null}
            </button>)
            })
        }
        
        </>
    )
}