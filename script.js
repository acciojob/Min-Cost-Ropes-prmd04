function mincost(ropes) {
  let cost = 0;
  ropes.sort((a, b) => a - b);

  while (ropes.length > 1) {
    let first = ropes.shift();
    let second = ropes.shift();
    let combined = first + second;
    cost += combined;
    ropes.push(combined);
    ropes.sort((a, b) => a - b);
  }

  return cost;
}


module.exports=mincost;



