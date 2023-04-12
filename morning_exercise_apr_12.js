let getAndReturnPeople = async () => {
    let response = await fetch('https://swapi.dev/api/people')
    let parsedResponse = await response.json()
    let peopleArray = parsedResponse.results;
    return peopleArray;
}
let peopleArray = getAndReturnPeople();
const doProblem = async () => {
    let peopleArray = await getAndReturnPeople();
    console.log(peopleArray);
    // do your work here inside this function
}
doProblem()

let getNames = async ()=> {
    let response = await fetch ('https://swapi.dev/api/people')
    let parsedResponse = await response.json()
}