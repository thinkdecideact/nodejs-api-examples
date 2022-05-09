// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        // this.ctx.body = 'Hello world';
        const { ctx } = this
        ctx.body = 'hi, egg'
    }
}

module.exports = HomeController;