import './App.css';
import Images from './Images';
import {useState} from 'react';
import {shuffle} from 'lodash';

{/* <div style={{ background: `url(${background_img}) center no-repeat`, backgroundSize: 'cover' }}> */}
//  style={{ width: '90%', height: '90%'}}

function App() {

  // const [cards, setCards] = useState(new Array());
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));

  return (
    <div style={{paddingBottom: '10px' }}>
      <header>
        TEST
      </header>

      <div className="board">
        {cards.map((card, index) => (
          <div className="card-outer">
            <div className="card">
              <div className="front">
                <img src={card} title="" />
              </div>
              <div className="back">

              </div>
            </div>
          </div>
          )
        )}
      </div>
      
    </div>);
}

export default App;
