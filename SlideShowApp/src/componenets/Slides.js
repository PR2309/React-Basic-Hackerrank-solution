import React, {useState} from 'react';

function Slides({slides}) {
    const [currentIndex,setCurrentIndex]=useState(0);
    const reset=()=>{
        setCurrentIndex(0);
    }
    const next=()=>{
        if(currentIndex<slides.length-1){
            setCurrentIndex(currentIndex+1);
        }
    }
    const prev=()=>{
        if(currentIndex>0){
            setCurrentIndex(currentIndex-1);
        }
    }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" disabled={currentIndex===0} onClick={reset}>Restart</button>
                <button data-testid="button-prev" className="small" disabled={currentIndex===0} onClick={prev}>Prev</button>
                <button data-testid="button-next" className="small" disabled={currentIndex===slides.length-1} onClick={next}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentIndex].title}</h1>
                <p data-testid="text">{slides[currentIndex].text}</p>
            </div>
        </div>
    );

}

export default Slides;
