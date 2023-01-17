export default function reducer (state, action) {
    if(action.type === 'set') {
        return {
            ...state,
            color: action.payload
        }
    }
}