//const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
//const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

//const serviceAccount = require('./optimal-gainz-firebase-adminsdk-8pphk-3f8b8778b7.json');

import { db } from './firebase';
import { collection, addDoc, setDoc,doc, getDoc } from "firebase/firestore"; 
  
//const db = getFirestore();

console.log("hi");

export async function fetchObject(uid){
    
    try{
        
        const docRef = await doc(db, "users" ,uid);
        
        const docSnapShot = await getDoc(docRef);
        console.log(docRef);
        console.log(docSnapShot.data());
        return docSnapShot.data();
    }catch(e){
        
        //console.error(e);
        return e;
    }
}

export const createObject = async (email,age,weight,heightFt, heightIn,uid) =>{
    const collectionRef = doc(db,"users",uid);

    try {
        const object = {
            email: email,
            age: age,
            weight: weight,
            heightFt: heightFt,
            heightIn: heightIn
        };
        const docRef = await setDoc(collectionRef,object)
        console.log(object);
        return object;
    }catch(e){
    
        console.error(e);
        return e;
    }
    

    // return ({
    //     email: email,
    //     age: age,
    //     weight: weight,
    //     heightFt: heightFt,
    //     heightIn: heightIn
    // });
    
}

//module.exports = {authenticate,createObject};




