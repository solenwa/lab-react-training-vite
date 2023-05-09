import React from 'react'

function Greetings({lang, children}) {
  return (
    <div className="Greetings">
        {lang === "en" && <p>Hello {children} </p>}
        {lang === "fr" && <p>Bonjour {children} </p>}
        {lang === "de" && <p>Hallo {children} </p>}
        {lang === "es" && <p>Holà {children} </p>}
    </div>
  )
}

export default Greetings