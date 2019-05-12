const express = require('express'); 
const router = express.Router(); 
const pool = require('../modules/pool')



// router.get('/', (req,res) => {
//     console.log('get route'); 
//     pool.query('SELECT * from "feedback"; ')
//     .then( result => {
//         console.log('result from get', result); 
//         res.send(result.rows)
//     }).catch(error => {
//         console.log('error in get', error); 
//         res.sendStatus(500); 
//     })
// })



router.post('/', (req, res) => {
    console.log('Post route ', req.body); 
    const feedback = req.body; 
    const queryText = 
        `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
            VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedback.feeling, feedback.understanding, 
        feedback.support, feedback.comments])
    
    .then( response => {
        console.log('response from post', response); 
        res.sendStatus(201); 
    }).catch ( error => {
        console.log('error in post', error); 
        res.sendStatus(500); 
    })
})



module.exports = router

