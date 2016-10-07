(() => {
    angular
        .module('favourApp')
        .controller('MainController',['MainService', '$stateParams', MainController]);

    function MainController (MainService) {

        const vm = this;

        vm.favs = MainService.addFavoriteFavors();
        vm.users = MainService.getUsers();
        vm.currUser = MainService.currentUser();

        vm.favors = MainService.getFavors();
        vm.favors.$loaded(function(){
            for (var i = 0; i < vm.favors.length; i++) {
                for (var j=0;j<vm.favs.length;j++) {
                    if (vm.favs[j].$value == vm.favors[i].$id) {
                        vm.favors[i].favorited = true;
                    }
                }
            }
        });

        vm.addFavor = () => {
            const favor = {
                uid: vm.currUser.uid,
                name: vm.currUser.name,
                image: vm.currUser.image,
                favorTitle: vm.favourTitle,
                favorContent: vm.favourDescription,
                date: Firebase.ServerValue.TIMESTAMP
            };
            MainService.addFavor(favor);
            vm.favourTitle = "";
            vm.favourDescription = "";
        };

        $('.ui.dropdown').dropdown();

        $('#favourFilter .item').on('click', function() {
            $('#favourFilter .item').removeClass('active');
            $(this).addClass('active');
        });

    }
})();