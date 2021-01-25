import firebase from '../firebase'
import handleErrors from './defaultErrorHandler'

// Basic firestore CRUD:
// Each operation takes one argument. 
// The argument must be an object with data and collection properties. 
// data is required. data should be an object that requires an id.
// example: create({collection:'booths',data:data}).then(setstate(data))
// example: read({collection:'users'}).then((data)=>setstate(data))
// example: update({collection,data}).then(setstate(data))
// example: destroy({collection,data}).then(()=>setstate(data))

const defaultCollection = 'booths'

const firestore = firebase.firestore()
const collectionRef = p => firestore.collection(p && p.collection ? p.collection : defaultCollection)
export const create = p => p.data ? collectionRef(p).doc(p.data.id).set(p.data).catch(handleErrors) : new Error('failed')
export const read = p => collectionRef(p).get().then(convertResponse).catch(handleErrors)
export const update = p => p.data ? collectionRef(p).doc(p.data.id).update(p.data).catch(handleErrors) : new Error('failed')
export const destroy = p => p.data ? collectionRef(p).doc(p.data.id).delete().catch(handleErrors) : new Error('failed')

// users
const usersCollection = {collection:'users'}
export const findUserByEmail = p => collectionRef(usersCollection).where('email','==',p).get().then(convertResponse).catch(handleErrors)
export const addUser = p => p ? collectionRef(usersCollection).doc(p.email).set(p).catch(handleErrors) : new Error('failed')
export const readUsers = () => collectionRef(usersCollection).get().then(convertResponse).catch(handleErrors)


// internal helper functions
function convertResponse(res) {
    let array = []
    res.forEach(d => {
        array.push({
            ...d.data(),
            id: d.id
        })
    })
    return array
}
