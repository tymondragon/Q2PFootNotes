
exports.seed = function(knex, Promise) {
  return knex('notes').del()
    .then(function () {
      return knex('notes').insert([
        {id: 1, user_id: 1, subject: 'Javascript', content: 'This is the primitive man', video_link: 'https://youtu.be/J8MLpv_utfM?t=1m54s'},
        {id: 2, user_id: 2, subject: 'Javascript', content: 'This is Annabelle', video_link: 'https://youtu.be/EQRFgGwGeok?t=36s'},
        {id: 3, user_id: 3, subject: 'Javascript', content: 'This Venom ', video_link: 'https://youtu.be/u9Mv98Gr5pY?t=2m23s'},
        {id: 4, user_id: 5, subject: 'Javascript', content: 'This is Slenderman being spooky', video_link: 'https://youtu.be/i1fraZ8UH_c?t=1m10s'},
        {id: 5, user_id: 3, subject: 'Javascript', content: 'Spooky slender dude', video_link: 'https://youtu.be/i1fraZ8UH_c?t=1m49s'},
        {id: 6, user_id: 4, subject: 'Javascript', content: 'This is Venom with Venom', video_link: 'https://youtu.be/u9Mv98Gr5pY?t=58s'},
        {id: 7, user_id: 3, subject: 'Javascript', content: 'This is Venom being Venomy', video_link: 'https://youtu.be/u9Mv98Gr5pY?t=2m28s'},
        {id: 8, user_id: 4, subject: 'Javascript', content: 'Annabelle was a nun? What?!', video_link: 'https://youtu.be/EQRFgGwGeok?t=1m36s'},
        {id: 9, user_id: 5, subject: 'Javascript', content: 'This is Jurassic World 2 being dinosaury', video_link: 'https://youtu.be/CtHTpf_dE_k?t=1m39s'},
        {id: 10, user_id: 2, subject: 'Javascript', content: 'Scary Dinosaur', video_link: 'https://youtu.be/CtHTpf_dE_k?t=48s'},
        {id: 11, user_id: 1, subject: 'Javascript', content: 'This is the primitive man making something', video_link: 'https://youtu.be/J8MLpv_utfM?t=35s'},
      ]);
    });
};
