import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'
import User from 'App/Models/User'

export default class UsersController {

    public async index({ view } : HttpContextContract){
        return view.render('users')
    }

    public async show({ response , params} : HttpContextContract){
        return response.json({userId : params.id})
    }
    public async create({  } : HttpContextContract){
       
    }

    public async edit({  } : HttpContextContract){
       
    }

    public async store({ response } : HttpContextContract){

        // console.log("hit")
        const user1 = {
            username : "mx",
            email : "mx@gmail.com",
            password : "test123"
        }
        const user2 = {
            username : "pwn",
            email : "pwn@gmail.com",
            password : "test123"
        }
        const user3 = {
            username : "nox",
            email : "nox@gmail.com",
            password : "test123"
        }
       
        const users =  await User.createMany([user1 , user2 , user3])

        return response.json(users)
       
    }

    public async update({} : HttpContextContract){

        

        



    }

    public async destroy({  } : HttpContextContract){
       
    }
}
