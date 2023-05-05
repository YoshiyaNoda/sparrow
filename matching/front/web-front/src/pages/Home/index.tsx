import React, { useState, useEffect } from "react";
import apiRequestUtil from "../../api/ApiRequestUtil";
import CandidateResponse from '../../model/CandidateResponse';
import Candidate from '../../components/CandidateCard';
import './Home.css';
import MateResponse from "../../model/MateResponse";

const Home = () => {
    const [candidateList, setCandidateList] = useState([new CandidateResponse('0', 'Please wait a moment...')]);

    useEffect(() => {
        (async () => {
            const result = await apiRequestUtil.fetchCandidateList();
            setCandidateList(result);
        })()
    }, []);

    const onClick = async (candidate: CandidateResponse) => {
      const updatedMateList = await apiRequestUtil.favor(candidate);
      const updatedCandidateList =
        candidateList
          .filter((candidate: CandidateResponse) => {
            return !updatedMateList.map((mate: MateResponse) => mate.id).includes(candidate.id)
          })

      if (updatedCandidateList.length != candidateList.length) {
        // 新しいマッチが存在
        alert("New Mate Found!!");
        setCandidateList(updatedCandidateList);
      }
    }

    return (
      <>
        <ul className="candidate-list-container">
          {candidateList.map((candidate: CandidateResponse) => (
            <li key={candidate.id} onClick={() => onClick(candidate)}>
              <Candidate {...candidate} />
            </li>
          ))}
        </ul>
      </>
    );
}

export default Home;
