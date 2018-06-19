var persons = [{
        person: "Rob",
        birthYear: 1990
    }, {
        person: "Rebecca",
        birthYear: 1989,
    }, {
        person: "Noelle",
        birthYear: 1997
    }, {
        person: "John Michael",
        birthYear: 2006
    },
    {
        person: "Jer",
        birthYear: 2001
    }
];

var birthYears = [];
for (year = 1919; year < 2018; year++) {
    birthYears.push(year);
};

var results = [];

var printFullAge = function(birthYears) {
    for (index = 0; index < birthYears.length; index++) {
        var isOfAge = 2018 - birthYears[index] >= 18
        console.log(isOfAge);
        results.push({
            input: 2018 - birthYears[index],
            output: isOfAge
        })
    };
}

printFullAge(birthYears);