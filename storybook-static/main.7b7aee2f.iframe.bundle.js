(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters=(__webpack_require__("./src/index.css"),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^\\/]*?\\.stories\\.js)$")],module,!1)}).call(this,__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^\\/]*?\\.stories\\.js)$":function(module,exports,__webpack_require__){var map={"./PureInboxScreen.stories.js":"./src/components/PureInboxScreen.stories.js","./Task.stories.js":"./src/components/Task.stories.js","./TaskList.stories.js":"./src/components/TaskList.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^\\/]*?\\.stories\\.js)$"},"./src/components/PureInboxScreen.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Error",(function(){return Error})),__webpack_require__.d(__webpack_exports__,"WithInteractions",(function(){return WithInteractions}));var regenerator=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),asyncToGenerator=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),es=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-redux/es/index.js")),redux_toolkit_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),TaskList=__webpack_require__("./src/components/TaskList.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function PureInboxScreen(_ref){return _ref.error?Object(jsx_runtime.jsx)("div",{className:"page lists-show",children:Object(jsx_runtime.jsxs)("div",{className:"wrapper-message",children:[Object(jsx_runtime.jsx)("span",{className:"icon-face-sad"}),Object(jsx_runtime.jsx)("div",{className:"title-message",children:"Oh no!"}),Object(jsx_runtime.jsx)("div",{className:"subtitle-message",children:"Something went wrong"})]})}):Object(jsx_runtime.jsxs)("div",{className:"page lists-show",children:[Object(jsx_runtime.jsx)("nav",{children:Object(jsx_runtime.jsx)("h1",{className:"title-page",children:Object(jsx_runtime.jsx)("span",{className:"title-wrapper",children:"Taskbox"})})}),Object(jsx_runtime.jsx)(TaskList.b,{})]})}function InboxScreen(){var isError=Object(es.c)((function(state){return state.isError}));return Object(jsx_runtime.jsx)(PureInboxScreen,{error:isError})}PureInboxScreen.defaultProps={error:null},PureInboxScreen.__docgenInfo={description:"",methods:[],displayName:"PureInboxScreen",props:{error:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"The error message"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InboxScreen.js"]={name:"PureInboxScreen",docgenInfo:PureInboxScreen.__docgenInfo,path:"src/components/InboxScreen.js"}),InboxScreen.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InboxScreen.js"]={name:"InboxScreen",docgenInfo:InboxScreen.__docgenInfo,path:"src/components/InboxScreen.js"});var TaskList_stories=__webpack_require__("./src/components/TaskList.stories.js"),Mockstore=Object(redux_toolkit_esm.a)({reducer:{tasks:Object(redux_toolkit_esm.b)({name:"tasks",initialState:TaskList_stories.Default.args.tasks,reducers:{updateTaskState:function updateTaskState(state,action){var _action$payload=action.payload,id=_action$payload.id,newTaskState=_action$payload.newTaskState,task=state.findIndex((function(task){return task.id===id}));task>=0&&(state[task].state=newTaskState)}}}).reducer}}),PureInboxScreen_stories_Template=(__webpack_exports__.default={component:PureInboxScreen,decorators:[function(story){return Object(jsx_runtime.jsx)(es.a,{store:Mockstore,children:story()})}],title:"PureInboxScreen"},function Template(args){return Object(jsx_runtime.jsx)(PureInboxScreen,Object(objectSpread2.a)({},args))}),Default=PureInboxScreen_stories_Template.bind({}),Error=PureInboxScreen_stories_Template.bind({});Error.args={error:"Something"};var WithInteractions=PureInboxScreen_stories_Template.bind({});WithInteractions.play=function(){var _ref2=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee(_ref){var canvasElement,canvas;return regenerator_default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=Object(esm.b)(canvasElement),_context.next=4,esm.a.click(canvas.getByLabelText("pinTask-1"));case 4:return _context.next=6,esm.a.click(canvas.getByLabelText("pinTask-3"));case 6:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref2.apply(this,arguments)}}(),Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <PureInboxScreen {...args} />"}},Default.parameters),Error.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <PureInboxScreen {...args} />"}},Error.parameters),WithInteractions.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <PureInboxScreen {...args} />"}},WithInteractions.parameters)},"./src/components/Task.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Task}));__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"list-item ".concat(state),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{className:"checkbox",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)},id:"archiveTask-".concat(id),"aria-label":"archiveTask-".concat(id)})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"title",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title",style:{textOverflow:"ellipsis"}})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()},children:"TASK_ARCHIVED"!==state&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{onClick:function onClick(){return onPinTask(id)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"icon-star",id:"pinTask-".concat(id),"aria-label":"pinTask-".concat(id)})})})]})}Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1,description:""},onArchiveTask:{type:{name:"func"},required:!1,description:""},onPinTask:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"})},"./src/components/Task.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Archived",(function(){return Archived})),__webpack_require__.d(__webpack_exports__,"LongTitle",(function(){return LongTitle}));var _Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Task__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Task.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_Task__WEBPACK_IMPORTED_MODULE_2__.a,title:"Task"};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_2__.a,Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2021,0,1,9,0)}};var Pinned=Template.bind({});Pinned.args={task:Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_ARCHIVED"})};var LongTitle=Template.bind({});LongTitle.args={task:Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{title:"This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!"})},Default.parameters=Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Task {...args} />"}},Default.parameters),Pinned.parameters=Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Task {...args} />"}},Pinned.parameters),Archived.parameters=Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Task {...args} />"}},Archived.parameters),LongTitle.parameters=Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Task {...args} />"}},LongTitle.parameters)},"./src/components/TaskList.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PureTaskList})),__webpack_require__.d(__webpack_exports__,"b",(function(){return TaskList}));var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),es=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-redux/es/index.js")),redux_toolkit_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),AppStateSlice=Object(redux_toolkit_esm.b)({name:"appState",initialState:"",reducers:{updateAppState:function updateAppState(state,action){return Object(objectSpread2.a)(Object(objectSpread2.a)({},state),{},{isError:action.payload})}}}),TasksSlice=Object(redux_toolkit_esm.b)({name:"tasks",initialState:[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}],reducers:{updateTaskState:function updateTaskState(state,action){var _action$payload=action.payload,id=_action$payload.id,newTaskState=_action$payload.newTaskState,task=state.findIndex((function(task){return task.id===id}));task>=0&&(state[task].state=newTaskState)}}}),updateTaskState=TasksSlice.actions.updateTaskState,Task=(AppStateSlice.actions.updateAppState,Object(redux_toolkit_esm.a)({reducer:{tasks:TasksSlice.reducer,isError:AppStateSlice.reducer}}),__webpack_require__("./src/components/Task.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function PureTaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onPinTask:_ref.onPinTask,onArchiveTask:_ref.onArchiveTask},LoadingRow=Object(jsx_runtime.jsxs)("div",{className:"loading-item",children:[Object(jsx_runtime.jsx)("span",{className:"glow-checkbox"}),Object(jsx_runtime.jsxs)("span",{className:"glow-text",children:[Object(jsx_runtime.jsx)("span",{children:"Loading"})," ",Object(jsx_runtime.jsx)("span",{children:"cool"})," ",Object(jsx_runtime.jsx)("span",{children:"state"})]})]});if(loading)return Object(jsx_runtime.jsxs)("div",{className:"list-items",children:[LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow]});if(0===tasks.length)return Object(jsx_runtime.jsx)("div",{className:"list-items",children:Object(jsx_runtime.jsxs)("div",{className:"wrapper-message",children:[Object(jsx_runtime.jsx)("span",{className:"icon-check"}),Object(jsx_runtime.jsx)("div",{className:"title-message",children:"You have no tasks"}),Object(jsx_runtime.jsx)("div",{className:"subtitle-message",children:"Sit back and relax"})]})});var tasksInOrder=[].concat(Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"!==t.state}))));return Object(jsx_runtime.jsx)("div",{className:"list-items",children:tasksInOrder.map((function(task){return Object(jsx_runtime.jsx)(Task.a,Object(objectSpread2.a)({task:task},events),task.id)}))})}function TaskList(){var tasks=Object(es.c)((function(state){return state.tasks})),dispatch=Object(es.b)(),filteredTasks=tasks.filter((function(t){return"TASK_INBOX"===t.state||"TASK_PINNED"===t.state}));return Object(jsx_runtime.jsx)(PureTaskList,{tasks:filteredTasks,onPinTask:function onPinTask(task){return function pinTask(value){dispatch(updateTaskState({id:value,newTaskState:"TASK_PINNED"}))}(task)},onArchiveTask:function onArchiveTask(task){return function archiveTask(value){dispatch(updateTaskState({id:value,newTaskState:"TASK_ARCHIVED"}))}(task)}})}PureTaskList.defaultProps={loading:!1},PureTaskList.__docgenInfo={description:"",methods:[],displayName:"PureTaskList",props:{loading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Checks if it's in loading state"},tasks:{type:{name:"arrayOf",value:{name:"custom",raw:"Task.propTypes.task"}},required:!0,description:"The list of tasks"},onPinTask:{type:{name:"func"},required:!1,description:"Event to change the task to pinned"},onArchiveTask:{type:{name:"func"},required:!1,description:"Event to change the task to archived"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"PureTaskList",docgenInfo:PureTaskList.__docgenInfo,path:"src/components/TaskList.js"}),TaskList.__docgenInfo={description:"",methods:[],displayName:"TaskList"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"TaskList",docgenInfo:TaskList.__docgenInfo,path:"src/components/TaskList.js"})},"./src/components/TaskList.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithPinnedTasks",(function(){return WithPinnedTasks})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));var _Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_TaskList__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/TaskList.js")),_Task_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Task.stories.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_TaskList__WEBPACK_IMPORTED_MODULE_3__.a,title:"PureTaskList",decorators:[function(story){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{padding:"3rem"},children:story()})}]};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TaskList__WEBPACK_IMPORTED_MODULE_3__.a,Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},args))},Default=Template.bind({});Default.args={tasks:[Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"1",title:"Task 1"}),Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"2",title:"Task 2"}),Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"3",title:"Task 3"}),Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"4",title:"Task 4"}),Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"5",title:"Task 5"}),Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_4__.Default.args.task),{},{id:"6",title:"Task 6"})]};var WithPinnedTasks=Template.bind({});WithPinnedTasks.args={tasks:[].concat(Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(Default.args.tasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}])};var Loading=Template.bind({});Loading.args={tasks:[],loading:!0};var Empty=Template.bind({});Empty.args=Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},Loading.args),{},{loading:!1}),Default.parameters=Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"(args) => <PureTaskList {...args} />"}},Default.parameters),WithPinnedTasks.parameters=Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"(args) => <PureTaskList {...args} />"}},WithPinnedTasks.parameters),Loading.parameters=Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"(args) => <PureTaskList {...args} />"}},Loading.parameters),Empty.parameters=Object(_Users_tai_jiunfang_Documents_twreporter_learnstorybook_code_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:"(args) => <PureTaskList {...args} />"}},Empty.parameters)},"./src/index.css":function(module,exports,__webpack_require__){},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);