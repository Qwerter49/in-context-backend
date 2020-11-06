exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('users-message').del()
  await knex('message').del()
  await knex('user').del()

  await knex("user").insert([{
    id: 1,
    email: "jay.oliver.technologies@gmail.com"
  },{
    id: 2,
    email: "jaykamas@gmail.com"
  }
  ])

  await knex("message").insert([{
    id: 1,
    data: `{"https://en.wikipedia.org/wiki/Existentialism":[{"parentTag":"p","text":"nquiry that explores the"},{"parentTag":"p","text":"phasizing experie"},{"parentTag":"p","text":" of the existentialist, the individual's starting point has been called \"the existential"},{"parentTag":"p","text":"m is associated with several 19th- and 20th-cent"},{"parentTag":"p","text":"who shared an emphasis on the human subj"},{"parentTag":"p","text":"spite profound doctrinal differe"},{"parentTag":"p","text":"tentialists regarded t"},{"parentTag":"p","text":"and strongly influenced many d"},{"parentTag":"p","text":"s one in accordance with one's freedom. A component of freedom is facticity, but not to the degree that this facticity d"},{"parentTag":"p","text":"bjective thought makes people forget they exist, and then went on to argue that it implies a claim that you do not"}]}`,
    from_user: "jaykamas@gmail.com"
  }])

  await knex("users-message").insert([{
    user_id: 1,
    message_id: 1
  }])
};
