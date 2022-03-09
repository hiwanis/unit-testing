const sub = (a=0, b=0) =>{
  if(typeof a!== 'number' || typeof b!== 'number'){
    return 0;
  }
  else if(b > a){
    return b - a;
  }
  return a - b;
};

module.exports = {
  sub
}