function getAverage(scores) {
    let sum = 0;
    for (let note in scores){
      sum += note
      console.log(note)
    }
    console.log(sum);
    sum = sum / scores.length;
    console.log(sum);
    return sum;
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));