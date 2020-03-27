const authenticate = require('../../middleware/authenticate');
const errors = require('../../errors');
const router = require('express').Router();
/**
 *  @swagger
 *  /v1/example:
 *    get:
 *      tags:
 *        - example
 *      description: get list of examples
 *      responses:
 *        200:
 *          description: list of examples
 *          schema:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                uuid:
 *                  type: string
 *                  default: '003d3168-ffa3-4e9d-bccb-04f80cdec2ef'
 *                name:
 *                  type: string
 *                  default: 'name'
 *
 */
// const users = await models.User.findAll({
//     include: [{
//         model: models.Skill,
//         as: 'Skills',
//         required: false,
//         // Pass in the Product attributes that you want to retrieve
//         attributes: ['uuid', 'name'],
//     }]
// });
router.get('/v1/users',
    // authenticate(),
    errors.wrap(async (req, res) => {
        const models = res.app.get('models');
        const users = await models.User.findAll({
            include: [{
                model: models.Project,
                as: 'Projects',
                required: false,
                // Pass in the Product attributes that you want to retrieve
                attributes: ['uuid', 'name'],
            }]
        });
        res.json(users);
    })
);

module.exports = router;
