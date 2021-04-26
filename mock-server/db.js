// Thought this might help align the front-end and backend team. This a neat little mock server. This more for how the front-end team would like to interact with the backend

module.exports = {
    
    // Drivers, Members, and Admins all come from the same base type (User)
    "drivers": [
      { "id": 1, "first_name": "Pam", "last_name": "Beasley", "email": "pam@the.office", "user_type": "driver", "status": "approved" }
    ],
    // Members are created with organizations
    "members": [
        { "id": 1, "first_name": "Michael", "last_name": "Scott", "email": "michael@the.office", "user_type": "member", "role": "manager", "organization_id": 1 },
        { "id": 1, "first_name": "Jim", "last_name": "Halpert", "email": "jim@the.office", "user_type": "member", "role": "regular", "organization_id": 1 }
    ],
    "admins": [
      { "id": 1, "first_name": "David", "last_name": "Wallace", "email": "david@the.office", "user_type": "admin", "role": "manager" },
      { "id": 1, "first_name": "Jan", "last_name": "Levenson", "email": "jan@the.office", "user_type": "admin", "role": "regular" }
    ],
    // Separate Entity
    "organizations": [
      { "id": 1, "name": "Dunder Mifflin"}
    ],

    // This is not attached to the database, this is simply where users login with a POST call
    "sessions": [{
      "email": '',
      "password": ''
    }],
}