'use strict';

define('buyme/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/task-complete-task.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/task-complete-task.js should pass ESLint\n\n6:13 - \'Ember\' is not defined. (no-undef)\n7:17 - \'Ember\' is not defined. (no-undef)\n13:27 - \'Ember\' is not defined. (no-undef)\n14:9 - \'$\' is not defined. (no-undef)\n25:20 - \'Ember\' is not defined. (no-undef)\n39:9 - \'$\' is not defined. (no-undef)\n40:23 - \'jQuery\' is not defined. (no-undef)\n49:13 - \'Ember\' is not defined. (no-undef)\n50:13 - \'Ember\' is not defined. (no-undef)\n51:13 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('components/task-dashboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/task-dashboard.js should pass ESLint\n\n');
  });

  QUnit.test('components/task-delete-task.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/task-delete-task.js should pass ESLint\n\n6:13 - \'Ember\' is not defined. (no-undef)\n7:17 - \'Ember\' is not defined. (no-undef)\n11:24 - \'e\' is defined but never used. (no-unused-vars)\n13:25 - \'Ember\' is not defined. (no-undef)\n14:9 - \'$\' is not defined. (no-undef)\n25:21 - \'Ember\' is not defined. (no-undef)\n26:21 - \'Ember\' is not defined. (no-undef)\n37:8 - \'$\' is not defined. (no-undef)\n38:22 - \'jQuery\' is not defined. (no-undef)\n47:12 - \'Ember\' is not defined. (no-undef)\n48:12 - \'Ember\' is not defined. (no-undef)\n49:12 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('components/task-edit-task.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/task-edit-task.js should pass ESLint\n\n6:13 - \'Ember\' is not defined. (no-undef)\n7:17 - \'Ember\' is not defined. (no-undef)\n9:13 - \'$\' is not defined. (no-undef)\n10:13 - \'$\' is not defined. (no-undef)\n15:25 - \'Ember\' is not defined. (no-undef)\n16:28 - \'$\' is not defined. (no-undef)\n19:13 - \'$\' is not defined. (no-undef)\n27:36 - \'data\' is defined but never used. (no-unused-vars)\n28:21 - \'Ember\' is not defined. (no-undef)\n29:21 - \'Ember\' is not defined. (no-undef)\n33:17 - \'$\' is not defined. (no-undef)\n34:17 - \'$\' is not defined. (no-undef)\n40:13 - \'$\' is not defined. (no-undef)\n41:13 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('components/task-footer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/task-footer.js should pass ESLint\n\n');
  });

  QUnit.test('components/task-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/task-nav.js should pass ESLint\n\n');
  });

  QUnit.test('components/task-new-task.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/task-new-task.js should pass ESLint\n\n8:13 - \'Ember\' is not defined. (no-undef)\n9:17 - \'Ember\' is not defined. (no-undef)\n15:9 - \'$\' is not defined. (no-undef)\n16:23 - \'jQuery\' is not defined. (no-undef)\n26:13 - \'Ember\' is not defined. (no-undef)\n27:13 - \'Ember\' is not defined. (no-undef)\n28:13 - \'Ember\' is not defined. (no-undef)\n35:28 - \'$\' is not defined. (no-undef)\n39:13 - \'$\' is not defined. (no-undef)\n49:29 - \'Ember\' is not defined. (no-undef)\n54:13 - \'$\' is not defined. (no-undef)\n55:13 - \'$\' is not defined. (no-undef)\n62:13 - \'$\' is not defined. (no-undef)\n63:13 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('components/task-table.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/task-table.js should pass ESLint\n\n14:13 - \'Ember\' is not defined. (no-undef)\n15:13 - \'Ember\' is not defined. (no-undef)\n19:13 - \'Ember\' is not defined. (no-undef)\n20:13 - \'Ember\' is not defined. (no-undef)\n21:13 - \'Ember\' is not defined. (no-undef)\n22:13 - \'Ember\' is not defined. (no-undef)\n27:13 - \'Ember\' is not defined. (no-undef)\n28:13 - \'Ember\' is not defined. (no-undef)\n29:13 - \'Ember\' is not defined. (no-undef)\n30:13 - \'Ember\' is not defined. (no-undef)\n37:13 - \'Ember\' is not defined. (no-undef)\n38:13 - \'Ember\' is not defined. (no-undef)\n39:13 - \'Ember\' is not defined. (no-undef)\n40:13 - \'Ember\' is not defined. (no-undef)\n44:9 - \'$\' is not defined. (no-undef)\n45:23 - \'jQuery\' is not defined. (no-undef)\n57:13 - Unexpected console statement. (no-console)\n58:13 - \'Ember\' is not defined. (no-undef)\n59:13 - \'Ember\' is not defined. (no-undef)\n60:13 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n6:9 - \'$\' is not defined. (no-undef)\n11:13 - \'Ember\' is not defined. (no-undef)\n12:17 - \'Ember\' is not defined. (no-undef)\n14:13 - \'$\' is not defined. (no-undef)\n15:13 - \'$\' is not defined. (no-undef)');
  });
});
define('buyme/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('buyme/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'buyme/tests/helpers/start-app', 'buyme/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('buyme/tests/helpers/resolver', ['exports', 'buyme/resolver', 'buyme/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('buyme/tests/helpers/start-app', ['exports', 'buyme/app', 'buyme/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('buyme/tests/integration/components/task-complete-task-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-complete-task', 'Integration | Component | task complete task', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "3qacJmF7",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-complete-task\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "UGmweBnh",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-complete-task\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('buyme/tests/integration/components/task-dashboard-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-dashboard', 'Integration | Component | task dashboard', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Um1gDqO6",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-dashboard\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "fKwNYGD0",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-dashboard\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('buyme/tests/integration/components/task-delete-task-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-delete-task', 'Integration | Component | task delete task', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "iDJyQq7e",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-delete-task\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "Tz3kHqvB",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-delete-task\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('buyme/tests/integration/components/task-edit-task-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-edit-task', 'Integration | Component | task edit task', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "1mFmtYn/",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-edit-task\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "pdIu/maM",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-edit-task\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('buyme/tests/integration/components/task-footer-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-footer', 'Integration | Component | task footer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "l1w+iIIw",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-footer\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "im7Puhqi",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-footer\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('buyme/tests/integration/components/task-nav-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-nav', 'Integration | Component | task nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "AMYaFw/p",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-nav\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "NmdBBDYE",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-nav\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('buyme/tests/integration/components/task-new-task-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-new-task', 'Integration | Component | task new task', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "LcGFH7Xk",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-new-task\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "KSlNliUw",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-new-task\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('buyme/tests/integration/components/task-table-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('task-table', 'Integration | Component | task table', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "+5CyqIRj",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"task-table\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "XhMzAEBU",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"task-table\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('buyme/tests/test-helper', ['buyme/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('buyme/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-complete-task-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-complete-task-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-dashboard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-dashboard-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-delete-task-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-delete-task-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-edit-task-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-edit-task-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-footer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-footer-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-nav-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-new-task-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-new-task-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/task-table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/task-table-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
});
define('buyme/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('buyme/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
