import KeyUnit from "../KeyUnit"

const PianoKeys = ({ groupNumber }: {
    groupNumber: number;
}) => {

    return (
        <>
            <KeyUnit
                keyLetter={"C"}
                keyNumber={groupNumber}
                hasBlack={true}
            />
            <KeyUnit
                keyLetter={"D"}
                keyNumber={groupNumber}
                hasBlack={true}
            />
            <KeyUnit
                keyLetter={"E"}
                keyNumber={groupNumber}
            />
            <KeyUnit
                keyLetter={"F"}
                keyNumber={groupNumber}
                hasBlack={true}
            />
            <KeyUnit
                keyLetter={"G"}
                keyNumber={groupNumber}
                hasBlack={true}
            />
            <KeyUnit
                keyLetter={"A"}
                keyNumber={groupNumber}
                hasBlack={true}
            />
            <KeyUnit
                keyLetter={"B"}
                keyNumber={groupNumber}
            />
        </>
    );

}

export default PianoKeys;