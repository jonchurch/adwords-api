
'use strict';
require('dotenv').config()
const AdWords = require('googleads-node-lib')

const service = new AdWords.AdGroupService()



const operand = new service.Model({

})
service.mutateAdd(process.env.ADWORDS_CUSTOMER_CLIENT_ID, operand, function(err, results) {
  if (err) {
    console.log(err)
  } else {
    console.log(JSON.stringify(results, null, 2))
  }

})
