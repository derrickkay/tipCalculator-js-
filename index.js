
const tipCalculator = (quality, total) => { 
  
  switch(quality) {
    case 'bad':
      return total * .05;
      break;
    case 'ok':
      return total * .15;
      break;
    case 'good':
      return total * .20;
    case 'excellent':
      return total * .30;
    default: 
      return total * .18;
  }
}





console.log(tipCalculator('good', 100)) //should return 20
