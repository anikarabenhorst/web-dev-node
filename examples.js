const examples = (app) => {
    const getString = (req, res) => {
        res.send("Some String")
    }

    app.get("/get/some/string",
        getString);
}

    app.get('/hello', (req, res) => {
        res.send('hello world');
    });

}

module exports examples;