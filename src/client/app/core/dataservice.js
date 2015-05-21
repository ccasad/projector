(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'logger', 'restapi'];

  /* @ngInject */
  function dataservice($http, $q, logger, restapi) {
    var service = {
      getProjects: getProjects,
      getPeople: getPeople,
      getMessageCount: getMessageCount
    };

    return service;

    function getMessageCount() { return $q.when(72); }

    function getPeople() {
      return $http.get('/api/people')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(error) {
        var msg = 'query for people failed. ' + error.data.description;
        logger.error(msg);
        return $q.reject(msg);
      }
    }

    function getProjects() {
      return $http.get(restapi.server+'api/projects')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(error) {
        var msg = 'query for projects failed. ' + error.data.description;
        logger.error(msg);
        return $q.reject(msg);
      }
    }
  }
})();
