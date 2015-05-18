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
      id: 1, 
      name: 'Virtual Career Network', 
      abbrev: 'VCN', 
      logoUrl: 'https://www.vcn.org/vcn-transition/images/VCN-logo.png',
      description: 'description about VCN',
      contactName: 'Chris Casad', 
      contactEmail: 'chris.casad@xpandcorp.com',
      websites: [
        {
          url: 'https://hvcp2-dev-portal.hvcp.local/', 
          environment: 'Development',
          username: 'ccasad', 
          password: 'ccasad', 
          note: 'note about dev webste'
        },
        {
          url: 'https://hvcp2-qa-portal.hvcp.local/', 
          environment: 'QA', 
          username: 'ccasad', 
          password: 'ccasad', 
          note: 'note about qa webste'
        },
        {
          url: 'https://stage.vcn.org/', 
          environment: 'Stage', 
          username: 'ccasad', 
          password: 'ccasad', 
          note: 'note about stage webste'
        },
        {
          url: 'https://www.vcn.org/', 
          environment: 'Production', 
          username: 'ccasad', 
          password: 'ccasad', 
          note: 'note about prod webste'
        }
      ],
      servers: [
        {
          name: 'hvcp2-dev-portal.hvcp.local', 
          environment: 'Development',
          type: 'Web', 
          osVersion: 'CentOS release 6.4', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about dev server'
        },
        {
          name: 'hvcp2-dev-ws.hvcp.local', 
          environment: 'Development',
          type: 'REST', 
          osVersion: 'CentOS release 6.4', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about dev server'
        },
        {
          name: 'hvcp2-dev-sql.hvcp.local', 
          environment: 'Development',
          type: 'Database', 
          osVersion: 'CentOS release 6.4', 
          username: 'hvcp', 
          password: 'hvcpapp', 
          note: 'note about dev server'
        },
        {
          name: 'hvcp2-qa-portal.hvcp.local', 
          environment: 'QA',
          type: 'Web', 
          osVersion: 'CentOS release 6.3', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about dev server'
        },
        {
          name: 'hvcp2-qa-ws.hvcp.local', 
          environment: 'QA',
          type: 'REST', 
          osVersion: 'CentOS release 6.3', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about dev server'
        },
        {
          name: 'hvcp2-qa-sql.hvcp.local', 
          environment: 'QA',
          type: 'Database', 
          osVersion: 'CentOS release 6.3', 
          username: 'hvcp', 
          password: 'hvcpapp', 
          note: 'note about dev server'
        },
        {
          name: 'hvcp5-stg-w1.hvcp.local', 
          environment: 'Stage',
          type: 'Web', 
          osVersion: 'CentOS release 6.6', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about stage web server'
        },
        {
          name: 'hvcp6-stg-w1.hvcp.local', 
          environment: 'Stage',
          type: 'Web', 
          osVersion: 'CentOS release 6.6', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about stage web server'
        },
        {
          name: 'hvcp5-stg-ap1.hvcp.local', 
          environment: 'Stage',
          type: 'REST', 
          osVersion: 'CentOS release 6.6', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about stage rest server'
        },
        {
          name: 'hvcp6-stg-ap1.hvcp.local', 
          environment: 'Stage',
          type: 'REST', 
          osVersion: 'CentOS release 6.6', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about stage rest server'
        },
        {
          name: 'hvcp-stg-db.hvcp.local', 
          environment: 'Stage',
          type: 'Database', 
          osVersion: 'CentOS release 6.6', 
          username: 'hvcp_read', 
          password: '', 
          note: 'note about stage database server'
        },

        {
          name: 'hvcp1-pr-w12.hvcp.local', 
          environment: 'Production',
          type: 'Web', 
          osVersion: 'CentOS release 6.6', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about production web server'
        },
        {
          name: 'hvcp2-pr-w22.hvcp.local', 
          environment: 'Production',
          type: 'Web', 
          osVersion: 'CentOS release 6.6', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about production web server'
        },
        {
          name: 'hvcp3-pr-w32.hvcp.local', 
          environment: 'Production',
          type: 'Web', 
          osVersion: 'CentOS release 6.6', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about production web server'
        },
        {
          name: 'hvcp4-pr-w42.hvcp.local', 
          environment: 'Production',
          type: 'Web', 
          osVersion: 'CentOS release 6.6', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about production web server'
        },
        {
          name: 'hvcp1-pr-app11.hvcp.local', 
          environment: 'Production',
          type: 'REST', 
          osVersion: 'CentOS release 6.5', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about production rest server'
        },
        {
          name: 'hvcp2-pr-app21.hvcp.local', 
          environment: 'Production',
          type: 'REST', 
          osVersion: 'CentOS release 6.5', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about production rest server'
        },
        {
          name: 'hvcp3-pr-app31.hvcp.local', 
          environment: 'Production',
          type: 'REST', 
          osVersion: 'CentOS release 6.5', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about production rest server'
        },
        {
          name: 'hvcp4-pr-app41.hvcp.local', 
          environment: 'Production',
          type: 'REST', 
          osVersion: 'CentOS release 6.5', 
          username: 'hvcpadmin', 
          password: '', 
          note: 'note about production rest server'
        },
        {
          name: 'hvcp-pr-db.hvcp.local', 
          environment: 'Production',
          type: 'Database', 
          osVersion: 'CentOS release 6.5', 
          username: 'qa_read', 
          password: 'hvcpapp', 
          note: 'note about production database server'
        }
      ]
    },
    {
      id: 2, 
      name: 'MyCareerGateway', 
      abbrev: 'MCG', 
      logoUrl: 'https://www.mycareergateway.com/images/site_logos/mcg_logo_red.png',
      description: 'A website to connect students and their career counselors to help them communicate more effectively.',
      contactName: 'Chris Casad', 
      contactEmail: 'chris.casad@xpandcorp.com',
      websites: [
        {
          url: 'http://www-mcgp1-dev-portal.hvcp.local/', 
          environment: 'Development',
          username: 'chloe.herrera96@example.com', 
          password: '12345', 
          note: 'Student user'
        },
        {
          url: 'http://nvcc-mcgp1-dev-portal.hvcp.local/', 
          environment: 'Development',
          username: 'amy.murphy41@example.com', 
          password: '12345', 
          note: 'Counselor user for NVCC'
        },
        {
          url: 'http://gu-mcgp1-dev-portal.hvcp.local/', 
          environment: 'Development',
          username: 'erin.kelley78@example.com', 
          password: '12345', 
          note: 'Counselor user for GU'
        },
        {
          url: 'http://chs-mcgp1-dev-portal.hvcp.local/', 
          environment: 'Development',
          username: 'alex.gibson11@example.com', 
          password: '12345', 
          note: 'Counselor user for CHS'
        },
        {
          url: 'http://team-mcgp1-dev-portal.hvcp.local/', 
          environment: 'Development',
          username: 'phil.hopkins12@example.com', 
          password: '12345', 
          note: 'Friend user'
        },
        {
          url: 'http://admin-mcgp1-dev-portal.hvcp.local/', 
          environment: 'Development',
          username: 'nvcc.admin@example.com', 
          password: '12345', 
          note: 'NVCC admin user'
        },

        {
          url: 'http://www-stage.mycareergateway.com/', 
          environment: 'Stage',
          username: 'theo@example.com', 
          password: '12345', 
          note: 'Student user'
        },
        {
          url: 'http://nvcc-stage.mycareergateway.com/', 
          environment: 'Stage',
          username: 'megan.rice80@example.com', 
          password: '12345', 
          note: 'Counselor user for NVCC'
        },
        {
          url: 'http://gu-stage.mycareergateway.com/', 
          environment: 'Stage',
          username: 'sansa@example.com', 
          password: '12345', 
          note: 'Counselor user for GU'
        },
        {
          url: 'http://chs-stage.mycareergateway.com/', 
          environment: 'Stage',
          username: 'grace.bowman52@example.com', 
          password: '12345', 
          note: 'Counselor user for CHS'
        },
        {
          url: 'http://team-stage.mycareergateway.com/', 
          environment: 'Stage',
          username: 'judy.lane50@example.com', 
          password: '12345', 
          note: 'Angel user'
        },
        {
          url: 'http://admin-stage.mycareergateway.com/', 
          environment: 'Stage',
          username: 'nvcc.admin@example.com', 
          password: '12345', 
          note: 'NVCC admin user'
        },

        {
          url: 'http://www-stage.mycareergateway.com/', 
          environment: 'Stage',
          username: 'theo@example.com', 
          password: '12345', 
          note: 'Student user'
        },
        {
          url: 'http://nvcc.mycareergateway.com/', 
          environment: 'Production',
          username: 'sansa@example.com', 
          password: '12345', 
          note: 'Counselor user for NVCC'
        },
        {
          url: 'http://gu.mycareergateway.com/', 
          environment: 'Production',
          username: 'ashley.pierce92@example.com', 
          password: '12345', 
          note: 'Counselor user for GU'
        },
        {
          url: 'http://chs.mycareergateway.com/', 
          environment: 'Production',
          username: 'grace.bowman52@example.com', 
          password: '12345', 
          note: 'Counselor user for CHS'
        },
        {
          url: 'http://team.mycareergateway.com/', 
          environment: 'Production',
          username: 'judy.lane50@example.com', 
          password: '12345', 
          note: 'Angel user'
        },
        {
          url: 'http://admin.mycareergateway.com/', 
          environment: 'Production',
          username: 'nvcc.admin@example.com', 
          password: '12345', 
          note: 'NVCC admin user'
        },
      ],
      servers: [
        {
          name: 'mcgp1-dev-portal.hvcp.local', 
          environment: 'Development',
          type: 'Web/REST/Database', 
          osVersion: 'CentOS release 6.5', 
          username: 'mcgadmin', 
          password: '', 
          note: 'Note about dev web/rest/db server'
        },
        {
          name: 'mcg7-stg-w78.mcg.local', 
          environment: 'Stage',
          type: 'Web/REST', 
          osVersion: 'Ubuntu 14.04.2 LTS', 
          username: 'mcgadmin', 
          password: '', 
          note: 'Note about stage web/rest server'
        },
        {
          name: 'mcg7-stg-db1.mcg.local', 
          environment: 'Stage',
          type: 'Database', 
          osVersion: '', 
          username: 'mcg', 
          password: '', 
          note: 'Note about stage db server'
        },
        {
          name: 'mcg7-pr-w71.mcg.local', 
          environment: 'Production',
          type: 'Web/REST', 
          osVersion: 'Ubuntu 14.04.2 LTS', 
          username: 'mcgadmin', 
          password: '', 
          note: 'Note about prod web/rest server'
        },
        {
          name: 'mcg7-pr-db71.mcg.local', 
          environment: 'Production',
          type: 'Database', 
          osVersion: '', 
          username: 'mcg', 
          password: '', 
          note: 'Note about prod db server'
        },
      ]
    },
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