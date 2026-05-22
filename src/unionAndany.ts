let subs: number | string = '1M'

let apiRequestStatus: 'pending' |'success' | 'error'='pending'

// any is used when we want to opt out of type checking for a variable. It can be assigned any value and can be reassigned to any type.
let randomvalue: any =10

//unknown is a type that represents any value, but it is safer than any because it requires type checking before performing 
//operations on it. It can be assigned any values but cannot be reassigned to any type without type checking.