var modalX = (function () {
    'use strict';

    var _dom = {
        modal: 
        '<div class="modalX-init <$ classes $>">' +
            '<div class="modalX-container">' +
                '<div class="modalX-header">' +
                    '<div class="modalX-close-button">' +
                        '<span></span>' +
                        '<span></span>' +
                    '</div>' +
                    '<$ header $>' +
                '</div>' +
                '<div class="modalX-body">' +
                    '<$ body $>' +
                '</div>' +
                '<div class="modalX-footer">' +
                    '<$ footer $>' +
                '</div>' +
            '</div>' +
        '</div>',
        state: {
            _activeDom: ''
        },
    };

    function _domDialog ( doms, classes ) {
        var _header = _dom.modal.replace('<$ header $>', doms[0]);
        var _body = _header.replace('<$ body $>', doms[1]);
        var _footer = _body.replace('<$ footer $>', doms[2]);

        if ( classes.length > 0 ) {
            _dom.state._activeDom = _setClasses(_footer, classes);
        } else {
            _dom.state._activeDom = _footer;
        }
        
        // Set
        document.body.insertAdjacentHTML('beforeend', _dom.state._activeDom);
    }

    function _setClasses( dom, classes ) {
        if ( classes.length > 1 ) {
            var strClasses = '';
            for ( var i = 0; i < classes.length; i += 1 ) {
                classes.length - 1 === i ? strClasses += classes[i] : strClasses += classes[i] + ' ';
            }
            return dom.replace('<$ classes $>', strClasses);
        } else {
            return dom.replace('<$ classes $>', classes[0]);
        }
    }
    
    function _getElement ( button ) {
        var _elements = '';

        if ( button.indexOf('.') > -1 ) {
            var replaced = button.replace('.', '');
            _elements = document.getElementsByClassName(replaced);
        } else if ( button.indexOf('#') > -1 ) {
            var replaced = button.replace('.', '');
            _elements = document.getElementById(replaced);
        } else {
            _elements = document.getElementsByTagName(button);
        }
        
        return _elements;
    }
    
    return {
        init: function ( obj ) {
            var delay = obj.time && obj.time > 0 ? obj.time : 0;
            this.initModal( obj.type, delay, obj.button, obj.doms, obj.classes );
        },
        initModal: function ( type, delay, button, doms, classes ) {
            var isTimeOut = false;
            modalX.setError( doms, 'modalX Error: No dom element, ex: http://mehmetcankizilyer.com/modalX/ex1' );
            setTimeout( function () {
                if ( type ) {
                    modalX.splitRelaventAreas(doms, classes);
                    isTimeOut = true;
                }
            }, delay );
            if ( isTimeOut ) return;
            modalX.handleEventModal(button, doms, classes);
        },
        handleEventModal: function ( button, doms, classes ) {
            var element = _getElement(button);
            if ( element.length > 1 ) {
                for ( var i = 0; i < element.length; i += 1 ) {
                    var item = element[i];
                    item.addEventListener('click', _domDialog.bind( this, doms, classes ));
                }
            } else {
                element[0].addEventListener('click', _domDialog.bind(this, doms, classes));
            }
        },
        setDom: function () {

        },
        closeModalDialog: function () {
            var buttons = document.getElementsByClassName('modalX-close-button');
            
            for ( var i = 0; i < buttons.length; i += 1 ) {
                buttons[i].addEventListener('click', function () {
                    console.log(this);
                })
            }
        },
        setError: function (condition, err) {
            if ( !condition ) {
                console.error(err);
                return;
            }
        }
    };
}());

var header = '<h1> hello </h1>';
var body = '<p>body</p>';
var footer = '<p>footer</p>';

modalX.init( {
    auto: false,
    time: 1000,
    button: '.button',
    doms: [
        header,
        body,
        footer
    ],
    classes: [
        'half-height',
        'modalHeight'
    ]
} );