const tuits = require('/tuits.json');

const findAllTuits = (req, res) => {
    res.json(tuits);
};
const createTuit = () => {};
const deleteTuit = () => {}
const likeTuit = () => {}

const tuitsController = (app) => {
    app.get('/api/tuits', findAllTuits);
    app.post('/api/tuits', createTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', likeTuit);
};
