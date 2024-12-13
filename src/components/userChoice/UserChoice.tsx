import { UserChoiceProps } from "../gameBoard/GameBoard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandRock, faHandPaper, faHandScissors } from "@fortawesome/free-solid-svg-icons";

const UserChoice: React.FC<UserChoiceProps> = ({ onChoiceMade }) => {
    return (
        <div>
            <button onClick={() => onChoiceMade('rock')}>
                <FontAwesomeIcon icon={faHandRock} style={{fontSize: '7rem'}} /> 
            </button>
            <button onClick={() => onChoiceMade('paper')}>
                <FontAwesomeIcon icon={faHandPaper} style={{fontSize: '7rem'}} /> 
            </button>
            <button onClick={() => onChoiceMade('scissors')}>
                <FontAwesomeIcon icon={faHandScissors} style={{fontSize: '7rem'}} /> 
            </button>
        </div>
    );
}

 
export default UserChoice;