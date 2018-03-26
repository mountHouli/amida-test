const fs = require('fs')
const path = require('path')

const reg = /--------------------------------\nDemographic\n\n--------------------------------\n\nSource: (?:.*)\n\n\n\nName: (.*?) (.*)\n\nDate of Birth: (.*)\n\nAddress Line 1: (.*?)\n\nAddress Line 2: (.*)\n\nCity: (.*?)\n\nState: (.*?)\n\nZip: (.*?)\n\nPhone Number: (.*?)\n\nEmail: (.*?)\n\n(Part.*?) Effective Date: (.*?)\n\n(Part.*?) Effective Date: (.*?)\n/gm

const filename = path.resolve(__dirname, '..', 'input/cms_sample.txt')

fs.readFile(filename, 'utf8', (err, fileContents) => {
  const matches = reg.exec(fileContents)

  const data = {
    name: {
      first_name: matches[1],
      last_name: matches[2],
    },
    dob: matches[3],
    address: [matches[4], matches[5]].filter(addressLine => {
      return addressLine !== ''
    }), // !! make sure this works
    city: matches[6],
    state: matches[7],
    zip: matches[8],
    phone: matches[9],
    email: matches[10].toLowerCase(),
    coverage: [
      {
        type: matches[11],
        effective_date: matches[12]
      },
      {
        type: matches[13],
        effective_date: matches[14]
      }
    ]
  }

  console.log('JSON.stringify(data, null, 2):')
  console.log(JSON.stringify(data, null, 2))

  return JSON.stringify(data, null, 2)
})
