import React from "react";

function DataTypes() {

    //defining data types
    // let name:string = 'Raj';
    // let committed:boolean=true;
    // let age:number= 26;
    // let hobbies:string[] = ['raj','deepak'];
    // let role:[number, string] = [3,'hero'];

    // console.log("hello",name);
    // console.log("hello",committed);
    // console.log("hello",age);
    // console.log("hello",hobbies);
    // console.log("hello",role);

    //Objects
    // if we want to like this two paramater is not madatory we can use one also in this case we neeed to use ? in front of that particular
    // variable which is not mendatory, in our case i made age is not mandotary.
    // type person={
    //     name:string;
    //     age?:number;
    // };

    // let objectCaller:person={
    //     name:"raj",
    //     // age:26
    // };

    // console.log("objectCaller",objectCaller);

    //if you want to assing a varible are strig as well as number so you can use union opereotr in typescript
    // for that we use | pipe operator as a union.

    // let twoDataType:string | number = "raj";
    // console.log("twoDataType,  ",twoDataType);

    // if we want to use varibale type is any things we can use keyword any or if we dont know what type it is going to 
    //  that variable we use undefined keyword 
    // it is recommended to use undefined over any.
    //  let age:any= 23;
    //  let yut:undefined="rak";


    
  return (
    <>
      <div>
        hey there
      </div>
    </>
  );
}

export default DataTypes;
