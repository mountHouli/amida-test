const expect = require('chai').expect
const axios = require('axios')

describe('/api/sample', () => {
  describe('Successful', () => {
    let result
    before(async () => {
      try {
        result = await axios.get('http://localhost:4000/api/sample', {
          // By default, Axios rejects its promise if the HTTP status it gets back is outside the 2xx range.
          // Prevent this, making axios resolve its promise for all HTTP status codes.
          validateStatus: status => true
        })
      }
      catch (err) {
        console.log('Error setting up test:')
        console.log(err)
      }
    })

    it('Should return HTTP status 200', () => {
      expect(result.status).to.equal(200)
    })

    // Note:  We use .to.include() here rather than .to.equal() because the "generated" time stamp changes with every request.
    it('Should return the correct data', () => {
      expect(JSON.stringify(result.data)).to.include('{"data":{"name":{"first_name":"JOHN","last_name":"DOE"},"dob":"01/01/1910","address":["123 ANY ROAD"],"city":"ANYTOWN","state":"VA","zip":"00001","phone":"123-456-7890","email":"johndoe@example.com","coverage":[{"type":"Part A","effective_date":"01/01/2012"},{"type":"Part B","effective_date":"01/01/2012"}]},"metadata":{"generated":')
    })
  })
})
