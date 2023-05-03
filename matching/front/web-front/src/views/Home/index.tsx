import React, { useState, useEffect } from "react";
import ApiRequestUtil from "../../api/ApiRequestUtil";
import CandidateResponse from '../../model/CandidateResponse';

let counter = 0;

const Home = () => {
    const [candidateList, setCandidateList] = useState([new CandidateResponse('Please wait a moment...')]);

    useEffect(() => {
        if (counter == 0) {
            (async () => {
                const result = await ApiRequestUtil.fetchCandidateList();
                setCandidateList(result);
                counter += 1;
            })()
        }
    });

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
