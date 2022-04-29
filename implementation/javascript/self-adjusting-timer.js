let interval = 1000; // ms
let expected = Date.now() + interval;

const step = () => {
  let dt = Date.now() - expected; // the drift (positive for overshooting)
  console.log(dt); //ms
  if (dt > interval) {
    // something really bad happened. Maybe the browser (tab) was inactive?
    // possibly special handling to avoid futile "catch up" run
  }
  // do what is to be done

  expected += interval;
  setTimeout(step, Math.max(0, interval - dt)); // take into account drift
};

setTimeout(step, interval);
