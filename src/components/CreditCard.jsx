import React from 'react'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const style = {
        backgroundColor:`${bgColor}`,
        color: `${color}`,
    }

    function maskify(cc) {
        return cc.slice(-4).padStart(cc.length,'•')
      }
    
    const maskedCC = maskify(number);

  return (
    <div className="CreditCard" style={style}>
        {type === "Visa"
        ? <div className="bankLogo"><img src="/src/assets/images/visa.png" alt="Mastercard's logo"></img></div> 
        : <div className="bankLogo"><img src="/src/assets/images/master-card.svg" alt="Mastercard's logo"></img></div>
        }
        <div><h2>{maskedCC}</h2></div>
        <div>
            <div className='CreditCardInfo'>
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
            </div>
            <p>{owner}</p>
        </div>
    </div>
  )
}

export default CreditCard