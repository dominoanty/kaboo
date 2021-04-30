import './Card.scss'
import { useState, useEffect } from 'react';
import classNames from 'classnames';

const Suite = {
    SPADES: '♠',
    CLUBS: '♣',
    HEARTS: '♥',
    DIAMONDS: '♦',
    NONE: 'x'
}

function getSuiteForCardNum(cardNum) {

    // Joker case
    if (cardNum > 52) return Suite.NONE;

    let cardNumModded = Math.floor(cardNum / 13);
    cardNumModded -= cardNum % 13 === 0 ? 1 : 0;
    switch (cardNumModded) {
        case 0: return Suite.SPADES;
        case 1: return Suite.CLUBS;
        case 2: return Suite.DIAMONDS;
        case 3: return Suite.HEARTS;
    }
    throw "Invalid card number !! ? " + cardNum
}
function getCardLetterForCardNum(cardNum) {
    if (cardNum > 52) return 'Joker';
    if (cardNum % 13 === 0) return 'K';
    cardNum = cardNum % 13;
    if (cardNum === 1) {
        return 'A';
    } else if (cardNum === 11) {
        return 'J'
    } else if (cardNum === 12) {
        return 'Q'
    } else {
        return '' + cardNum;
    }
}



function Card({ cardNum }) {

    let [cardVal, setCardVal] = useState({ suite: Suite.NONE, number: 'blank' });

    useEffect(() => {
        setCardVal({
            suite: getSuiteForCardNum(cardNum),
            number: getCardLetterForCardNum(cardNum)
        })
    }, [cardNum]);
    return (
        <div className={classNames(
                {"card-outer": true,
                "box": true, 
                "suite-red" : (cardVal.suite === Suite.HEARTS || 
                    cardVal.suite === Suite.DIAMONDS)
                })} 
            data-number={cardVal.number}>

            <span className="suite">
                {cardVal.suite}
            </span>
        </div>
    )

}

export default Card;