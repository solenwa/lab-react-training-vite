import React from 'react'

function Rating({children}) {
    const roundedNumber = Math.round(children);
    const filledStars = '★'.repeat(roundedNumber);
    const emptyStars = '☆'.repeat(5 - roundedNumber);
  return (
    <div className="Rating">
        {filledStars + emptyStars}
    </div>
  );
}

export default Rating