'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Movie = require('/components/Movie.jsx');

var _Movie2 = _interopRequireDefault(_Movie);

var _Search = require('/components/Search.jsx');

var _Search2 = _interopRequireDefault(_Search);

var _AddMovie = require('/components/AddMovie.jsx');

var _AddMovie2 = _interopRequireDefault(_AddMovie);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//index.jsx is root jsx file
//search.jsx will be the search bar
//movielist.jsx will be the movie-list
//movielistentry.jsx will be for individual movie lists 


var MovieList = function (_React$Component) {
  _inherits(MovieList, _React$Component);

  function MovieList(props) {
    _classCallCheck(this, MovieList);

    var _this = _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).call(this, props));

    _this.state = {
      movies: [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }]
    };
    return _this;
  }

  _createClass(MovieList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { 'class': 'movies' })
      );
    }
  }]);

  return MovieList;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(MovieList, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvaW5kZXguanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsIkNvbXBvbmVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0U7QUFDQTtBQUNFOzs7SUFHRUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsQ0FDTixFQUFFQyxPQUFPLFlBQVQsRUFETSxFQUVOLEVBQUVBLE9BQU8sU0FBVCxFQUZNLEVBR04sRUFBRUEsT0FBTyxVQUFULEVBSE0sRUFJTixFQUFFQSxPQUFPLFVBQVQsRUFKTSxFQUtOLEVBQUVBLE9BQU8sWUFBVCxFQUxNO0FBREcsS0FBYjtBQUhpQjtBQVlsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsK0NBQUssU0FBTSxRQUFYO0FBREYsT0FERjtBQU1EOzs7O0VBdEJxQixnQkFBTUMsUzs7QUF5QjlCLG1CQUFTQyxNQUFULENBQWlCLDhCQUFDLFNBQUQsT0FBakIsRUFBZ0NDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBaEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NICBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IE1vdmllIGZyb20gJy9jb21wb25lbnRzL01vdmllLmpzeCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy9jb21wb25lbnRzL1NlYXJjaC5qc3gnO1xuaW1wb3J0IEFkZE1vdmllIGZyb20gJy9jb21wb25lbnRzL0FkZE1vdmllLmpzeCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vL2luZGV4LmpzeCBpcyByb290IGpzeCBmaWxlXG4gIC8vc2VhcmNoLmpzeCB3aWxsIGJlIHRoZSBzZWFyY2ggYmFyXG4gIC8vbW92aWVsaXN0LmpzeCB3aWxsIGJlIHRoZSBtb3ZpZS1saXN0XG4gICAgLy9tb3ZpZWxpc3RlbnRyeS5qc3ggd2lsbCBiZSBmb3IgaW5kaXZpZHVhbCBtb3ZpZSBsaXN0cyBcblxuXG5jbGFzcyBNb3ZpZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IFtcbiAgICAgICAgeyB0aXRsZTogJ01lYW4gR2lybHMnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdIYWNrZXJzJyB9LFxuICAgICAgICB7IHRpdGxlOiAnVGhlIEdyZXknIH0sXG4gICAgICAgIHsgdGl0bGU6ICdTdW5zaGluZScgfSxcbiAgICAgICAgeyB0aXRsZTogJ0V4IE1hY2hpbmEnIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWVzXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlciggPE1vdmllTGlzdCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==