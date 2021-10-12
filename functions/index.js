const functions = require("firebase-functions");
const firebase = require('firebase-admin');
const app = require("express")();

firebase.initializeApp();

const db = firebase.firestore().collection("movies");

app.get("/movies", (req,res) => {    
    db.get().then((docs) => {

        let movies = [];
        
        docs.forEach((doc) => {
            data = doc.data();

            movies.push({
                id: doc.id,
                name: data.name,
                release: data.release,
                synopsis: data.synopsis,
                rating: data.rating
            });
        });

        res.json(movies);
    });
});

app.get("/movies/find/:name", (req,res) => {
    qmovie = req.params.name;

    db.get().then((docs) => {

        let movies = [];
        
        docs.forEach((doc) => {
            data = doc.data();

            if(data.name == qmovie){
                movie = {
                    id: doc.id,
                    name: data.name,
                    release: data.release,
                    synopsis: data.synopsis,
                    rating: data.rating
                };

                res.json(movie);

                return null;
            }
        });

        res.json({"message":"No movie was found with that name."});
    });
});

app.get("/movies/search/:name", (req,res) => {
    qmovie = req.params.name;

    db.get().then((docs) => {

        let movies = [];
        
        docs.forEach((doc) => {
            data = doc.data();

            if(data.name.includes(qmovie)){
                movie = {
                    id: doc.id,
                    name: data.name,
                    release: data.release,
                    synopsis: data.synopsis,
                    rating: data.rating
                };

                movies.push(movie);
            }
        });

        res.send(movies);
    });
});

app.get("/movies/top5", (req,res) => {    
    db.get().then((docs) => {

        let movies = [];
        
        docs.forEach((doc) => {
            data = doc.data();

            movies.push({
                id: doc.id,
                name: data.name,
                release: data.release,
                synopsis: data.synopsis,
                rating: data.rating
            });
        });

        movies.sort(function(da,db){
            return (db.rating - da.rating); 
        });

        top5Movies = []

        if(movies.length >= 5){
            for(let i = 0; i < 5; i++){
                top5Movies.push(movies[i]);
            }

            res.json(top5Movies);
        }else{
            res.json({message: 'There are not more than five registered films.'});
        }  

        res.json(top2Movies);
    });
});

app.post("/movies", (req,res) => {
    db.add({
        name: req.body.name,
        release: req.body.release,
        synopsis: req.body.synopsis,
        rating: req.body.rating
    }).then(function(){
        res.json({message: 'added a movie'})
    });
});

exports.api = functions.https.onRequest(app);
