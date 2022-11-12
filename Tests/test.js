import {loginUser,registerUser,personalInformationInput, makeUser} from '../Firebase/functions';
import {logIn} from '../Firebase/firebaseAuth'

test('1 - registering valid usesr', () => {
    email = "abrarzaman2003@gmail.com";
    password = "P@ssword123";
    retypedPassword = "P@ssword123";
  expect(registerUser(email, password, retypedPassword)).toBe("Account Generated");
});

test('attempting to register user with different inputted passwords', () =>{
    email = "abrarzaman2003@gmail.com";
    password = "P@ssword123";
    retypedPassword = "P@assword123";
  expect(registerUser(email, password, retypedPassword)).toBe("passwords do not match!");
})

test('attempting to register user with invalid password', () =>{
    email = "abrarzaman2003@gmail.com";
    password = "Password123";
    retypedPassword = "Password123";
  expect(registerUser(email, password, retypedPassword)).toBe("Password must be between 8 to 15 characters, must contain at least 1 upper case, one lower case, one numerical, and one special character");
})
test('attempting to register user with invalid email address', () =>{
    email = "abrarzaman2003gmail.com";
    password = "Password123";
    retypedPassword = "Password123";
  expect(registerUser(email, password, retypedPassword)).toBe("You have entered an invalid email address!");
})

test('valid personal information input', () =>{
    age = 20;
    weight = 150;
    heightFt = 5;
    heightIn = 8;
  expect(personalInformationInput(age,weight,heightFt,heightIn)).toBe("Personal Info Inputted");
})
test('attempting to enter invalid inches', () =>{
    age = 20;
    weight = 150;
    heightFt = 5;
    heightIn = 13;
  expect(personalInformationInput(age,weight,heightFt,heightIn)).toBe("invalid height (inches)");
})
test('attempting to enter invalid feet', () =>{
    age = 20;
    weight = 150;
    heightFt = -5;
    heightIn = 8;
  expect(personalInformationInput(age,weight,heightFt,heightIn)).toBe("invalid height (feet)");
})
test('attempting to enter invalid weight', () =>{
    age = 20;
    weight = -10;
    heightFt = 5;
    heightIn = 8;
  expect(personalInformationInput(age,weight,heightFt,heightIn)).toBe("invalid body weight");
})
test('attempting to enter invalid age', () =>{
    age = -1;
    weight = 150;
    heightFt = 5;
    heightIn = 8;
  expect(personalInformationInput(age,weight,heightFt,heightIn)).toBe("invalid age");
})

test("creating a user", async () => {
    email = "god@gmail.com";
    password = "P@ssword123";
    retypedPassword = "P@ssword123";
    age = 20;
    weight = 150;
    heightFt = 5;
    heightIn = 8;
    const data = await makeUser(email,password,retypedPassword,age,weight,heightFt,heightIn);
    expect(data).toBe(true)
})

test("creating a user that already exists", async () => {
  try{email = "dog@gmail.com";
  password = "P@ssword123";
  retypedPassword = "P@ssword123";
  age = 20;
  weight = 150;
  heightFt = 5;
  heightIn = 8;
  const data = await makeUser(email,password,retypedPassword,age,weight,heightFt,heightIn);
  //expect(data).toBe(true)
  }catch(e){
    expect(e.message).toBe("auth/email-already-in-use");
  }
})

// jest.mock('firebase/auth', () => {
//   // return {
//   //   auth: jest.fn(),
//   // };
// });

test("logging in a user", async () => {
    email = "bob@gmail.com";
    password = "P@ssword123";
    const data = await logIn(email,password);
    expect(data).toBe("pDyQrBbnkKMDDL3QFCo8Y5R6FgE3");
})

test("logging in a user with invalid password", async () => {
    email = "abrarzaman2003@gmail.com";
    password = "Pssword123";
    try{
      const data = await loginUser(email,password);
    }catch(e){
      expect(e.message).toBe("auth/wrong-password");
    }
    
    
})





