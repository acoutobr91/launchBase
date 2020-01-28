const classA = [{
        name: 'Arthur',
        grade: 9.8,
    },
    {
        name: 'Mayk',
        grade: 10,
    },
    {
        name: 'Diego',
        grade: 2,
    },
    {
        name: 'Luiz',
        grade: 10,
    }

]

const classB = [{
        name: 'Roberto',
        grade: 6,
    },
    {
        name: 'João',
        grade: 5,
    },
    {
        name: 'Vitor',
        grade: 10,
    },
    {
        name: 'Fulano',
        grade: 5,
    }
]

function calculateAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade;

    }
    const average = sum / students.length;
    return average

}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)


function sendMessage(average, classroom) {
    if (average > 5) {
        console.log(`The average grade of ${classroom} was ${average}, Congrats!`)
    } else {
        console.log(`The average grade of ${classroom} is bellow 5!`)
    }

}

function markAsFailed(student) {
    student.failed = false;
    if (student.grade < 5) {
        student.failed = true;
    }

}

function sendFailedMessage(student) {
    if (student.failed) {
        console.log(`The student ${student.name} is failed`)
    }
}

function studentsFailed(students) {
    for (let student of students) {
        markAsFailed(student);
        sendFailedMessage(student);
    }
}

sendMessage(average1, 'ClassA')
sendMessage(average2, 'ClassB')

studentsFailed(classA)
studentsFailed(classB)