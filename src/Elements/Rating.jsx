import React from "react";

function Rating({ changeRating, changeSite }) {
    return(
        <section className="rating">
            <div className="star" style={{animationDelay:"0.5s"}}>
                <img src="icon-star.svg" />
            </div>
            <h1 style={{animationDelay:"1s"}}>How did we do?</h1>
            <p style={{animationDelay:"1.5s"}}>
                Please let us know how we did with your
                support request. All feedback is appreciated
                to help us improve our offering!
            </p>
            <div className="rating">
                <input 
                    type="radio" 
                    name="rating" 
                    value="1" 
                    id="1" 
                    onChange={changeRating}
                />
                <label htmlFor="1" style={{animationDelay:"1.75s"}}>1</label>
                <input 
                    type="radio" 
                    name="rating" 
                    value="2" 
                    id="2" 
                    onChange={changeRating}
                />
                <label htmlFor="2" style={{animationDelay:"2s"}}>2</label>
                <input 
                    type="radio" 
                    name="rating" 
                    value="3" 
                    id="3" 
                    onChange={changeRating}
                />
                <label htmlFor="3" style={{animationDelay:"2.25s"}}>3</label>
                <input 
                    type="radio" 
                    name="rating" 
                    value="4" 
                    id="4" 
                    onChange={changeRating}
                />
                <label htmlFor="4" style={{animationDelay:"2.5s"}}>4</label>
                <input 
                    type="radio" 
                    name="rating" 
                    value="5" 
                    id="5" 
                    onChange={changeRating}
                />
                <label htmlFor="5" style={{animationDelay:"2.75s"}}>5</label>
            </div>
            <button
                onClick={changeSite}
                style={{animationDelay:"3.25s"}}
            >Submit</button>
        </section>
    );
}

export default Rating;