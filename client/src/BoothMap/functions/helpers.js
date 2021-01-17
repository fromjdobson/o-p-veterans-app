
//Merges new properties into state
//use like this: const setState = stateMerger(stateSetter)
export const stateMerger = stateSetter => newVals => stateSetter(p => ({ ...p, ...newVals }))