const User = require("../model/User")

module.exports = {
    registerForm(req, res) {
        return res.render("user/register.njk")
    },
    show(req, res) {
        return res.render('user/index')
    }, 
    async post(req, res) {
        const userId = await User.create(req.body)

        req.session.userId = userId

        return res.redirect('/users')
    }
}