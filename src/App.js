import { ReactComponent as CardLogo } from "./card-logo.svg"
import React from 'react'

function App() {
  const [cardInfo, setCardInfo] = React.useState({
    cardHolder: 'Name',
    cardNumber:'0000 0000 0000 0000',
    cardExpDateMM: '00',
    cardExpDateYY: '00',
    cardCvc: '000',
  })
  
  function handleChange(event) {
    setCardInfo(prevValue => ({
      ...prevValue,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div className="main-content">
      <div className='cards'>
        <div className='card front'>
          <CardLogo className="card-logo"/>
          <h3 className="card-number">{cardInfo.cardNumber}</h3>
          <div className='flex'>
            <h3 className="card-owner">{cardInfo.cardHolder}</h3>
            <h3 className='exp-date'>{cardInfo.cardExpDateMM}/{cardInfo.cardExpDateYY}</h3>
          </div>
          <br/>
        </div>
        <div className='card back'>
          <h3 className="cvc ">{cardInfo.cardCvc}</h3>
        </div>
      </div>
      <div className="form-div">
        <form className="form center">
          <label>
            Card Holder Name
            <br/>
            <input type="string" placeholder='eg. Enzo Campos' name='cardHolder' value={cardInfo.cardHolder} onChange={handleChange}></input>
          </label>
          <br/>
          <label>
            Card number
            <br/>
            <input type="string" placeholder='eg. 1234 56789 1234 5678' name='cardNumber' value={cardInfo.cardNumber} onChange={handleChange}></input>
          </label>
          <br/>
          <div className='card-date-cvc'>
            <label className='exp-date'>
              Exp. Date
              <br/>
              <div>
                <input type="number" placeholder='MM' name='cardExpDateMM' min='01' max='12' className="card-date mm" value={cardInfo.cardExpDateMM} onChange={handleChange}></input>
                <input type="number" placeholder='YY' name='cardExpDateYY' min='2022' className="card-date yy" value={cardInfo.cardExpDateYY} onChange={handleChange}></input>
              </div>
            </label>
            <label className='cvc-label'>
              CVC
              <br/>
              <input type="number" placeholder='e.g. 123' name='cardCvc' min='0' className='card-cvc' value={cardInfo.cardCvc} onChange={handleChange}></input>
            </label>
          </div>
          <label>
            <button className="confirm">Confirm</button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
