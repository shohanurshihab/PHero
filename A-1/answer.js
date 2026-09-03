//Q-1:
function describevalue(value) {
    let typecheck = typeof value;
    let comment = ""; 
    let result = "";
        if(value){
            comment = "truthy";
        }
        else{
            comment = "falsy";
        }
        result = "\"" + typecheck + " | " + comment + "\"";
        //console.log(result);
        return result;
        
    
}
describevalue(""); 

//Q-2:
function getDayType(day) {
    let dayName = day.toLowerCase();
   switch(dayName){
    case "friday":
    case "saturday":
        return "Weekend";
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        return "Weekday";
    default:
        return "Invalid Day";
   } 
}
// console.log(getDayType("Friday"));

//Q-3:
function validateUsername(username) {
    if(username.length < 4){
        return "Too Short";
    }
    else if (username.includes(" ")){
        return "No Space Allowed";
    }
    else if(username.toLowerCase().includes("admin")){
        return "Reserved Word"
    }
    else{
        return "Available"
    }
}
// console.log(validateUsername("skÁdMin"))

// Q-4:
function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let fare = 50;
     if(distance > 2){
        fare = fare + (distance-2) * 15;
     }
     if(waitingMinutes > 0){
        fare = fare + waitingMinutes * 2;
     }
     if(isNight){
        fare = fare + fare * 0.2;
     }
     return fare;
}
console.log(getCngFare(5,true,10));

//Q-5:
const getChaseVerdict = (target, scored, ballsLeft) => {
    
}
