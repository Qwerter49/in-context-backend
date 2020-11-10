exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('highlight').del()
  await knex('site').del()
  await knex('user').del()

  const user1 = await knex("user").insert({
    email: "jay.oliver.technologies@gmail.com"
  })

  const user2 = await knex("user").insert({
    email: "jaykamas@gmail.com"
  })

  const site1 = await knex("site").insert({
    user_id: 1,
    from_user: "jaykamas@gmail.com",
    url: "https://en.wikipedia.org/wiki/Existentialism",
    read: false
  })

  const site2 = await knex("site").insert({
    user_id: 2,
    from_user: "jay.oliver.technologies@gmail.com",
    url: "https://en.wikipedia.org/wiki/Existentialism",
    read: false
  })

  const site3 = await knex("site").insert({
    user_id: 1,
    from_user: "jaykamas@gmail.com",
    url: "https://www.ifixit.com/Teardown/iPhone+12+and+12+Pro+Teardown/137669",
    read: false
  })

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

  await knex("highlight").insert([{
    site_id: 2,
    parentTag: "p",
    text: "nquiry that explores the"
  },{
    site_id: 2,
    parentTag: "p",
    text: "phasizing experie"
  },{
    site_id: 2,
    parentTag: "p",
    text: "of the existentialist, the individual's starting point has been called \"the existential",
  },{
    site_id: 2,
    parentTag: "p",
    text: "m is associated with several 19th- and 20th-cent"
  },{
    site_id: 2,
    parentTag: "p",
    text: "who shared an emphasis on the human subj"
  },{
    site_id: 2,
    parentTag: "p",
    text: "spite profound doctrinal differe",
  },{
    site_id: 2,
    parentTag: "p",
    text: "tentialists regarded t",
  }])

  await knex("highlight").insert([{
    site_id: 3,
    parentTag: "p",
    text: "th the battery, stretch release adhesive just where we exp"
  },{
    site_id: 3,
    parentTag: "p",
    text: "ch, and they perform as e"
  },{
    site_id: 3,
    parentTag: "p",
    text: "e see 10.78 Wh for both batterie"
  },{
    site_id: 3,
    parentTag: "p",
    text: "hey are also interchangeable in our parts swap test"
  }])
};
