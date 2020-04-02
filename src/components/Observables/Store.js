import { BehaviorSubject } from 'rxjs';

export const results$ = new BehaviorSubject(JSON.parse(localStorage.getItem('results')));

if(!results$.value){
  updateResults({gamesPlayed: 0, correctAnswers: 0, incorrectAnswers: 0})
}

export function updateResults(newResults) {
  if(newResults){
    localStorage.setItem('results', JSON.stringify(newResults));
  }  else {
    localStorage.removeItem("token");
  }
    results$.next(newResults);
  }

