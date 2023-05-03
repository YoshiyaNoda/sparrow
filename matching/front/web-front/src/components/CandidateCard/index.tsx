import React from 'react';
import './CandidateCard.css';
import CandidateResponse from '../../model/CandidateResponse';
import Image from '../Image';

const NAME_SURFIX = 'さん';

const CandidateCard = ({ name }: CandidateResponse) => {
    return <div className="candidate-container">
        <div className="image-container">
            <Image url={''} />
        </div>
        <div className="name-container">
            {name} {NAME_SURFIX}
        </div>
    </div>;
};

export default CandidateCard;
