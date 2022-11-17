import { UIState } from "../../interfaces/context";

type UIActions =
    | { type: "toggleTheme" }
    | { type: "toggleSidebar" }

export const uiReducer = (state: UIState, action: UIActions): UIState => {
    switch (action.type) {
        case "toggleTheme":
            return { ...state, toggleTheme: !state.toggleTheme }

        case "toggleSidebar":
            return { ...state, toggleSidebar: !state.toggleSidebar }

        default:
            return state
    }
}