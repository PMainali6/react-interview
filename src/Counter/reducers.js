const counterReducers = (state, { type }) => {
    switch(type) {
        case 'increment': 
            return {
                count: state.count + 1,
                step: state.step
            }
        case 'decrement':
            return {
                count: state.count - 1,
                step: state.step
            }

        case 'reset':
            return {
                count: 0,
                step: state.step
            }
        default:
            throw new Error('unrecognized action')
    }
}

export default counterReducers;