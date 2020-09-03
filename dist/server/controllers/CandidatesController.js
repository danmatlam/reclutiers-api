"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '1065937',
  key: '3b49318cc8a294ab90cd',
  secret: 'ecb06403dc2805fd969e',
  cluster: 'us2',
  useTLS: true
});

var CandidatesController = /*#__PURE__*/function () {
  function CandidatesController() {
    _classCallCheck(this, CandidatesController);
  }

  _createClass(CandidatesController, [{
    key: "candidatesPush",
    value: function () {
      var _candidatesPush = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var body, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body = req.body;
                console.log(body);
                _context.prev = 2;
                _context.next = 5;
                return pusher.trigger('my-channel', 'my-event', body);

              case 5:
                response = _context.sent;
                return _context.abrupt("return", res.status(200).json({
                  mensaje: 'ok'
                }));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);
                return _context.abrupt("return", res.status(503).json({
                  error: _context.t0
                }));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      function candidatesPush(_x, _x2) {
        return _candidatesPush.apply(this, arguments);
      }

      return candidatesPush;
    }()
  }]);

  return CandidatesController;
}();

;

var _default = new CandidatesController();

exports["default"] = _default;