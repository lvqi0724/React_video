import {GetToken} from '../../tools/loclastoage'

const defaultState = {
    token: GetToken() || "",

    i: 0
}

const reducer = (state = defaultState, action) =>{
    switch (action.type) {
        case "add":
            return {
                ...defaultState,
                i: state.i + action.num
            }

        default :
            return  state
    }
}

export default  reducer