/* jshint maxlen: 500 */

module.exports = {
  people: getPeople(),
  projects: getProjects()
};

function getPeople() {
  return [
    {id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida'},
    {id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
    {id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
    {id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
    {id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
    {id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
    {id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'},
    {id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah'}
  ];
}

function getProjects() {
  return [
    {
      id: 3, 
      name: 'Direct Outreach', 
      abbrev: 'DO', 
      logoUrl: 'http://directoutreach.mycareergateway.com/images/site_logos/logo_white.png',
      description: 'Description about DO',
      contactName: 'Chris Casad', 
      contactEmail: 'chris.casad@xpandcorp.com',
      websites: [
        {
          url: 'http://do-mcgp1-dev-portal.hvcp.local/', 
          environment: 'Development',
          username: 'sarah.holmes30@example.com', 
          password: 'qwerty', 
          note: 'Career center rep user'
        },
      ],
      servers: [
        {
          name: 'mcgp1-dev-portal.hvcp.local', 
          environment: 'Development',
          type: 'Web/REST/Database', 
          osVersion: 'CentOS release 6.5', 
          username: '', 
          password: '', 
          note: 'Note about dev web/rest/db server'
        },
      ]
    }
  ];
}

/*
Tables:
project - id, name, abbreviation, description, contactName, contactEmail
projectWebsite - id, environmentId, url, description, username, password, note 
projectServer - id, environmentId, serverName, serverOsVersion, username, password, note
lookupEnvironment - id, name, abbreviation
lookupServerType - id, type

command to get server os/version: cat /etc/*-release
*/