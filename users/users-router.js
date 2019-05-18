// Packages
const usersRouter = require("express").Router();

// Data
const users = require("./users-model.js");

// Middleware?
const { restricted } = require("../auth/authenticators.js");

// ========  For endpoints beginning with /api/users

// Find All Users
usersRouter.get("/", (req, res) => {
  users
    .findAllUsers()
    .then(users => {
      res.status(200).json({ users, decodedToken: req.decodedToken });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The users information could not be retrieved." });
    });
});

// Find User + Stories by ID
usersRouter.get("/:id", restricted, (req, res) => {
  const userId = req.params.id;
  users
    .findByUserId(userId)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "This user could not be found." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "This user's information could not be retrieved." });
    });
});

/*


// ============ GET STUDENTS BY COHORT ID
cohortsRouter.get("/:id/students", (req, res) => {
  const cohortId = req.params.id;
  cohortsDb
    .findStudentsById(cohortId)
    .then(cohort => {
      if (cohort) {
        res.status(200).json(cohort);
      } else {
        res.status(404).json({ error: "This cohort could not be found." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "This cohort's information could not be retrieved." });
    });
});



  */

module.exports = usersRouter;
