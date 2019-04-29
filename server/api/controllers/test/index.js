const utils = require('../../lib/utils');


module.exports = {
  someData: someData,
  somePostedData: somePostedData

}

async function someData(req, res) {
  try {
    await
      res.json({
        name: 'ron',
        age: 27,
        date: Date.now(),
        skills: ['magic', 'attack', 'items']
      });
  } catch (err) {
    console.error('error on some data');
    console.error(err);
  }
  finally {
    await console.log('get task completed.')
  }
}

async function somePostedData(req, res) {
  try {
    let data = {
      name: req.body.name,
      age: req.body.age,
      funny: req.body.funny,
      address: req.body.address,
      phone: req.body.phone,
      rogerRabbit: req.body.rogerRabbit
    }
    await
      res.json({ data: data });
  } catch (err) {
    console.error('error on some data');
    console.error(err);
  }
  finally {
    await console.log('post task completed.')
  }
}