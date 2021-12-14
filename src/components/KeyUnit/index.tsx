import { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import { playAudio } from "../../utils/audio";
import { getCharByPianoKey } from "../../utils/keyboard";

const PianoKeyElement = styled.div`
    width: 50px;
    height: 220px;
    border-right: 1px solid #000;
    position: relative;
    display: flex;
    text-align: center;
    &.pressed {
        background-color: #FF760C;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.8);
        transform: scale(0.99) translateY(-3px);
    }
    > .black {
        width: 28px;
        height: 120px;
        background-color: #000;
        position: absolute;
        right: -14px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        &.pressed {
            background-color: #FF760C;
        }
    }
    > span {
        position: absolute;
        bottom: 0;
        left: 30%;
    }
`;

const KeyUnit = ({ keyLetter, keyNumber, hasBlack }: {
    keyLetter: string;
    keyNumber: number;
    hasBlack?: boolean;
}) => {

    const [completeKeyName, setCompleteKeyName] = useState(`${keyLetter}${keyNumber}`.toLowerCase());

    const handleClick: MouseEventHandler = (event) => {

        const keyElement = event.target as HTMLElement;

        if (keyElement) {

            const piano = keyElement.closest('.piano');
    
            piano?.querySelectorAll('.piano-key').forEach((element) => {
    
                if (element.classList.contains('pressed')) {
                    element.classList.remove('pressed');
                }
    
                const blackKey = element.querySelector('.black');
    
                if (blackKey) {
                    if (blackKey.classList.contains('pressed')) {
                        blackKey.classList.remove('pressed');
                    }
                }
    
            });
    
            keyElement.classList.add('pressed');
    
            let keyName;
    
            if (keyElement.classList.contains('black')) {
    
                const container = keyElement.closest('.piano-key') as HTMLElement;
    
                keyName = `${container.dataset.key}-sharp.mp3`;
    
            } else {
    
                keyName = `${keyElement.dataset.key}.mp3`;
    
            }
            
            if (keyName) {
                playAudio(keyName);
            } else {
                console.error('Nota não encontrada.');
            }
    
        }

    }

    return (
        <PianoKeyElement
            className="piano-key"
            data-key={completeKeyName}
            onClick={handleClick}
        >
            {hasBlack && (
                <div className="black">
                    {`${completeKeyName.toUpperCase()}#`} <br /> {getCharByPianoKey(completeKeyName, true)?.key.toUpperCase()}
                    {/* {`${keyLetter}2#`}2# <br /> [ */}
                </div>
            )}
            
            <span>
                {`${completeKeyName.toUpperCase()}`} <br /> {getCharByPianoKey(completeKeyName)?.key.toUpperCase()}
                {/* {`${keyLetter}2`}2 <br /> A */}
            </span>
        </PianoKeyElement>
    );

}

export default KeyUnit;