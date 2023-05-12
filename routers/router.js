import Router from 'express'
import controllerTeam from '../controllers/team.js'
import controllerPlayer from '../controllers/player.js'
import middleware from '../middlewares/middleware.js'

const router = Router()

//Добавление команды
router.post('/teams', middleware.checkEmptyBodyTeam, controllerTeam.postTeam)

//Дабвить игрока
router.post('/players', middleware.checkEmptyBodyPlayer, controllerPlayer.postPlayer)

//Получение команды
router.get('/teams/:id', controllerTeam.findTeamById)

export default router