import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(app);
export async function logIn(email, password){
    
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        const user = await userCredentials.user;
        console.log(user.uid);
        return user.uid;
    }catch(e){
        
        console.log(e);
        //return e;
    }
    
}

export async function register(email,password){
    console.log("from registration");
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email,password);
        const user = await userCredentials.user;
        console.log(user);
        return user;
    }catch(e){
        console.error(e);
    }
    
}