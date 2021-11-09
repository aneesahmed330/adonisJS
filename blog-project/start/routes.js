'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/home').render('home')
// Route.get('/test' , () => "testing")

// Route.get('/test/:id' , ({params}) => {
//     return `This is the id : ${params.id}`
// })
Route.on('/').render('home')
Route.get('/posts' , 'PostController.index')