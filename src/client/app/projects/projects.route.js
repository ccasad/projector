(function() {
  'use strict';

  angular
    .module('app.projects')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'projects',
        config: {
          url: '/',
          templateUrl: 'app/projects/projects.html',
          controller: 'ProjectsController',
          controllerAs: 'vm',
          title: 'projects',
          settings: {
            nav: 1,
            content: '<i class="glyphicon glyphicon-th-list"></i> Projects'
          }
        }
      }
    ];
  }
})();
