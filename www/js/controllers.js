angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('contact');
        }

        $scope.goOkWork = function() {
            $state.go('okHome');
        }

        $scope.goBalcList = function() {
            $state.go('balcList');
        }

        $scope.goMadeList = function() {
            $state.go('madeList');
        }

        $scope.goPay = function() {
            $state.go('pay');
        }

        $scope.goSecurity = function() {
            $state.go('security');
        }

        $scope.goInsurance = function() {
            $state.go('insurance');
        }

        $scope.goLoan = function() {
            $state.go('loan');
        }
    }
])

.controller('contactCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {

        $scope.data = {
            name: '',
            phone: '',
            city: ''
        };
        $scope.test = function() {
            var name = $scope.data.name;
            var phone = $scope.data.phone;

            if (name == '') {
                alert("姓名不能为空！");
                return false;
            }

            if (!(/^1[34578]\d{9}$/.test(phone))) {
                alert("手机号码有误，请重填");
                return false;
            }

            alert('提交成功，谢谢！');
            $scope.data.phone = '';
            $scope.data.name = '';
            $scope.data.city = '';
        }

        $scope.goHome = function() {
            $state.go('home');
        }

    }
])

.controller('okHomeCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('contact');
        }

        $scope.goHome = function() {
            $state.go('home');
        }
    }
])

.controller('balcListCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('contact');
        }

        $scope.goHome = function() {
            $state.go('home');
        }
    }
])

.controller('madeListCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('contact');
        }

        $scope.goHome = function() {
            $state.go('home');
        }
    }
])

.controller('payCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('contact');
        }

        $scope.goHome = function() {
            $state.go('home');
        }
    }
])

.controller('loanCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('contact');
        }

        $scope.goHome = function() {
            $state.go('home');
        }
    }
])

.controller('securityCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('contact');
        }

        $scope.goHome = function() {
            $state.go('home');
        }
    }
])

.controller('insuranceCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('contact');
        }

        $scope.goHome = function() {
            $state.go('home');
        }
    }
])
