import React, { useState } from 'react';
import './colors.styles.css';
import Color from './color/color.component';
import { Button } from '@material-ui/core';

// import { makeStyles } from '@material-ui/core/styles';

// const btnStyles = makeStyles({
//     root: `
//         color: white,
//         text-shadow: 2px 2px 2px black,
//     `
// });

let colorList = ['yellow', 'green', 'blue', 'violet', 'red', 'orange', 'black', 'brown', 'cyan', 'grey', 'gold', 'lime', 'maroon', 'magenta', 'navy', 'olive', 'pink', 'purple', 'salmon', 'tan', 'teal'];

let ColorBtns = (props) => {

    // const displayText = btnStyles()

    const [boxOne, setBoxOne] = useState('');
    const [boxTwo, setBoxTwo] = useState('');
    const [boxThree, setBoxThree] = useState('');
    const [boxFour, setBoxFour] = useState('');
    const [boxFive, setBoxFive] = useState('');
    const [boxSix, setBoxSix] = useState('');
    const [titledColor, setTitledColor] = useState('');
    const [answer, setAnswer] = useState(false);

    let colorArr = [
        boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix
    ]
    
    let attempts = 1;

    let selectedColor = (value) => {
        let colorValue = value.target.id
        let winStyle = value.target.style
        let threeAttempts = false

        // TODO: Currently displaying correctly.  Need to set innerText back to "empty" when displaying a new set of colors
        
        console.log('Color Value', winStyle)
        for(; attempts < 4; attempts++) {
            console.log(attempts)
            if(colorValue === titledColor) {
                setAnswer(true)
                winStyle.color = `white`;
                break;
            } else if (colorValue !== titledColor && attempts !== 3) {
                console.log('Try Again!');
                winStyle.innerText = 'Try Again!'
                attempts++
                break;
            } else {
                threeAttempts = true;
                attempts = 1
            }
        }
        
        if(threeAttempts) {
            randomColor()
        }
    }

    let randomColor = () => {
        let x = Math.floor(Math.random() * 6);

        let listCopy = [...colorList];
        let newArr = [];

        for (let i = 1; i < 7; i++) {
            let pullPOS = Math.floor(Math.random() * listCopy.length);
            newArr.push(listCopy[pullPOS]);
            listCopy.splice(pullPOS, 1);
        }
        
        setAnswer(false);
        setTitledColor(newArr[x]);
        setBoxOne(newArr[0]);
        setBoxTwo(newArr[1]);
        setBoxThree(newArr[2]);
        setBoxFour(newArr[3]);
        setBoxFive(newArr[4]);
        setBoxSix(newArr[5]);

    }

    return (
        <>
            {/* <h1>Colors</h1> */}
            <h1>{titledColor === '' ? 'Hit Go!' : titledColor.toUpperCase()}</h1>
            <Color selected={selectedColor} colorState={colorArr} arr={colorArr} answer={answer}/> <br/>
            <Button onMouseDown={randomColor}>GO!</Button>
        </>
    )
}

export default ColorBtns;