
const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: ""
  
  }
  
 export default function Customereducer(state = initialStateCustomer, action){

    switch(action.type){
  
      case "customer/CreateCustomer" :
        return {
          ...state,
          fullName: action.payload.fullName,
          nationalID: action.payload.nationalID,
          createdAt: action.payload.createdAt
        }
  
        case "account/updateName":
          return {
            ...state,
            fullName: action.payload
          }
        default:
          return state;
    }
  }
  
  
export function createCustomer(fullName, nationalID){
    return {
      type: "customer/CreateCustomer",
      payload:  {fullName, nationalID, createdAt: new Date().toISOString()},
  
    }
  }
  
  export function updateName(fullName){
    return {
      type: "account/updateName",
      payload: fullName
    }
  }