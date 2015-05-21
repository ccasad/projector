/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('restapi', {
        	server: 'http://projector-vm-centos:8001/'
        });
})();
