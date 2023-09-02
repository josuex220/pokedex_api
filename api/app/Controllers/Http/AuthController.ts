import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
      public async login({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
      
        try {
          const token = await auth.use('api').attempt(email, password, {
              expiresIn: '7 days'
          });
          
          return response.status(200).json(token)
        } catch {
          return response.unauthorized('Invalid credentials')
        }
      }   
}
