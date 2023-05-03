import React, { useState, useEffect } from "react";
import apiRequestUtil from "../../api/ApiRequestUtil";

const Home = () => {
    const [msg, setMsg] = useState('please wait...');
    useEffect(() => {
        (async () => {
            const result = await apiRequestUtil.fetchCandidateList();
            setMsg(result);
        })()
    });

    return <>
        <h1>Hello, This is Home!!</h1>
        <p>{String(msg)}</p>
    </>;
}

export default Home;