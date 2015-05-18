/* jshint -W117, -W030 */
describe('projects routes', function () {
  describe('state', function () {
    var controller;
    var view = 'app/projects/projects.html';

    beforeEach(function() {
      module('app.projects', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    bard.verifyNoOutstandingHttpRequests();

    // it('should map state projects to url / ', function() {
    //   expect($state.href('dashboard', {})).to.equal('/');
    // });

    it('should map /projects route to projects View template', function () {
      expect($state.get('projects').templateUrl).to.equal(view);
    });

    it('of projects should work with $state.go', function () {
      $state.go('projects');
      $rootScope.$apply();
      expect($state.is('projects'));
    });
  });
});

