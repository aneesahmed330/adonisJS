import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'

export default class PostSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Post.createMany([
      {
        title: 'Python',
        discription:
          'Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.',
        author: 'MX',
      },
      {
        title: 'Java',
        discription:
          'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
        author: 'PWN',
      },
      {
        title: 'JavaScript',
        discription:
          'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled and multi-paradigm. It has dynamic typing, prototype-based object-orientation and first-class functions',
        author: 'NOX',
      },
      {
        title: 'Node',
        discription:
          'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
        author: 'PWN',
      },
      {
        title: 'React',
        discription:
          'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
        author: 'MX',
      },
    ])
  }
}
