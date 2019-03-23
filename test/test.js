var user = require('../lib/index.js');
// var UserObj = require('../lib/user.js');
require('should');
var assert = require('assert');
var http = require('http')
// console.log(jquery)
console.log(11)
// require.config({
//   paths: {
//     'jquery': '../node_modules/jquery/dist/jquery.min.js'
//   }
// })

function UserObj(name) {
  this.name = name
}
// UserObj.prototype.save = function () {
//   return 'succeed'
// }
UserObj.prototype.save = function () {
  // require(['jquery'], function ($) {
  http.get({
    hostname: 'localhost',
    port: 80,
    path: '/'
  }, res => console.log(111))
  // $.ajax({
  //   url: "/user.js",
  //   success: function () {
  //     return 1
  //   }
  // })
  // (function ($) {
  //   $.ajax({
  //     url: "/user.js",
  //     success: function () {
  //       return 1
  //     }
  //   })
  // }('//node_modules/jquery/dist/jquery.min.js'))
  // })
  // return 'succeed'
}
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('User', function () {
  describe('users', function () {
    it('user name should == jsong ', function () {
      // user 应该的 name 属性 应该==jsong
      assert.equal(user.name, 'jsong');
    });
    it('user should eat apple', function () {
      // user 的 eat() 方法 应该返回 apple
      assert.equal(user.eat(), 'apple');
    });
    it('user should have name', function () {
      // user 应该有name 属性
      user.should.have.property('name');
    });
  });
});

describe('assert', function () {
  it('a和b应当深度相等', function () {
    var a = {
      c: {
        e: 1
      }
    };
    var b = {
      c: {
        e: 1
      }
    };
    assert.deepEqual(a, b);
  });
});


describe('asynchronous', function () {
  describe(' save userObj ', function () {
    this.retries(4)
    it('should save without error ', function (done) {
      const user = new UserObj('jsong')
      // user.save(function (err) {
      //   if (err) done(err);
      //   else done();
      // })
      // done()
      user.save(done, 3000)
    })

    it('promis should save without error ', function () {
      const user = new UserObj('jsong')
      // user.save().should.eventually.have.length(3)
      // done()
      // user.save(done)
    })

  })
})

describe('my suite', () => {
  it('my test', () => {
    // this.timeoute(1000)
    assert.ok(true)
  })
})

describe('#find()', function () {
  it('promis', function () {

  })
})


describe('hooks', function () {
  it('my test', () => {
    // this.timeoute(1000)
    assert.ok(true)
  })
  before(function () {
    console.log('before')
  })

  after(function () {
    console.log('after')
  })

  beforeEach(function () {
    console.log('beforeEach')
  })

  after(function () {
    console.log('after')
  })

  afterEach(function () {
    console.log('after')
  })
})

describe('only', function () {
  describe.skip('only test', function () {
    it('my test', () => {
      // this.timeoute(1000)
      assert.ok(true)
    })
  })
})

describe('retry test', function () {
  it('my test', () => {
    // this.timeoute(1000)
    assert.ok(true)
  })
  this.retries(4)
})