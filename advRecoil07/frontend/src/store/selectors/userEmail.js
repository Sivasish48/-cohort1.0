

import { selector } from "recoil";
import { userState } from "../atoms/user";

export const userEmailState = selector({
    key: "userEmailState",
    get: ({ get }) => {

         // bring the whole atom 
        const state = get(userState);

         // now return only the userEmail(subatom/selector)
        return state.userEmail;
    }
});
