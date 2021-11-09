// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import { schema, rules ,validator } from '@ioc:Adonis/Core/Validator'
import Post from 'App/Models/Post'

export default class PostsController {

  postSchema = schema.create({
        title: schema.string(),
        discription: schema.string(),
        author:schema.string(),
    })

  public index = async () => {
    const posts = await Post.all()
    return posts
  }

  public show = async ({ params }) => {
    const post = await Post.find(params.id)
    if (!post) return View.render('errors/not-found')
    return post
  }

  public store = async ({ request , response }) => {
    const data =  request.all()
    

//    try and catch
   try {
      const result = await validator.validate({
           schema: this.postSchema,
           data:data,
           messages: {
            string: 'The {{ field }} should be string',
          }
       })
// create object of model and save
    let post = new Post()
    post = await post.fill({
            title:result.title,
            discription: result.discription,
            author:result.author
        }).save()
    return response.send(post)



   } catch (error) {
       return JSON.stringify(error)
   }
     

  }

  public update = async ({ request, params , response}) => {
      
      //first we need to find that post in db
      let post = await Post.find(params.id)
      if(!post) return response.status(404).send({"error" : "There is no post with that 'id'! "})
     // validate
     try {
       const data =  request.all()
       const result = await validator.validate({
            schema: this.postSchema,
            data:data,
            messages: {
            string: 'The {{ field }} should be string',
            required: 'The {{ field }} should be required',
        }
     })
    //UPDATED THE CHANGES
     post = await post.merge(result).save()
     return JSON.stringify({"message" : "Post has been updated!"})


 } catch (error) {
     return JSON.stringify(error.messages)
 }  
  }

  public destroy = async ({params , response }) =>{
    const post = await Post.find(params.id)
    if (!post) return response.status(404).send(JSON.stringify({"error" : "Post with that id does not exist!"}))
    try {
      await post.delete()
      return response.send(JSON.stringify({"message" : "Post deleted successfully"}))
    } catch (error) {
      console.log(error.message)
      return 
    } 
  }
  
}
