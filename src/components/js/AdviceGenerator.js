import axios from "axios";
import React, { useEffect, useState } from "react";
import dice from "../../assets/images/icon-dice.svg";
import Attribution from "./Attribution";
import FadeLoader from "react-spinners/FadeLoader";

const AdviceGenerator = () => {
  const [isLoading, setLoading] = useState(false);
  const [advice, setAdvice] = useState("Click on Dice to get an Advice😁");
  const [id, setId] = useState(0);

  const onDiceClick = async () => {
    setLoading(true);
    try {
      const adviceUrl = await axios.get("https://api.adviceslip.com/advice");
      const { id, advice } = adviceUrl.data.slip;

      // RECEIVE ADVICE AND ID FROM API AND SET IT
      setAdvice(advice);
      setId(id);
    } catch (error) {
      //BASIC ERROR HANDLING
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
         <div className="spinner">
          {isLoading ? <FadeLoader color="#52ffa8" /> : null}
        </div>
      <main>
     
        <div>
          <div className="advice-container">
            <div className="advice-id">
              ADVICE <span>{`# ${id}`}</span>
            </div>
            <div className="advice">{`"${advice}"`}</div>
            <br className="divider" />
            <button className="dice_btn" onClick={onDiceClick}>
              <img src={dice} alt="dice"></img>
            </button>
          </div>
        </div>
      </main>
      <div>
        {" "}
        <footer>
          <Attribution
            hrefMentor="https://www.frontendmentor.io?ref=challenge"
            hrefOwn="https://github.com/4002-Nonye"
          />
        </footer>
      </div>
    </div>
  );
};

export default AdviceGenerator;
