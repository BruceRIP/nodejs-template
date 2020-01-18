/**
 * Bruce RIP
 */
const express = require('express')
const router = express.Router();

/**
 *  Save all accounts
 */
router.post('', async function(req, res){
    console.log('Starting call to save account');
    console.log('Request headers: ', req.headers);
    console.log('Request params: ', req.params);
    console.log('Request body: ', req.body);    
    if(req.headers['authorization'] === undefined || req.headers['authorization'] === ''){
        res.sendStatus(401);
    }else if(requestType.get(req.params.requestType) === null){
        res.status(400).json({"message":"type not supported"});
    }else{

    }
});

/**
 * Get account by billerID
 */
router.get('/:billerID', async function(req, res){
    console.log('Starting call to save account');
    console.log('Request headers: ', req.headers);
    console.log('Request params: ', req.params);
    console.log('Request body: ', req.body);    
    if(req.headers['authorization'] === undefined || req.headers['authorization'] === ''){
        res.sendStatus(401);
    }else if(requestType.get(req.params.requestType) === null){
        res.status(400).json({"message":"type not supported"});
    }else{

    }
});

module.exports = router;