import React from "react";

function Rating({ changeRating, changeSite }) {
    return(
        <section className="rating">
            <div className="star">
                <img src="icon-star.svg" />
            </div>
            <h1>How did we do?</h1>
            <p>
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
                <label htmlFor="1">1</label>
                <input 
                    type="radio" 
                    name="rating" 
                    value="2" 
                    id="2" 
                    onChange={changeRating}
                />
                <label htmlFor="2">2</label>
                <input 
                    type="radio" 
                    name="rating" 
                    value="3" 
                    id="3" 
                    onChange={changeRating}
                />
                <label htmlFor="3">3</label>
                <input 
                    type="radio" 
                    name="rating" 
                    value="4" 
                    id="4" 
                    onChange={changeRating}
                />
                <label htmlFor="4">4</label>
                <input 
                    type="radio" 
                    name="rating" 
                    value="5" 
                    id="5" 
                    onChange={changeRating}
                />
                <label htmlFor="5">5</label>
            </div>
            <button
                onClick={changeSite}
            >Submit</button>
        </section>
    );
}

export default Rating;