import React from 'react';
import './CustomError.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


export default props => {
    return (
        <div className="custom-error">
            <h1>
                <FontAwesomeIcon icon={faTimesCircle} />
                {' '+ props.txt}
            </h1>
        </div>
    )
}