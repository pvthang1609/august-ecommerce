import { useEffect, useState } from "react";

useCountdown.propTypes = {};

function useCountdown(start) {
  const [dy, setDy] = useState();
  const [hrs, setHrs] = useState();
  const [mins, setMins] = useState();
  const [secs, setSecs] = useState();

  const startEvent = new Date(
    start.year,
    start.month - 1,
    start.day,
    start.hour,
    start.minute
  );
  const timeStart = startEvent.getTime();
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const timeNow = Date.now();
      const totalSecs = Math.floor((timeStart - timeNow) / 1000);
      setDy(Math.floor(totalSecs / 86400));
      setHrs(Math.floor((totalSecs / 3600) % 24));
      setMins(Math.floor((totalSecs / 60) % 60));
      setSecs(Math.floor(totalSecs % 60));
    }, 1000);
    return () => {
      clearInterval(clockInterval);
    };
  }, [dy, hrs, mins, secs]);
  return { dy, hrs, mins, secs };

  // return [isRun, day, hrs, mins, secs];
}

export default useCountdown;

//86400s, 1440m,
