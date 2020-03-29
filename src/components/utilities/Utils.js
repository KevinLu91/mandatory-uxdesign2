
export const shuffle = (array) =>{
  array.sort(() => Math.random() - 0.5);
}

export const percentage = (results) =>{
  let correctPercentage = Math.round((results.correctAnswers / results.incorrectAnswers)*100);
  if(!correctPercentage){
    correctPercentage = 0;
  }
  return correctPercentage;
}

export const handleTitle = (title, path) =>{
  if(path === '/quiz'){
    return title = 'Quiz Time';
  } else if (path === '/stats'){
    return title = 'Quiz Stats';
  } else if (path === '/about'){
    return title = 'About this app';
  } else{
    return title;
  }
}
