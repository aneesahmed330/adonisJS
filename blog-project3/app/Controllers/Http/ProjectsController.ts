import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Project from 'App/Models/Project'
import User from 'App/Models/User'
import Status from 'Contracts/Enums/Status'
import Role from 'Contracts/Enums/Role'

export default class ProjectsController {

  public async index({response}: HttpContextContract) {
    const projects = await Project.query().where('statusId' , Status.IDLE)
    return response.json(projects)


  }

  public async create({}: HttpContextContract) {}

  public async store({request , response}: HttpContextContract) {
    const data = request.only(['name' , 'description'])
    
    // ** model based approch ** //
    // const project = new Project();
    // project.name = data.name;
    // project.description = data.description;
    // await project.save();
    

    //** database query builder approch  **//
    // let project = Database.insertQuery<Project>().table('projects').insert({ name:data.name , description:data.description })


    const user1 = await User.findOrFail(1)
    const user2 = await User.findOrFail(2)
    const project = await Project.create(data);
    // const project = await Project.firstOrCreate({name: data.name} , data)
    
    // relating the user with project - project_user 
    await project.related('users').attach({
      [user1.id] : {
        role_id : Role.CREATOR
      },
      [user2.id] : {
        role_id :Role.MANAGER
      }
    })
    return response.json(project)











  }

  public async show({response , params}: HttpContextContract) {

    try {
      // const projects = await Project.query().where('id' , params.id).firstOrFail()
      // const projects = await Project.findOrFail(params.id)
      // const projects = await Project.findMany([1,2])
      // const projects = await Project.findBy('statusId' , Status.IDLE)


      // database approch
      const projects = await Database.from('projects').where('id' , params.id).first();

      
      
      
      
      return response.json(projects)
    } catch (error) {
      return response.json(error.message)
    }


  }

  public async edit({}: HttpContextContract) {}

  public async update({response ,params , request}: HttpContextContract) {

    // const data = request.only(['name' , 'description' ])
    // const project = await Project.findOrFail(params.id)
    
    
    // project.name = data.name
    // project.description = data.description
    // project.merge(data);
    // await project.save()
    
    // ** qury builder approch **//
    
    // const project = await Database.from('projects').where('id' , params.id).update(data);
    // return response.json(project)
    
    
    // ****  here we lets say we compelete the project **//
    // **** update project status to complete and free the assign user to that project ** //
    
    // -Grab the project using the id

    // const project = await Project.findOrFail(params.id)
    // const temp = await Database
    // .from('project_user')
    // .join('projects', (query) => {
    //   query
    //     .on('project_user.project_id', '=', parseInt(params.id))
    // })
    // .select('projects.name')

    // return response.json(temp)


    
          
      
          
     

  }

  public async destroy({params , response}: HttpContextContract) {

    const project = await Project.findOrFail(params.id)
    await project.delete()

    // query builder //
    // const project = Database.from('projects').where('id' , params.id).delete()

    return response.json(project)

  }
}
