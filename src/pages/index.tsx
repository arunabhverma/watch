import React, { useEffect, useState, CSSProperties } from "react";

interface StylesDictionary {
  [Key: string]: CSSProperties;
}

let sec_count = 0;
let min_count = 0;
let hour_count = 0;

const NewApp = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    getTimeInSecond();
  }, []);

  const getTimeInSecond = () => {
    setInterval(() => {
      let getTime = new Date();
      let seconds = getTime.getSeconds();
      let minutes = getTime.getMinutes();
      let hours = getTime.getHours();
      setSecond((prev) => {
        if (prev === 59 && seconds === 0) {
          sec_count = 60;
          return sec_count;
        } else if (seconds === 0) {
          sec_count += 60;
          return sec_count;
        } else {
          return sec_count + seconds;
        }
      });
      setMinute((prev) => {
        if (prev === 59 && minutes === 0) {
          min_count = 60;
          return min_count;
        } else if (minutes === 0) {
          min_count += 60;
          return min_count;
        } else {
          return min_count + minutes;
        }
      });
      setHour((prev) => {
        if (prev === 12 && hours === 0) {
          hour_count = 12;
          return hour_count;
        } else if (hours === 0) {
          hour_count += 12;
          return hour_count;
        } else {
          return hour_count + hours;
        }
      });
    }, 1000);
  };

  let mainSeconds = `rotate(${second * 6 + 90}deg)`;
  let mainMinutes = `rotate(${minute * 6 + Math.round(second / 10) + 90}deg)`;
  let mainHours = `rotate(${hour * 30 + Math.round(minute / 2) + 90}deg)`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={styles.container}>
        <div style={{ ...styles.mainStyle, transform: mainMinutes }}>
          <div style={{ width: "80%", ...styles.subStyle }} />
        </div>
        <div style={{ ...styles.mainStyle, transform: mainHours }}>
          <div style={{ width: "50%", ...styles.subStyle }} />
        </div>
        <div
          style={{ ...styles.mainStyle, height: "2px", transform: mainSeconds }}
        >
          <div style={{ width: "95%", ...styles.subStyle }} />
        </div>
        <div style={styles.watchCenter} />
      </div>
    </div>
  );
};

const styles: StylesDictionary = {
  container: {
    width: "200px",
    height: "200px",
    background: "rgba(0, 0, 0, 0.04)",
    borderRadius: "100px",
    alignItems: "center",
    display: "flex",
    boxShadow: `-2px -2px 5px #00000033, 10px 6px 11px 4px #00000014, inset 3px 3px 14px 0px #ffffff`,
    position: "relative",
  },
  mainStyle: {
    width: "100px",
    height: "4px",
    background: "rgba(255, 255, 255, 0.1)",
    position: "absolute",
    transformOrigin: "right",
    display: "flex",
    justifyContent: "flex-end",
    transition: "0.8s",
  },
  subStyle: {
    height: "100%",
    display: "flex",
    background: "rgba(255, 0, 0, 0.5)",
    borderRadius: "100px",
  },
  watchCenter: {
    boxShadow: `3px 3px 9px 0px #d28581`,
    width: `10px`,
    height: `10px`,
    borderRadius: `5px`,
    background: `#ff8f89`,
    position: `absolute`,
    left: `50%`,
    transform: `translateX(-50%)`,
  },
};

export default NewApp;
