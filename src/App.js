import { ReactComponent as CardLogo } from "./card-logo.svg"
import { ReactComponent as CompletedLogo } from "./icon-complete.svg"
import React from 'react'
import { hasFormSubmit } from "@testing-library/user-event/dist/utils"

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
  const [formErrors, setFormErrors] = React.useState({})

  function handleChange(event) {
    console.log(Object.values(formErrors).length)
    setCardInfo( prevValue => ({
      ...prevValue,
      [event.target.name]: event.target.value
    }))
  }

  function checkSubmit(event) {
    setFormErrors({});
    event.preventDefault();
    if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/gi.test(cardInfo.cardHolder)) {
      setFormErrors(prevValue => ({        
        ...prevValue,
        name: `This isn't a valid name, please only use letters or space.`,
      }))
    }
    if (cardInfo.cardNumber.length < 15 || cardInfo.cardNumber.length > 16 ) {
      setFormErrors(prevValue => ({        
        ...prevValue,
        number: `This isn't a valid Card Number.`,
      }))
    }
    if (cardInfo.cardCvc.split('').length !== 3) {
      setFormErrors(prevValue => ({        
        ...prevValue,
        cvc: `This isn't a valid Card Verification Code.`,
      }))
    }
    handleSubmit()
  }

  function handleSubmit() {
    if (Object.values(formErrors).length === 0) {
      setSubmitted(true);
    }
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
        <form className="form center" onSubmit={checkSubmit}>
          <label>
            Card Holder Name
            <br/>
            <input 
              type="string" 
              placeholder='eg. Enzo Campos' 
              name='cardHolder' 
              value={cardInfo.cardHolder} 
              onChange={handleChange} 
              required>
          </input>
          </label>
          { formErrors.name && <p className="error">{formErrors.name}</p>}
          <br/>
          <label>
            Card number
            <br/>
            <input 
              type="number" 
              placeholder='eg. 1234 5678 1234 5678' 
              name='cardNumber' 
              value={cardInfo.cardNumber} 
              onChange={handleChange}
              required>
            </input>
          </label>
          { formErrors.number && <p className="error">{formErrors.number}</p>}
          <br/>
          <div className='card-date-cvc'>
            <label className='exp-date'>
              Exp. Date (MM/YY)
              <br/>
              <div>
                <input 
                  type="number" 
                  placeholder='MM' 
                  name='cardExpDateMM' 
                  min='1' 
                  max='12' 
                  className="card-date mm" 
                  value={cardInfo.cardExpDateMM} 
                  onChange={handleChange}
                  required>                 
                </input>
                <input 
                  type="number" 
                  placeholder='YY' 
                  name='cardExpDateYY' 
                  min='22' max='99' 
                  className="card-date yy" 
                  value={cardInfo.cardExpDateYY}
                  onChange={handleChange} 
                  required>                    
                </input>
              </div>
            </label>

            <label className='cvc-label'>
              CVC
              <br/>
              <input 
                type="number" 
                placeholder='e.g. 123' 
                name='cardCvc' 
                min='0' 
                max='999' 
                className='card-cvc' 
                value={cardInfo.cardCvc} 
                onChange={handleChange}
                required>               
              </input>
            </label>
          </div>
          {formErrors.cvc && <p className="error">{formErrors.cvc}</p>}
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
