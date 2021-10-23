import './App.css';
import Images from './Images';
import {useState} from 'react';
import {shuffle} from 'lodash';
import BackSide from "./img/js-badge.svg";

{/* <div style={{ background: `url(${background_img}) center no-repeat`, backgroundSize: 'cover' }}> */}
//  style={{ width: '90%', height: '90%'}}

function App() {

  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  const [activeCards, setActiveCards] = useState([]);

  function flipCard(index){
    // console.log("index: ", index);
    // console.log("cards[index]: ", cards[index]);


    setActiveCards([index]);
  }

  return (
    <div style={{paddingBottom: '10px' }}>
      <header>
        TEST
      </header>
      
      {/* + (activeCards.indexOf(index) ? 'flipped' : '') */}
      <div className="board">
        {cards.map((card, index) => (
          <div className={"card-outer " + (activeCards.indexOf(index) !== -1 ? 'flipped' : '')} onClick={ () => flipCard(index) }>
            <div className="card">
              <div className="front">
                <img src={card} title="" />
              </div>
              <div className="back">
                <img src={BackSide} title="" />
              </div>
            </div>
          </div>
          )
        )}
      </div>
      
    </div>);
}

export default App;
