import { ObjectId } from 'mongodb'
import {connectToMongoDB} from '../configs/mongodb.config.js'

let db

connectToMongoDB()
  .then(result => { db = result })
  .catch(err => console.log(err))

console.log(db);

async function insert(collectionName, body) {
    const collection = db.collection(collectionName)
    const object = await collection.insertOne(body)
    return object
}


async function findOneById(collectionName, id) {
    const collection = db.collection(collectionName)
    const object = await collection.findOne({_id: new ObjectId(id)})
    return object
}

async function findOneByName(collectionName, name) {
    const collection = db.collection(collectionName)
    const object = await collection.findOne({teamName: name})
    return object
}

async function updateTeam(collection, team, player, countDef, countOff) {


    const collect = db.collection(collection)
    await collect.updateOne({teamName: team.teamName}, {$set: {"players.def": countDef}})
    await collect.updateOne({teamName: team.teamName}, {$set: {"players.off": countOff}})
}

export {insert, findOneById, findOneByName, updateTeam}