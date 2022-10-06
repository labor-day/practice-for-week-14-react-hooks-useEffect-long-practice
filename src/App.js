import { useState, useEffect } from "react";
import Message from "./components/Message";
import PictureDisplay from "./components/PictureDisplay";

function App() {
  const [size, setSize] = useState('m');
  const [featherCount, setFeatherCount] = useState(0);
  const [featherColors, setFeatherColors] = useState([]);
  const [isRed, setIsRed] = useState(false);
  const [isOrange, setIsOrange] = useState(false);
  const [isBrown, setIsBrown] = useState(false);
  const [isLightBrown, setIsLightBrown] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  const [sizeClass, setSizeClass] = useState('medium');
 // const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    //console.log('PictureDisplay size', size);
    let className = '';
    switch (size) {
        case 'm':
            className = 'medium';
            break;
        case 'l':
            className = 'large';
            break;
        case 'xl':
            className = 'xlarge';
            break;
        default:
            className = 'small';
            break;
    }
    //console.log(className);
    setSizeClass(className)
}, [size]);

  useEffect(() => {

    // console.log('red: ', isRed);
    // console.log('orange: ', isOrange);
    // console.log('brown: ', isBrown);
    // console.log('lightbrown: ', isLightBrown);
    // console.log('yellow: ', isYellow);

    let newColors = [];
    if (isRed) {newColors.push("red")}
    if (isOrange) {newColors.push("orange")}
    if (isBrown) {newColors.push("brown")}
    if (isLightBrown) {newColors.push("light-brown")}
    if (isYellow) {newColors.push("yellow")}

    setFeatherColors(newColors);

  }, [isRed, isOrange, isBrown, isLightBrown, isYellow]);

  return (
    <>
      <h1>Turkey Creator</h1>
      <h3 className="button-controls">Set the features of your turkey</h3>

      {/* User controls */}
      <div className="button-controls">
        Size:
        <button onClick={() => setSize('s')} >Small</button>
        <button onClick={() => setSize('m')} >Medium</button>
        <button onClick={() => setSize('l')} >Large</button>
        <button onClick={() => setSize('xl')} >X-Large</button>
      </div>
      <div className="button-controls">
        Feather Count:
        <input
          type="number"
          onChange={(e) => setFeatherCount(e.currentTarget.value)}
          defaultValue={0}
          min={0}
          max={10}
        />
      </div>
      <div className="button-controls">
        Feather Color(s):
        <label><input
          type="checkbox"
          onChange={(e) => setIsRed(e.currentTarget.checked)}
        />Red</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsOrange(e.currentTarget.checked)}
        />Orange</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsBrown(e.currentTarget.checked)}
        />Brown</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsLightBrown(e.currentTarget.checked)}
        />Light Brown</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsYellow(e.currentTarget.checked)}
        />Golden Yellow</label>
      </div>

      {/* Generated display based on user selections above */}
      <h3 className="button-controls">Enjoy your turkey</h3>
      <PictureDisplay
        size={sizeClass}
        featherCount={featherCount}
        featherColors={featherColors}
      />
      <Message size={sizeClass} feathers={featherCount}/>
    </>
  );
}

export default App;
