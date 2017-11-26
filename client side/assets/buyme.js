"use strict";



define('buyme/app', ['exports', 'buyme/resolver', 'ember-load-initializers', 'buyme/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('buyme/components/task-complete-task', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({
        actions: {
            closeBackground: function closeBackground() {
                Ember.$('#popup_completeTask').hide(400).promise().done(function () {
                    Ember.$('.black_background').fadeOut(200);
                });
            },
            complete: function complete() {
                var complete_id = Ember.$('#input_complete_task').closest('label').attr('id');
                $.ajax({
                    url: "http://127.0.0.1/server_side/public/complete",
                    type: "POST",
                    async: true,
                    dataType: 'JSON',
                    data: {
                        id: complete_id
                    },
                    success: function success(data) {
                        if (data == 'completed') {
                            Ember.$("#btnclick").click();
                        }
                    }
                });
                this.send('updateData');
                this.send('closeBackground');
            },


            updateData: function updateData() {
                $.post('http://127.0.0.1/server_side/public/').then(function (data) {
                    var obj = jQuery.parseJSON(data);
                    var total_task = 0;
                    var task_completed = 0;

                    obj.forEach(function (element) {
                        if (element.completed) task_completed++;
                        total_task++;
                    });
                    Ember.$('#totalTask').html(total_task);
                    Ember.$('#taskCompleted').html(task_completed);
                    Ember.$('#tasksRemaining').html(total_task - task_completed);
                });
            }
        }
    });
});
define('buyme/components/task-dashboard', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({});
});
define('buyme/components/task-delete-task', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({
        actions: {
            closeBackground: function closeBackground() {
                Ember.$('#popup_deleteTask').hide(400).promise().done(function () {
                    Ember.$('.black_background').fadeOut(200);
                });
            },


            delete: function _delete(e) {

                var delete_id = Ember.$('#input_delete_task').closest('label').attr('id');
                $.ajax({
                    url: "http://127.0.0.1/server_side/public/delete",
                    type: "POST",
                    async: true,
                    dataType: 'JSON',
                    data: {
                        id: delete_id
                    },
                    success: function success(data) {
                        if (data == 'delete') {
                            Ember.$(".row_id:contains(" + delete_id + ")").closest('tr').remove();
                            Ember.$("#btnclick").click();
                        }
                    }
                });
                this.send('updateData');
                this.send('closeBackground');
            },

            updateData: function updateData() {
                $.post('http://127.0.0.1/server_side/public/').then(function (data) {
                    var obj = jQuery.parseJSON(data);
                    var total_task = 0;
                    var task_completed = 0;

                    obj.forEach(function (element) {
                        if (element.completed) task_completed++;
                        total_task++;
                    });
                    Ember.$('#totalTask').html(total_task);
                    Ember.$('#taskCompleted').html(task_completed);
                    Ember.$('#tasksRemaining').html(total_task - task_completed);
                });
            }

        }
    });
});
define('buyme/components/task-edit-task', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({
        actions: {
            closeBackground: function closeBackground() {
                Ember.$('#popup_editTask').hide(400).promise().done(function () {
                    Ember.$('.black_background').fadeOut(200);
                });
                $('#input_edit_task').removeClass("error");
                $('.p_error1').hide();
            },
            getValue: function getValue() {
                var edit_id = Ember.$('#input_edit_task').closest('label').attr('id');
                var task_name = $('#input_edit_task').val();
                if (task_name.length > 0) {
                    $.ajax({
                        url: "http://127.0.0.1/server_side/public/editTask",
                        type: "POST",
                        dataType: 'JSON',
                        data: {
                            id: edit_id,
                            task_name: task_name
                        },
                        success: function success(data) {
                            Ember.$(".row_id:contains(" + edit_id + ")").closest('tr').find('.row_name').html(task_name);
                            Ember.$("#btnclick").click();
                        }
                    });
                    $('#input_edit_task').removeClass("error");
                    $('.p_error1').hide();
                    this.send('closeBackground');
                } else {
                    $('#input_edit_task').addClass("error");
                    $('.p_error1').show();
                }
            }
        }
    });
});
define('buyme/components/task-footer', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({});
});
define('buyme/components/task-nav', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({});
});
define('buyme/components/task-new-task', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({

        actions: {
            closeBackground: function closeBackground() {
                Ember.$('#popup_AddTask').hide(400).promise().done(function () {
                    Ember.$('.black_background').fadeOut(200);
                });
            },
            updateData: function updateData() {
                $.post('http://127.0.0.1/server_side/public/').then(function (data) {
                    var obj = jQuery.parseJSON(data);

                    var total_task = 0;
                    var task_completed = 0;

                    obj.forEach(function (element) {
                        if (element.completed) task_completed++;
                        total_task++;
                    });
                    Ember.$('#totalTask').html(total_task);
                    Ember.$('#taskCompleted').html(task_completed);
                    Ember.$('#tasksRemaining').html(total_task - task_completed);
                });
            },
            getValue: function getValue() {
                var task_name = $('#input_add_task').val();
                if (task_name.length > 0) {

                    $.ajax({
                        url: "http://127.0.0.1/server_side/public/newTask",
                        type: "POST",
                        dataType: 'JSON',
                        data: {
                            task_name: task_name
                        },
                        success: function success(data) {
                            if (data) {
                                Ember.$("#btnclick").click();
                            }
                        }
                    });

                    $('#input_add_task').removeClass("error");
                    $('.p_error').hide();
                    this.send('closeBackground');
                    this.send('updateData');
                } else {
                    $('#input_add_task').addClass("error");
                    $('.p_error').show();
                }
            }
        }
    });
});
define('buyme/components/task-table', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({
        didInsertElement: function didInsertElement() {

            this.send('updateData');
        },


        actions: {
            openTaskWindow: function openTaskWindow() {
                Ember.$('.black_background').show();
                Ember.$('#popup_AddTask').slideToggle(580).show();
            },


            openDeleteWindow: function openDeleteWindow(e) {
                Ember.$('#input_delete_task').val(e.task_name);
                Ember.$('#input_delete_task').closest('label').attr('id', e.id);
                Ember.$('.black_background').show();
                Ember.$('#popup_deleteTask').slideToggle(580).show();
            },

            openCompleteWindow: function openCompleteWindow(e) {
                Ember.$('#input_complete_task').val(e.task_name);
                Ember.$('#input_complete_task').closest('label').attr('id', e.id);
                Ember.$('.black_background').show();
                Ember.$('#popup_completeTask').slideToggle(580).show();
            },

            openEditWindow: function openEditWindow(e) {

                Ember.$('#input_edit_task').val(e.task_name);
                Ember.$('#input_edit_task').closest('label').attr('id', e.id);
                Ember.$('.black_background').show();
                Ember.$('#popup_editTask').slideToggle(580).show();
            },

            updateData: function updateData() {
                var _this = this;

                $.post('http://127.0.0.1/server_side/public/').then(function (data) {
                    var obj = jQuery.parseJSON(data);
                    _this.set('tasks', obj);

                    var total_task = 0;
                    var task_completed = 0;

                    obj.forEach(function (element) {
                        if (element.completed) task_completed++;
                        total_task++;
                    });

                    console.log(obj);
                    Ember.$('#totalTask').html(total_task);
                    Ember.$('#taskCompleted').html(task_completed);
                    Ember.$('#tasksRemaining').html(total_task - task_completed);
                });
            }

        }
    });
});
define('buyme/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('buyme/helpers/app-version', ['exports', 'buyme/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('buyme/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('buyme/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('buyme/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'buyme/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('buyme/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('buyme/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('buyme/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('buyme/initializers/export-application-global', ['exports', 'buyme/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('buyme/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('buyme/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('buyme/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("buyme/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('buyme/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('buyme/router', ['exports', 'buyme/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('buyme/routes/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Route = Ember.Route;
    exports.default = Route.extend({
        beforeModel: function beforeModel() {
            this.replaceWith('index');
            $.post('http://127.0.0.1/server_side/public/createTable');
        },


        actions: {
            closeBackground: function closeBackground() {
                Ember.$('#popup_deleteTask,#popup_AddTask,#popup_completeTask,#popup_editTask').hide(400).promise().done(function () {
                    Ember.$('.black_background').fadeOut(200);
                });
                $('#input_edit_task').removeClass("error");
                $('.p_error1').hide();
            }
        }
    });
});
define('buyme/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("buyme/templates/components/task-complete-task", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4dO1exP/", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"popup\"],[9,\"id\",\"popup_completeTask\"],[7],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"popup_header\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"Complete Task\"],[8],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"class\",\"exit\"],[3,\"action\",[[19,0,[]],\"closeBackground\"]],[7],[6,\"img\"],[9,\"src\",\"assets/images/exit.png\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"popup_input\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"id\",\"\"],[7],[0,\"\\n            \"],[6,\"input\"],[9,\"id\",\"input_complete_task\"],[9,\"type\",\"text\"],[9,\"disabled\",\"\"],[7],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"class\",\"btn green popup_btn \"],[3,\"action\",[[19,0,[]],\"complete\"]],[7],[0,\"Complete Task\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "buyme/templates/components/task-complete-task.hbs" } });
});
define("buyme/templates/components/task-dashboard", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7UDs53J4", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"info_box\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"info_text\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"Total Tasks\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"info_result\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"id\",\"totalTask\"],[9,\"style\",\"color:rgb(48, 135, 175);\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[6,\"div\"],[9,\"class\",\"info_box\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"info_text\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"Tasks Completed\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"info_result\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"id\",\"taskCompleted\"],[9,\"style\",\"color:rgb(48, 175, 105);\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"info_box\"],[7],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"info_text\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"Tasks Remaining\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"info_result\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"id\",\"tasksRemaining\"],[9,\"style\",\"color:rgb(175, 48, 48);\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "buyme/templates/components/task-dashboard.hbs" } });
});
define("buyme/templates/components/task-delete-task", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "135gPCSo", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"popup\"],[9,\"id\",\"popup_deleteTask\"],[7],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"popup_header\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"Delete Task\"],[8],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"class\",\"exit\"],[3,\"action\",[[19,0,[]],\"closeBackground\"]],[7],[6,\"img\"],[9,\"src\",\"assets/images/exit.png\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"popup_input\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"Are you sure you want to delete this task ?\"],[8],[0,\"\\n        \"],[6,\"label\"],[9,\"id\",\"\"],[7],[0,\"\\n            \"],[6,\"input\"],[9,\"id\",\"input_delete_task\"],[9,\"type\",\"text\"],[9,\"disabled\",\"\"],[7],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[7],[0,\"\\n        \"],[6,\"a\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"delete\"],null],null],[9,\"href\",\"#\"],[9,\"class\",\"btn red popup_btn \"],[7],[0,\"Delete Task\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "buyme/templates/components/task-delete-task.hbs" } });
});
define("buyme/templates/components/task-edit-task", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6j5wcC9c", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"popup\"],[9,\"id\",\"popup_editTask\"],[7],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"popup_header\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"Edit Your Task\"],[8],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"class\",\"exit\"],[3,\"action\",[[19,0,[]],\"closeBackground\"]],[7],[6,\"img\"],[9,\"src\",\"assets/images/exit.png\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"popup_input\"],[7],[0,\"\\n        \"],[6,\"label\"],[7],[0,\"\\n            \"],[6,\"p\"],[9,\"class\",\"p_error1\"],[7],[0,\"* Please file out this field\"],[8],[0,\"\\n            \"],[6,\"input\"],[9,\"id\",\"input_edit_task\"],[9,\"type\",\"text\"],[9,\"placeholder\",\"Edit Your Task...\"],[7],[8],[0,\"\\n            \"],[6,\"span\"],[7],[0,\"Edit Your Task\"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[7],[0,\"\\n        \"],[6,\"a\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"getValue\"],null],null],[9,\"href\",\"#\"],[9,\"class\",\"btn orange popup_btn\"],[7],[0,\"Edit Task\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "buyme/templates/components/task-edit-task.hbs" } });
});
define("buyme/templates/components/task-footer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ncF+rbxV", "block": "{\"symbols\":[],\"statements\":[[6,\"footer\"],[7],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"© Created By Daniel Ben-David\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "buyme/templates/components/task-footer.hbs" } });
});
define("buyme/templates/components/task-nav", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0dOpv+Fs", "block": "{\"symbols\":[],\"statements\":[[6,\"nav\"],[7],[0,\"\\n   \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[7],[0,\"Task-Manager\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\\n\\n    \"],[6,\"div\"],[9,\"class\",\"username\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"user_img\"],[7],[6,\"img\"],[9,\"src\",\"assets/images/smiling.png\"],[7],[8],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"user_name\"],[7],[0,\" \"],[6,\"a\"],[9,\"href\",\"#\"],[7],[0,\"Hello Username\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "buyme/templates/components/task-nav.hbs" } });
});
define("buyme/templates/components/task-new-task", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0G20SQOH", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"popup\"],[9,\"id\",\"popup_AddTask\"],[7],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"popup_header\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"Add Your Task\"],[8],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"class\",\"exit\"],[3,\"action\",[[19,0,[]],\"closeBackground\"]],[7],[6,\"img\"],[9,\"src\",\"assets/images/exit.png\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"popup_input\"],[7],[0,\"\\n        \"],[6,\"label\"],[7],[0,\"\\n            \"],[6,\"p\"],[9,\"class\",\"p_error\"],[7],[0,\"* Please file out this field\"],[8],[0,\"\\n            \"],[6,\"input\"],[9,\"id\",\"input_add_task\"],[9,\"type\",\"text\"],[9,\"placeholder\",\"Task Name...\"],[7],[8],[0,\"\\n            \"],[6,\"span\"],[7],[0,\"Type Your Task\"],[8],[0,\"      \\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[7],[0,\"\\n        \"],[6,\"a\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"getValue\"],null],null],[9,\"href\",\"#\"],[9,\"class\",\"btn blue popup_btn\"],[7],[0,\"Add New Task\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "buyme/templates/components/task-new-task.hbs" } });
});
define("buyme/templates/components/task-table", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3Kusq+H3", "block": "{\"symbols\":[\"task\",\"index\"],\"statements\":[[0,\"        \\n        \"],[6,\"ul\"],[7],[0,\"\\n\\n        \"],[8],[0,\"\\n        \"],[6,\"button\"],[9,\"id\",\"btnclick\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"updateData\"],null],null],[7],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"id\",\"box\"],[7],[0,\"\\n            \"],[6,\"table\"],[7],[0,\"\\n                \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"th\"],[7],[0,\"#\"],[8],[0,\"\\n                    \"],[6,\"th\"],[7],[0,\"Task Name\"],[8],[0,\"\\n                    \"],[6,\"th\"],[7],[0,\"Date\"],[8],[0,\"\\n                    \"],[6,\"th\"],[7],[6,\"a\"],[9,\"href\",\"#\"],[9,\"id\",\"btnclick1\"],[9,\"class\",\"btn blue\"],[3,\"action\",[[19,0,[]],\"openTaskWindow\"]],[7],[0,\"Add New Task \"],[6,\"img\"],[9,\"src\",\"assets/images/plus.png\"],[7],[8],[8],[8],[0,\"\\n                \"],[8],[0,\"\\n            \\n\"],[4,\"each\",[[20,[\"tasks\"]]],null,{\"statements\":[[4,\"unless\",[[19,1,[\"completed\"]]],null,{\"statements\":[[0,\"                \"],[6,\"tr\"],[9,\"class\",\"\"],[7],[0,\"\\n                    \"],[6,\"td\"],[7],[1,[19,1,[\"index\"]],false],[8],[0,\" \\n                    \"],[6,\"td\"],[9,\"class\",\"row_id\"],[7],[1,[19,1,[\"id\"]],false],[8],[0,\"\\n                    \"],[6,\"td\"],[9,\"class\",\"row_name\"],[7],[1,[19,1,[\"task_name\"]],false],[8],[0,\"\\n                    \"],[6,\"td\"],[7],[1,[19,1,[\"created_at\"]],false],[8],[0,\"\\n                    \"],[6,\"td\"],[7],[6,\"a\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"openEditWindow\",[19,1,[]]],null],null],[9,\"href\",\"#\"],[9,\"class\",\"btn1 orange\"],[7],[0,\"Edit\"],[8],[0,\" \"],[6,\"a\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"openCompleteWindow\",[19,1,[]]],null],null],[9,\"href\",\"#\"],[9,\"class\",\"btn1 green\"],[7],[0,\"complete\"],[8],[0,\" \"],[6,\"a\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"openDeleteWindow\",[19,1,[]]],null],null],[9,\"href\",\"#\"],[9,\"class\",\"btn1 red\"],[7],[0,\"Delete\"],[8],[8],[0,\"\\n                \"],[8],[0,\"            \\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"tr\"],[9,\"class\",\"complete\"],[7],[0,\"\\n                    \"],[6,\"td\"],[7],[1,[19,1,[\"index\"]],false],[8],[0,\" \\n                    \"],[6,\"td\"],[9,\"class\",\"row_id\"],[7],[1,[19,1,[\"id\"]],false],[8],[0,\"\\n                    \"],[6,\"td\"],[9,\"class\",\"row_name\"],[7],[1,[19,1,[\"task_name\"]],false],[8],[0,\"\\n                    \"],[6,\"td\"],[7],[1,[19,1,[\"created_at\"]],false],[8],[0,\"\\n                    \"],[6,\"td\"],[7],[6,\"a\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"openEditWindow\",[19,1,[]]],null],null],[9,\"href\",\"#\"],[9,\"class\",\"btn1 orange\"],[7],[0,\"Edit\"],[8],[0,\" \"],[6,\"a\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"openCompleteWindow\",[19,1,[]]],null],null],[9,\"href\",\"#\"],[9,\"class\",\"btn1 green\"],[7],[0,\"complete\"],[8],[0,\" \"],[6,\"a\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"openDeleteWindow\",[19,1,[]]],null],null],[9,\"href\",\"#\"],[9,\"class\",\"btn1 red\"],[7],[0,\"Delete\"],[8],[8],[0,\"\\n                \"],[8],[0,\"  \\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8]],\"hasEval\":false}", "meta": { "moduleName": "buyme/templates/components/task-table.hbs" } });
});
define("buyme/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eZT6e+yt", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"black_background\"],[3,\"action\",[[19,0,[]],\"closeBackground\"]],[7],[8],[0,\"\\n\\n\"],[1,[18,\"task-nav\"],false],[0,\"\\n\\n\"],[1,[18,\"task-dashboard\"],false],[0,\"\\n\\n\"],[1,[18,\"task-table\"],false],[0,\"\\n\\n\\n\"],[1,[18,\"task-new-task\"],false],[0,\"\\n\"],[1,[18,\"task-delete-task\"],false],[0,\"\\n\"],[1,[18,\"task-complete-task\"],false],[0,\"\\n\"],[1,[18,\"task-edit-task\"],false],[0,\"\\n\\n\"],[1,[18,\"task-footer\"],false]],\"hasEval\":false}", "meta": { "moduleName": "buyme/templates/index.hbs" } });
});


define('buyme/config/environment', [], function() {
  var prefix = 'buyme';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("buyme/app")["default"].create({"name":"buyme","version":"0.0.0+06732c0f"});
}
//# sourceMappingURL=buyme.map
