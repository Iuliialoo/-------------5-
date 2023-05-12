import {insert, findOneByName, updateTeam} from '../services/mongodb.service.js'

const postPlayer = async (req, res, next) => {
    try {
        const {teamName, playerName, position} = req.body
        const team = await findOneByName('teams', teamName)
        if (team) {
            const player = await insert('players', {teamName, playerName, position})

            let countDef = +team.players.def
            const countOff = +team.players.off

            if (position == "def") countDef++
            if (position == "off") countOff++

            console.log(position)
            console.log(countDef)

            const updatedTeam = await updateTeam('teams', team, player, countDef, countOff)
            res.json(player)
        }
        else {
            res.send('Такой команды нет')
        }
    }
    catch(er) {
        const error = new Error(er)
        error.status = 500
        next(error)
    }
}

const error = (err, req, res, next) => {
    res.send(`status ${err.status}\n messange: ${err.message}`)
}

export default {postPlayer}