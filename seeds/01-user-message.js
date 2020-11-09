exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('highlight').del()
  await knex('site').del()
  await knex('user').del()

  await knex("user").insert([{
    email: "jay.oliver.technologies@gmail.com"
  },{
    email: "jaykamas@gmail.com"
  }
  ])

  await knex("site").insert([{

    user_id: 1,
    from_user: "jaykamas@gmail.com",
    url: "https://en.wikipedia.org/wiki/Existentialism",
    read: false
  }])

  await knex("highlight").insert([{
    site_id: 1,
    parentTag: "p",
    text: "nquiry that explores the"
  },{
    site_id: 1,
    parentTag: "p",
    text: "phasizing experie"
  },{
    site_id: 1,
    parentTag: "p",
    text: "of the existentialist, the individual's starting point has been called \"the existential",
  },{
    site_id: 1,
    parentTag: "p",
    text: "m is associated with several 19th- and 20th-cent"
  },{
    site_id: 1,
    parentTag: "p",
    text: "who shared an emphasis on the human subj"
  },{
    site_id: 1,
    parentTag: "p",
    text: "spite profound doctrinal differe",
  },{
    site_id: 1,
    parentTag: "p",
    text: "tentialists regarded t",
  },{
    site_id: 1,
    parentTag: "p",
    text: "and strongly influenced many d"
  },{
    site_id: 1,
    parentTag: "p",
    text: "s one in accordance with one's freedom. A component of freedom is facticity, but not to the degree that this facticity d"
  },{
    site_id: 1,
    parentTag: "p",
    text: "bjective thought makes people forget they exist, and then went on to argue that it implies a claim that you do not",
  }])

};
