//const app = require('./index');
import { logIn } from "./firebaseAuth";
import {createObject, fetchObject, createWorkout} from './fireStoreController';
import { register } from "./firebaseAuth";

export function registerUser(email, password, retypedPassword) {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    {
        return("You have entered an invalid email address!")
    }
    if (!( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password))){
        return ("Password must be between 8 to 15 characters, must contain at least 1 upper case, one lower case, one numerical, and one special character");
    }
    if (!(retypedPassword === password)){
        return ("passwords do not match!")
    }
    
    return ("Account Generated")
}

export async function loginUser(email, password){
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    {
        return("You have entered an invalid email address!")
    }
    try{
        const a = await logIn(email,password);
        console.log("a object: ", a);
        console.log(await a);
        const b = await fetchObject(a);
        console.log("b object: ", b);
        return true;
    }catch(e){
        console.error(e);
        return false;
    }
    
    //console.log(b);
    
    
}

export function personalInformationInput(age,bodyweight,heightFt, heightIn){
    if (age < 0 ){
        return "invalid age";
    }
    if (bodyweight < 0){
        return "invalid body weight";
    }

    if (heightFt < 0 || heightFt > 9){
        return "invalid height (feet)"
    }

    if (heightIn < 0 || heightIn > 11){
        return "invalid height (inches)"
    }

    return ("Personal Info Inputted")


}

export async function makeUser(email, password, retypedPassword, age,bodyweight,heightFt, heightIn){
    try{
        registerUser(email, password, retypedPassword);
        personalInformationInput(age, bodyweight,heightFt,heightIn);
        const b = await register(email,password);
        //console.log(b.uid);
        const a = await createObject(email, age ,bodyweight,heightFt, heightIn,b.uid);
        //const b = await 
        return true;
    }catch(e){
        console.error(e);
        return false;
    }
    
    
}



export function checkWorkoutMax(pounds, sets, reps){

    if (sets < 1 || sets > 30){
        return "invalid sets, must be between 1 and 30";
    }

    if (pounds < 1 || pounds > 600){
        return "invalid weights (lbs), must be between 1 and 600";
    }

    if (reps < 5 || reps > 40){
        return "invalid reps, must be between 1 and 40";
    }

    return ("Workout Input information Successful")
}


export async function makeWorkout(workoutName,workoutType,workoutDate,workoutTime,workoutDuration,workoutNotes, workoutSets, workoutReps, workoutWeights) {

    try {
        const res = await createWorkout(workoutName,workoutType,workoutDate,workoutTime,workoutDuration,workoutNotes, workoutSets, workoutReps, workoutWeights);
        return true;
    } catch (error) {
        console.error("making workout error: ", error);
    }

}

 
