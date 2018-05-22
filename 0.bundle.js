(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nzsc_single_player_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nzsc_single_player_web */ \"./js/nzsc_single_player_web.js\");\n\n\nconst MAX32 = 2147483647;\n\nconst ENTER_KEY = 13;\n\nconst container = document.getElementById('terminal-container');\nconst output = document.getElementById('terminal-output');\nconst input = document.getElementById('terminal-input');\n\nconst write = (text) => {\n  output.textContent += text;\n};\n\nconst newGame = () => {\n  const game = _nzsc_single_player_web__WEBPACK_IMPORTED_MODULE_0__[\"SinglePlayerNZSCWebInterface\"].new(Math.random() * MAX32, Math.random() * MAX32);\n  const initialPrompt = game.initial_prompt();\n  write(initialPrompt + '\\n\\n');\n\n  const waitForSubmission = () => {\n    input.focus();\n    container.scrollTop = container.scrollHeight;\n    \n    const listener = (e) => {\n      if (e.keyCode === ENTER_KEY) {\n        input.removeEventListener('keypress', listener);\n\n        let prompt = game.next(input.value);\n\n        write(input.value + '\\n\\n' + prompt + '\\n');\n\n        input.value = '';\n\n        if (true) {\n          waitForSubmission();\n        }\n      }\n    };\n    input.addEventListener('keypress', listener);\n  };\n\n  waitForSubmission();\n}\n\nnewGame();\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/nzsc_single_player_web.js":
/*!**************************************!*\
  !*** ./js/nzsc_single_player_web.js ***!
  \**************************************/
/*! exports provided: add_one, SinglePlayerNZSCWebInterface, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbindgen_number_new, __wbindgen_number_get, __wbindgen_undefined_new, __wbindgen_null_new, __wbindgen_is_null, __wbindgen_is_undefined, __wbindgen_boolean_new, __wbindgen_boolean_get, __wbindgen_symbol_new, __wbindgen_is_symbol, __wbindgen_string_get, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add_one\", function() { return add_one; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SinglePlayerNZSCWebInterface\", function() { return SinglePlayerNZSCWebInterface; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_get\", function() { return __wbindgen_number_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_undefined_new\", function() { return __wbindgen_undefined_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_null_new\", function() { return __wbindgen_null_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_null\", function() { return __wbindgen_is_null; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_new\", function() { return __wbindgen_boolean_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_symbol_new\", function() { return __wbindgen_symbol_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_symbol\", function() { return __wbindgen_is_symbol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nzsc_single_player_web_bg */ \"./js/nzsc_single_player_web_bg.wasm\");\n/* tslint:disable */\n\n\nfunction add_one(arg0) {\n    return _nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"add_one\"](arg0);\n}\n\nconst TextDecoder = typeof self === 'object' && self.TextDecoder\n    ? self.TextDecoder\n    : __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder;\n\nlet cachedDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null ||\n        cachegetUint8Memory.buffer !== _nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer)\n        cachegetUint8Memory = new Uint8Array(_nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nlet cachedGlobalArgumentPtr = null;\nfunction globalArgumentPtr() {\n    if (cachedGlobalArgumentPtr === null)\n        cachedGlobalArgumentPtr = _nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n    return cachedGlobalArgumentPtr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null ||\n        cachegetUint32Memory.buffer !== _nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer)\n        cachegetUint32Memory = new Uint32Array(_nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    return cachegetUint32Memory;\n}\n\nconst TextEncoder = typeof self === 'object' && self.TextEncoder\n    ? self.TextEncoder\n    : __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextEncoder;\n\nlet cachedEncoder = new TextEncoder('utf-8');\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedEncoder.encode(arg);\n    const ptr = _nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    return [ptr, buf.length];\n}\n\nclass SinglePlayerNZSCWebInterface {\n\n                static __construct(ptr) {\n                    return new SinglePlayerNZSCWebInterface(ptr);\n                }\n\n                constructor(ptr) {\n                    this.ptr = ptr;\n                }\n\n            free() {\n                const ptr = this.ptr;\n                this.ptr = 0;\n                _nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_singleplayernzscwebinterface_free\"](ptr);\n            }\n        static new(arg0, arg1) {\n    return SinglePlayerNZSCWebInterface.__construct(_nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"singleplayernzscwebinterface_new\"](arg0, arg1));\n}\ninitial_prompt() {\n    const retptr = globalArgumentPtr();\n    _nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"singleplayernzscwebinterface_initial_prompt\"](retptr, this.ptr);\n    const mem = getUint32Memory();\n    const ptr = mem[retptr / 4];\n    const len = mem[retptr / 4 + 1];\n    const realRet = getStringFromWasm(ptr, len);\n    _nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr, len * 1);\n    return realRet;\n}\nnext(arg0) {\n    const [ptr0, len0] = passStringToWasm(arg0);\n    const retptr = globalArgumentPtr();\n    try {\n        _nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"singleplayernzscwebinterface_next\"](retptr, this.ptr, ptr0, len0);\n        const mem = getUint32Memory();\n        const ptr = mem[retptr / 4];\n        const len = mem[retptr / 4 + 1];\n        const realRet = getStringFromWasm(ptr, len);\n        _nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr, len * 1);\n        return realRet;\n    } finally {\n        _nzsc_single_player_web_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr0, len0 * 1);\n    }\n}\n}\n\nlet slab = [];\n\nlet slab_next = 0;\n\nfunction addHeapObject(obj) {\n    if (slab_next === slab.length)\n        slab.push(slab.length + 1);\n    const idx = slab_next;\n    const next = slab[idx];\n\n    slab_next = next;\n\n    slab[idx] = { obj, cnt: 1 };\n    return idx << 1;\n}\n\nlet stack = [];\n\nfunction getObject(idx) {\n    if ((idx & 1) === 1) {\n        return stack[idx >> 1];\n    } else {\n        const val = slab[idx >> 1];\n\n    return val.obj;\n\n    }\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    // If this object is on the stack promote it to the heap.\n    if ((idx & 1) === 1)\n        return addHeapObject(getObject(idx));\n\n    // Otherwise if the object is on the heap just bump the\n    // refcount and move on\n    const val = slab[idx >> 1];\n    val.cnt += 1;\n    return idx;\n}\n\nfunction dropRef(idx) {\n\n    let obj = slab[idx >> 1];\n\n    obj.cnt -= 1;\n    if (obj.cnt > 0)\n        return;\n\n    // If we hit 0 then free up our space in the slab\n    slab[idx >> 1] = slab_next;\n    slab_next = idx >> 1;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropRef(i); }\n\nfunction __wbindgen_string_new(p, l) {\n    return addHeapObject(getStringFromWasm(p, l));\n}\n\nfunction __wbindgen_number_new(i) { return addHeapObject(i); }\n\nfunction __wbindgen_number_get(n, invalid) {\n    let obj = getObject(n);\n    if (typeof(obj) === 'number')\n        return obj;\n    getUint8Memory()[invalid] = 1;\n    return 0;\n}\n\nfunction __wbindgen_undefined_new() { return addHeapObject(undefined); }\n\nfunction __wbindgen_null_new() {\n    return addHeapObject(null);\n}\n\nfunction __wbindgen_is_null(idx) {\n    return getObject(idx) === null ? 1 : 0;\n}\n\nfunction __wbindgen_is_undefined(idx) {\n    return getObject(idx) === undefined ? 1 : 0;\n}\n\nfunction __wbindgen_boolean_new(v) {\n    return addHeapObject(v === 1);\n}\n\nfunction __wbindgen_boolean_get(i) {\n    let v = getObject(i);\n    if (typeof(v) === 'boolean') {\n        return v ? 1 : 0;\n    } else {\n        return 2;\n    }\n}\n\nfunction __wbindgen_symbol_new(ptr, len) {\n    let a;\n    if (ptr === 0) {\n        a = Symbol();\n    } else {\n        a = Symbol(getStringFromWasm(ptr, len));\n    }\n    return addHeapObject(a);\n}\n\nfunction __wbindgen_is_symbol(i) {\n    return typeof(getObject(i)) === 'symbol' ? 1 : 0;\n}\n\nfunction __wbindgen_string_get(i, len_ptr) {\n    let obj = getObject(i);\n    if (typeof(obj) !== 'string')\n        return 0;\n    const [ptr, len] = passStringToWasm(obj);\n    getUint32Memory()[len_ptr / 4] = len;\n    return ptr;\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///./js/nzsc_single_player_web.js?");

/***/ }),

/***/ "./js/nzsc_single_player_web_bg.wasm":
/*!*******************************************!*\
  !*** ./js/nzsc_single_player_web_bg.wasm ***!
  \*******************************************/
/*! exports provided: memory, add_one, __wbg_singleplayernzscwebinterface_free, singleplayernzscwebinterface_new, singleplayernzscwebinterface_initial_prompt, singleplayernzscwebinterface_next, __wbindgen_malloc, __wbindgen_free, __wbindgen_global_argument_ptr */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar instance = __webpack_require__.w[module.i];\n// export exports from WebAssembly module\nmodule.exports = instance.exports;\n// exec imports from WebAssembly module (for esm order)\n__webpack_require__(/*! ./nzsc_single_player_web */ \"./js/nzsc_single_player_web.js\");\n// exec wasm module\ninstance.exports.__webpack_init__()\n\n//# sourceURL=webpack:///./js/nzsc_single_player_web_bg.wasm?");

/***/ })

}]);