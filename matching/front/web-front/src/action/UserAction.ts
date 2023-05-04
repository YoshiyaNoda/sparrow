// あくまでReactで作ってる見た目はPresentationのためのものであって、ユーザの目的ありきの行動を如実に記載するものではない。
// 目的に即した行動に相当するものをここにまとめて定義することにする

import apiRequestUtil from "../api/ApiRequestUtil";
import CandidateResponse from "../model/CandidateResponse";

export default class UserAction {
    static favor = async (candidate: CandidateResponse) => {
        return await apiRequestUtil.favor(candidate);
    }
}
