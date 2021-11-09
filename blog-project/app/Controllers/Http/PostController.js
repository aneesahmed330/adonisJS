'use strict'

class PostController {
   async index({view}){

    const posts = [
        {title : "python" , content: "Python is a programing langauge "},
        {title : "c++" , content: "c++ is a programing langauge "},
        {title : "java" , content: "java is a programing langauge "},
        {title : "typescript" , content: "typescript is a programing langauge "},
        {title : "kotlin" , content: "kotlin is a programing langauge "},
    ]
       return view.render('posts.index' , {posts} )
   }
}

module.exports = PostController
