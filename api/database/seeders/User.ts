import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {

  public async run () {
    await User.createMany([
      {
        email: 'OmAvy8GWWarXhgLHrL3L@app.com',
        password: 'VQVIsVLJKf2eMankyY6Q',
      }
    ])
  }

}
