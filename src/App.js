import React from 'react'

function App() {
  const [cardInfo, setCardInfo] = React.useState({
    cardHolder: 'Name',
    cardNumber:'0000 0000 0000 0000',
    cardExpDateMM: '00',
    cardExpDateYY: '00',
    cardCvc: '000',
  })

  return (
    <div className="main-content">
      <div className='cards'>
        <img src={require('./bg-card-front.png')} alt='card front' className="card front"/>
        <h3 className="card-number">{cardInfo.cardNumber}</h3>
        <h3 className="card-owner">{cardInfo.cardHolder}</h3>
        <br/>
        <img src={require('./bg-card-back.png')} alt='card front' className="card back"/>
        <h3 className="card-cvc ">{cardInfo.cardCvc}</h3>
      </div>
      <div className="form-div">
        <form className="form center">
          <label>
            Card Holder Name
            <br/>
            <input type="string" placeholder='eg. Enzo Campos' name='cardHolder'></input>
          </label>
          <br/>
          <label>
            Card number
            <br/>
            <input type="string" placeholder='eg. 1234 56789 1234 5678' name='cardNumber'></input>
          </label>
          <br/>
          <div className='card-date-cvc'>
            <label>
              EXP. DATE (MM/YY)
              <br/>
              <div className='exp-date'>
                <input type="number" placeholder='MM' name='cardExpDateMM' min='01' max='12' className="card-date"></input>
                <input type="number" placeholder='YY' name='cardExpDateYY' min='2022' className="card-date yy"></input>
              </div>
            </label>
            <label className='cvc'>
              CVC
              <br/>
              <input type="number" placeholder='e.g. 123' name='cardCvc' min='0' className='card-cvc'></input>
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
