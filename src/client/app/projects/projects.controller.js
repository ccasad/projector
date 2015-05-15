(function () {
  'use strict';

  angular
    .module('app.projects')
    .controller('ProjectsController', ProjectsController);

  ProjectsController.$inject = ['$q', 'dataservice', 'logger'];

  /* @ngInject */
  function ProjectsController($q, dataservice, logger) {
    var vm = this;

    vm.projects = [];
    vm.title = 'Projects';

    activate();

    function activate() {
      var promises = [getProjects()];
      return $q.all(promises).then(function() {
        logger.info('Activated View');
      });
    }

    function getProjects() {
      return dataservice.getProjects().then(function (data) {
        vm.projects = data;
        return vm.projects;
      });
    }
  }

})();


