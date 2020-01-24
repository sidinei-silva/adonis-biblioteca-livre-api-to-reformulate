'use strict'

/** @type {import('app/Models/Admin')} */
const Admin = use('App/Models/Admin')

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/*
|--------------------------------------------------------------------------
| AdminSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AdminSeeder {
  async run () {

    const data = {
      "username": Env.get('ADMIN_USERNAME'),
      "email": Env.get('ADMIN_EMAIL'),
      "password": Env.get('ADMIN_PASSWORD')
    };

    await Admin.create(data);
  }
}

module.exports = AdminSeeder
