const checkEmptyBodyTeam = (req, res, next) => {
    let body = req.body 
    if (body.teamName && body.city) {
        next()
    }
    else {
        res.status(400).send('Неверные данные')
    }
}

const checkEmptyBodyPlayer = (req, res, next) => {
    let body = req.body 
    if (body.teamName && body.playerName && body.position && (
        body.position == "def" || body.position == "off")) {
        next()
    }
    else {
        res.status(400).send('Неверные данные')
    }
}

const badRequest = (req, res) => {
    res.status(400).send("Неверный путь")
}

export default {checkEmptyBodyTeam, checkEmptyBodyPlayer, badRequest}