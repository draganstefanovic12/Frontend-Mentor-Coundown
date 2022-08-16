import { intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";
import "./App.css";
import icoFB from "./assets/icon-facebook.svg";
import icoINSTA from "./assets/icon-instagram.svg";
import icoPINT from "./assets/icon-pinterest.svg";

const App = () => {
  const [timeLeft, setTimeLeft] = useState<any>({
    days: 8,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [duration, setDuration] = useState<any>(691200);

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(duration - 1);
    }, 1000);
    setTimeLeft(intervalToDuration({ start: 0, end: duration * 1000 }));
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="main-container">
      {duration && (
        <>
          <section>
            <h1 className="h1-main">We're launching soon</h1>
            <div className="countdown-cont">
              <section>
                <div>
                  <p className="middle"></p>
                  <h1 className="countdown-h1">0{timeLeft.days}</h1>
                </div>
                <h2>Days</h2>
              </section>
              <section>
                <div>
                  <p className="middle"></p>
                  <h1 className="countdown-h1">{timeLeft.hours}</h1>
                </div>
                <h2>Hours</h2>
              </section>
              <section>
                <div>
                  <p className="middle"></p>
                  <h1 className="countdown-h1">{timeLeft.minutes}</h1>
                </div>
                <h2>Minutes</h2>
              </section>
              <section>
                <div>
                  <p className="middle"></p>
                  <h1 className="countdown-h1">{timeLeft.seconds}</h1>
                </div>
                <h2>Seconds</h2>
              </section>
            </div>
          </section>
          <section className="logos-cont">
            <img src={icoFB} />
            <img src={icoPINT} />
            <img src={icoINSTA} />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
