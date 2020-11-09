exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('highlight').del()
  await knex('site').del()
  await knex('user').del()

  await knex("user").insert([{
    id: 1,
    email: "jay.oliver.technologies@gmail.com"
  },{
    id: 2,
    email: "jaykamas@gmail.com"
  }
  ])

  await knex("site").insert([{
    id: 1,
    user_id: 1,
    from_user: "jaykamas@gmail.com",
    url: "https://en.wikipedia.org/wiki/Existentialism",
    read: false
  }])

  await knex("highlight").insert([{
    id: 1,
    site_id: 1,
    parentTag: "p",
    text: "nquiry that explores the"
  },{
    id: 2,
    site_id: 1,
    parentTag: "p",
    text: "phasizing experie"
  },{
    id: 3,
    site_id: 1,
    parentTag: "p",
    text: "of the existentialist, the individual's starting point has been called \"the existential",
  },{
    id: 4,
    site_id: 1,
    parentTag: "p",
    text: "m is associated with several 19th- and 20th-cent"
  },{
    id: 5,
    site_id: 1,
    parentTag: "p",
    text: "who shared an emphasis on the human subj"
  },{
    id: 6,
    site_id: 1,
    parentTag: "p",
    text: "spite profound doctrinal differe",
  },{
    id: 7,
    site_id: 1,
    parentTag: "p",
    text: "tentialists regarded t",
  },{
    id: 8,
    site_id: 1,
    parentTag: "p",
    text: "and strongly influenced many d"
  },{
    id: 9,
    site_id: 1,
    parentTag: "p",
    text: "s one in accordance with one's freedom. A component of freedom is facticity, but not to the degree that this facticity d"
  },{
    id: 10,
    site_id: 1,
    parentTag: "p",
    text: "bjective thought makes people forget they exist, and then went on to argue that it implies a claim that you do not",
  }])

};
