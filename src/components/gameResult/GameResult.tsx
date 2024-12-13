import { GameResultProps } from "../gameBoard/GameBoard";

const GameResult: React.FC<GameResultProps> = ({result}) => {
    
    return (
        <div>
            <h2>{result || 'Play the game'}</h2>
            </div>
    );
}
 
export default GameResult;