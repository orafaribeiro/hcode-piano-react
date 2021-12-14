import keyboardKeys from "../keyboardKeys";

export function getCharByPianoKey(pianoKey: string, isSharp?: boolean) {

    return keyboardKeys.find(item => {

        if (isSharp) {
            return item.pianoKey === pianoKey && item.isSharp;
        } else {
            return item.pianoKey === pianoKey;
        }
        

    });

}