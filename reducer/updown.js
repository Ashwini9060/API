const initialState = 0;
const change = (state=initialState, action)=>{
    switch(action.type)
    {
        case "INC": return state+1;
        default : return state;
    }
}
export default change;