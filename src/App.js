import { ReactComponent as CardLogo } from "./card-logo.svg"
import { ReactComponent as CompletedLogo } from "./icon-complete.svg"
import React from 'react'

//Curent Tasks:
// 1 - Add Data Validation in the form, check for length, numbers and format, returning an error message box below the input.

function App() {
  const [cardInfo, setCardInfo] = React.useState({
    cardHolder: '',
    cardNumber: '',
    cardExpDateMM: '',
    cardExpDateYY: '',
    cardCvc: '',
  })

  const [submitted, setSubmitted] = React.useState(false)
  
  function handleChange(event) {
    setCardInfo( prevValue => ({
      ...prevValue,
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="main-content">
      <div className='cards'>
        <div className='card front'>
          <CardLogo className="card-logo"/>
          <h3 className="card-number">{cardInfo.cardNumber ? cardInfo.cardNumber : "0000 0000 0000 0000"}</h3>
          <div className='flex'>
            <h3 className="card-owner">{cardInfo.cardHolder ? cardInfo.cardHolder : "Name"}</h3>
            <h3 className='exp-date'>{ cardInfo.cardExpDateMM && cardInfo.cardExpDateYY ? `${cardInfo.cardExpDateMM}/${cardInfo.cardExpDateYY}` : "00/00"}</h3>
          </div>
          <br/>
        </div>
        <div className='card back'>
          <h3 className="cvc ">{cardInfo.cardCvc ? cardInfo.cardCvc : "000"}</h3>
        </div>
      </div>
      <div className="form-div">
        { !submitted ? 
        <form className="form center" onSubmit={handleSubmit}>
          <label>
            Card Holder Name
            <br/>
            <input type="string" placeholder='eg. Enzo Campos' name='cardHolder' value={cardInfo.cardHolder} onChange={handleChange} required></input>
          </label>
          <br/>
          <label>
            Card number
            <br/>
            <input type="string" placeholder='eg. 1234 56789 1234 5678' name='cardNumber' value={cardInfo.cardNumber} onChange={handleChange} required></input>
          </label>
          <br/>
          <div className='card-date-cvc'>
            <label className='exp-date'>
              Exp. Date (MM/YY)
              <br/>
              <div>
                <input type="number" placeholder='MM' name='cardExpDateMM' min='1' max='99' className="card-date mm" value={cardInfo.cardExpDateMM} onChange={handleChange} required></input>
                <input type="number" placeholder='YY' name='cardExpDateYY' min='22' max='99' className="card-date yy" value={cardInfo.cardExpDateYY} onChange={handleChange} required></input>
              </div>
            </label>
            <label className='cvc-label'>
              CVC
              <br/>
              <input type="number" placeholder='e.g. 123' name='cardCvc' min='0' max='999' className='card-cvc' value={cardInfo.cardCvc} onChange={handleChange} required></input>
            </label>
          </div>
          <label>
            <input type="submit" value="Confirm" className="confirm"/>
          </label>
        </form> 
        :
        <div className='confirmed-div'>
          <CompletedLogo />
          <h2>THANK YOU!</h2>
          <p>We've added your card details</p>
          <button className="confirmed">Continue</button>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
