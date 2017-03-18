/**
 * Created by souzaeduardoac on 18/03/17.
 */
(function(){
    var app = angular.module('store',[ ]);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        {
        name: 'Dodecahedron',
        price: 2.95,
        description: '. . .',
        images: [
            {
                full: 'dodecahedron-01-full.jpg',
                thumb: 'dodecahedron-01-thumb.jpg'
            },
            {
                full: 'dodecahedron-02-full.jpg',
                thumb: 'dodecahedron-02-thumb.jpg'
            }
        ],
        canPurchase: true,
        soldOut: true,
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: '. . .',
            canPurchase: false,
        }
    ];

    app.controller("PanelController", function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

})();
