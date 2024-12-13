import React from "react";
import { ComputerChoiceProps} from '../gameBoard/GameBoard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandRock, faHandPaper, faHandScissors, faDesktop} from "@fortawesome/free-solid-svg-icons";


const ComputerChoice: React.FC<ComputerChoiceProps> = ({choice}) => {
    const getIcon = () => {
        switch(choice) {
            case 'rock':
                return <FontAwesomeIcon icon={faHandRock} style={{fontSize: '7rem'}} />;
            case 'paper':
                return <FontAwesomeIcon icon={faHandPaper} style={{fontSize: '7rem'}}/>;
            case 'scissors':
                return <FontAwesomeIcon icon={faHandScissors}style={{fontSize: '7rem'}}/>;
                default:
                    return <FontAwesomeIcon icon={faDesktop}style={{fontSize: '7rem'}}/>;
        }
    }

    return (
        <div className="icon-container">
            <h2> {getIcon()}</h2>
        </div>
    );
}
 
export default ComputerChoice;