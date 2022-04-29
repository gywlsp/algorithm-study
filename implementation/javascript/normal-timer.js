let interval = 1000; // ms
let expected = Date.now() + interval;

const step = () => {
  let dt = Date.now() - expected; // the drift (positive for overshooting)
  console.log(dt); //ms

  expected += interval;
};

setInterval(step, interval);
