import { ObjectId } from 'mongodb'
import {insert, findOneById} from '../services/mongodb.service.js'

const postTeam = async (req, res, next) => {
    try {
        const {teamName,  city} = req.body
        const team = await insert('teams', {teamName, city, players: {def: 0, off: 0}})
        res.json(team)
    }
    catch(er) {
        const error = new Error(er)
        error.status = 500
        next(error)
    }
}

const findTeamById = async (req, res, next) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            let team = await findOneById('teams', req.params.id)
            res.json(team)
        } else {
            const error = new Error('Not found');
            error.status = 400
            next(error);
        }
    } catch(er) {
        const error = new Error(er);
        error.status = 500
        next(error);
    }
}

const error = (err, req, res, next) => {
    res.send(`status ${err.status}\n messange: ${err.message}`)
}

export default {postTeam, findTeamById}