/* eslint-disable @typescript-eslint/no-explicit-any */

const logger = (state: any) => (next: any) => (action: any) => {
    console.log(action);
    const result = next(action);
    console.log("Updated State:" ,state.getState());
    return result

}

export default logger;