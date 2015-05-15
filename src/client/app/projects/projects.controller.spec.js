/* jshint -W117, -W030 */
describe('ProjectsController', function() {
  var controller;
  var projects = mockData.getMockProjects();

  beforeEach(function() {
    bard.appModule('app.projects');
    bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
  });

  beforeEach(function () {
    sinon.stub(dataservice, 'getProjects').returns($q.when(projects));
    controller = $controller('ProjectsController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Projects controller', function() {
    it('should be created successfully', function () {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Projects', function () {
        expect(controller.title).to.equal('Projects');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });

      it('should have at least 1 project', function () {
        expect(controller.projects).to.have.length.above(0);
      });

      // it('should have project count of 5', function () {
      //   expect(controller.projects).to.have.length(7);
      // });
    });
  });
});
