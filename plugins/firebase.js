import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()
const db = firebase.firestore()
const accounts = db.collection('accounts')
const users = db.collection('users')
const transactions = db.collection('transactions')

export const register = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    return Error('Credenciales incorrectas')
  }
  try {
    // creamos el usuario
    const userCredentials = await auth.createUserWithEmailAndPassword(
      email,
      password
    )
    // lo guardamos en nuestra base de datos
    const userProfile = await users
      .doc(userCredentials.user.uid)
      .set({ name, email })
    // le creamos una cuenta bancaria en base de datos
    const userAcc = await accounts
      .doc(userCredentials.user.uid)
      .set({ email, balance: 0, loanBalance: 0 })
    return {
      userCredentials,
      userProfile,
      userAcc,
    }
  } catch (error) {
    return error
  }
}

export const registroGoogle = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider()
    const userCredentials = await firebase.auth().signInWithPopup(provider)
    // This gives you a Google Access Token.
    const name = userCredentials.user.displayName
    const email = userCredentials.user.email
    const id = userCredentials.user.uid
    // save in db
    const userProfile = await users.doc(id).set({ name, email })
    console.log('userProfile', userProfile)
    // banc accoun ceated
    const userAcc = await accounts.doc(id).set({ email })
    console.log(userAcc)
    const userProfileloged = await users.doc(id).get()
    return {
      userId: id,
      token: userCredentials.user.za,
      user: userProfileloged.data(),
    }
  } catch (error) {
    return error
  }
}

export const login = async ({ email, password }) => {
  if (!email || !password) {
    return new Error('faltan datos')
  }

  try {
    const logedUser = await auth.signInWithEmailAndPassword(email, password)
    const userProfile = await users.doc(logedUser.user.uid).get()
    return {
      userId: logedUser.user.uid,
      token: logedUser.user.za,
      user: userProfile.data(),
    }
  } catch (error) {
    return error
  }
}

export const loginGoogle = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider()
    const logedUser = await firebase.auth().signInWithPopup(provider)
    const userProfile = await users.doc(logedUser.user.uid).get()
    return {
      userId: logedUser.user.uid,
      token: logedUser.user.za,
      user: userProfile.data(),
    }
  } catch (error) {
    return error
  }
}

export const logOut = async () => {
  try {
    const bye = await firebase.auth().signOut()
    return bye
  } catch (error) {
    return error
  }
}

export const getAccount = async (idUser, email) => {
  try {
    const userAccount = await accounts.doc(idUser).get()
    console.log('data de la cuenta ', userAccount.data())
    if (userAccount.data() === undefined) {
      const userEmail = await users.doc(idUser).get({ email }).data()

      await accounts
        .doc(idUser)
        .set({ email: userEmail, balance: 0, loanBalance: 0 })
      return userAccount.data()
    } else {
      return userAccount.data()
    }
  } catch (error) {
    return error
  }
}

export const editAccount = async ({ balance, loanBalance, id }) => {
  try {
    await accounts.doc(id).update({ balance, loanBalance })
  } catch (error) {
    return error
  }
}

export const getUserId = async (email) => {
  try {
    const results = await users.where('email', '==', email).get()
    let userId
    results.forEach((doc) => {
      userId = doc.id
    })
    return userId
  } catch (error) {
    return error
  }
}

export const createTransaction = async (tx) => {
  try {
    const timestamp = Math.floor(new Date().getTime() / 1000)
    await transactions.doc().set({
      ...tx,
      timestamp,
    })
  } catch (error) {
    return error
  }
}

export const getTxFrom = async (id) => {
  try {
    const txs = await transactions.where('from', '==', id).get()
    let results = []
    txs.forEach((doc) => {
      results = [...results, doc.data()]
    })
    return results
  } catch (error) {
    return error
  }
}

export const getTxTo = async (id) => {
  try {
    const txs = await transactions.where('to', '==', id).get()
    let results = []
    txs.forEach((doc) => {
      results = [...results, doc.data()]
    })
    return results
  } catch (error) {
    return error
  }
}
