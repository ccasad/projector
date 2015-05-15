/* jshint -W079 */
var mockData = (function() {
  return {
    getMockProjects: getMockProjects,
    getMockPeople: getMockPeople,
    getMockStates: getMockStates
  };

  function getMockProjects() {
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
            dev: [
              {
                url: 'https://hvcp2-dev-portal.hvcp.local/', 
                description: 'description about dev', 
                username: 'ccasad', 
                password: 'ccasad', 
                note: 'note about dev webste'
              }
            ]
          },
          {
            qa: [
              {
                url: 'https://hvcp2-qa-portal.hvcp.local/', 
                description: 'description about qa', 
                username: 'ccasad', 
                password: 'ccasad', 
                note: 'note about qa webste'
              }
            ]
          },
          {
            stg: [
              {
                url: 'https://stage.vcn.org/', 
                description: 'description about stage', 
                username: 'ccasad', 
                password: 'ccasad', 
                note: 'note about stage webste'
              }
            ]
          },
          {
            prod: [
              {
                url: 'https://www.vcn.org/', 
                description: 'description about prod', 
                username: 'ccasad', 
                password: 'ccasad', 
                note: 'note about prod webste'
              }
            ]
          }
        ],
        servers: [
          {
            dev: [
              {
                name: 'hvcp2-dev-portal.hvcp.local', 
                typeId: 1, 
                osVersion: 'CentOS release 6.4', 
                username: 'hvcpadmin', 
                password: '', 
                note: 'note about dev server'
              }
            ]
          },
          {
            qa: [
              {
                name: 'hvcp2-qa-portal.hvcp.local', 
                typeId: 1, 
                osVersion: 'CentOS release 6.3', 
                username: 'hvcpadmin', 
                password: '', 
                note: 'note about dev server'
              }
            ]
          },
          {
            stg: [
              {
                name: 'hvcp5-stg-w1.hvcp.local', 
                typeId: 1, 
                osVersion: 'CentOS release 6.6', 
                username: 'hvcpadmin', 
                password: '', 
                note: 'note about dev server'
              }
            ]
          },
          {
            prod: [
              {
                name: 'hvcp1-pr-w12.hvcp.local', 
                typeId: 1, 
                osVersion: 'CentOS release 6.6', 
                username: 'hvcpadmin', 
                password: '!vcn123$', 
                note: 'note about dev server'
              },
              {
                name: 'hvcp1-pr-app11.hvcp.local', 
                typeId: 1, 
                osVersion: 'CentOS release 6.5', 
                username: 'hvcpadmin', 
                password: '!vcn123$', 
                note: 'note about dev server'
              }
            ]
          }
        ]
      },
    ];
  }

  function getMockStates() {
    return [
      {
        state: 'dashboard',
        config: {
          url: '/',
          templateUrl: 'app/dashboard/dashboard.html',
          title: 'dashboard',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Dashboard'
          }
        }
      }
    ];
  }

  function getMockPeople() {
    return [
      {firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida'},
      {firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
      {firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
      {firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
      {firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
      {firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
      {firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'}
    ];
  }
})();
