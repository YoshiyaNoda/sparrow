import React, { useState, useEffect } from "react";
import ApiRequestUtil from "../../api/ApiRequestUtil";
import CandidateResponse from '../../model/CandidateResponse';

const Home = () => {
    const [candidateList, setCandidateList] = useState([new CandidateResponse('Please wait a moment...')]);

    useEffect(() => {
        (async () => {
            const result = await ApiRequestUtil.fetchCandidateList();
            setCandidateList(result);
        })()
    }, []);

    return (
      <>
        <ul>
          {candidateList.map((candidate: CandidateResponse) => (
            <li key={candidate.name}>{candidate.name}</li>
          ))}
        </ul>
      </>
    );
}

export default Home;
