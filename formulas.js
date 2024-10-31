// unused
function equationVal(x) {
  if (x <= 10) {
    return x;
  } else {
    return 10 + Math.exp(0.1 * (x - 10));
  }
}

// used in v2.0.0
function equationVall(x) {
  return (x / 10) * (x * 0.006175);
}

// used in v2.0.1
function equationValu(x) {
  if (x <= 10) {
    return x;
  } else {
    return 10 + (x - 10) * (0.5 + 0.5 * Math.exp(-(x - 10)));
  }
}

// used in v2.1.0 (present)
function equationValue(x) {
  const targetX = 100;
  const targetY = 100;
  const b = 1;
  const a = targetY / Math.log(b * targetX);
  const linearGrowth = 1.5;
  const k = 0.1;

  function logarithmicPart(x) {
    return a * Math.log(b * x);
  }

  function linearPart(x) {
    return 100 + linearGrowth * (x - 100);
  }

  function blend(x) {
    return 1 / (1 + Math.exp(-k * (x - 100)));
  }

  return (1 - blend(x)) * logarithmicPart(x) + blend(x) * linearPart(x);
}