import { useRef, useEffect } from "react";
import KioskBoard from "kioskboard";

//#EXAMPLE IS LOCATED HERE
//https://furcan.github.io/KioskBoard/

function FirstCompoment() {
  const keyboardRef = useRef(null);
  const numpadRef = useRef(null);

  useEffect(() => {
    if (keyboardRef.current) {
      KioskBoard.run(keyboardRef.current, {
        language: "en",
        theme: "light",
        keysArrayOfObjects: [
          {
            "0": "Q",
            "1": "W",
            "2": "E",
            "3": "R",
            "4": "T",
            "5": "Y",
            "6": "U",
            "7": "I",
            "8": "O",
            "9": "P"
          },
          {
            "0": "A",
            "1": "S",
            "2": "D",
            "3": "F",
            "4": "G",
            "5": "H",
            "6": "J",
            "7": "K",
            "8": "L"
          },
          {
            "0": "Z",
            "1": "X",
            "2": "C",
            "3": "V",
            "4": "B",
            "5": "N",
            "6": "M"
          }
        ]
      });
    }
  }, [keyboardRef]);

  useEffect(() => {
    if (numpadRef.current) {
      KioskBoard.run(numpadRef.current, {
        theme: "light",
        keysArrayOfObjects: [
          {
            "0": "7",
            "1": "8",
            "2": "9"
          },
          {
            "0": "4",
            "1": "5",
            "2": "6"
          },
          {
            "0": "1",
            "1": "2",
            "2": "3"
          },
          {
            "0": "0",
            "1": "."
          }
        ]
      });
    }
  }, [numpadRef]);

  return (
    <div className="App">
      <input
        className="inputFromKey"
        ref={keyboardRef}
        type="text"
        data-kioskboard-type="keyboard"
        placeholder="normal keyboard"
        maxLength={4}
      />
      <input
        className="inputFromKey"
        ref={numpadRef}
        type="text"
        data-kioskboard-type="numpad"
        placeholder="numpad"
        maxLength={4}
      />
    </div>
  );
}

export default FirstCompoment;