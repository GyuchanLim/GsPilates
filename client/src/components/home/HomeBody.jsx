import React from "react";
import "./HomeBody.css"

function HomeBody () {
  return (
    <>
      <div className="homebody-container">
        <div className="homebody-container__words">
          <h3>This is title 1</h3>
          <p>filler words that look okay, lorem epsum pilates yoga prices about us contact direction</p>
        </div>
        <div className="homebody-container__image show-border">
          <img className="image" src="/public/images/portrait.png" alt="This is a portrait picture"/>
        </div>
      </div>
      <div className="homebody-container">
        <div className="homebody-container__image show-border">
          <img className="image" src="/public/images/portrait.png" alt="This is a portrait picture"/>
        </div>
        <div className="homebody-container__words">
          <h3>This is title 2</h3>
          <p>filler words that look okay, lorem epsum pilates yoga prices about us contact direction</p>
        </div>
      </div>
    </>
  )
}

export default HomeBody;
