import React from 'react'

function BoxColor({r,g,b}) {
    const backgroundColorInRBG = {
        backgroundColor: `rgb(${r},${g},${b})`,
    };

    const rgbToHex = (r, g, b) => '#' + [r, g, b]
  .map(x => x.toString(16).padStart(2, '0')).join('');

  return (
    <div className="BoxColor" style={backgroundColorInRBG}>
        <p>rgb({r},{g},{b})</p>
        <p>{rgbToHex(r, g, b)}</p>
    </div>
  )
}

export default BoxColor