import React, { useState, useEffect } from "react";
import ApiRequestUtil from "../../api/ApiRequestUtil";
import CandidateResponse from '../../model/CandidateResponse';
import Candidate from '../../components/CandidateCard';
import './Home.css';

const Home = () => {
    const [candidateList, setCandidateList] = useState([new CandidateResponse('0', 'Please wait a moment...')]);

    useEffect(() => {
        (async () => {
            const result = await ApiRequestUtil.fetchCandidateList();
            setCandidateList(result);
        })()
    }, []);

    return (
      <>
        <ul className='candidate-list-container'>
          {candidateList.map((candidate: CandidateResponse) => (
            <li key={candidate.id}>
                <Candidate {...candidate} />
            </li>
          ))}
        </ul>
      </>
    );
}

export default Home;
