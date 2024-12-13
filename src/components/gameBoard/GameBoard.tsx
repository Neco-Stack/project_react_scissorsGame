import UserChoice from '../userChoice/UserChoice';
import ComputerChoice from '../computerChoice/ComputerChoice';
import GameResult from '../gameResult/GameResult';
import { useState } from 'react';

export type Choice = 'rock' | 'paper' | 'scissors' | null;

 export interface UserChoiceProps {
    onChoiceMade: (choice: Choice) => void;
}
export interface ComputerChoiceProps {
    choice: Choice | null;
}
export interface GameResultProps {
    result: string | null;
}

const GameBoard: React.FC = () => {
    const [userChoice, setUserChoice] = useState<Choice>(null);
    const [computerChoice, setComputerChoice] = useState<Choice>(null);
    const [result, setResult] = useState<string | null>(null);

    const manageUserChoice = (choice: Choice) => {
        setUserChoice(choice);
        const computerChoice = generateComputerChoice(); 
        setComputerChoice(computerChoice);
        setResult(determineWinner(choice, computerChoice))
    };

    const generateComputerChoice = (): Choice => {
        const choices: Choice[] = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)]
    };

    const determineWinner = (user: Choice, computer: Choice): string => {
        if (user === computer) return ":)TIE:)";
        if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    }
    if (
        (computer === 'rock' && user === 'scissors') ||
        (computer === 'paper' && user === 'rock') ||
        (computer === 'scissors' && user === 'paper')
    ) {
        return ':( COMPUTER WINS :('
    } 
    throw new Error('System Error')
    };

    const resetGame = () => {
        setUserChoice(null);
        setComputerChoice(null);
        setResult(null)
    }
    


    return (
        <div className='game-board'>
            <h1>ROCK PAPER SCISSORS</h1>
            <UserChoice onChoiceMade={manageUserChoice}/>
            <ComputerChoice choice={computerChoice}/>
            <p>{userChoice}</p>
            <GameResult result={result}/>
            <button onClick={resetGame} className='reset-button'>Play Again</button>
        </div>
      );
}
 
export default GameBoard