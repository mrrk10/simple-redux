const initialState=0

export const countNumber=(state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT": return action.payload?state+action.payload:state+1
        case "DECREMENT": return(
            action.payload?(state<0?(-(-state)-action.payload):state-action.payload):state-1

        )

        
        default:return state
    }
}