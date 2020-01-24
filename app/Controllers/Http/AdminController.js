'use strict'

const Admin = use('App/Models/Admin')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with admins
 */
class AdminController {
  /**
   * Show a list of all admins.
   * GET admins
   */
  async index () {
    const admins = await Admin.all()
    return admins;
  }

  async show({params}){

    const admin = await Admin.findOrFail(params.id);

    return admin;

  }

  /**
   * Create/save a new admin.
   * POST admins
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async store ({ request}) {
    const data = request.only([ "username", "email", "password"]);

    const admin = await Admin.create(data);

    return admin;
  }

  /**
   * Update admin details.
   * PUT or PATCH admins/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const admin = await Admin.findOrFail(params.id);

    const data = request.only(["username", "email"]);

    admin.merge(data)

    await admin.save()

    return admin;
  }

  /**
   * Delete a admin with id.
   * DELETE admins/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AdminController
