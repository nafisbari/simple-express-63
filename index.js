const express = require('express');
// to allow cors
const cors = require('cors');

const app = express();

//to allow cors, call must

app.use(cors());

//to convert the string data to json
app.use(express.json());

const port = process.env.PORT || 5000;

const handler = (req, res) => {
    res.send('hello from node, i am so excited to learn node')
}

app.get('/', handler); // ekhane handler er puro function keo boshano jay, like
/* ap.get('/', (req, res) => {
res.send('hello from node')
}) */
// app er por get dile ja dibo oivabe jinish pabo

//objects of the users
const users = [
    {
        id: 0,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",

    },
    {
        id: 1,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna @melissa.tv",
        phone: "010-692-6593 x09125"

    },


    {
        id: 2,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan @yesenia.net",
        phone: "1-463-123-4447",

    },
    {
        id: 3,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623 x156",

    },
    {
        id: 4,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        phone: "(254)954-1289",

    },
    {
        id: 5,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        phone: "1-477-935-8478 x6430",

    },
    {
        id: 6,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        phone: "210.067.6132",

    },
    {
        id: 7,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",

        phone: "586.493.6943 x140",

    },
    {
        id: 8,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",

        phone: "(775)976-6794 x41206",

    },
    {
        id: 9,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",

        phone: "024-648-3804",
    }

]


//api creating and showing
app.get('/users', (req, res) => {

    //to get according to search
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }

    else {
        res.send(users)
    }
})

//to post data app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length; // karon amar current datta id started from 0
    users.push(newUser); //generlly data server e pathabo but apatoto ekhanei rakhtesi.
    console.log('hiting the post', req.body); // ekahne re.body dilam karon ami amar react e data post er shomoy data rakhsi body te

    //client side e pathanor jonno
    // res.send(JSON.stringify(newUser)) // eta or arekta shortcut holo
    res.json(newUser)
})

// to get specific user by id dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);

})

//route - mane ami wesite e jeye ei route dile je info pathacchi oita pabo 
//after the localhost:5000 writing in this case.
app.get('/fruits/magoes/fazli', (req, res) => {
    res.send('mango ami khabo')
})


app.listen(port, () => {
    console.log(('listening to port', port))
})