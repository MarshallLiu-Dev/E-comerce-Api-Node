const User = require('../../modules/User')

const SessionController = {

    async createSession(req, res) {

        const { username } = req.body

        try {
            const user = await User.findOne({ username })
            if (!user) return res.status(400).send({ message: 'User does not exists' })
            return res.status(200).send({ user, message: 'Adm create successful' })
        } catch (error) {
            return res.status(400).send(error)
        }

    }

}

module.exports = SessionController