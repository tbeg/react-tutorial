var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;
var BookConstants = require('../constants/BookConstants');

var _state = {
    categories: [],
    subcategories: []
}

var _props = {
    categories_url: '/api/categories/',
    subcategories_url: '/api/subcategories/'
}

var _current_cat = ''
var _subcat_cache = []

var _load_categories = function() {
    $.ajax({
        url: _props.categories_url,
        dataType: 'json',
        cache: false,
        success: function(data) {
            _state.categories = data;
            CategoryStore.emitChange();
        },
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
};

var _load_subcategories = function(cat) {
    
    if(!cat) {
        _state.subcategories = [];
        CategoryStore.emitChange();
        return ;
    }
    if(_subcat_cache[cat]) {
        _state.subcategories = _subcat_cache[cat] ;
        CategoryStore.emitChange();
    }
    $.ajax({
        url: _props.subcategories_url+'?category='+cat,
        dataType: 'json',
        cache: false,
        success: function(data) {
            _state.subcategories = data;
            _subcat_cache[cat] = data;
            CategoryStore.emitChange();
        },
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
};

var CategoryStore = $.extend({}, EventEmitter.prototype, {
    getState: function() {
        return _state;
    },
    emitChange: function() {
        this.emit('change');
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});


CategoryStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case BookConstants.BOOK_EDIT:
        case BookConstants.BOOK_CHANGE:
            _load_subcategories(action.book.category);
        break;
        case BookConstants.BOOK_EDIT_CANCEL:
            _state.subcategories = [];
            CategoryStore.emitChange();
        break;
    }
    return true;
});


module.exports.CategoryStore = CategoryStore;
module.exports.loadCategories = _load_categories;