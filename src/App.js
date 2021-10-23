import './App.css';
import Images from './Images';
import MyStopwatch from './Timer';
import {useState} from 'react';
import {shuffle} from 'lodash';
import BackSide from "./img/js-badge.svg";
import BGvideo from "./img/bg_confetti.mp4";

{/* <div style={{ background: `url(${background_img}) center no-repeat`, backgroundSize: 'cover' }}> */}
//  style={{ width: '90%', height: '90%'}}

function App() {
  const elmMsgOverlay = document.getElementById('msgOverlay');

  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  // set of couple cards that will be flipped
  const [activeCards, setActiveCards] = useState([]);
  // set of found couples of cards
  const [foundMatches, setFoundMatches] = useState([]);
  // clicks counter
  let [clicks, setClicks] = useState(0);
  const [winning, setWinning] = useState(false);

  function flipCard(index){
    // on win
    if(winning){
      resetBoard();
    }

    setClicks(clicks += 1);

    // console.log("index: ", index);
    // console.log("cards[index]: ", cards[index]);
    // setActiveCards([index]);

    // single card flipped
    if(activeCards.length === 0){
      // update ActiveCards state
      setActiveCards([index]);
    }

    // couple set of cards
    if(activeCards.length === 1){
      // update ActiveCards state
      setActiveCards([...activeCards, index]);
      
      // are the cards similar?
      let firstIndex = activeCards[0];
      // let secondIndex = activeCards[1];
      // console.log("activeCards[0] ", activeCards[0]);
      // console.log("activeCards[1] ", activeCards[1]);
      // console.log("activeCards[index] ", activeCards[index]);
      // console.log("index ", index);
      let secondIndex = index;

      if(cards[firstIndex] == cards[secondIndex]){
        console.log("we have a match");
        setFoundMatches([...foundMatches, firstIndex, secondIndex]);

        // take an action on winning
        if(foundMatches.length === cards.length -2){
          setWinning(true);
          
          // first display block (overlay still in opacity 0)
          elmMsgOverlay.classList.add('force_display');
          // now with transition animation change opacity gradually
          setTimeout(() => {
              elmMsgOverlay.classList.add('msg_overlay_show');
          }, 1500);

        }
      }
      
    }
    // empty the couple set and reset it to the next couple
    if(activeCards.length === 2){
      // RESET ActiveCards state
      setActiveCards([]);
    }

  }

  function resetBoard(closeOverlay){
      // shuffle board again
      setCards(shuffle([...Images, ...Images]));
      // reset relevant things
      setFoundMatches([]);
      setWinning(false);
      setActiveCards([]);
      setClicks(0);

      // secondary btn from the overlay was clicked and has to go away 
      if(closeOverlay == 'closeOverlay'){
        elmMsgOverlay.classList.remove('force_display');
      }
  }

  return (
    <div className="div_main">
      <header>
        <MyStopwatch />
        
        {winning ?
          <span className="winning">
            We have a winner!!!
          </span>
          :
          <span></span>
        }
        
        <span className="clicks_counter">
          Clicks Counter: {clicks}
        </span>

        <span className="span_btn_start">
          <button onClick={() => resetBoard()} className="btn_start" title="Start a new game">New Game</button>
        </span>
      </header>
      
      <div className="board">
        {cards.map((card, index) => {
          const flippedToFront = (activeCards.indexOf(index) !== -1) || (foundMatches.indexOf(index) !== -1)
          
          return (
            <div className={"card-outer " + (flippedToFront ? 'flipped' : '')} onClick={ () => flipCard(index) }>
              <div className="card">
                <div className="front">
                  <img src={card} title="" />
                </div>
                <div className="back">
                  <img src={BackSide} title="" />
                </div>
              </div>
            </div>
          );
        }
        )}
      </div>
      
      
    {/* overlayer */}
    <div id="msgOverlay" class="msg_overlay">
        
        <video autoPlay="true" muted loop class="bg_video">
            <source src={BGvideo} width="100%" height="100%" type="video/mp4"></source>
        </video>

        <div class="msg_overlay_content">
            YOU WON!!
            <br />
             {/* restart new game  */}
            <button class="btn_start btn_overlay" onClick={() => resetBoard('closeOverlay')} title="Start a new game">New Game</button>
        </div>
    </div>

    </div>);
}

export default App;
