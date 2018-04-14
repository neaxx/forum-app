const Thread = require('../../src/models/Thread');



const seedThreads = async () => {


 return await Thread.create([

    {

      title: 'El sistema de matricula esta dañado',

      body: 'bar',

      slug: '',

    },

    {

      title: 'El problema de transporte en Panama',

      body: 'bar',

      slug: '',

    },

  ]);

};



module.exports = {

  seedThreads,

};