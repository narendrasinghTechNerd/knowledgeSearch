module.exports = app => {
    // put your express app logic here
    app.get('/students', (req, res) => {
        // preparing array of student
        var students = [
            {
                name: 'James Smith',
                age: 17,
                id: 1
            },
            {
                name: 'Elizabeth Johnson',
                age: 17,
                id: 2
            },
            {
                name: 'David Wilson',
                age: 17,
                id: 3
            },
        ];
        //next line will send response in JSON format
        res.json(students);
    });
};
