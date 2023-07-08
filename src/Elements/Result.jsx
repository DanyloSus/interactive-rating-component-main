import React from "react";

function Result({ rating }) {
    return(
        <section className="results">
            <img 
                src="illustration-thank-you.svg" 
                alt="illustration thank you"
            />
            <p className="results">
                You selected {rating} out of 5
            </p>
            <h1>Thank you!</h1>
            <p>
                We appreciate you taking the time
                to give a rating. If you ever need
                more support, don't hesitate to get
                in touch!
            </p>
        </section>
    );
}

export default Result;