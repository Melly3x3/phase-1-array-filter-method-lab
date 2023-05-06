function superbowlWin(){
}

function findMatching(names, string) {
    const listOfDrivers = [];
    for (const names of drivers) {
        if (string === drivers)
        {
            return listOfDrivers.push(drivers)
        }
}
    return names.filter(names => names.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(names, string,) {
    return names.filter(names => names[0] === string[0]);
}
    
function matchName(drivers, argument){
    return  drivers.filter(function(drivers) { return drivers.name === argument});
}
const drivers =[
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    },
    ];