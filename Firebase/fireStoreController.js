//const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
//const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

//const serviceAccount = require('./optimal-gainz-firebase-adminsdk-8pphk-3f8b8778b7.json');

import { db } from './firebase';
import { collection, addDoc, setDoc,doc, getDoc, getDocs } from "firebase/firestore"; 
  
//const db = getFirestore();

console.log("hi");

export async function fetchObject(uid){
    
    try{
        
        const docRef = await doc(db, "users" ,uid);
        
        const docSnapShot = await getDoc(docRef);
        console.log('clg docref in fetchobj ',docSnapShot);
        const data = await docSnapShot.data()
        //console.log('clg docsnap: ', data);
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
        console.log('clg create obj func: ', object);
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

/*
*   This function will create a new workout object in the database, referencing user uid
*   @param {string} name - the name of the workout
*   @param {string} description - the description of the workout
*   @param {string} uid - the user id of the user who created the workout
*   @param {string} date - the date the workout was created
*   @param {string} time - the time the workout was created
*   @param {string} workoutType - the type of workout (cardio, strength, etc.)
*   @param {string} workoutDuration - the duration of the workout
*   @param {string} workoutNotes - any notes the user wants to add to the workout
*   @param {string} workoutSets - the number of sets in the workout
*   @param {string} workoutReps - the number of reps in the workout
*   @param {string} workoutWeight - the weight used in the workout
*   @return {object} - the workout object
*/


export const createWorkout = async (workoutName,workoutType,workoutDate,workoutTime,workoutDuration,workoutNotes, workoutSets, workoutReps, workoutWeights) => 
{
    // const userRef = doc(db,"users",uid );
    //const docRef = doc(db, "users", email);
    // const docRef = db.collection('users').doc(email).collection('workouts').doc(workoutName);
    const colRef = collection(db, "workouts")
    // const docRef = db.collection('users').doc(email).collection('workouts').doc(workoutName);
    try {
        const workoutObj = {
            workoutName: workoutName,
            workoutType: workoutType,
            workoutDate: workoutDate,
            workoutTime: workoutTime,
            workoutDuration: workoutDuration,
            workoutNotes: workoutNotes,
            workoutSets: workoutSets,
            workoutReps: workoutReps,
            workoutWeights: workoutWeights  
        };
        console.log('clg obj', workoutObj);
        const workoutref = await addDoc(colRef,workoutObj)
        
        // console.log('clg user ref: ', docRef);
        return workoutObj;
    } catch (error) {
        console.log('Unable to create a workout due to: ',error);
    }

}

export async function fetchWorkoutObject(uid){
    
    try{
        
        const docRef = await doc(db, "workouts", uid);
        
        const docSnapShot = await getDoc(docRef);
        console.log('clg docref in fetchobj ',docRef);
        const data = await docSnapShot.data()
        console.log('clg docsnap: ', docSnapShot.id);
        return {...docSnapShot.data(), "uid": docSnapShot.id};
    }catch(e){
        
        //console.error(e);
        return e;
    }
}


export async function editWorkout(workoutSets, workoutReps, workoutWeights)

{
    const docRef = await doc(db, "users", "Kgby8IbfypPUsTA2gQ148p0l65l2");
    console.log('clg editwork docref: ', docRef);
    // const q = query(docRef, where(email, "==", "azaman@gmail.com"));
    // console.log('clg q: ', q);
    // const payload = collection(q, "workouts");
    // const colRef = collection(docRef, "workouts", "==", "EHFr9XL6x4rXgAwbx3zw");
    const colRef = await doc(docRef, "workouts","EHFr9XL6x4rXgAwbx3zw");
    console.log('clg colref edit: ', colRef);
    // const q2 = query(colRef, where("workouts", "==", "EHFr9XL6x4rXgAwbx3zw"));

    // console.log('clg payload where: ', q2);
    try {
            
        const editObj = {
            workoutReps: workoutReps,
            workoutSets: workoutSets,
            workoutWeights: workoutWeights
        }
        //const x = await setDoc(colRef,editObj, {merge: true});
        
        return editObj


    } catch (error) {
        console.log('Unable to edit a workout due to: ',error);
    }

}



//module.exports = {authenticate,createObject};
