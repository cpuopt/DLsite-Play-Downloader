// ==UserScript==
// @name         DLsite Play Downloader
// @namespace    https://github.com/cpuopt/DLsite-Play-Downloader
// @version      2.2.1
// @author       cpufan
// @description  在浏览器完成DLsite Play漫画的下载、拼图或解密和保存
// @license      MIT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dlsite.com
// @supportURL   https://github.com/cpuopt/DLsite-Play-Downloader/issues
// @match        https://play.dlsite.com/*
// @match        https://play.comipo.app/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.5.42/dist/vue.global.prod.js
// @require      https://cdn.jsdelivr.net/npm/systemjs@6.15.1/dist/system.min.js
// @require      https://cdn.jsdelivr.net/npm/systemjs@6.15.1/dist/extras/named-register.min.js
// @require      data:application/javascript,%3B(typeof%20System!%3D'undefined')%26%26(System%3Dnew%20System.constructor())%3B
// @grant        GM_addStyle
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

System.addImportMap({ imports: {"vue":"user:vue"} });
System.set("user:vue", (()=>{const _=Vue;('default' in _)||(_.default=_);return _})());
System.register("./___monkey.entry.js", ['vue'],(function(exports,module){'use strict';var ref,createApp,warn,defineComponent,openBlock,createElementBlock,createElementVNode,computed,mergeProps,unref,renderSlot,onMounted,onUnmounted,withModifiers,createBlock,withCtx,createTextVNode,toDisplayString,Fragment,renderList,provide,reactive,toRef,normalizeClass,resolveDynamicComponent,createCommentVNode,getCurrentInstance,inject,useSlots,Text,watch;return{setters:[function(module){ref=module.ref;createApp=module.createApp;warn=module.warn;defineComponent=module.defineComponent;openBlock=module.openBlock;createElementBlock=module.createElementBlock;createElementVNode=module.createElementVNode;computed=module.computed;mergeProps=module.mergeProps;unref=module.unref;renderSlot=module.renderSlot;onMounted=module.onMounted;onUnmounted=module.onUnmounted;withModifiers=module.withModifiers;createBlock=module.createBlock;withCtx=module.withCtx;createTextVNode=module.createTextVNode;toDisplayString=module.toDisplayString;Fragment=module.Fragment;renderList=module.renderList;provide=module.provide;reactive=module.reactive;toRef=module.toRef;normalizeClass=module.normalizeClass;resolveDynamicComponent=module.resolveDynamicComponent;createCommentVNode=module.createCommentVNode;getCurrentInstance=module.getCurrentInstance;inject=module.inject;useSlots=module.useSlots;Text=module.Text;watch=module.watch;}],execute:(function(){const s = new Set;
const _css = async (t) => {
  if (s.has(t)) return;
  s.add(t);
  ((c) => {
	if (typeof GM_addStyle === "function") GM_addStyle(c);
	else (document.head || document.documentElement).appendChild(document.createElement("style")).append(c);
})(t);
};_css(" .plugin-area[data-v-fe414780]{-webkit-backdrop-filter:blur(5px);background:#fff3;border-radius:16px;flex-direction:column;row-gap:1rem;padding:1rem;transition:transform .6s ease-in-out;display:flex;position:fixed;top:50%;right:0;transform:translateY(-50%);box-shadow:0 8px 30px #0000004d}.plugin-area[hide=true][data-v-fe414780]{transform:translateY(-50%)translate(95%)}.title[data-v-fe414780]{text-align:center;width:100%;color:var(--surface-on-surface-primary);-webkit-user-select:none;user-select:none;font-weight:700}.button-area[data-v-fe414780]{flex-direction:column;row-gap:1rem;display:flex}.log-area[data-v-fe414780]{background-color:#00000080;border-radius:4px;flex-direction:column-reverse;row-gap:.5rem;width:200px;height:100px;display:flex;overflow:hidden auto}.log-line[data-v-fe414780]{line-break:anywhere}\n/*$vite$:1*/ ");var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(__defProp(target, "default", {
	value: mod,
	enumerable: true
}) , mod));
_css(".dlsite-play-downloader-vue{z-index:9999;position:fixed}");
var componentSizes = [
	"",
	"default",
	"small",
	"large"
];
/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var NOOP = () => {};
var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty$3.call(val, key);
var isArray = Array.isArray;
var isString = (val) => typeof val === "string";
var isObject$1 = (val) => val !== null && typeof val === "object";
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
/** Detect free variable `self`. */
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function("return this")();
/** Built-in value references. */
var Symbol$1 = root.Symbol;
/** Used for built-in method references. */
var objectProto$2 = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
/**
* Used to resolve the
* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
* of values.
*/
var nativeObjectToString$1 = objectProto$2.toString;
/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
/**
* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the raw `toStringTag`.
*/
function getRawTag(value) {
	var isOwn = hasOwnProperty$2.call(value, symToStringTag$1), tag = value[symToStringTag$1];
	try {
		value[symToStringTag$1] = void 0;
		var unmasked = true;
	} catch (e) {}
	var result = nativeObjectToString$1.call(value);
	if (unmasked) {
		if (isOwn) value[symToStringTag$1] = tag;
		else delete value[symToStringTag$1];
	}
	return result;
}
/**
* Used to resolve the
* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
* of values.
*/
var nativeObjectToString = Object.prototype.toString;
/**
* Converts `value` to a string using `Object.prototype.toString`.
*
* @private
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
*/
function objectToString$1(value) {
	return nativeObjectToString.call(value);
}
/** `Object#toString` result references. */
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
/**
* The base implementation of `getTag` without fallbacks for buggy environments.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
function baseGetTag(value) {
	if (value == null) return value === void 0 ? undefinedTag : nullTag;
	return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString$1(value);
}
/**
* Checks if `value` is object-like. A value is object-like if it's not `null`
* and has a `typeof` result of "object".
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
* @example
*
* _.isObjectLike({});
* // => true
*
* _.isObjectLike([1, 2, 3]);
* // => true
*
* _.isObjectLike(_.noop);
* // => false
*
* _.isObjectLike(null);
* // => false
*/
function isObjectLike(value) {
	return value != null && typeof value == "object";
}
/**
* Checks if `value` is the
* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an object, else `false`.
* @example
*
* _.isObject({});
* // => true
*
* _.isObject([1, 2, 3]);
* // => true
*
* _.isObject(_.noop);
* // => true
*
* _.isObject(null);
* // => false
*/
function isObject(value) {
	var type = typeof value;
	return value != null && (type == "object" || type == "function");
}
/** `Object#toString` result references. */
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
/**
* Checks if `value` is classified as a `Function` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a function, else `false`.
* @example
*
* _.isFunction(_);
* // => true
*
* _.isFunction(/abc/);
* // => false
*/
function isFunction(value) {
	if (!isObject(value)) return false;
	var tag = baseGetTag(value);
	return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/** Used to detect overreaching core-js shims. */
var coreJsData = root["__core-js_shared__"];
/** Used to detect methods masquerading as native. */
var maskSrcKey = function() {
	var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
	return uid ? "Symbol(src)_1." + uid : "";
}();
/**
* Checks if `func` has its source masked.
*
* @private
* @param {Function} func The function to check.
* @returns {boolean} Returns `true` if `func` is masked, else `false`.
*/
function isMasked(func) {
	return !!maskSrcKey && maskSrcKey in func;
}
/** Used to resolve the decompiled source of functions. */
var funcToString$2 = Function.prototype.toString;
/**
* Converts `func` to its source code.
*
* @private
* @param {Function} func The function to convert.
* @returns {string} Returns the source code.
*/
function toSource(func) {
	if (func != null) {
		try {
			return funcToString$2.call(func);
		} catch (e) {}
		try {
			return func + "";
		} catch (e) {}
	}
	return "";
}
/**
* Used to match `RegExp`
* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
*/
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */
var funcProto$1 = Function.prototype;
var objectProto$1 = Object.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
/** Used to detect if a method is native. */
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
* The base implementation of `_.isNative` without bad shim checks.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a native function,
*  else `false`.
*/
function baseIsNative(value) {
	if (!isObject(value) || isMasked(value)) return false;
	return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
}
/**
* Gets the value at `key` of `object`.
*
* @private
* @param {Object} [object] The object to query.
* @param {string} key The key of the property to get.
* @returns {*} Returns the property value.
*/
function getValue(object, key) {
	return object == null ? void 0 : object[key];
}
/**
* Gets the native function at `key` of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {string} key The key of the method to get.
* @returns {*} Returns the function if it's native, else `undefined`.
*/
function getNative(object, key) {
	var value = getValue(object, key);
	return baseIsNative(value) ? value : void 0;
}
var defineProperty = function() {
	try {
		var func = getNative(Object, "defineProperty");
		func({}, "", {});
		return func;
	} catch (e) {}
}();
/**
* The base implementation of `assignValue` and `assignMergeValue` without
* value checks.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function baseAssignValue(object, key, value) {
	if (key == "__proto__" && defineProperty) defineProperty(object, key, {
		"configurable": true,
		"enumerable": true,
		"value": value,
		"writable": true
	});
	else object[key] = value;
}
/**
* Creates a unary function that invokes `func` with its argument transformed.
*
* @private
* @param {Function} func The function to wrap.
* @param {Function} transform The argument transform.
* @returns {Function} Returns the new function.
*/
function overArg(func, transform) {
	return function(arg) {
		return func(transform(arg));
	};
}
/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);
/** `Object#toString` result references. */
var objectTag = "[object Object]";
/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);
/**
* Checks if `value` is a plain object, that is, an object created by the
* `Object` constructor or one with a `[[Prototype]]` of `null`.
*
* @static
* @memberOf _
* @since 0.8.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
* @example
*
* function Foo() {
*   this.a = 1;
* }
*
* _.isPlainObject(new Foo);
* // => false
*
* _.isPlainObject([1, 2, 3]);
* // => false
*
* _.isPlainObject({ 'x': 0, 'y': 0 });
* // => true
*
* _.isPlainObject(Object.create(null));
* // => true
*/
function isPlainObject(value) {
	if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
	var proto = getPrototype(value);
	if (proto === null) return true;
	var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
	return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
/**
* The inverse of `_.toPairs`; this method returns an object composed
* from key-value `pairs`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Array
* @param {Array} pairs The key-value pairs.
* @returns {Object} Returns the new object.
* @example
*
* _.fromPairs([['a', 1], ['b', 2]]);
* // => { 'a': 1, 'b': 2 }
*/
function fromPairs(pairs) {
	var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
	while (++index < length) {
		var pair = pairs[index];
		baseAssignValue(result, pair[0], pair[1]);
	}
	return result;
}
var isNumber = (val) => typeof val === "number";
var isStringNumber = (val) => {
	if (!isString(val)) return false;
	return !Number.isNaN(Number(val));
};
var epPropKey = "__epPropKey";
var definePropType = (val) => val;
var isEpProp = (val) => isObject$1(val) && !!val["__epPropKey"];
/**
* @description Build prop. It can better optimize prop types
* @description 生成 prop，能更好地优化类型
* @example
// limited options
// the type will be PropType<'light' | 'dark'>
buildProp({
type: String,
values: ['light', 'dark'],
} as const)
* @example
// limited options and other types
// the type will be PropType<'small' | 'large' | number>
buildProp({
type: [String, Number],
values: ['small', 'large'],
validator: (val: unknown): val is number => typeof val === 'number',
} as const)
@link see more: https://github.com/element-plus/element-plus/pull/3341
*/
var buildProp = (prop, key) => {
	if (!isObject$1(prop) || isEpProp(prop)) return prop;
	const { values, required, default: defaultValue, type, validator } = prop;
	const epProp = {
		type,
		required: !!required,
		validator: values || validator ? (val) => {
			let valid = false;
			let allowedValues = [];
			if (values) {
				allowedValues = Array.from(values);
				if (hasOwn(prop, "default")) allowedValues.push(defaultValue);
				valid ||= allowedValues.includes(val);
			}
			if (validator) valid ||= validator(val);
			if (!valid && allowedValues.length > 0) {
				const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
				warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
			}
			return valid;
		} : void 0,
		[epPropKey]: true
	};
	if (hasOwn(prop, "default")) epProp.default = defaultValue;
	return epProp;
};
var buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [key, buildProp(option, key)]));
var ElementPlusError = class extends Error {
	constructor(m) {
		super(m);
		this.name = "ElementPlusError";
	}
};
function debugWarn(scope, message) {
	{
		const error = isString(scope) ? new ElementPlusError(`[${scope}] ${message}`) : scope;
		console.warn(error);
	}
}
var useDeprecated = ({ from, replacement, scope, version, ref, type = "API" }, condition) => {
	watch(() => unref(condition), (val) => {
		if (val) debugWarn(scope, `[${type}] ${from} is about to be deprecated in version ${version}, please use ${replacement} instead.
For more detail, please visit: ${ref}
`);
	}, { immediate: true });
};
var SCOPE = "utils/dom/style";
function addUnit(value, defaultUnit = "px") {
	if (!value && value !== 0) return "";
	if (isNumber(value) || isStringNumber(value)) return `${value}${defaultUnit}`;
	else if (isString(value)) return value;
	debugWarn(SCOPE, "binding value must be a string or number");
}
var statePrefix = "is-";
var _bem = (namespace, block, blockSuffix, element, modifier) => {
	let cls = `${namespace}-${block}`;
	if (blockSuffix) cls += `-${blockSuffix}`;
	if (element) cls += `__${element}`;
	if (modifier) cls += `--${modifier}`;
	return cls;
};
var namespaceContextKey = Symbol("namespaceContextKey");
var useGetDerivedNamespace = (namespaceOverrides) => {
	const derivedNamespace = (getCurrentInstance() ? inject(namespaceContextKey, ref("el")) : ref("el"));
	return computed(() => {
		return unref(derivedNamespace) || "el";
	});
};
var useNamespace = (block, namespaceOverrides) => {
	const namespace = useGetDerivedNamespace();
	const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
	const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
	const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
	const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
	const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
	const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
	const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
	const is = (name, ...args) => {
		const state = args.length >= 1 ? args[0] : true;
		return name && state ? `${statePrefix}${name}` : "";
	};
	const cssVar = (object) => {
		const styles = {};
		for (const key in object) if (object[key]) styles[`--${namespace.value}-${key}`] = object[key];
		return styles;
	};
	const cssVarBlock = (object) => {
		const styles = {};
		for (const key in object) if (object[key]) styles[`--${namespace.value}-${block}-${key}`] = object[key];
		return styles;
	};
	const cssVarName = (name) => `--${namespace.value}-${name}`;
	const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
	return {
		namespace,
		b,
		e,
		m,
		be,
		em,
		bm,
		bem,
		is,
		cssVar,
		cssVarName,
		cssVarBlock,
		cssVarBlockName
	};
};
var useProp = (name) => {
	const vm = getCurrentInstance();
	return computed(() => (vm?.proxy?.$props)?.[name]);
};
var useSizeProp = buildProp({
	type: String,
	values: componentSizes,
	required: false
});
var SIZE_INJECTION_KEY = Symbol("size");
var useGlobalSize = () => {
	const injectedSize = inject(SIZE_INJECTION_KEY, {});
	return computed(() => {
		return unref(injectedSize.size) || "";
	});
};
var withPropsDefaultsSetter = (target) => {
	const _p = target.props;
	const props = isArray(_p) ? fromPairs(_p.map((key) => [key, {}])) : _p;
	target.setPropsDefaults = (defaults) => {
		if (!props) return;
		for (const [key, value] of Object.entries(defaults)) {
			const prop = props[key];
			if (!hasOwn(props, key)) continue;
			if (isPlainObject(prop)) {
				props[key] = {
					...prop,
					default: value
				};
				continue;
			}
			props[key] = {
				type: prop,
				default: value
			};
		}
		target.props = props;
	};
};
var withInstall = (main, extra) => {
	main.install = (app) => {
		for (const comp of [main, ...Object.values(extra ?? {})]) app.component(comp.name, comp);
	};
	if (extra) for (const [key, comp] of Object.entries(extra)) main[key] = comp;
	withPropsDefaultsSetter(main);
	return main;
};
var withNoopInstall = (component) => {
	component.install = NOOP;
	withPropsDefaultsSetter(component);
	return component;
};
/*! Element Plus Icons Vue v2.3.2 */
var loading_default = /* @__PURE__ */ defineComponent({
	name: "Loading",
	__name: "loading",
	setup(__props) {
		return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 1024 1024"
		}, [createElementVNode("path", {
			fill: "currentColor",
			d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0"
		})]));
	}
});
var iconPropType = definePropType([
	String,
	Object,
	Function
]);
/**
* @deprecated Removed after 3.0.0, Use `IconProps` instead.
*/
var iconProps = buildProps({
	/**
	* @description SVG icon size, size x size
	*/
	size: { type: definePropType([Number, String]) },
	/**
	* @description SVG tag's fill attribute
	*/
	color: { type: String }
});
var ElIcon = withInstall(/* @__PURE__ */ defineComponent({
	name: "ElIcon",
	inheritAttrs: false,
	__name: "icon",
	props: iconProps,
	setup(__props) {
		const props = __props;
		const ns = useNamespace("icon");
		const style = computed(() => {
			const { size, color } = props;
			const fontSize = addUnit(size);
			if (!fontSize && !color) return {};
			return {
				fontSize,
				"--color": color
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("i", mergeProps({
				class: unref(ns).b(),
				style: style.value
			}, _ctx.$attrs), [renderSlot(_ctx.$slots, "default")], 16);
		};
	}
}));
var formContextKey = Symbol("formContextKey");
var formItemContextKey = Symbol("formItemContextKey");
var useFormSize = (fallback, ignore = {}) => {
	const emptyRef = ref(void 0);
	const size = ignore.prop ? emptyRef : useProp("size");
	const globalConfig = ignore.global ? emptyRef : useGlobalSize();
	const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
	const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
	return computed(() => size.value || unref(fallback) || formItem?.size || form?.size || globalConfig.value || "");
};
var useFormDisabled = (fallback) => {
	const disabled = useProp("disabled");
	const form = inject(formContextKey, void 0);
	return computed(() => {
		return disabled.value ?? unref(fallback) ?? form?.disabled ?? false;
	});
};
var useFormItem = () => {
	return {
		form: inject(formContextKey, void 0),
		formItem: inject(formItemContextKey, void 0)
	};
};
/**
* @deprecated Removed after 3.0.0, Use `ButtonProps` instead.
*/
var buttonProps = buildProps({
	/**
	* @description button size
	*/
	size: useSizeProp,
	/**
	* @description disable the button
	*/
	disabled: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description button type
	*/
	type: {
		type: String,
		values: [
			"default",
			"primary",
			"success",
			"warning",
			"info",
			"danger",
			"text",
			""
		],
		default: ""
	},
	/**
	* @description icon component
	*/
	icon: { type: iconPropType },
	/**
	* @description native button type
	*/
	nativeType: {
		type: String,
		values: [
			"button",
			"submit",
			"reset"
		],
		default: "button"
	},
	/**
	* @description determine whether it's loading
	*/
	loading: Boolean,
	/**
	* @description customize loading icon component
	*/
	loadingIcon: {
		type: iconPropType,
		default: () => loading_default
	},
	/**
	* @description determine whether it's a plain button
	*/
	plain: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description determine whether it's a text button
	*/
	text: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description determine whether it's a link button
	*/
	link: Boolean,
	/**
	* @description determine whether the text button background color is always on
	*/
	bg: Boolean,
	/**
	* @description native button autofocus
	*/
	autofocus: Boolean,
	/**
	* @description determine whether it's a round button
	*/
	round: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description determine whether it's a circle button
	*/
	circle: Boolean,
	/**
	* @description determine whether it's a dashed button
	*/
	dashed: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description custom button color, automatically calculate `hover` and `active` color
	*/
	color: String,
	/**
	* @description dark mode, which automatically converts `color` to dark mode colors
	*/
	dark: Boolean,
	/**
	* @description automatically insert a space between two chinese characters
	*/
	autoInsertSpace: {
		type: Boolean,
		default: void 0
	},
	/**
	* @description custom element tag
	*/
	tag: {
		type: definePropType([String, Object]),
		default: "button"
	}
});
var buttonEmits = { click: (evt) => evt instanceof MouseEvent };
var configProviderContextKey = Symbol();
var globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
	const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
	return computed(() => config.value?.[key] ?? defaultValue);
}
var buttonGroupContextKey = Symbol("buttonGroupContextKey");
var useButton = (props, emit) => {
	useDeprecated({
		from: "type.text",
		replacement: "link",
		version: "3.0.0",
		scope: "props",
		ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
	}, computed(() => props.type === "text"));
	const buttonGroupContext = inject(buttonGroupContextKey, void 0);
	const globalConfig = useGlobalConfig("button");
	const { form } = useFormItem();
	const _size = useFormSize(computed(() => buttonGroupContext?.size));
	const _disabled = useFormDisabled();
	const _ref = ref();
	const slots = useSlots();
	const _type = computed(() => props.type || buttonGroupContext?.type || globalConfig.value?.type || "");
	const autoInsertSpace = computed(() => props.autoInsertSpace ?? globalConfig.value?.autoInsertSpace ?? false);
	const _plain = computed(() => props.plain ?? globalConfig.value?.plain ?? false);
	const _round = computed(() => props.round ?? globalConfig.value?.round ?? false);
	const _text = computed(() => props.text ?? globalConfig.value?.text ?? false);
	const _dashed = computed(() => props.dashed ?? globalConfig.value?.dashed ?? false);
	const _props = computed(() => {
		if (props.tag === "button") return {
			ariaDisabled: _disabled.value || props.loading,
			disabled: _disabled.value || props.loading,
			autofocus: props.autofocus,
			type: props.nativeType
		};
		return {};
	});
	const shouldAddSpace = computed(() => {
		const defaultSlot = slots.default?.();
		if (autoInsertSpace.value && defaultSlot?.length === 1) {
			const slot = defaultSlot[0];
			if (slot?.type === Text) {
				const text = slot.children;
				return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
			}
		}
		return false;
	});
	const handleClick = (evt) => {
		if (_disabled.value || props.loading) {
			evt.stopPropagation();
			return;
		}
		if (props.nativeType === "reset") form?.resetFields();
		emit("click", evt);
	};
	return {
		_disabled,
		_size,
		_type,
		_ref,
		_props,
		_plain,
		_round,
		_text,
		_dashed,
		shouldAddSpace,
		handleClick
	};
};
/**
* Take input from [0, n] and return it as [0, 1]
* @hidden
*/
function bound01(n, max) {
	if (isOnePointZero(n)) n = "100%";
	const isPercent = isPercentage(n);
	n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
	if (isPercent) n = parseInt(String(n * max), 10) / 100;
	if (Math.abs(n - max) < 1e-6) return 1;
	if (max === 360) n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
	else n = n % max / parseFloat(String(max));
	return n;
}
/**
* Force a number between 0 and 1
* @hidden
*/
function clamp01(val) {
	return Math.min(1, Math.max(0, val));
}
/**
* Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
* <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
* @hidden
*/
function isOnePointZero(n) {
	return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
/**
* Check to see if string passed in is a percentage
* @hidden
*/
function isPercentage(n) {
	return typeof n === "string" && n.indexOf("%") !== -1;
}
/**
* Return a valid alpha value [0,1] with all invalid values being set to 1
* @hidden
*/
function boundAlpha(a) {
	a = parseFloat(a);
	if (isNaN(a) || a < 0 || a > 1) a = 1;
	return a;
}
/**
* Replace a decimal with it's percentage value
* @hidden
*/
function convertToPercentage(n) {
	if (Number(n) <= 1) return `${Number(n) * 100}%`;
	return n;
}
/**
* Force a hex value to have 2 characters
* @hidden
*/
function pad2(c) {
	return c.length === 1 ? "0" + c : String(c);
}
/**
* Handle bounds / percentage checking to conform to CSS color spec
* <http://www.w3.org/TR/css3-color/>
* *Assumes:* r, g, b in [0, 255] or [0, 1]
* *Returns:* { r, g, b } in [0, 255]
*/
function rgbToRgb(r, g, b) {
	return {
		r: bound01(r, 255) * 255,
		g: bound01(g, 255) * 255,
		b: bound01(b, 255) * 255
	};
}
/**
* Converts an RGB color value to HSL.
* *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
* *Returns:* { h, s, l } in [0,1]
*/
function rgbToHsl(r, g, b) {
	r = bound01(r, 255);
	g = bound01(g, 255);
	b = bound01(b, 255);
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	const l = (max + min) / 2;
	if (max === min) {
		s = 0;
		h = 0;
	} else {
		const d = max - min;
		s = l > .5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b: h = (r - g) / d + 4;
		}
		h /= 6;
	}
	return {
		h,
		s,
		l
	};
}
function hue2rgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * (6 * t);
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
/**
* Converts an HSL color value to RGB.
*
* *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
* *Returns:* { r, g, b } in the set [0, 255]
*/
function hslToRgb(h, s, l) {
	let r;
	let g;
	let b;
	h = bound01(h, 360);
	s = bound01(s, 100);
	l = bound01(l, 100);
	if (s === 0) {
		g = l;
		b = l;
		r = l;
	} else {
		const q = l < .5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}
	return {
		r: r * 255,
		g: g * 255,
		b: b * 255
	};
}
/**
* Converts an RGB color value to HSV
*
* *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
* *Returns:* { h, s, v } in [0,1]
*/
function rgbToHsv(r, g, b) {
	r = bound01(r, 255);
	g = bound01(g, 255);
	b = bound01(b, 255);
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	const v = max;
	const d = max - min;
	const s = max === 0 ? 0 : d / max;
	if (max === min) h = 0;
	else {
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b: h = (r - g) / d + 4;
		}
		h /= 6;
	}
	return {
		h,
		s,
		v
	};
}
/**
* Converts an HSV color value to RGB.
*
* *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
* *Returns:* { r, g, b } in the set [0, 255]
*/
function hsvToRgb(h, s, v) {
	h = bound01(h, 360) * 6;
	s = bound01(s, 100);
	v = bound01(v, 100);
	const i = Math.floor(h);
	const f = h - i;
	const p = v * (1 - s);
	const q = v * (1 - f * s);
	const t = v * (1 - (1 - f) * s);
	const mod = i % 6;
	const r = [
		v,
		q,
		p,
		p,
		t,
		v
	][mod];
	const g = [
		t,
		v,
		v,
		q,
		p,
		p
	][mod];
	const b = [
		p,
		p,
		t,
		v,
		v,
		q
	][mod];
	return {
		r: r * 255,
		g: g * 255,
		b: b * 255
	};
}
/**
* Converts an RGB color to hex
*
* *Assumes:* r, g, and b are contained in the set [0, 255]
* *Returns:* a 3 or 6 character hex
*/
function rgbToHex(r, g, b, allow3Char) {
	const hex = [
		pad2(Math.round(r).toString(16)),
		pad2(Math.round(g).toString(16)),
		pad2(Math.round(b).toString(16))
	];
	if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
	return hex.join("");
}
/**
* Converts an RGBA color plus alpha transparency to hex
*
* *Assumes:* r, g, b are contained in the set [0, 255] and a in [0, 1]
* *Returns:* a 4 or 8 character rgba hex
*/
function rgbaToHex(r, g, b, a, allow4Char) {
	const hex = [
		pad2(Math.round(r).toString(16)),
		pad2(Math.round(g).toString(16)),
		pad2(Math.round(b).toString(16)),
		pad2(convertDecimalToHex(a))
	];
	if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
	return hex.join("");
}
/**
* Converts CMYK to RBG
* Assumes c, m, y, k are in the set [0, 100]
*/
function cmykToRgb(c, m, y, k) {
	const cConv = c / 100;
	const mConv = m / 100;
	const yConv = y / 100;
	const kConv = k / 100;
	return {
		r: 255 * (1 - cConv) * (1 - kConv),
		g: 255 * (1 - mConv) * (1 - kConv),
		b: 255 * (1 - yConv) * (1 - kConv)
	};
}
function rgbToCmyk(r, g, b) {
	let c = 1 - r / 255;
	let m = 1 - g / 255;
	let y = 1 - b / 255;
	let k = Math.min(c, m, y);
	if (k === 1) {
		c = 0;
		m = 0;
		y = 0;
	} else {
		c = (c - k) / (1 - k) * 100;
		m = (m - k) / (1 - k) * 100;
		y = (y - k) / (1 - k) * 100;
	}
	k *= 100;
	return {
		c: Math.round(c),
		m: Math.round(m),
		y: Math.round(y),
		k: Math.round(k)
	};
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
	return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
	return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
	return parseInt(val, 16);
}
function numberInputToObject(color) {
	return {
		r: color >> 16,
		g: (color & 65280) >> 8,
		b: color & 255
	};
}
/**
* @hidden
*/
var names = {
	aliceblue: "#f0f8ff",
	antiquewhite: "#faebd7",
	aqua: "#00ffff",
	aquamarine: "#7fffd4",
	azure: "#f0ffff",
	beige: "#f5f5dc",
	bisque: "#ffe4c4",
	black: "#000000",
	blanchedalmond: "#ffebcd",
	blue: "#0000ff",
	blueviolet: "#8a2be2",
	brown: "#a52a2a",
	burlywood: "#deb887",
	cadetblue: "#5f9ea0",
	chartreuse: "#7fff00",
	chocolate: "#d2691e",
	coral: "#ff7f50",
	cornflowerblue: "#6495ed",
	cornsilk: "#fff8dc",
	crimson: "#dc143c",
	cyan: "#00ffff",
	darkblue: "#00008b",
	darkcyan: "#008b8b",
	darkgoldenrod: "#b8860b",
	darkgray: "#a9a9a9",
	darkgreen: "#006400",
	darkgrey: "#a9a9a9",
	darkkhaki: "#bdb76b",
	darkmagenta: "#8b008b",
	darkolivegreen: "#556b2f",
	darkorange: "#ff8c00",
	darkorchid: "#9932cc",
	darkred: "#8b0000",
	darksalmon: "#e9967a",
	darkseagreen: "#8fbc8f",
	darkslateblue: "#483d8b",
	darkslategray: "#2f4f4f",
	darkslategrey: "#2f4f4f",
	darkturquoise: "#00ced1",
	darkviolet: "#9400d3",
	deeppink: "#ff1493",
	deepskyblue: "#00bfff",
	dimgray: "#696969",
	dimgrey: "#696969",
	dodgerblue: "#1e90ff",
	firebrick: "#b22222",
	floralwhite: "#fffaf0",
	forestgreen: "#228b22",
	fuchsia: "#ff00ff",
	gainsboro: "#dcdcdc",
	ghostwhite: "#f8f8ff",
	goldenrod: "#daa520",
	gold: "#ffd700",
	gray: "#808080",
	green: "#008000",
	greenyellow: "#adff2f",
	grey: "#808080",
	honeydew: "#f0fff0",
	hotpink: "#ff69b4",
	indianred: "#cd5c5c",
	indigo: "#4b0082",
	ivory: "#fffff0",
	khaki: "#f0e68c",
	lavenderblush: "#fff0f5",
	lavender: "#e6e6fa",
	lawngreen: "#7cfc00",
	lemonchiffon: "#fffacd",
	lightblue: "#add8e6",
	lightcoral: "#f08080",
	lightcyan: "#e0ffff",
	lightgoldenrodyellow: "#fafad2",
	lightgray: "#d3d3d3",
	lightgreen: "#90ee90",
	lightgrey: "#d3d3d3",
	lightpink: "#ffb6c1",
	lightsalmon: "#ffa07a",
	lightseagreen: "#20b2aa",
	lightskyblue: "#87cefa",
	lightslategray: "#778899",
	lightslategrey: "#778899",
	lightsteelblue: "#b0c4de",
	lightyellow: "#ffffe0",
	lime: "#00ff00",
	limegreen: "#32cd32",
	linen: "#faf0e6",
	magenta: "#ff00ff",
	maroon: "#800000",
	mediumaquamarine: "#66cdaa",
	mediumblue: "#0000cd",
	mediumorchid: "#ba55d3",
	mediumpurple: "#9370db",
	mediumseagreen: "#3cb371",
	mediumslateblue: "#7b68ee",
	mediumspringgreen: "#00fa9a",
	mediumturquoise: "#48d1cc",
	mediumvioletred: "#c71585",
	midnightblue: "#191970",
	mintcream: "#f5fffa",
	mistyrose: "#ffe4e1",
	moccasin: "#ffe4b5",
	navajowhite: "#ffdead",
	navy: "#000080",
	oldlace: "#fdf5e6",
	olive: "#808000",
	olivedrab: "#6b8e23",
	orange: "#ffa500",
	orangered: "#ff4500",
	orchid: "#da70d6",
	palegoldenrod: "#eee8aa",
	palegreen: "#98fb98",
	paleturquoise: "#afeeee",
	palevioletred: "#db7093",
	papayawhip: "#ffefd5",
	peachpuff: "#ffdab9",
	peru: "#cd853f",
	pink: "#ffc0cb",
	plum: "#dda0dd",
	powderblue: "#b0e0e6",
	purple: "#800080",
	rebeccapurple: "#663399",
	red: "#ff0000",
	rosybrown: "#bc8f8f",
	royalblue: "#4169e1",
	saddlebrown: "#8b4513",
	salmon: "#fa8072",
	sandybrown: "#f4a460",
	seagreen: "#2e8b57",
	seashell: "#fff5ee",
	sienna: "#a0522d",
	silver: "#c0c0c0",
	skyblue: "#87ceeb",
	slateblue: "#6a5acd",
	slategray: "#708090",
	slategrey: "#708090",
	snow: "#fffafa",
	springgreen: "#00ff7f",
	steelblue: "#4682b4",
	tan: "#d2b48c",
	teal: "#008080",
	thistle: "#d8bfd8",
	tomato: "#ff6347",
	turquoise: "#40e0d0",
	violet: "#ee82ee",
	wheat: "#f5deb3",
	white: "#ffffff",
	whitesmoke: "#f5f5f5",
	yellow: "#ffff00",
	yellowgreen: "#9acd32"
};
/**
* Given a string or object, convert that input to RGB
*
* Possible string inputs:
* ```
* "red"
* "#f00" or "f00"
* "#ff0000" or "ff0000"
* "#ff000000" or "ff000000"
* "rgb 255 0 0" or "rgb (255, 0, 0)"
* "rgb 1.0 0 0" or "rgb (1, 0, 0)"
* "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
* "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
* "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
* "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
* "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
* "cmyk(0, 20, 0, 0)" or "cmyk 0 20 0 0"
* ```
*/
function inputToRGB(color) {
	let rgb = {
		r: 0,
		g: 0,
		b: 0
	};
	let a = 1;
	let s = null;
	let v = null;
	let l = null;
	let ok = false;
	let format = false;
	if (typeof color === "string") color = stringInputToObject(color);
	if (typeof color === "object") {
		if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
			rgb = rgbToRgb(color.r, color.g, color.b);
			ok = true;
			format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
		} else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
			s = convertToPercentage(color.s);
			v = convertToPercentage(color.v);
			rgb = hsvToRgb(color.h, s, v);
			ok = true;
			format = "hsv";
		} else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
			s = convertToPercentage(color.s);
			l = convertToPercentage(color.l);
			rgb = hslToRgb(color.h, s, l);
			ok = true;
			format = "hsl";
		} else if (isValidCSSUnit(color.c) && isValidCSSUnit(color.m) && isValidCSSUnit(color.y) && isValidCSSUnit(color.k)) {
			rgb = cmykToRgb(color.c, color.m, color.y, color.k);
			ok = true;
			format = "cmyk";
		}
		if (Object.prototype.hasOwnProperty.call(color, "a")) a = color.a;
	}
	a = boundAlpha(a);
	return {
		ok,
		format: color.format || format,
		r: Math.min(255, Math.max(rgb.r, 0)),
		g: Math.min(255, Math.max(rgb.g, 0)),
		b: Math.min(255, Math.max(rgb.b, 0)),
		a
	};
}
var CSS_UNIT = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
	CSS_UNIT: new RegExp(CSS_UNIT),
	rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
	rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
	hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
	hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
	hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
	hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
	cmyk: new RegExp("cmyk" + PERMISSIVE_MATCH4),
	hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
/**
* Permissive string parsing.  Take in a number of formats, and output an object
* based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}` or `{c, m, y, k}` or `{c, m, y, k, a}`
*/
function stringInputToObject(color) {
	color = color.trim().toLowerCase();
	if (color.length === 0) return false;
	let named = false;
	if (names[color]) {
		color = names[color];
		named = true;
	} else if (color === "transparent") return {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
		format: "name"
	};
	let match = matchers.rgb.exec(color);
	if (match) return {
		r: match[1],
		g: match[2],
		b: match[3]
	};
	match = matchers.rgba.exec(color);
	if (match) return {
		r: match[1],
		g: match[2],
		b: match[3],
		a: match[4]
	};
	match = matchers.hsl.exec(color);
	if (match) return {
		h: match[1],
		s: match[2],
		l: match[3]
	};
	match = matchers.hsla.exec(color);
	if (match) return {
		h: match[1],
		s: match[2],
		l: match[3],
		a: match[4]
	};
	match = matchers.hsv.exec(color);
	if (match) return {
		h: match[1],
		s: match[2],
		v: match[3]
	};
	match = matchers.hsva.exec(color);
	if (match) return {
		h: match[1],
		s: match[2],
		v: match[3],
		a: match[4]
	};
	match = matchers.cmyk.exec(color);
	if (match) return {
		c: match[1],
		m: match[2],
		y: match[3],
		k: match[4]
	};
	match = matchers.hex8.exec(color);
	if (match) return {
		r: parseIntFromHex(match[1]),
		g: parseIntFromHex(match[2]),
		b: parseIntFromHex(match[3]),
		a: convertHexToDecimal(match[4]),
		format: named ? "name" : "hex8"
	};
	match = matchers.hex6.exec(color);
	if (match) return {
		r: parseIntFromHex(match[1]),
		g: parseIntFromHex(match[2]),
		b: parseIntFromHex(match[3]),
		format: named ? "name" : "hex"
	};
	match = matchers.hex4.exec(color);
	if (match) return {
		r: parseIntFromHex(match[1] + match[1]),
		g: parseIntFromHex(match[2] + match[2]),
		b: parseIntFromHex(match[3] + match[3]),
		a: convertHexToDecimal(match[4] + match[4]),
		format: named ? "name" : "hex8"
	};
	match = matchers.hex3.exec(color);
	if (match) return {
		r: parseIntFromHex(match[1] + match[1]),
		g: parseIntFromHex(match[2] + match[2]),
		b: parseIntFromHex(match[3] + match[3]),
		format: named ? "name" : "hex"
	};
	return false;
}
/**
* Check to see if it looks like a CSS unit
* (see `matchers` above for definition).
*/
function isValidCSSUnit(color) {
	if (typeof color === "number") return !Number.isNaN(color);
	return matchers.CSS_UNIT.test(color);
}
var TinyColor = class TinyColor {
	constructor(color = "", opts = {}) {
		if (color instanceof TinyColor) return color;
		if (typeof color === "number") color = numberInputToObject(color);
		this.originalInput = color;
		const rgb = inputToRGB(color);
		this.originalInput = color;
		this.r = rgb.r;
		this.g = rgb.g;
		this.b = rgb.b;
		this.a = rgb.a;
		this.roundA = Math.round(100 * this.a) / 100;
		this.format = opts.format ?? rgb.format;
		this.gradientType = opts.gradientType;
		if (this.r < 1) this.r = Math.round(this.r);
		if (this.g < 1) this.g = Math.round(this.g);
		if (this.b < 1) this.b = Math.round(this.b);
		this.isValid = rgb.ok;
	}
	isDark() {
		return this.getBrightness() < 128;
	}
	isLight() {
		return !this.isDark();
	}
	/**
	* Returns the perceived brightness of the color, from 0-255.
	*/
	getBrightness() {
		const rgb = this.toRgb();
		return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
	}
	/**
	* Returns the perceived luminance of a color, from 0-1.
	*/
	getLuminance() {
		const rgb = this.toRgb();
		let R;
		let G;
		let B;
		const RsRGB = rgb.r / 255;
		const GsRGB = rgb.g / 255;
		const BsRGB = rgb.b / 255;
		if (RsRGB <= .03928) R = RsRGB / 12.92;
		else R = Math.pow((RsRGB + .055) / 1.055, 2.4);
		if (GsRGB <= .03928) G = GsRGB / 12.92;
		else G = Math.pow((GsRGB + .055) / 1.055, 2.4);
		if (BsRGB <= .03928) B = BsRGB / 12.92;
		else B = Math.pow((BsRGB + .055) / 1.055, 2.4);
		return .2126 * R + .7152 * G + .0722 * B;
	}
	/**
	* Returns the alpha value of a color, from 0-1.
	*/
	getAlpha() {
		return this.a;
	}
	/**
	* Sets the alpha value on the current color.
	*
	* @param alpha - The new alpha value. The accepted range is 0-1.
	*/
	setAlpha(alpha) {
		this.a = boundAlpha(alpha);
		this.roundA = Math.round(100 * this.a) / 100;
		return this;
	}
	/**
	* Returns whether the color is monochrome.
	*/
	isMonochrome() {
		const { s } = this.toHsl();
		return s === 0;
	}
	/**
	* Returns the object as a HSVA object.
	*/
	toHsv() {
		const hsv = rgbToHsv(this.r, this.g, this.b);
		return {
			h: hsv.h * 360,
			s: hsv.s,
			v: hsv.v,
			a: this.a
		};
	}
	/**
	* Returns the hsva values interpolated into a string with the following format:
	* "hsva(xxx, xxx, xxx, xx)".
	*/
	toHsvString() {
		const hsv = rgbToHsv(this.r, this.g, this.b);
		const h = Math.round(hsv.h * 360);
		const s = Math.round(hsv.s * 100);
		const v = Math.round(hsv.v * 100);
		return this.a === 1 ? `hsv(${h}, ${s}%, ${v}%)` : `hsva(${h}, ${s}%, ${v}%, ${this.roundA})`;
	}
	/**
	* Returns the object as a HSLA object.
	*/
	toHsl() {
		const hsl = rgbToHsl(this.r, this.g, this.b);
		return {
			h: hsl.h * 360,
			s: hsl.s,
			l: hsl.l,
			a: this.a
		};
	}
	/**
	* Returns the hsla values interpolated into a string with the following format:
	* "hsla(xxx, xxx, xxx, xx)".
	*/
	toHslString() {
		const hsl = rgbToHsl(this.r, this.g, this.b);
		const h = Math.round(hsl.h * 360);
		const s = Math.round(hsl.s * 100);
		const l = Math.round(hsl.l * 100);
		return this.a === 1 ? `hsl(${h}, ${s}%, ${l}%)` : `hsla(${h}, ${s}%, ${l}%, ${this.roundA})`;
	}
	/**
	* Returns the hex value of the color.
	* @param allow3Char will shorten hex value to 3 char if possible
	*/
	toHex(allow3Char = false) {
		return rgbToHex(this.r, this.g, this.b, allow3Char);
	}
	/**
	* Returns the hex value of the color -with a # prefixed.
	* @param allow3Char will shorten hex value to 3 char if possible
	*/
	toHexString(allow3Char = false) {
		return "#" + this.toHex(allow3Char);
	}
	/**
	* Returns the hex 8 value of the color.
	* @param allow4Char will shorten hex value to 4 char if possible
	*/
	toHex8(allow4Char = false) {
		return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
	}
	/**
	* Returns the hex 8 value of the color -with a # prefixed.
	* @param allow4Char will shorten hex value to 4 char if possible
	*/
	toHex8String(allow4Char = false) {
		return "#" + this.toHex8(allow4Char);
	}
	/**
	* Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
	* @param allowShortChar will shorten hex value to 3 or 4 char if possible
	*/
	toHexShortString(allowShortChar = false) {
		return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
	}
	/**
	* Returns the object as a RGBA object.
	*/
	toRgb() {
		return {
			r: Math.round(this.r),
			g: Math.round(this.g),
			b: Math.round(this.b),
			a: this.a
		};
	}
	/**
	* Returns the RGBA values interpolated into a string with the following format:
	* "RGBA(xxx, xxx, xxx, xx)".
	*/
	toRgbString() {
		const r = Math.round(this.r);
		const g = Math.round(this.g);
		const b = Math.round(this.b);
		return this.a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${this.roundA})`;
	}
	/**
	* Returns the object as a RGBA object.
	*/
	toPercentageRgb() {
		const fmt = (x) => `${Math.round(bound01(x, 255) * 100)}%`;
		return {
			r: fmt(this.r),
			g: fmt(this.g),
			b: fmt(this.b),
			a: this.a
		};
	}
	/**
	* Returns the RGBA relative values interpolated into a string
	*/
	toPercentageRgbString() {
		const rnd = (x) => Math.round(bound01(x, 255) * 100);
		return this.a === 1 ? `rgb(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%)` : `rgba(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%, ${this.roundA})`;
	}
	toCmyk() {
		return { ...rgbToCmyk(this.r, this.g, this.b) };
	}
	toCmykString() {
		const { c, m, y, k } = rgbToCmyk(this.r, this.g, this.b);
		return `cmyk(${c}, ${m}, ${y}, ${k})`;
	}
	/**
	* The 'real' name of the color -if there is one.
	*/
	toName() {
		if (this.a === 0) return "transparent";
		if (this.a < 1) return false;
		const hex = "#" + rgbToHex(this.r, this.g, this.b, false);
		for (const [key, value] of Object.entries(names)) if (hex === value) return key;
		return false;
	}
	toString(format) {
		const formatSet = Boolean(format);
		format = format ?? this.format;
		let formattedString = false;
		const hasAlpha = this.a < 1 && this.a >= 0;
		if (!formatSet && hasAlpha && (format.startsWith("hex") || format === "name")) {
			if (format === "name" && this.a === 0) return this.toName();
			return this.toRgbString();
		}
		if (format === "rgb") formattedString = this.toRgbString();
		if (format === "prgb") formattedString = this.toPercentageRgbString();
		if (format === "hex" || format === "hex6") formattedString = this.toHexString();
		if (format === "hex3") formattedString = this.toHexString(true);
		if (format === "hex4") formattedString = this.toHex8String(true);
		if (format === "hex8") formattedString = this.toHex8String();
		if (format === "name") formattedString = this.toName();
		if (format === "hsl") formattedString = this.toHslString();
		if (format === "hsv") formattedString = this.toHsvString();
		if (format === "cmyk") formattedString = this.toCmykString();
		return formattedString || this.toHexString();
	}
	toNumber() {
		return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
	}
	clone() {
		return new TinyColor(this.toString());
	}
	/**
	* Lighten the color a given amount. Providing 100 will always return white.
	* @param amount - valid between 1-100
	*/
	lighten(amount = 10) {
		const hsl = this.toHsl();
		hsl.l += amount / 100;
		hsl.l = clamp01(hsl.l);
		return new TinyColor(hsl);
	}
	/**
	* Brighten the color a given amount, from 0 to 100.
	* @param amount - valid between 1-100
	*/
	brighten(amount = 10) {
		const rgb = this.toRgb();
		rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
		rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
		rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
		return new TinyColor(rgb);
	}
	/**
	* Darken the color a given amount, from 0 to 100.
	* Providing 100 will always return black.
	* @param amount - valid between 1-100
	*/
	darken(amount = 10) {
		const hsl = this.toHsl();
		hsl.l -= amount / 100;
		hsl.l = clamp01(hsl.l);
		return new TinyColor(hsl);
	}
	/**
	* Mix the color with pure white, from 0 to 100.
	* Providing 0 will do nothing, providing 100 will always return white.
	* @param amount - valid between 1-100
	*/
	tint(amount = 10) {
		return this.mix("white", amount);
	}
	/**
	* Mix the color with pure black, from 0 to 100.
	* Providing 0 will do nothing, providing 100 will always return black.
	* @param amount - valid between 1-100
	*/
	shade(amount = 10) {
		return this.mix("black", amount);
	}
	/**
	* Desaturate the color a given amount, from 0 to 100.
	* Providing 100 will is the same as calling greyscale
	* @param amount - valid between 1-100
	*/
	desaturate(amount = 10) {
		const hsl = this.toHsl();
		hsl.s -= amount / 100;
		hsl.s = clamp01(hsl.s);
		return new TinyColor(hsl);
	}
	/**
	* Saturate the color a given amount, from 0 to 100.
	* @param amount - valid between 1-100
	*/
	saturate(amount = 10) {
		const hsl = this.toHsl();
		hsl.s += amount / 100;
		hsl.s = clamp01(hsl.s);
		return new TinyColor(hsl);
	}
	/**
	* Completely desaturates a color into greyscale.
	* Same as calling `desaturate(100)`
	*/
	greyscale() {
		return this.desaturate(100);
	}
	/**
	* Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
	* Values outside of this range will be wrapped into this range.
	*/
	spin(amount) {
		const hsl = this.toHsl();
		const hue = (hsl.h + amount) % 360;
		hsl.h = hue < 0 ? 360 + hue : hue;
		return new TinyColor(hsl);
	}
	/**
	* Mix the current color a given amount with another color, from 0 to 100.
	* 0 means no mixing (return current color).
	*/
	mix(color, amount = 50) {
		const rgb1 = this.toRgb();
		const rgb2 = new TinyColor(color).toRgb();
		const p = amount / 100;
		const rgba = {
			r: (rgb2.r - rgb1.r) * p + rgb1.r,
			g: (rgb2.g - rgb1.g) * p + rgb1.g,
			b: (rgb2.b - rgb1.b) * p + rgb1.b,
			a: (rgb2.a - rgb1.a) * p + rgb1.a
		};
		return new TinyColor(rgba);
	}
	analogous(results = 6, slices = 30) {
		const hsl = this.toHsl();
		const part = 360 / slices;
		const ret = [this];
		for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
			hsl.h = (hsl.h + part) % 360;
			ret.push(new TinyColor(hsl));
		}
		return ret;
	}
	/**
	* taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
	*/
	complement() {
		const hsl = this.toHsl();
		hsl.h = (hsl.h + 180) % 360;
		return new TinyColor(hsl);
	}
	monochromatic(results = 6) {
		const hsv = this.toHsv();
		const { h } = hsv;
		const { s } = hsv;
		let { v } = hsv;
		const res = [];
		const modification = 1 / results;
		while (results--) {
			res.push(new TinyColor({
				h,
				s,
				v
			}));
			v = (v + modification) % 1;
		}
		return res;
	}
	splitcomplement() {
		const hsl = this.toHsl();
		const { h } = hsl;
		return [
			this,
			new TinyColor({
				h: (h + 72) % 360,
				s: hsl.s,
				l: hsl.l
			}),
			new TinyColor({
				h: (h + 216) % 360,
				s: hsl.s,
				l: hsl.l
			})
		];
	}
	/**
	* Compute how the color would appear on a background
	*/
	onBackground(background) {
		const fg = this.toRgb();
		const bg = new TinyColor(background).toRgb();
		const alpha = fg.a + bg.a * (1 - fg.a);
		return new TinyColor({
			r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
			g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
			b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
			a: alpha
		});
	}
	/**
	* Alias for `polyad(3)`
	*/
	triad() {
		return this.polyad(3);
	}
	/**
	* Alias for `polyad(4)`
	*/
	tetrad() {
		return this.polyad(4);
	}
	/**
	* Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
	* monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
	*/
	polyad(n) {
		const hsl = this.toHsl();
		const { h } = hsl;
		const result = [this];
		const increment = 360 / n;
		for (let i = 1; i < n; i++) result.push(new TinyColor({
			h: (h + i * increment) % 360,
			s: hsl.s,
			l: hsl.l
		}));
		return result;
	}
	/**
	* compare color vs current color
	*/
	equals(color) {
		const comparedColor = new TinyColor(color);
		/**
		* RGB and CMYK do not have the same color gamut, so a CMYK conversion will never be 100%.
		* This means we need to compare CMYK to CMYK to ensure accuracy of the equals function.
		*/
		if (this.format === "cmyk" || comparedColor.format === "cmyk") return this.toCmykString() === comparedColor.toCmykString();
		return this.toRgbString() === comparedColor.toRgbString();
	}
};
function darken(color, amount = 20) {
	return color.mix("#141414", amount).toString();
}
function useButtonCustomStyle(props) {
	const _disabled = useFormDisabled();
	const ns = useNamespace("button");
	return computed(() => {
		let styles = {};
		let buttonColor = props.color;
		if (buttonColor) {
			const match = buttonColor.match(/var\((.*?)\)/);
			if (match) buttonColor = window.getComputedStyle(window.document.documentElement).getPropertyValue(match[1]);
			const color = new TinyColor(buttonColor);
			const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
			if (props.plain) {
				styles = ns.cssVarBlock({
					"bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
					"text-color": buttonColor,
					"border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
					"hover-text-color": `var(${ns.cssVarName("color-white")})`,
					"hover-bg-color": buttonColor,
					"hover-border-color": buttonColor,
					"active-bg-color": activeBgColor,
					"active-text-color": `var(${ns.cssVarName("color-white")})`,
					"active-border-color": activeBgColor
				});
				if (_disabled.value) {
					styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
					styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
					styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
				}
			} else if (props.link || props.text) {
				const hoverColor = props.dark ? darken(color, 30) : color.tint(30).toString();
				styles = ns.cssVarBlock({
					"text-color": buttonColor,
					"hover-text-color": hoverColor,
					"active-text-color": activeBgColor
				});
				if (props.link) {
					styles[ns.cssVarBlockName("hover-link-text-color")] = hoverColor;
					styles[ns.cssVarBlockName("active-color")] = activeBgColor;
				}
				if (_disabled.value) {
					const disabledColor = props.dark ? darken(color, 50) : color.tint(50).toString();
					styles[ns.cssVarBlockName("disabled-bg-color")] = "transparent";
					styles[ns.cssVarBlockName("disabled-text-color")] = disabledColor;
					styles[ns.cssVarBlockName("disabled-border-color")] = "transparent";
				}
			} else {
				const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
				const textColor = color.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
				styles = ns.cssVarBlock({
					"bg-color": buttonColor,
					"text-color": textColor,
					"border-color": buttonColor,
					"hover-bg-color": hoverBgColor,
					"hover-text-color": textColor,
					"hover-border-color": hoverBgColor,
					"active-bg-color": activeBgColor,
					"active-border-color": activeBgColor
				});
				if (_disabled.value) {
					const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
					styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
					styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
					styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
				}
			}
		}
		return styles;
	});
}
var button_default = /* @__PURE__ */ defineComponent({
	name: "ElButton",
	__name: "button",
	props: buttonProps,
	emits: buttonEmits,
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const buttonStyle = useButtonCustomStyle(props);
		const ns = useNamespace("button");
		const { _ref, _size, _type, _disabled, _props, _plain, _round, _text, _dashed, shouldAddSpace, handleClick } = useButton(props, emit);
		const buttonKls = computed(() => [
			ns.b(),
			ns.m(_type.value),
			ns.m(_size.value),
			ns.is("disabled", _disabled.value),
			ns.is("loading", props.loading),
			ns.is("plain", _plain.value),
			ns.is("round", _round.value),
			ns.is("circle", props.circle),
			ns.is("text", _text.value),
			ns.is("dashed", _dashed.value),
			ns.is("link", props.link),
			ns.is("has-bg", props.bg)
		]);
		__expose({
			/** @description button html element */
			ref: _ref,
			/** @description button size */
			size: _size,
			/** @description button type */
			type: _type,
			/** @description button disabled */
			disabled: _disabled,
			/** @description whether adding space */
			shouldAddSpace
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({
				ref_key: "_ref",
				ref: _ref
			}, unref(_props), {
				class: buttonKls.value,
				style: unref(buttonStyle),
				onClick: unref(handleClick)
			}), {
				default: withCtx(() => [__props.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [_ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(ElIcon), {
					key: 1,
					class: normalizeClass(unref(ns).is("loading"))
				}, {
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.loadingIcon)))]),
					_: 1
				}, 8, ["class"]))], 64)) : __props.icon || _ctx.$slots.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
					default: withCtx(() => [__props.icon ? (openBlock(), createBlock(resolveDynamicComponent(__props.icon), { key: 0 })) : renderSlot(_ctx.$slots, "icon", { key: 1 })]),
					_: 3
				})) : createCommentVNode("v-if", true), _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
					key: 2,
					class: normalizeClass({ [unref(ns).em("text", "expand")]: unref(shouldAddSpace) })
				}, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("v-if", true)]),
				_: 3
			}, 16, [
				"class",
				"style",
				"onClick"
			]);
		};
	}
});
/**
* @deprecated Removed after 3.0.0, Use `ButtonGroupProps` instead.
*/
var buttonGroupProps = {
	/**
	* @description control the size of buttons in this button-group
	*/
	size: buttonProps.size,
	/**
	* @description control the type of buttons in this button-group
	*/
	type: buttonProps.type,
	/**
	* @description display direction
	*/
	direction: {
		type: definePropType(String),
		values: ["horizontal", "vertical"],
		default: "horizontal"
	}
};
var button_group_default = /* @__PURE__ */ defineComponent({
	name: "ElButtonGroup",
	__name: "button-group",
	props: buttonGroupProps,
	setup(__props) {
		const props = __props;
		provide(buttonGroupContextKey, reactive({
			size: toRef(props, "size"),
			type: toRef(props, "type")
		}));
		const ns = useNamespace("button");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([unref(ns).b("group"), unref(ns).bm("group", props.direction)]) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
var ElButton = withInstall(button_default, { ButtonGroup: button_group_default });
withNoopInstall(button_group_default);
_css(":root{--el-color-white:#fff;--el-color-black:#000;--el-color-primary-rgb:64, 158, 255;--el-color-success-rgb:103, 194, 58;--el-color-warning-rgb:230, 162, 60;--el-color-danger-rgb:245, 108, 108;--el-color-error-rgb:245, 108, 108;--el-color-info-rgb:144, 147, 153;--el-font-size-extra-large:20px;--el-font-size-large:18px;--el-font-size-medium:16px;--el-font-size-base:14px;--el-font-size-small:13px;--el-font-size-extra-small:12px;--el-font-family:\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"微软雅黑\", Arial, sans-serif;--el-font-weight-primary:500;--el-font-line-height-primary:24px;--el-index-normal:1;--el-index-top:1000;--el-index-popper:2000;--el-border-radius-base:4px;--el-border-radius-small:2px;--el-border-radius-round:20px;--el-border-radius-circle:100%;--el-transition-duration:.3s;--el-transition-duration-fast:.2s;--el-transition-function-ease-in-out-bezier:cubic-bezier(.645, .045, .355, 1);--el-transition-function-fast-bezier:cubic-bezier(.23, 1, .32, 1);--el-transition-all:all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);--el-transition-fade:opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-md-fade:transform var(--el-transition-duration) var(--el-transition-function-fast-bezier), opacity var(--el-transition-duration) var(--el-transition-function-fast-bezier);--el-transition-fade-linear:opacity var(--el-transition-duration-fast) linear;--el-transition-border:border-color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-box-shadow:box-shadow var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-transition-color:color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);--el-component-size-large:40px;--el-component-size:32px;--el-component-size-small:24px;--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light;--el-color-primary:#409eff;--el-color-primary-light-3:#79bbff;--el-color-primary-light-5:#a0cfff;--el-color-primary-light-7:#c6e2ff;--el-color-primary-light-8:#d9ecff;--el-color-primary-light-9:#ecf5ff;--el-color-primary-dark-2:#337ecc;--el-color-success:#67c23a;--el-color-success-light-3:#95d475;--el-color-success-light-5:#b3e19d;--el-color-success-light-7:#d1edc4;--el-color-success-light-8:#e1f3d8;--el-color-success-light-9:#f0f9eb;--el-color-success-dark-2:#529b2e;--el-color-warning:#e6a23c;--el-color-warning-light-3:#eebe77;--el-color-warning-light-5:#f3d19e;--el-color-warning-light-7:#f8e3c5;--el-color-warning-light-8:#faecd8;--el-color-warning-light-9:#fdf6ec;--el-color-warning-dark-2:#b88230;--el-color-danger:#f56c6c;--el-color-danger-light-3:#f89898;--el-color-danger-light-5:#fab6b6;--el-color-danger-light-7:#fcd3d3;--el-color-danger-light-8:#fde2e2;--el-color-danger-light-9:#fef0f0;--el-color-danger-dark-2:#c45656;--el-color-error:#f56c6c;--el-color-error-light-3:#f89898;--el-color-error-light-5:#fab6b6;--el-color-error-light-7:#fcd3d3;--el-color-error-light-8:#fde2e2;--el-color-error-light-9:#fef0f0;--el-color-error-dark-2:#c45656;--el-color-info:#909399;--el-color-info-light-3:#b1b3b8;--el-color-info-light-5:#c8c9cc;--el-color-info-light-7:#dedfe0;--el-color-info-light-8:#e9e9eb;--el-color-info-light-9:#f4f4f5;--el-color-info-dark-2:#73767a;--el-bg-color:#fff;--el-bg-color-page:#f2f3f5;--el-bg-color-overlay:#fff;--el-text-color-primary:#303133;--el-text-color-regular:#606266;--el-text-color-secondary:#909399;--el-text-color-placeholder:#a8abb2;--el-text-color-disabled:#c0c4cc;--el-border-color:#dcdfe6;--el-border-color-light:#e4e7ed;--el-border-color-lighter:#ebeef5;--el-border-color-extra-light:#f2f6fc;--el-border-color-dark:#d4d7de;--el-border-color-darker:#cdd0d6;--el-fill-color:#f0f2f5;--el-fill-color-light:#f5f7fa;--el-fill-color-lighter:#fafafa;--el-fill-color-extra-light:#fafcff;--el-fill-color-dark:#ebedf0;--el-fill-color-darker:#e6e8eb;--el-fill-color-blank:#fff;--el-box-shadow:0px 12px 32px 4px #0000000a, 0px 8px 20px #00000014;--el-box-shadow-light:0px 0px 12px #0000001f;--el-box-shadow-lighter:0px 0px 6px #0000001f;--el-box-shadow-dark:0px 16px 48px 16px #00000014, 0px 12px 32px #0000001f, 0px 8px 16px -8px #00000029;--el-disabled-bg-color:var(--el-fill-color-light);--el-disabled-text-color:var(--el-text-color-placeholder);--el-disabled-border-color:var(--el-border-color-light);--el-overlay-color:#000c;--el-overlay-color-light:#000000b3;--el-overlay-color-lighter:#00000080;--el-mask-color:#ffffffe6;--el-mask-color-extra-light:#ffffff4d;--el-border-width:1px;--el-border-style:solid;--el-border-color-hover:var(--el-text-color-disabled);--el-border:var(--el-border-width) var(--el-border-style) var(--el-border-color);--el-svg-monochrome-grey:var(--el-border-color)}.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:top;transform:scaleY(1)}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:bottom;transform:scaleY(1)}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transition:var(--el-transition-md-fade);transform-origin:0 0;transform:scale(1)}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out, var(--el-transition-duration) padding-top ease-in-out, var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-leave-active,.el-collapse-transition-enter-active{transition:var(--el-transition-duration) max-height ease-in-out, var(--el-transition-duration) padding-top ease-in-out, var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out, var(--el-transition-duration) padding-left ease-in-out, var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55, 0, .1, 1)}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@keyframes rotating{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.el-icon{--color:inherit;fill:currentColor;width:1em;height:1em;color:var(--color);line-height:1em;font-size:inherit;justify-content:center;align-items:center;display:inline-flex;position:relative}.el-icon.is-loading{animation:2s linear infinite rotating}.el-icon svg{width:1em;height:1em}");
_css(".el-button{--el-button-font-weight:var(--el-font-weight-primary);--el-button-border-color:var(--el-border-color);--el-button-bg-color:var(--el-fill-color-blank);--el-button-text-color:var(--el-text-color-regular);--el-button-disabled-text-color:var(--el-disabled-text-color);--el-button-disabled-bg-color:var(--el-fill-color-blank);--el-button-disabled-border-color:var(--el-border-color-light);--el-button-divide-border-color:#ffffff80;--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-color-primary-light-9);--el-button-hover-border-color:var(--el-color-primary-light-7);--el-button-active-text-color:var(--el-button-hover-text-color);--el-button-active-border-color:var(--el-color-primary);--el-button-active-bg-color:var(--el-button-hover-bg-color);--el-button-outline-color:var(--el-color-primary-light-5);--el-button-hover-link-text-color:var(--el-text-color-secondary);--el-button-active-color:var(--el-text-color-primary);white-space:nowrap;cursor:pointer;height:32px;color:var(--el-button-text-color);text-align:center;box-sizing:border-box;line-height:1;font-weight:var(--el-button-font-weight);-webkit-user-select:none;user-select:none;vertical-align:middle;-webkit-appearance:none;background-color:var(--el-button-bg-color);border:var(--el-border);border-color:var(--el-button-border-color);outline:none;justify-content:center;align-items:center;transition:all .1s;display:inline-flex}.el-button:hover{color:var(--el-button-hover-text-color);border-color:var(--el-button-hover-border-color);background-color:var(--el-button-hover-bg-color);outline:none}.el-button:active{color:var(--el-button-active-text-color);border-color:var(--el-button-active-border-color);background-color:var(--el-button-active-bg-color);outline:none}.el-button:focus-visible{outline:2px solid var(--el-button-outline-color);outline-offset:1px;transition:outline-offset,outline}.el-button>span{align-items:center;display:inline-flex}.el-button+.el-button{margin-left:12px}.el-button{font-size:var(--el-font-size-base);border-radius:var(--el-border-radius-base);padding:8px 15px}.el-button.is-round{padding:8px 15px}.el-button::-moz-focus-inner{border:0}.el-button [class*=el-icon]+span{margin-left:6px}.el-button [class*=el-icon] svg{vertical-align:bottom}.el-button.is-plain{--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-fill-color-blank);--el-button-hover-border-color:var(--el-color-primary)}.el-button.is-active{color:var(--el-button-active-text-color);border-color:var(--el-button-active-border-color);background-color:var(--el-button-active-bg-color);outline:none}.el-button.is-disabled,.el-button.is-disabled:hover{color:var(--el-button-disabled-text-color);cursor:not-allowed;background-image:none;background-color:var(--el-button-disabled-bg-color);border-color:var(--el-button-disabled-border-color)}.el-button.is-loading{pointer-events:none;position:relative}.el-button.is-loading:before{z-index:1;pointer-events:none;content:\"\";border-radius:inherit;background-color:var(--el-mask-color-extra-light);position:absolute;inset:-1px}.el-button.is-round{border-radius:var(--el-border-radius-round)}.el-button.is-dashed{--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-fill-color-blank);--el-button-hover-border-color:var(--el-color-primary);border-style:dashed}.el-button.is-circle{border-radius:50%;width:32px;padding:8px}.el-button.is-text{color:var(--el-button-text-color);background-color:#0000;border:0 solid #0000}.el-button.is-text.is-disabled{color:var(--el-button-disabled-text-color);background-color:#0000!important}.el-button.is-text:not(.is-disabled):hover{background-color:var(--el-fill-color-light)}.el-button.is-text:not(.is-disabled):focus-visible{outline:2px solid var(--el-button-outline-color);outline-offset:1px;transition:outline-offset,outline}.el-button.is-text:not(.is-disabled):active{background-color:var(--el-fill-color)}.el-button.is-text:not(.is-disabled).is-has-bg{background-color:var(--el-fill-color-light)}.el-button.is-text:not(.is-disabled).is-has-bg:hover{background-color:var(--el-fill-color)}.el-button.is-text:not(.is-disabled).is-has-bg:active{background-color:var(--el-fill-color-dark)}.el-button__text--expand{letter-spacing:.3em;margin-right:-.3em}.el-button.is-link{color:var(--el-button-text-color);background:0 0;border-color:#0000;height:auto;padding:2px}.el-button.is-link:hover{color:var(--el-button-hover-link-text-color)}.el-button.is-link.is-disabled{color:var(--el-button-disabled-text-color);background-color:#0000!important;border-color:#0000!important}.el-button.is-link:not(.is-disabled):hover{background-color:#0000;border-color:#0000}.el-button.is-link:not(.is-disabled):active{color:var(--el-button-active-color);background-color:#0000;border-color:#0000}.el-button--text{color:var(--el-color-primary);background:0 0;border-color:#0000;padding-left:0;padding-right:0}.el-button--text.is-disabled{color:var(--el-button-disabled-text-color);background-color:#0000!important;border-color:#0000!important}.el-button--text:not(.is-disabled):hover{color:var(--el-color-primary-light-3);background-color:#0000;border-color:#0000}.el-button--text:not(.is-disabled):active{color:var(--el-color-primary-dark-2);background-color:#0000;border-color:#0000}.el-button__link--expand{letter-spacing:.3em;margin-right:-.3em}.el-button--primary{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-primary);--el-button-border-color:var(--el-color-primary);--el-button-outline-color:var(--el-color-primary-light-5);--el-button-active-color:var(--el-color-primary-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-primary-light-5);--el-button-hover-bg-color:var(--el-color-primary-light-3);--el-button-hover-border-color:var(--el-color-primary-light-3);--el-button-active-bg-color:var(--el-color-primary-dark-2);--el-button-active-border-color:var(--el-color-primary-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-primary-light-5);--el-button-disabled-border-color:var(--el-color-primary-light-5)}.el-button--primary.is-plain,.el-button--primary.is-text,.el-button--primary.is-link{--el-button-text-color:var(--el-color-primary);--el-button-bg-color:var(--el-color-primary-light-9);--el-button-border-color:var(--el-color-primary-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-primary);--el-button-hover-border-color:var(--el-color-primary);--el-button-active-text-color:var(--el-color-white)}.el-button--primary.is-plain.is-disabled,.el-button--primary.is-plain.is-disabled:hover,.el-button--primary.is-plain.is-disabled:focus,.el-button--primary.is-plain.is-disabled:active,.el-button--primary.is-text.is-disabled,.el-button--primary.is-text.is-disabled:hover,.el-button--primary.is-text.is-disabled:focus,.el-button--primary.is-text.is-disabled:active,.el-button--primary.is-link.is-disabled,.el-button--primary.is-link.is-disabled:hover,.el-button--primary.is-link.is-disabled:focus,.el-button--primary.is-link.is-disabled:active{color:var(--el-color-primary-light-5);background-color:var(--el-color-primary-light-9);border-color:var(--el-color-primary-light-8)}.el-button--primary.is-dashed{--el-button-text-color:var(--el-color-primary);--el-button-bg-color:var(--el-color-primary-light-9);--el-button-border-color:var(--el-color-primary-light-5);--el-button-hover-text-color:var(--el-color-primary);--el-button-hover-bg-color:var(--el-color-primary-light-9);--el-button-hover-border-color:var(--el-color-primary-light-3);--el-button-active-text-color:var(--el-color-primary-dark-2);--el-button-active-bg-color:var(--el-color-primary-light-9);--el-button-active-border-color:var(--el-color-primary-dark-2)}.el-button--primary.is-dashed.is-disabled,.el-button--primary.is-dashed.is-disabled:hover,.el-button--primary.is-dashed.is-disabled:focus,.el-button--primary.is-dashed.is-disabled:active{color:var(--el-color-primary-light-5);background-color:var(--el-color-primary-light-9);border-color:var(--el-color-primary-light-8)}.el-button--success{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-success);--el-button-border-color:var(--el-color-success);--el-button-outline-color:var(--el-color-success-light-5);--el-button-active-color:var(--el-color-success-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-success-light-5);--el-button-hover-bg-color:var(--el-color-success-light-3);--el-button-hover-border-color:var(--el-color-success-light-3);--el-button-active-bg-color:var(--el-color-success-dark-2);--el-button-active-border-color:var(--el-color-success-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-success-light-5);--el-button-disabled-border-color:var(--el-color-success-light-5)}.el-button--success.is-plain,.el-button--success.is-text,.el-button--success.is-link{--el-button-text-color:var(--el-color-success);--el-button-bg-color:var(--el-color-success-light-9);--el-button-border-color:var(--el-color-success-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-success);--el-button-hover-border-color:var(--el-color-success);--el-button-active-text-color:var(--el-color-white)}.el-button--success.is-plain.is-disabled,.el-button--success.is-plain.is-disabled:hover,.el-button--success.is-plain.is-disabled:focus,.el-button--success.is-plain.is-disabled:active,.el-button--success.is-text.is-disabled,.el-button--success.is-text.is-disabled:hover,.el-button--success.is-text.is-disabled:focus,.el-button--success.is-text.is-disabled:active,.el-button--success.is-link.is-disabled,.el-button--success.is-link.is-disabled:hover,.el-button--success.is-link.is-disabled:focus,.el-button--success.is-link.is-disabled:active{color:var(--el-color-success-light-5);background-color:var(--el-color-success-light-9);border-color:var(--el-color-success-light-8)}.el-button--success.is-dashed{--el-button-text-color:var(--el-color-success);--el-button-bg-color:var(--el-color-success-light-9);--el-button-border-color:var(--el-color-success-light-5);--el-button-hover-text-color:var(--el-color-success);--el-button-hover-bg-color:var(--el-color-success-light-9);--el-button-hover-border-color:var(--el-color-success-light-3);--el-button-active-text-color:var(--el-color-success-dark-2);--el-button-active-bg-color:var(--el-color-success-light-9);--el-button-active-border-color:var(--el-color-success-dark-2)}.el-button--success.is-dashed.is-disabled,.el-button--success.is-dashed.is-disabled:hover,.el-button--success.is-dashed.is-disabled:focus,.el-button--success.is-dashed.is-disabled:active{color:var(--el-color-success-light-5);background-color:var(--el-color-success-light-9);border-color:var(--el-color-success-light-8)}.el-button--warning{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-warning);--el-button-border-color:var(--el-color-warning);--el-button-outline-color:var(--el-color-warning-light-5);--el-button-active-color:var(--el-color-warning-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-warning-light-5);--el-button-hover-bg-color:var(--el-color-warning-light-3);--el-button-hover-border-color:var(--el-color-warning-light-3);--el-button-active-bg-color:var(--el-color-warning-dark-2);--el-button-active-border-color:var(--el-color-warning-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-warning-light-5);--el-button-disabled-border-color:var(--el-color-warning-light-5)}.el-button--warning.is-plain,.el-button--warning.is-text,.el-button--warning.is-link{--el-button-text-color:var(--el-color-warning);--el-button-bg-color:var(--el-color-warning-light-9);--el-button-border-color:var(--el-color-warning-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-warning);--el-button-hover-border-color:var(--el-color-warning);--el-button-active-text-color:var(--el-color-white)}.el-button--warning.is-plain.is-disabled,.el-button--warning.is-plain.is-disabled:hover,.el-button--warning.is-plain.is-disabled:focus,.el-button--warning.is-plain.is-disabled:active,.el-button--warning.is-text.is-disabled,.el-button--warning.is-text.is-disabled:hover,.el-button--warning.is-text.is-disabled:focus,.el-button--warning.is-text.is-disabled:active,.el-button--warning.is-link.is-disabled,.el-button--warning.is-link.is-disabled:hover,.el-button--warning.is-link.is-disabled:focus,.el-button--warning.is-link.is-disabled:active{color:var(--el-color-warning-light-5);background-color:var(--el-color-warning-light-9);border-color:var(--el-color-warning-light-8)}.el-button--warning.is-dashed{--el-button-text-color:var(--el-color-warning);--el-button-bg-color:var(--el-color-warning-light-9);--el-button-border-color:var(--el-color-warning-light-5);--el-button-hover-text-color:var(--el-color-warning);--el-button-hover-bg-color:var(--el-color-warning-light-9);--el-button-hover-border-color:var(--el-color-warning-light-3);--el-button-active-text-color:var(--el-color-warning-dark-2);--el-button-active-bg-color:var(--el-color-warning-light-9);--el-button-active-border-color:var(--el-color-warning-dark-2)}.el-button--warning.is-dashed.is-disabled,.el-button--warning.is-dashed.is-disabled:hover,.el-button--warning.is-dashed.is-disabled:focus,.el-button--warning.is-dashed.is-disabled:active{color:var(--el-color-warning-light-5);background-color:var(--el-color-warning-light-9);border-color:var(--el-color-warning-light-8)}.el-button--danger{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-danger);--el-button-border-color:var(--el-color-danger);--el-button-outline-color:var(--el-color-danger-light-5);--el-button-active-color:var(--el-color-danger-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-danger-light-5);--el-button-hover-bg-color:var(--el-color-danger-light-3);--el-button-hover-border-color:var(--el-color-danger-light-3);--el-button-active-bg-color:var(--el-color-danger-dark-2);--el-button-active-border-color:var(--el-color-danger-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-danger-light-5);--el-button-disabled-border-color:var(--el-color-danger-light-5)}.el-button--danger.is-plain,.el-button--danger.is-text,.el-button--danger.is-link{--el-button-text-color:var(--el-color-danger);--el-button-bg-color:var(--el-color-danger-light-9);--el-button-border-color:var(--el-color-danger-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-danger);--el-button-hover-border-color:var(--el-color-danger);--el-button-active-text-color:var(--el-color-white)}.el-button--danger.is-plain.is-disabled,.el-button--danger.is-plain.is-disabled:hover,.el-button--danger.is-plain.is-disabled:focus,.el-button--danger.is-plain.is-disabled:active,.el-button--danger.is-text.is-disabled,.el-button--danger.is-text.is-disabled:hover,.el-button--danger.is-text.is-disabled:focus,.el-button--danger.is-text.is-disabled:active,.el-button--danger.is-link.is-disabled,.el-button--danger.is-link.is-disabled:hover,.el-button--danger.is-link.is-disabled:focus,.el-button--danger.is-link.is-disabled:active{color:var(--el-color-danger-light-5);background-color:var(--el-color-danger-light-9);border-color:var(--el-color-danger-light-8)}.el-button--danger.is-dashed{--el-button-text-color:var(--el-color-danger);--el-button-bg-color:var(--el-color-danger-light-9);--el-button-border-color:var(--el-color-danger-light-5);--el-button-hover-text-color:var(--el-color-danger);--el-button-hover-bg-color:var(--el-color-danger-light-9);--el-button-hover-border-color:var(--el-color-danger-light-3);--el-button-active-text-color:var(--el-color-danger-dark-2);--el-button-active-bg-color:var(--el-color-danger-light-9);--el-button-active-border-color:var(--el-color-danger-dark-2)}.el-button--danger.is-dashed.is-disabled,.el-button--danger.is-dashed.is-disabled:hover,.el-button--danger.is-dashed.is-disabled:focus,.el-button--danger.is-dashed.is-disabled:active{color:var(--el-color-danger-light-5);background-color:var(--el-color-danger-light-9);border-color:var(--el-color-danger-light-8)}.el-button--info{--el-button-text-color:var(--el-color-white);--el-button-bg-color:var(--el-color-info);--el-button-border-color:var(--el-color-info);--el-button-outline-color:var(--el-color-info-light-5);--el-button-active-color:var(--el-color-info-dark-2);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-link-text-color:var(--el-color-info-light-5);--el-button-hover-bg-color:var(--el-color-info-light-3);--el-button-hover-border-color:var(--el-color-info-light-3);--el-button-active-bg-color:var(--el-color-info-dark-2);--el-button-active-border-color:var(--el-color-info-dark-2);--el-button-disabled-text-color:var(--el-color-white);--el-button-disabled-bg-color:var(--el-color-info-light-5);--el-button-disabled-border-color:var(--el-color-info-light-5)}.el-button--info.is-plain,.el-button--info.is-text,.el-button--info.is-link{--el-button-text-color:var(--el-color-info);--el-button-bg-color:var(--el-color-info-light-9);--el-button-border-color:var(--el-color-info-light-5);--el-button-hover-text-color:var(--el-color-white);--el-button-hover-bg-color:var(--el-color-info);--el-button-hover-border-color:var(--el-color-info);--el-button-active-text-color:var(--el-color-white)}.el-button--info.is-plain.is-disabled,.el-button--info.is-plain.is-disabled:hover,.el-button--info.is-plain.is-disabled:focus,.el-button--info.is-plain.is-disabled:active,.el-button--info.is-text.is-disabled,.el-button--info.is-text.is-disabled:hover,.el-button--info.is-text.is-disabled:focus,.el-button--info.is-text.is-disabled:active,.el-button--info.is-link.is-disabled,.el-button--info.is-link.is-disabled:hover,.el-button--info.is-link.is-disabled:focus,.el-button--info.is-link.is-disabled:active{color:var(--el-color-info-light-5);background-color:var(--el-color-info-light-9);border-color:var(--el-color-info-light-8)}.el-button--info.is-dashed{--el-button-text-color:var(--el-color-info);--el-button-bg-color:var(--el-color-info-light-9);--el-button-border-color:var(--el-color-info-light-5);--el-button-hover-text-color:var(--el-color-info);--el-button-hover-bg-color:var(--el-color-info-light-9);--el-button-hover-border-color:var(--el-color-info-light-3);--el-button-active-text-color:var(--el-color-info-dark-2);--el-button-active-bg-color:var(--el-color-info-light-9);--el-button-active-border-color:var(--el-color-info-dark-2)}.el-button--info.is-dashed.is-disabled,.el-button--info.is-dashed.is-disabled:hover,.el-button--info.is-dashed.is-disabled:focus,.el-button--info.is-dashed.is-disabled:active{color:var(--el-color-info-light-5);background-color:var(--el-color-info-light-9);border-color:var(--el-color-info-light-8)}.el-button--large{--el-button-size:40px;height:var(--el-button-size)}.el-button--large [class*=el-icon]+span{margin-left:8px}.el-button--large{font-size:var(--el-font-size-base);border-radius:var(--el-border-radius-base);padding:12px 19px}.el-button--large.is-round{padding:12px 19px}.el-button--large.is-circle{width:var(--el-button-size);padding:12px}.el-button--small{--el-button-size:24px;height:var(--el-button-size)}.el-button--small [class*=el-icon]+span{margin-left:4px}.el-button--small{border-radius:calc(var(--el-border-radius-base) - 1px);padding:5px 11px;font-size:12px}.el-button--small.is-round{padding:5px 11px}.el-button--small.is-circle{width:var(--el-button-size);padding:5px}");
var ch2 = {};
var wk = (function(c, id, msg, transfer, cb) {
	var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([c + ";addEventListener(\"error\",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})"], { type: "text/javascript" }))));
	w.onmessage = function(e) {
		var d = e.data, ed = d.$e$;
		if (ed) {
			var err = new Error(ed[0]);
			err["code"] = ed[1];
			err.stack = ed[2];
			cb(err, null);
		} else cb(null, d);
	};
	w.postMessage(msg, transfer);
	return w;
});
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]);
var fdeb = new u8([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]);
var clim = new u8([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]);
var freb = function(eb, start) {
	var b = new u16(31);
	for (var i = 0; i < 31; ++i) b[i] = start += 1 << eb[i - 1];
	var r = new i32(b[30]);
	for (var i = 1; i < 30; ++i) for (var j = b[i]; j < b[i + 1]; ++j) r[j] = j - b[i] << 5 | i;
	return {
		b,
		r
	};
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var revfd = _b.r;
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
	var x = (i & 43690) >> 1 | (i & 21845) << 1;
	x = (x & 52428) >> 2 | (x & 13107) << 2;
	x = (x & 61680) >> 4 | (x & 3855) << 4;
	rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var hMap = (function(cd, mb, r) {
	var s = cd.length;
	var i = 0;
	var l = new u16(mb);
	for (; i < s; ++i) if (cd[i]) ++l[cd[i] - 1];
	var le = new u16(mb);
	for (i = 1; i < mb; ++i) le[i] = le[i - 1] + l[i - 1] << 1;
	var co;
	if (r) {
		co = new u16(1 << mb);
		var rvb = 15 - mb;
		for (i = 0; i < s; ++i) if (cd[i]) {
			var sv = i << 4 | cd[i];
			var r_1 = mb - cd[i];
			var v = le[cd[i] - 1]++ << r_1;
			for (var m = v | (1 << r_1) - 1; v <= m; ++v) co[rev[v] >> rvb] = sv;
		}
	} else {
		co = new u16(s);
		for (i = 0; i < s; ++i) if (cd[i]) co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
	}
	return co;
});
var flt = new u8(288);
for (var i = 0; i < 144; ++i) flt[i] = 8;
for (var i = 144; i < 256; ++i) flt[i] = 9;
for (var i = 256; i < 280; ++i) flt[i] = 7;
for (var i = 280; i < 288; ++i) flt[i] = 8;
var fdt = new u8(32);
for (var i = 0; i < 32; ++i) fdt[i] = 5;
var flm = /*#__PURE__*/ hMap(flt, 9, 0);
var fdm = /*#__PURE__*/ hMap(fdt, 5, 0);
var shft = function(p) {
	return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
	if (s == null || s < 0) s = 0;
	if (e == null || e > v.length) e = v.length;
	return new u8(v.subarray(s, e));
};
var ec = [
	"unexpected EOF",
	"invalid block type",
	"invalid length/literal",
	"invalid distance",
	"stream finished",
	"no stream handler",
	,
	"no callback",
	"invalid UTF-8 data",
	"extra field too long",
	"date not in range 1980-2099",
	"filename too long",
	"stream finishing",
	"invalid zip data"
];
var err = function(ind, msg, nt) {
	var e = new Error(msg || ec[ind]);
	e.code = ind;
	if (Error.captureStackTrace) Error.captureStackTrace(e, err);
	if (!nt) throw e;
	return e;
};
var wbits = function(d, p, v) {
	v <<= p & 7;
	var o = p / 8 | 0;
	d[o] |= v;
	d[o + 1] |= v >> 8;
};
var wbits16 = function(d, p, v) {
	v <<= p & 7;
	var o = p / 8 | 0;
	d[o] |= v;
	d[o + 1] |= v >> 8;
	d[o + 2] |= v >> 16;
};
var hTree = function(d, mb) {
	var t = [];
	for (var i = 0; i < d.length; ++i) if (d[i]) t.push({
		s: i,
		f: d[i]
	});
	var s = t.length;
	var t2 = t.slice();
	if (!s) return {
		t: et,
		l: 0
	};
	if (s == 1) {
		var v = new u8(t[0].s + 1);
		v[t[0].s] = 1;
		return {
			t: v,
			l: 1
		};
	}
	t.sort(function(a, b) {
		return a.f - b.f;
	});
	t.push({
		s: -1,
		f: 25001
	});
	var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
	t[0] = {
		s: -1,
		f: l.f + r.f,
		l,
		r
	};
	while (i1 != s - 1) {
		l = t[t[i0].f < t[i2].f ? i0++ : i2++];
		r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
		t[i1++] = {
			s: -1,
			f: l.f + r.f,
			l,
			r
		};
	}
	var maxSym = t2[0].s;
	for (var i = 1; i < s; ++i) if (t2[i].s > maxSym) maxSym = t2[i].s;
	var tr = new u16(maxSym + 1);
	var mbt = ln(t[i1 - 1], tr, 0);
	if (mbt > mb) {
		var i = 0, dt = 0;
		var lft = mbt - mb, cst = 1 << lft;
		t2.sort(function(a, b) {
			return tr[b.s] - tr[a.s] || a.f - b.f;
		});
		for (; i < s; ++i) {
			var i2_1 = t2[i].s;
			if (tr[i2_1] > mb) {
				dt += cst - (1 << mbt - tr[i2_1]);
				tr[i2_1] = mb;
			} else break;
		}
		dt >>= lft;
		while (dt > 0) {
			var i2_2 = t2[i].s;
			if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;
			else ++i;
		}
		for (; i >= 0 && dt; --i) {
			var i2_3 = t2[i].s;
			if (tr[i2_3] == mb) {
				--tr[i2_3];
				++dt;
			}
		}
		mbt = mb;
	}
	return {
		t: new u8(tr),
		l: mbt
	};
};
var ln = function(n, l, d) {
	return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var lc = function(c) {
	var s = c.length;
	while (s && !c[--s]);
	var cl = new u16(++s);
	var cli = 0, cln = c[0], cls = 1;
	var w = function(v) {
		cl[cli++] = v;
	};
	for (var i = 1; i <= s; ++i) if (c[i] == cln && i != s) ++cls;
	else {
		if (!cln && cls > 2) {
			for (; cls > 138; cls -= 138) w(32754);
			if (cls > 2) {
				w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
				cls = 0;
			}
		} else if (cls > 3) {
			w(cln), --cls;
			for (; cls > 6; cls -= 6) w(8304);
			if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
		}
		while (cls--) w(cln);
		cls = 1;
		cln = c[i];
	}
	return {
		c: cl.subarray(0, cli),
		n: s
	};
};
var clen = function(cf, cl) {
	var l = 0;
	for (var i = 0; i < cl.length; ++i) l += cf[i] * cl[i];
	return l;
};
var wfblk = function(out, pos, dat) {
	var s = dat.length;
	var o = shft(pos + 2);
	out[o] = s & 255;
	out[o + 1] = s >> 8;
	out[o + 2] = out[o] ^ 255;
	out[o + 3] = out[o + 1] ^ 255;
	for (var i = 0; i < s; ++i) out[o + i + 4] = dat[i];
	return (o + 4 + s) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
	wbits(out, p++, final);
	++lf[256];
	var _a = hTree(lf, 15), dlt = _a.t, mlb = _a.l;
	var _b = hTree(df, 15), ddt = _b.t, mdb = _b.l;
	var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
	var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
	var lcfreq = new u16(19);
	for (var i = 0; i < lclt.length; ++i) ++lcfreq[lclt[i] & 31];
	for (var i = 0; i < lcdt.length; ++i) ++lcfreq[lcdt[i] & 31];
	var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
	var nlcc = 19;
	for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);
	var flen = bl + 5 << 3;
	var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
	var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
	if (bs >= 0 && flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
	var lm, ll, dm, dl;
	wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
	if (dtlen < ftlen) {
		lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
		var llm = hMap(lct, mlcb, 0);
		wbits(out, p, nlc - 257);
		wbits(out, p + 5, ndc - 1);
		wbits(out, p + 10, nlcc - 4);
		p += 14;
		for (var i = 0; i < nlcc; ++i) wbits(out, p + 3 * i, lct[clim[i]]);
		p += 3 * nlcc;
		var lcts = [lclt, lcdt];
		for (var it = 0; it < 2; ++it) {
			var clct = lcts[it];
			for (var i = 0; i < clct.length; ++i) {
				var len = clct[i] & 31;
				wbits(out, p, llm[len]), p += lct[len];
				if (len > 15) wbits(out, p, clct[i] >> 5 & 127), p += clct[i] >> 12;
			}
		}
	} else lm = flm, ll = flt, dm = fdm, dl = fdt;
	for (var i = 0; i < li; ++i) {
		var sym = syms[i];
		if (sym > 255) {
			var len = sym >> 18 & 31;
			wbits16(out, p, lm[len + 257]), p += ll[len + 257];
			if (len > 7) wbits(out, p, sym >> 23 & 31), p += fleb[len];
			var dst = sym & 31;
			wbits16(out, p, dm[dst]), p += dl[dst];
			if (dst > 3) wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
		} else wbits16(out, p, lm[sym]), p += ll[sym];
	}
	wbits16(out, p, lm[256]);
	return p + ll[256];
};
var deo = /*#__PURE__*/ new i32([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]);
var et = /*#__PURE__*/ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, st) {
	var s = st.z || dat.length;
	var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
	var w = o.subarray(pre, o.length - post);
	var lst = st.l;
	var pos = (st.r || 0) & 7;
	if (lvl) {
		if (pos) w[0] = st.r >> 3;
		var opt = deo[lvl - 1];
		var n = opt >> 13, c = opt & 8191;
		var msk_1 = (1 << plvl) - 1;
		var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
		var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
		var hsh = function(i) {
			return (dat[i] ^ dat[i + 1] << bs1_1 ^ dat[i + 2] << bs2_1) & msk_1;
		};
		var syms = new i32(25e3);
		var lf = new u16(288), df = new u16(32);
		var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
		for (; i + 2 < s; ++i) {
			var hv = hsh(i);
			var imod = i & 32767, pimod = head[hv];
			prev[imod] = pimod;
			head[hv] = imod;
			if (wi <= i) {
				var rem = s - i;
				if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
					pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
					li = lc_1 = eb = 0, bs = i;
					for (var j = 0; j < 286; ++j) lf[j] = 0;
					for (var j = 0; j < 30; ++j) df[j] = 0;
				}
				var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
				if (rem > 2 && hv == hsh(i - dif)) {
					var maxn = Math.min(n, rem) - 1;
					var maxd = Math.min(32767, i);
					var ml = Math.min(258, rem);
					while (dif <= maxd && --ch_1 && imod != pimod) {
						if (dat[i + l] == dat[i + l - dif]) {
							var nl = 0;
							for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl);
							if (nl > l) {
								l = nl, d = dif;
								if (nl > maxn) break;
								var mmd = Math.min(dif, nl - 2);
								var md = 0;
								for (var j = 0; j < mmd; ++j) {
									var ti = i - dif + j & 32767;
									var cd = ti - prev[ti] & 32767;
									if (cd > md) md = cd, pimod = ti;
								}
							}
						}
						imod = pimod, pimod = prev[imod];
						dif += imod - pimod & 32767;
					}
				}
				if (d) {
					syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
					var lin = revfl[l] & 31, din = revfd[d] & 31;
					eb += fleb[lin] + fdeb[din];
					++lf[257 + lin];
					++df[din];
					wi = i + l;
					++lc_1;
				} else {
					syms[li++] = dat[i];
					++lf[dat[i]];
				}
			}
		}
		for (i = Math.max(i, wi); i < s; ++i) {
			syms[li++] = dat[i];
			++lf[dat[i]];
		}
		pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
		if (!lst) {
			st.r = pos & 7 | w[pos / 8 | 0] << 3;
			pos -= 7;
			st.h = head, st.p = prev, st.i = i, st.w = wi;
		}
	} else {
		for (var i = st.w || 0; i < s + lst; i += 65535) {
			var e = i + 65535;
			if (e >= s) {
				w[pos / 8 | 0] = lst;
				e = s;
			}
			pos = wfblk(w, pos + 1, dat.subarray(i, e));
		}
		st.i = s;
	}
	return slc(o, 0, pre + shft(pos) + post);
};
var crct = /*#__PURE__*/ (function() {
	var t = /* @__PURE__ */ new Int32Array(256);
	for (var i = 0; i < 256; ++i) {
		var c = i, k = 9;
		while (--k) c = (c & 1 && -306674912) ^ c >>> 1;
		t[i] = c;
	}
	return t;
})();
var crc = function() {
	var c = -1;
	return {
		p: function(d) {
			var cr = c;
			for (var i = 0; i < d.length; ++i) cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
			c = cr;
		},
		d: function() {
			return ~c;
		}
	};
};
var dopt = function(dat, opt, pre, post, st) {
	if (!st) {
		st = { l: 1 };
		if (opt.dictionary) {
			var dict = opt.dictionary.subarray(-32768);
			var newDat = new u8(dict.length + dat.length);
			newDat.set(dict);
			newDat.set(dat, dict.length);
			dat = newDat;
			st.w = dict.length;
		}
	}
	return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
};
var mrg = function(a, b) {
	var o = {};
	for (var k in a) o[k] = a[k];
	for (var k in b) o[k] = b[k];
	return o;
};
var wcln = function(fn, fnStr, td) {
	var dt = fn();
	var st = fn.toString();
	var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\s+/g, "").split(",");
	for (var i = 0; i < dt.length; ++i) {
		var v = dt[i], k = ks[i];
		if (typeof v == "function") {
			fnStr += ";" + k + "=";
			var st_1 = v.toString();
			if (v.prototype) {
				if (st_1.indexOf("[native code]") != -1) {
					var spInd = st_1.indexOf(" ", 8) + 1;
					fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
				} else {
					fnStr += st_1;
					for (var t in v.prototype) fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
				}
			} else fnStr += st_1;
		} else td[k] = v;
	}
	return fnStr;
};
var ch = [];
var cbfs = function(v) {
	var tl = [];
	for (var k in v) if (v[k].buffer) tl.push((v[k] = new v[k].constructor(v[k])).buffer);
	return tl;
};
var wrkr = function(fns, init, id, cb) {
	if (!ch[id]) {
		var fnStr = "", td_1 = {}, m = fns.length - 1;
		for (var i = 0; i < m; ++i) fnStr = wcln(fns[i], fnStr, td_1);
		ch[id] = {
			c: wcln(fns[m], fnStr, td_1),
			e: td_1
		};
	}
	var td = mrg({}, ch[id].e);
	return wk(ch[id].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td, cbfs(td), cb);
};
var bDflt = function() {
	return [
		u8,
		u16,
		i32,
		fleb,
		fdeb,
		clim,
		revfl,
		revfd,
		flm,
		flt,
		fdm,
		fdt,
		rev,
		deo,
		et,
		hMap,
		wbits,
		wbits16,
		hTree,
		ln,
		lc,
		clen,
		wfblk,
		wblk,
		shft,
		slc,
		dflt,
		dopt,
		deflateSync,
		pbf
	];
};
var pbf = function(msg) {
	return postMessage(msg, [msg.buffer]);
};
var cbify = function(dat, opts, fns, init, id, cb) {
	var w = wrkr(fns, init, id, function(err, dat) {
		w.terminate();
		cb(err, dat);
	});
	w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
	return function() {
		w.terminate();
	};
};
var wbytes = function(d, b, v) {
	for (; v; ++b) d[b] = v, v >>>= 8;
};
function deflate(data, opts, cb) {
	if (!cb) cb = opts, opts = {};
	if (typeof cb != "function") err(7);
	return cbify(data, opts, [bDflt], function(ev) {
		return pbf(deflateSync(ev.data[0], ev.data[1]));
	}, 0, cb);
}
/**
* Compresses data with DEFLATE without any wrapper
* @param data The data to compress
* @param opts The compression options
* @returns The deflated version of the data
*/
function deflateSync(data, opts) {
	return dopt(data, opts || {}, 0, 0);
}
var fltn = function(d, p, t, o) {
	for (var k in d) {
		var val = d[k], n = p + k, op = o;
		if (Array.isArray(val)) op = mrg(o, val[1]), val = val[0];
		if (ArrayBuffer.isView(val)) t[n] = [val, op];
		else {
			t[n += "/"] = [new u8(0), op];
			fltn(val, n, t, o);
		}
	}
};
var te = typeof TextEncoder != "undefined" && /*#__PURE__*/ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /*#__PURE__*/ new TextDecoder();
try {
	td.decode(et, { stream: true });
} catch (e) {}
/**
* Converts a string into a Uint8Array for use with compression/decompression methods
* @param str The string to encode
* @param latin1 Whether or not to interpret the data as Latin-1. This should
*               not need to be true unless decoding a binary string.
* @returns The string encoded in UTF-8/Latin-1 binary
*/
function strToU8(str, latin1) {
	var i; 
	if (te) return te.encode(str);
	var l = str.length;
	var ar = new u8(str.length + (str.length >> 1));
	var ai = 0;
	var w = function(v) {
		ar[ai++] = v;
	};
	for (var i = 0; i < l; ++i) {
		if (ai + 5 > ar.length) {
			var n = new u8(ai + 8 + (l - i << 1));
			n.set(ar);
			ar = n;
		}
		var c = str.charCodeAt(i);
		if (c < 128 || latin1) w(c);
		else if (c < 2048) w(192 | c >> 6), w(128 | c & 63);
		else if (c > 55295 && c < 57344) c = 65536 + (c & 1047552) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
		else w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
	}
	return slc(ar, 0, ai);
}
var exfl = function(ex) {
	var le = 0;
	if (ex) for (var k in ex) {
		var l = ex[k].length;
		if (l > 65535) err(9);
		le += l + 4;
	}
	return le;
};
var wzh = function(d, b, f, fn, u, c, ce, co) {
	var fl = fn.length, ex = f.extra, col = co && co.length;
	var exl = exfl(ex);
	wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
	if (ce != null) d[b++] = 20, d[b++] = f.os;
	d[b] = 20, b += 2;
	d[b++] = f.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
	d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
	var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
	if (y < 0 || y > 119) err(10);
	wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
	if (c != -1) {
		wbytes(d, b, f.crc);
		wbytes(d, b + 4, c < 0 ? -c - 2 : c);
		wbytes(d, b + 8, f.size);
	}
	wbytes(d, b + 12, fl);
	wbytes(d, b + 14, exl), b += 16;
	if (ce != null) {
		wbytes(d, b, col);
		wbytes(d, b + 6, f.attrs);
		wbytes(d, b + 10, ce), b += 14;
	}
	d.set(fn, b);
	b += fl;
	if (exl) for (var k in ex) {
		var exf = ex[k], l = exf.length;
		wbytes(d, b, +k);
		wbytes(d, b + 2, l);
		d.set(exf, b + 4), b += 4 + l;
	}
	if (col) d.set(co, b), b += col;
	return b;
};
var wzf = function(o, b, c, d, e) {
	wbytes(o, b, 101010256);
	wbytes(o, b + 8, c);
	wbytes(o, b + 10, c);
	wbytes(o, b + 12, d);
	wbytes(o, b + 16, e);
};
function zip(data, opts, cb) {
	if (!cb) cb = opts, opts = {};
	if (typeof cb != "function") err(7);
	var r = {};
	fltn(data, "", r, opts);
	var k = Object.keys(r);
	var lft = k.length, o = 0, tot = 0;
	var slft = lft, files = new Array(lft);
	var term = [];
	var tAll = function() {
		for (var i = 0; i < term.length; ++i) term[i]();
	};
	var cbd = function(a, b) {
		mt(function() {
			cb(a, b);
		});
	};
	mt(function() {
		cbd = cb;
	});
	var cbf = function() {
		var out = new u8(tot + 22), oe = o, cdl = tot - o;
		tot = 0;
		for (var i = 0; i < slft; ++i) {
			var f = files[i];
			try {
				var l = f.c.length;
				wzh(out, tot, f, f.f, f.u, l);
				var badd = 30 + f.f.length + exfl(f.extra);
				var loc = tot + badd;
				out.set(f.c, loc);
				wzh(out, o, f, f.f, f.u, l, tot, f.m), o += 16 + badd + (f.m ? f.m.length : 0), tot = loc + l;
			} catch (e) {
				return cbd(e, null);
			}
		}
		wzf(out, o, files.length, cdl, oe);
		cbd(null, out);
	};
	if (!lft) cbf();
	var _loop_1 = function(i) {
		var fn = k[i];
		var _a = r[fn], file = _a[0], p = _a[1];
		var c = crc(), size = file.length;
		c.p(file);
		var f = strToU8(fn), s = f.length;
		var com = p.comment, m = com && strToU8(com), ms = m && m.length;
		var exl = exfl(p.extra);
		var compression = p.level == 0 ? 0 : 8;
		var cbl = function(e, d) {
			if (e) {
				tAll();
				cbd(e, null);
			} else {
				var l = d.length;
				files[i] = mrg(p, {
					size,
					crc: c.d(),
					c: d,
					f,
					m,
					u: s != fn.length || m && com.length != ms,
					compression
				});
				o += 30 + s + exl + l;
				tot += 76 + 2 * (s + exl) + (ms || 0) + l;
				if (!--lft) cbf();
			}
		};
		if (s > 65535) cbl(err(11, 0, 1), null);
		if (!compression) cbl(null, file);
		else if (size < 16e4) try {
			cbl(null, deflateSync(file, p));
		} catch (e) {
			cbl(e, null);
		}
		else term.push(deflate(file, p, cbl));
	};
	for (var i = 0; i < slft; ++i) _loop_1(i);
	return tAll;
}
var mt = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(fn) {
	fn();
};
var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
var c = window.console;
var origConsole = (() => {
	return {
		log: c.log.bind(c),
		warn: c.warn.bind(c),
		info: c.info.bind(c),
		error: c.error.bind(c),
		debug: c.debug.bind(c)
	};
})();
/**
* 从形如
* https://play.dlsite.com/work/BJ366185/viewer
* 中提取BJ366185
* @param url
*/
function extractDlsiteId(url) {
	return url.match(/work\/([A-Z\d]+)\//)?.[1] ?? url.match(/\/viewer\/free\/([A-Z\d]+)/)?.[1] ?? null;
}
var PUZZLE_BLOCK_SIZE = 128;
var DETECT_RETRY_DELAYS = [
	0,
	1500,
	4e3
];
/**
* Detects DLsite Play's puzzle image distribution.
*
* The old userscript handled this through:
*   api/download/sign/cookie -> ziptree.json -> optimized/<image>
* and then rebuilt each image by unshuffling 128px tiles with an MT19937 seed
* derived from optimized.name.substring(5, 12).
*/
var hookFetchPuzzle = () => {
	return new Promise((resolve) => {
		detectPuzzleWithRetries(resolve);
	});
};
async function detectPuzzleWithRetries(resolve) {
	const workNo = extractDlsiteId(_unsafeWindow.location.href);
	if (!workNo) return;
	for (const delay of DETECT_RETRY_DELAYS) {
		if (delay > 0) await sleep(delay);
		if (!isSameWork(workNo)) return;
		try {
			const downloadPrefix = normalizeDownloadPrefix((await getDownloadCredential(workNo))?.url);
			if (!downloadPrefix) continue;
			const files = collectPuzzleFiles(await getZipTree(downloadPrefix));
			if (files.length === 0) continue;
			const zipFileName = makePuzzleSaveName(workNo, await getWorkMeta(workNo).catch((err) => {
				origConsole.warn("[puzzle] Failed to fetch work metadata", err);
				return null;
			}));
			if (!isSameWork(workNo)) return;
			resolve({
				method: "puzzle",
				data: {
					urls: files,
					zipFileName,
					download: () => downloadPuzzleImagesToZip(downloadPrefix, files, `${zipFileName}.zip`)
				}
			});
			return;
		} catch (err) {
			origConsole.debug("[puzzle] Detection attempt failed", err);
		}
	}
}
function isSameWork(workNo) {
	return extractDlsiteId(_unsafeWindow.location.href) === workNo;
}
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getDownloadCredential(workNo) {
	const url = new URL("https://play.dl.dlsite.com/api/download/sign/cookie");
	url.searchParams.set("workno", workNo);
	const response = await pageFetch(url.href, {
		method: "GET",
		credentials: "include",
		referrer: "https://play.dlsite.com/",
		headers: { Accept: "*/*" }
	});
	if (!response.ok) throw new Error(`download credential failed: ${response.status} ${response.statusText}`);
	return response.json();
}
async function getZipTree(downloadPrefix) {
	const response = await pageFetch(`${downloadPrefix}ziptree.json`, {
		method: "GET",
		credentials: "include",
		referrer: "https://play.dlsite.com/",
		headers: { Accept: "application/json,*/*" }
	});
	if (!response.ok) throw new Error(`ziptree download failed: ${response.status} ${response.statusText}`);
	return response.json();
}
async function getWorkMeta(workNo) {
	const origins = Array.from(/* @__PURE__ */ new Set([_unsafeWindow.location.origin, "https://play.dlsite.com"]));
	for (const origin of origins) {
		const response = await pageFetch(`${origin}/api/work/${workNo}`, {
			method: "GET",
			credentials: "include",
			referrer: `${origin}/`,
			headers: { Accept: "application/json,*/*" }
		}).catch(() => null);
		if (response?.ok) return response.json();
	}
	return null;
}
function pageFetch(...args) {
	return (_unsafeWindow.fetch || fetch).apply(_unsafeWindow, args);
}
function normalizeDownloadPrefix(url) {
	if (typeof url !== "string" || url.length === 0) return null;
	return url.endsWith("/") ? url : `${url}/`;
}
function collectPuzzleFiles(zipTree) {
	const result = [];
	const playfile = zipTree?.playfile || {};
	const travel = (fileObj, path = "") => {
		if (!fileObj || typeof fileObj !== "object") return;
		if (fileObj.type === "folder") {
			const folderPath = fileObj.path || joinPath(path, fileObj.name);
			(fileObj.children || []).forEach((child) => travel(child, folderPath));
			return;
		}
		if (fileObj.type !== "file" || fileObj.hashname?.toLowerCase().endsWith(".pdf")) return;
		const optimized = normalizeOptimized(playfile[fileObj.hashname]?.image?.optimized);
		if (!optimized) return;
		result.push({
			filename: normalizeZipPath(joinPath(path, fileObj.name)),
			optimized
		});
	};
	(zipTree?.tree || []).forEach((fileObj) => travel(fileObj));
	return result;
}
function normalizeOptimized(optimized) {
	const width = Number(optimized?.width);
	const height = Number(optimized?.height);
	if (!optimized?.name || !Number.isFinite(width) || !Number.isFinite(height)) return null;
	return {
		...optimized,
		width,
		height
	};
}
function joinPath(path, name) {
	return [path, name].filter(Boolean).join("/");
}
function normalizeZipPath(path) {
	return String(path || "image").replace(/\\/g, "/").split("/").filter((part) => part && part !== "." && part !== "..").map((part) => part.replace(/[<>:"|?*\x00-\x1f]/g, "_")).join("/") || "image";
}
function makePuzzleSaveName(workNo, workMeta) {
	const title = pickLocalized(workMeta?.name) || workNo;
	const maker = pickLocalized(workMeta?.maker?.name);
	return sanitizeFileName(maker ? `[${workNo}] (${maker}) ${title}` : `[${workNo}] ${title}`);
}
function pickLocalized(value) {
	if (!value) return "";
	if (typeof value === "string") return value;
	return value.ja_JP || value.en_US || value.zh_CN || value.zh_TW || Object.values(value).find((item) => typeof item === "string") || "";
}
function sanitizeFileName(name) {
	return String(name || "DLsite Play Download").replace(/[\\/:*?"<>|]/g, "_").replace(/\s+/g, " ").trim();
}
function getDecryptedImageData(optimized) {
	const cropCount = {
		w: Math.ceil(optimized.width / PUZZLE_BLOCK_SIZE),
		h: Math.ceil(optimized.height / PUZZLE_BLOCK_SIZE)
	};
	const seed = parseInt(optimized.name.substring(5, 12), 16);
	if (!Number.isFinite(seed)) throw new Error(`invalid puzzle seed: ${optimized.name}`);
	return {
		sourceCropSize: PUZZLE_BLOCK_SIZE,
		cropCount,
		coordinates: shuffleWithMersenneTwister(seed, [...Array(cropCount.w * cropCount.h).keys()]).map((value, index) => ({
			sx: PUZZLE_BLOCK_SIZE * modulo(index, cropCount.w),
			sy: PUZZLE_BLOCK_SIZE * divide(index, cropCount.w),
			dx: PUZZLE_BLOCK_SIZE * modulo(value, cropCount.w),
			dy: PUZZLE_BLOCK_SIZE * divide(value, cropCount.w)
		}))
	};
}
function shuffleWithMersenneTwister(seed, values) {
	const random = new MersenneTwister(seed);
	for (let index = values.length - 1; index > 0; index--) {
		const swapIndex = Math.floor(random.random() * (index + 1));
		[values[index], values[swapIndex]] = [values[swapIndex], values[index]];
	}
	return values;
}
function modulo(value, divisor) {
	return value >= divisor ? value % divisor : value;
}
function divide(value, divisor) {
	return value >= divisor ? Math.floor(value / divisor) : 0;
}
async function downloadPuzzleImagesToZip(downloadPrefix, files, outputZip, concurrency = 3) {
	const zipFiles = {};
	let successCount = 0;
	let failCount = 0;
	const runTask = async (file, index) => {
		try {
			const entryName = replaceExtension(file.filename, ".png");
			origConsole.log(`[puzzle] Downloading ${entryName}`);
			_unsafeWindow.add_log?.(`Downloading: ${index + 1}/${files.length}`);
			const image = await restorePuzzleImage(downloadPrefix, file);
			addUniqueZipFile(zipFiles, entryName, image);
			successCount++;
			_unsafeWindow.add_log?.(`Done: ${entryName}`);
			return {
				success: true,
				name: entryName
			};
		} catch (err) {
			failCount++;
			origConsole.error("[puzzle] Failed to process image", file, err);
			_unsafeWindow.add_log?.(`Failed: ${file.filename} (${err.message})`);
			return {
				success: false,
				name: file.filename,
				error: err.message
			};
		}
	};
	await runWithConcurrency(files, concurrency, runTask);
	if (Object.keys(zipFiles).length === 0) throw new Error("all puzzle images failed, cannot create ZIP");
	return new Promise((resolve, reject) => {
		zip(zipFiles, (err, zipped) => {
			if (err) {
				origConsole.error("[puzzle] ZIP failed", err);
				reject(err);
				return;
			}
			const blob = new Blob([zipped], { type: "application/zip" });
			const blobUrl = URL.createObjectURL(blob);
			const anchor = document.createElement("a");
			anchor.href = blobUrl;
			anchor.download = outputZip;
			const summary = `Completed: ${successCount} success, ${failCount} failed -> ${outputZip}`;
			origConsole.log(`[puzzle] ${summary}`);
			_unsafeWindow.add_log?.(summary);
			resolve({
				save: () => {
					anchor.click();
					setTimeout(() => URL.revokeObjectURL(blobUrl), 1e3);
				},
				successCount,
				failCount,
				blobUrl
			});
		});
	});
}
async function runWithConcurrency(items, maxConcurrent, runTask) {
	const results = [];
	const executing = /* @__PURE__ */ new Set();
	for (let index = 0; index < items.length; index++) {
		if (executing.size >= maxConcurrent) await Promise.race(executing);
		const taskPromise = runTask(items[index], index).finally(() => {
			executing.delete(taskPromise);
		});
		executing.add(taskPromise);
		results.push(taskPromise);
	}
	return Promise.allSettled(results);
}
async function restorePuzzleImage(downloadPrefix, { optimized }) {
	const response = await pageFetch(`${downloadPrefix}optimized/${optimized.name}`, {
		method: "GET",
		credentials: "include",
		referrer: "https://play.dlsite.com/",
		headers: { Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8" }
	});
	if (!response.ok) throw new Error(`image download failed: ${response.status} ${response.statusText}`);
	const img = await loadImage(await response.blob());
	const canvas = document.createElement("canvas");
	canvas.width = optimized.width;
	canvas.height = optimized.height;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("failed to create canvas context");
	const { sourceCropSize, cropCount, coordinates } = getDecryptedImageData(optimized);
	const overflow = {
		w: Math.max(0, img.width - optimized.width),
		h: Math.max(0, img.height - optimized.height)
	};
	for (const coordinate of coordinates) {
		const width = coordinate.dx + sourceCropSize === sourceCropSize * cropCount.w ? sourceCropSize - overflow.w : sourceCropSize;
		const height = coordinate.dy + sourceCropSize === sourceCropSize * cropCount.h ? sourceCropSize - overflow.h : sourceCropSize;
		if (width <= 0 || height <= 0) continue;
		ctx.drawImage(img, coordinate.sx, coordinate.sy, width, height, coordinate.dx, coordinate.dy, width, height);
	}
	const pngBlob = await canvasToBlob(canvas);
	return new Uint8Array(await pngBlob.arrayBuffer());
}
function loadImage(blob) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		const objectUrl = URL.createObjectURL(blob);
		img.onload = () => {
			URL.revokeObjectURL(objectUrl);
			resolve(img);
		};
		img.onerror = () => {
			URL.revokeObjectURL(objectUrl);
			reject(/* @__PURE__ */ new Error("failed to decode puzzle image"));
		};
		img.src = objectUrl;
	});
}
function canvasToBlob(canvas) {
	return new Promise((resolve, reject) => {
		canvas.toBlob((blob) => {
			if (blob) resolve(blob);
			else reject(/* @__PURE__ */ new Error("failed to encode restored image"));
		}, "image/png");
	});
}
function replaceExtension(filename, ext) {
	const slashIndex = filename.lastIndexOf("/");
	const dotIndex = filename.lastIndexOf(".");
	if (dotIndex > slashIndex) return `${filename.slice(0, dotIndex)}${ext}`;
	return `${filename}${ext}`;
}
function addUniqueZipFile(zipFiles, filename, data) {
	let name = filename;
	let count = 2;
	while (zipFiles[name]) {
		name = appendSuffix(filename, `_${count}`);
		count++;
	}
	zipFiles[name] = data;
}
function appendSuffix(filename, suffix) {
	const slashIndex = filename.lastIndexOf("/");
	const dotIndex = filename.lastIndexOf(".");
	if (dotIndex > slashIndex) return `${filename.slice(0, dotIndex)}${suffix}${filename.slice(dotIndex)}`;
	return `${filename}${suffix}`;
}
var MersenneTwister = class {
	constructor(seed) {
		this.mt = new Array(624);
		this.index = 624;
		this.init(seed >>> 0);
	}
	init(seed) {
		this.mt[0] = seed >>> 0;
		for (let index = 1; index < 624; index++) this.mt[index] = Math.imul(1812433253, this.mt[index - 1] ^ this.mt[index - 1] >>> 30) + index >>> 0;
	}
	randomInt() {
		if (this.index >= 624) this.twist();
		let value = this.mt[this.index++];
		value ^= value >>> 11;
		value ^= value << 7 & 2636928640;
		value ^= value << 15 & 4022730752;
		value ^= value >>> 18;
		return value >>> 0;
	}
	random() {
		return this.randomInt() * (1 / 4294967296);
	}
	twist() {
		for (let index = 0; index < 624; index++) {
			const value = (this.mt[index] & 2147483648) + (this.mt[(index + 1) % 624] & 2147483647);
			let next = value >>> 1;
			if (value % 2 !== 0) next ^= 2567483615;
			this.mt[index] = this.mt[(index + 397) % 624] ^ next;
		}
		this.index = 0;
	}
};
var origFetch = _unsafeWindow.fetch;
var hooks = [];
/**
* 注册请求捕获规则
* @param {RegExp} pattern 匹配 URL 的正则
* @param {Function} callback 捕获后执行的回调 (json, response, url, type)
* @param {boolean} [once=false] 是否只捕获一次
*/
var registerRequestHook = (pattern, callback, once = false) => {
	const hook = {
		pattern,
		callback,
		once
	};
	hooks.push(hook);
	origConsole.log("[hookRequest] 注册 hook:", pattern, once ? "(once)" : "");
	return () => removeHook(hook);
};
if (!_unsafeWindow.__requestHooked__) {
	_unsafeWindow.__requestHooked__ = true;
	_unsafeWindow.fetch = async (...args) => {
		const [resource] = args;
		const url = typeof resource === "string" ? resource : resource instanceof URL ? resource.href : resource?.url;
		const matchedHooks = hooks.filter((h) => h.pattern.test(url));
		if (matchedHooks.length === 0) return origFetch(...args);
		origConsole.log("[hookRequest] 捕获 fetch 请求：", url);
		const response = await origFetch(...args);
		matchedHooks.forEach((h) => {
			response.clone().json().catch(() => null).then((json) => {
				try {
					h.callback(json, response, url, "fetch");
				} catch (err) {
					origConsole.error("[hookRequest] fetch 回调错误:", err);
				}
				if (h.once) removeHook(h);
			});
		});
		return response;
	};
	const OrigXHR = _unsafeWindow.XMLHttpRequest;
	class HookedXHR extends OrigXHR {
		constructor() {
			super();
			this._url = null;
			const origOpen = this.open;
			this.open = function(method, url, ...rest) {
				this._url = url;
				return origOpen.call(this, method, url, ...rest);
			};
			const origSend = this.send;
			this.send = function(...args) {
				this.addEventListener("load", () => {
					try {
						const matchedHooks = hooks.filter((h) => h.pattern.test(this._url));
						if (matchedHooks.length === 0) return;
						origConsole.log("[hookRequest] 捕获 XHR 请求：", this._url);
						let json = null;
						try {
							json = JSON.parse(this.responseText);
						} catch {}
						matchedHooks.forEach((h) => {
							try {
								h.callback(json, this, this._url, "xhr");
							} catch (err) {
								origConsole.error("[hookRequest] xhr 回调错误:", err);
							}
							if (h.once) removeHook(h);
						});
					} catch (err) {
						origConsole.error("[hookRequest] XHR 处理错误:", err);
					}
				});
				return origSend.apply(this, args);
			};
		}
	}
	_unsafeWindow.XMLHttpRequest = HookedXHR;
	origConsole.log("[hookRequest] 已挂载 fetch + XHR hook");
}
function removeHook(hookObj) {
	const index = hooks.indexOf(hookObj);
	if (index !== -1) {
		hooks.splice(index, 1);
		origConsole.log("[hookRequest] 已移除一次性 hook:", hookObj.pattern);
	}
}
var WINDOWS_1252_EXTRA = {
	128: "€",
	130: "‚",
	131: "ƒ",
	132: "„",
	133: "…",
	134: "†",
	135: "‡",
	136: "ˆ",
	137: "‰",
	138: "Š",
	139: "‹",
	140: "Œ",
	142: "Ž",
	145: "‘",
	146: "’",
	147: "“",
	148: "”",
	149: "•",
	150: "–",
	151: "—",
	152: "˜",
	153: "™",
	154: "š",
	155: "›",
	156: "œ",
	158: "ž",
	159: "Ÿ"
};
for (const [code, char] of Object.entries(WINDOWS_1252_EXTRA)) Number.parseInt(code, 10);
var _utf8Decoder;
function utf8Decoder() {
	if (typeof globalThis.TextDecoder === "undefined") return void 0;
	return _utf8Decoder !== null && _utf8Decoder !== void 0 ? _utf8Decoder : _utf8Decoder = new globalThis.TextDecoder("utf-8");
}
var CHUNK = 32768;
var REPLACEMENT = 65533;
/**
* Decode text from binary data
*/
function textDecode(bytes, encoding = "utf-8") {
	switch (encoding.toLowerCase()) {
		case "utf-8":
		case "utf8": {
			const dec = utf8Decoder();
			return dec ? dec.decode(bytes) : decodeUTF8(bytes);
		}
		case "utf-16le": return decodeUTF16LE(bytes);
		case "us-ascii":
		case "ascii": return decodeASCII(bytes);
		case "latin1":
		case "iso-8859-1": return decodeLatin1(bytes);
		case "windows-1252": return decodeWindows1252(bytes);
		default: throw new RangeError(`Encoding '${encoding}' not supported`);
	}
}
function flushChunk(parts, chunk) {
	if (chunk.length === 0) return;
	parts.push(String.fromCharCode.apply(null, chunk));
	chunk.length = 0;
}
function pushCodeUnit(parts, chunk, codeUnit) {
	chunk.push(codeUnit);
	if (chunk.length >= CHUNK) flushChunk(parts, chunk);
}
function pushCodePoint(parts, chunk, cp) {
	if (cp <= 65535) {
		pushCodeUnit(parts, chunk, cp);
		return;
	}
	cp -= 65536;
	pushCodeUnit(parts, chunk, 55296 + (cp >> 10));
	pushCodeUnit(parts, chunk, 56320 + (cp & 1023));
}
function decodeUTF8(bytes) {
	const parts = [];
	const chunk = [];
	let i = 0;
	if (bytes.length >= 3 && bytes[0] === 239 && bytes[1] === 187 && bytes[2] === 191) i = 3;
	while (i < bytes.length) {
		const b1 = bytes[i];
		if (b1 <= 127) {
			pushCodeUnit(parts, chunk, b1);
			i++;
			continue;
		}
		if (b1 < 194 || b1 > 244) {
			pushCodeUnit(parts, chunk, REPLACEMENT);
			i++;
			continue;
		}
		if (b1 <= 223) {
			if (i + 1 >= bytes.length) {
				pushCodeUnit(parts, chunk, REPLACEMENT);
				i++;
				continue;
			}
			const b2 = bytes[i + 1];
			if ((b2 & 192) !== 128) {
				pushCodeUnit(parts, chunk, REPLACEMENT);
				i++;
				continue;
			}
			pushCodeUnit(parts, chunk, (b1 & 31) << 6 | b2 & 63);
			i += 2;
			continue;
		}
		if (b1 <= 239) {
			if (i + 2 >= bytes.length) {
				pushCodeUnit(parts, chunk, REPLACEMENT);
				i++;
				continue;
			}
			const b2 = bytes[i + 1];
			const b3 = bytes[i + 2];
			if (!((b2 & 192) === 128 && (b3 & 192) === 128 && !(b1 === 224 && b2 < 160) && !(b1 === 237 && b2 >= 160))) {
				pushCodeUnit(parts, chunk, REPLACEMENT);
				i++;
				continue;
			}
			pushCodeUnit(parts, chunk, (b1 & 15) << 12 | (b2 & 63) << 6 | b3 & 63);
			i += 3;
			continue;
		}
		if (i + 3 >= bytes.length) {
			pushCodeUnit(parts, chunk, REPLACEMENT);
			i++;
			continue;
		}
		const b2 = bytes[i + 1];
		const b3 = bytes[i + 2];
		const b4 = bytes[i + 3];
		if (!((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128 && !(b1 === 240 && b2 < 144) && !(b1 === 244 && b2 > 143))) {
			pushCodeUnit(parts, chunk, REPLACEMENT);
			i++;
			continue;
		}
		pushCodePoint(parts, chunk, (b1 & 7) << 18 | (b2 & 63) << 12 | (b3 & 63) << 6 | b4 & 63);
		i += 4;
	}
	flushChunk(parts, chunk);
	return parts.join("");
}
function decodeUTF16LE(bytes) {
	const parts = [];
	const chunk = [];
	const len = bytes.length;
	let i = 0;
	while (i + 1 < len) {
		const u1 = bytes[i] | bytes[i + 1] << 8;
		i += 2;
		if (u1 >= 55296 && u1 <= 56319) {
			if (i + 1 < len) {
				const u2 = bytes[i] | bytes[i + 1] << 8;
				if (u2 >= 56320 && u2 <= 57343) {
					pushCodeUnit(parts, chunk, u1);
					pushCodeUnit(parts, chunk, u2);
					i += 2;
				} else pushCodeUnit(parts, chunk, REPLACEMENT);
			} else pushCodeUnit(parts, chunk, REPLACEMENT);
			continue;
		}
		if (u1 >= 56320 && u1 <= 57343) {
			pushCodeUnit(parts, chunk, REPLACEMENT);
			continue;
		}
		pushCodeUnit(parts, chunk, u1);
	}
	if (i < len) pushCodeUnit(parts, chunk, REPLACEMENT);
	flushChunk(parts, chunk);
	return parts.join("");
}
function decodeASCII(bytes) {
	const parts = [];
	for (let i = 0; i < bytes.length; i += CHUNK) {
		const end = Math.min(bytes.length, i + CHUNK);
		const codes = new Array(end - i);
		for (let j = i, k = 0; j < end; j++, k++) codes[k] = bytes[j] & 127;
		parts.push(String.fromCharCode.apply(null, codes));
	}
	return parts.join("");
}
function decodeLatin1(bytes) {
	const parts = [];
	for (let i = 0; i < bytes.length; i += CHUNK) {
		const end = Math.min(bytes.length, i + CHUNK);
		const codes = new Array(end - i);
		for (let j = i, k = 0; j < end; j++, k++) codes[k] = bytes[j];
		parts.push(String.fromCharCode.apply(null, codes));
	}
	return parts.join("");
}
function decodeWindows1252(bytes) {
	const parts = [];
	let out = "";
	for (let i = 0; i < bytes.length; i++) {
		const b = bytes[i];
		const extra = b >= 128 && b <= 159 ? WINDOWS_1252_EXTRA[b] : void 0;
		out += extra !== null && extra !== void 0 ? extra : String.fromCharCode(b);
		if (out.length >= CHUNK) {
			parts.push(out);
			out = "";
		}
	}
	if (out) parts.push(out);
	return parts.join("");
}
function dv(array) {
	return new DataView(array.buffer, array.byteOffset);
}
var UINT8 = {
	len: 1,
	get(array, offset) {
		return dv(array).getUint8(offset);
	},
	put(array, offset, value) {
		dv(array).setUint8(offset, value);
		return offset + 1;
	}
};
/**
* 16-bit unsigned integer, Little Endian byte order
*/
var UINT16_LE = {
	len: 2,
	get(array, offset) {
		return dv(array).getUint16(offset, true);
	},
	put(array, offset, value) {
		dv(array).setUint16(offset, value, true);
		return offset + 2;
	}
};
/**
* 16-bit unsigned integer, Big Endian byte order
*/
var UINT16_BE = {
	len: 2,
	get(array, offset) {
		return dv(array).getUint16(offset);
	},
	put(array, offset, value) {
		dv(array).setUint16(offset, value);
		return offset + 2;
	}
};
/**
* 32-bit unsigned integer, Little Endian byte order
*/
var UINT32_LE = {
	len: 4,
	get(array, offset) {
		return dv(array).getUint32(offset, true);
	},
	put(array, offset, value) {
		dv(array).setUint32(offset, value, true);
		return offset + 4;
	}
};
/**
* 32-bit unsigned integer, Big Endian byte order
*/
var UINT32_BE = {
	len: 4,
	get(array, offset) {
		return dv(array).getUint32(offset);
	},
	put(array, offset, value) {
		dv(array).setUint32(offset, value);
		return offset + 4;
	}
};
/**
* 32-bit signed integer, Big Endian byte order
*/
var INT32_BE = {
	len: 4,
	get(array, offset) {
		return dv(array).getInt32(offset);
	},
	put(array, offset, value) {
		dv(array).setInt32(offset, value);
		return offset + 4;
	}
};
/**
* 64-bit unsigned integer, Little Endian byte order
*/
var UINT64_LE = {
	len: 8,
	get(array, offset) {
		return dv(array).getBigUint64(offset, true);
	},
	put(array, offset, value) {
		dv(array).setBigUint64(offset, value, true);
		return offset + 8;
	}
};
/**
* Consume a fixed number of bytes from the stream and return a string with a specified encoding.
* Supports all encodings supported by TextDecoder, plus 'windows-1252'.
*/
var StringType = class {
	constructor(len, encoding) {
		this.len = len;
		this.encoding = encoding;
	}
	get(data, offset = 0) {
		return textDecode(data.subarray(offset, offset + this.len), this.encoding);
	}
};
var defaultMessages = "End-Of-Stream";
/**
* Thrown on read operation of the end of file or stream has been reached
*/
var EndOfStreamError = class extends Error {
	constructor() {
		super(defaultMessages);
		this.name = "EndOfStreamError";
	}
};
var AbortError = class extends Error {
	constructor(message = "The operation was aborted") {
		super(message);
		this.name = "AbortError";
	}
};
var AbstractStreamReader = class {
	constructor() {
		this.endOfStream = false;
		this.interrupted = false;
		/**
		* Store peeked data
		* @type {Array}
		*/
		this.peekQueue = [];
	}
	async peek(uint8Array, mayBeLess = false) {
		const bytesRead = await this.read(uint8Array, mayBeLess);
		this.peekQueue.push(uint8Array.subarray(0, bytesRead));
		return bytesRead;
	}
	async read(buffer, mayBeLess = false) {
		if (buffer.length === 0) return 0;
		let bytesRead = this.readFromPeekBuffer(buffer);
		if (!this.endOfStream) bytesRead += await this.readRemainderFromStream(buffer.subarray(bytesRead), mayBeLess);
		if (bytesRead === 0 && !mayBeLess) throw new EndOfStreamError();
		return bytesRead;
	}
	/**
	* Read chunk from stream
	* @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
	* @returns Number of bytes read
	*/
	readFromPeekBuffer(buffer) {
		let remaining = buffer.length;
		let bytesRead = 0;
		while (this.peekQueue.length > 0 && remaining > 0) {
			const peekData = this.peekQueue.pop();
			if (!peekData) throw new Error("peekData should be defined");
			const lenCopy = Math.min(peekData.length, remaining);
			buffer.set(peekData.subarray(0, lenCopy), bytesRead);
			bytesRead += lenCopy;
			remaining -= lenCopy;
			if (lenCopy < peekData.length) this.peekQueue.push(peekData.subarray(lenCopy));
		}
		return bytesRead;
	}
	async readRemainderFromStream(buffer, mayBeLess) {
		let bytesRead = 0;
		while (bytesRead < buffer.length && !this.endOfStream) {
			if (this.interrupted) throw new AbortError();
			const chunkLen = await this.readFromStream(buffer.subarray(bytesRead), mayBeLess);
			if (chunkLen === 0) break;
			bytesRead += chunkLen;
		}
		if (!mayBeLess && bytesRead < buffer.length) throw new EndOfStreamError();
		return bytesRead;
	}
};
var WebStreamReader = class extends AbstractStreamReader {
	constructor(reader) {
		super();
		this.reader = reader;
	}
	async abort() {
		return this.close();
	}
	async close() {
		this.reader.releaseLock();
	}
};
/**
* Read from a WebStream using a BYOB reader
* Reference: https://nodejs.org/api/webstreams.html#class-readablestreambyobreader
*/
var WebStreamByobReader = class extends WebStreamReader {
	/**
	* Read from stream
	* @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
	* @param mayBeLess - If true, may fill the buffer partially
	* @protected Bytes read
	*/
	async readFromStream(buffer, mayBeLess) {
		if (buffer.length === 0) return 0;
		const result = await this.reader.read(new Uint8Array(buffer.length), { min: mayBeLess ? void 0 : buffer.length });
		if (result.done) this.endOfStream = result.done;
		if (result.value) {
			buffer.set(result.value);
			return result.value.length;
		}
		return 0;
	}
};
var WebStreamDefaultReader = class extends AbstractStreamReader {
	constructor(reader) {
		super();
		this.reader = reader;
		this.buffer = null;
	}
	/**
	* Copy chunk to target, and store the remainder in this.buffer
	*/
	writeChunk(target, chunk) {
		const written = Math.min(chunk.length, target.length);
		target.set(chunk.subarray(0, written));
		if (written < chunk.length) this.buffer = chunk.subarray(written);
		else this.buffer = null;
		return written;
	}
	/**
	* Read from stream
	* @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
	* @param mayBeLess - If true, may fill the buffer partially
	* @protected Bytes read
	*/
	async readFromStream(buffer, mayBeLess) {
		if (buffer.length === 0) return 0;
		let totalBytesRead = 0;
		if (this.buffer) totalBytesRead += this.writeChunk(buffer, this.buffer);
		while (totalBytesRead < buffer.length && !this.endOfStream) {
			const result = await this.reader.read();
			if (result.done) {
				this.endOfStream = true;
				break;
			}
			if (result.value) totalBytesRead += this.writeChunk(buffer.subarray(totalBytesRead), result.value);
		}
		if (!mayBeLess && totalBytesRead === 0 && this.endOfStream) throw new EndOfStreamError();
		return totalBytesRead;
	}
	abort() {
		this.interrupted = true;
		return this.reader.cancel();
	}
	async close() {
		await this.abort();
		this.reader.releaseLock();
	}
};
function makeWebStreamReader(stream) {
	try {
		const reader = stream.getReader({ mode: "byob" });
		if (reader instanceof ReadableStreamDefaultReader) return new WebStreamDefaultReader(reader);
		return new WebStreamByobReader(reader);
	} catch (error) {
		if (error instanceof TypeError) return new WebStreamDefaultReader(stream.getReader());
		throw error;
	}
}
/**
* Core tokenizer
*/
var AbstractTokenizer = class {
	/**
	* Constructor
	* @param options Tokenizer options
	* @protected
	*/
	constructor(options) {
		this.numBuffer = /* @__PURE__ */ new Uint8Array(8);
		/**
		* Tokenizer-stream position
		*/
		this.position = 0;
		this.onClose = options?.onClose;
		if (options?.abortSignal) options.abortSignal.addEventListener("abort", () => {
			this.abort();
		});
	}
	/**
	* Read a token from the tokenizer-stream
	* @param token - The token to read
	* @param position - If provided, the desired position in the tokenizer-stream
	* @returns Promise with token data
	*/
	async readToken(token, position = this.position) {
		const uint8Array = new Uint8Array(token.len);
		if (await this.readBuffer(uint8Array, { position }) < token.len) throw new EndOfStreamError();
		return token.get(uint8Array, 0);
	}
	/**
	* Peek a token from the tokenizer-stream.
	* @param token - Token to peek from the tokenizer-stream.
	* @param position - Offset where to begin reading within the file. If position is null, data will be read from the current file position.
	* @returns Promise with token data
	*/
	async peekToken(token, position = this.position) {
		const uint8Array = new Uint8Array(token.len);
		if (await this.peekBuffer(uint8Array, { position }) < token.len) throw new EndOfStreamError();
		return token.get(uint8Array, 0);
	}
	/**
	* Read a numeric token from the stream
	* @param token - Numeric token
	* @returns Promise with number
	*/
	async readNumber(token) {
		if (await this.readBuffer(this.numBuffer, { length: token.len }) < token.len) throw new EndOfStreamError();
		return token.get(this.numBuffer, 0);
	}
	/**
	* Read a numeric token from the stream
	* @param token - Numeric token
	* @returns Promise with number
	*/
	async peekNumber(token) {
		if (await this.peekBuffer(this.numBuffer, { length: token.len }) < token.len) throw new EndOfStreamError();
		return token.get(this.numBuffer, 0);
	}
	/**
	* Ignore number of bytes, advances the pointer in under tokenizer-stream.
	* @param length - Number of bytes to ignore.  Must be ≥ 0.
	* @return resolves the number of bytes ignored, equals length if this available, otherwise the number of bytes available
	*/
	async ignore(length) {
		if (length < 0) throw new RangeError("ignore length must be ≥ 0 bytes");
		if (this.fileInfo.size !== void 0) {
			const bytesLeft = this.fileInfo.size - this.position;
			if (length > bytesLeft) {
				this.position += bytesLeft;
				return bytesLeft;
			}
		}
		this.position += length;
		return length;
	}
	async close() {
		await this.abort();
		await this.onClose?.();
	}
	normalizeOptions(uint8Array, options) {
		if (!this.supportsRandomAccess() && options && options.position !== void 0 && options.position < this.position) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
		return {
			mayBeLess: false,
			offset: 0,
			length: uint8Array.length,
			position: this.position,
			...options
		};
	}
	abort() {
		return Promise.resolve();
	}
};
var maxBufferSize = 256e3;
var ReadStreamTokenizer = class extends AbstractTokenizer {
	/**
	* Constructor
	* @param streamReader stream-reader to read from
	* @param options Tokenizer options
	*/
	constructor(streamReader, options) {
		super(options);
		this.streamReader = streamReader;
		this.fileInfo = options?.fileInfo ?? {};
	}
	/**
	* Read buffer from tokenizer
	* @param uint8Array - Target Uint8Array to fill with data read from the tokenizer-stream
	* @param options - Read behaviour options
	* @returns Promise with number of bytes read
	*/
	async readBuffer(uint8Array, options) {
		const normOptions = this.normalizeOptions(uint8Array, options);
		const skipBytes = normOptions.position - this.position;
		if (skipBytes > 0) {
			await this.ignore(skipBytes);
			return this.readBuffer(uint8Array, options);
		}
		if (skipBytes < 0) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
		if (normOptions.length === 0) return 0;
		const bytesRead = await this.streamReader.read(uint8Array.subarray(0, normOptions.length), normOptions.mayBeLess);
		this.position += bytesRead;
		if ((!options || !options.mayBeLess) && bytesRead < normOptions.length) throw new EndOfStreamError();
		return bytesRead;
	}
	/**
	* Peek (read ahead) buffer from tokenizer
	* @param uint8Array - Uint8Array (or Buffer) to write data to
	* @param options - Read behaviour options
	* @returns Promise with number of bytes peeked
	*/
	async peekBuffer(uint8Array, options) {
		const normOptions = this.normalizeOptions(uint8Array, options);
		let bytesRead = 0;
		if (normOptions.position) {
			const skipBytes = normOptions.position - this.position;
			if (skipBytes > 0) {
				const skipBuffer = new Uint8Array(normOptions.length + skipBytes);
				bytesRead = await this.peekBuffer(skipBuffer, { mayBeLess: normOptions.mayBeLess });
				uint8Array.set(skipBuffer.subarray(skipBytes));
				return bytesRead - skipBytes;
			}
			if (skipBytes < 0) throw new Error("Cannot peek from a negative offset in a stream");
		}
		if (normOptions.length > 0) {
			try {
				bytesRead = await this.streamReader.peek(uint8Array.subarray(0, normOptions.length), normOptions.mayBeLess);
			} catch (err) {
				if (options?.mayBeLess && err instanceof EndOfStreamError) return 0;
				throw err;
			}
			if (!normOptions.mayBeLess && bytesRead < normOptions.length) throw new EndOfStreamError();
		}
		return bytesRead;
	}
	/**
	* @param length Number of bytes to ignore. Must be ≥ 0.
	*/
	async ignore(length) {
		if (length < 0) throw new RangeError("ignore length must be ≥ 0 bytes");
		const bufSize = Math.min(maxBufferSize, length);
		const buf = new Uint8Array(bufSize);
		let totBytesRead = 0;
		while (totBytesRead < length) {
			const remaining = length - totBytesRead;
			const bytesRead = await this.readBuffer(buf, { length: Math.min(bufSize, remaining) });
			if (bytesRead < 0) return bytesRead;
			totBytesRead += bytesRead;
		}
		return totBytesRead;
	}
	abort() {
		return this.streamReader.abort();
	}
	async close() {
		return this.streamReader.close();
	}
	supportsRandomAccess() {
		return false;
	}
};
var BufferTokenizer = class extends AbstractTokenizer {
	/**
	* Construct BufferTokenizer
	* @param uint8Array - Uint8Array to tokenize
	* @param options Tokenizer options
	*/
	constructor(uint8Array, options) {
		super(options);
		this.uint8Array = uint8Array;
		this.fileInfo = {
			...options?.fileInfo ?? {},
			size: uint8Array.length
		};
	}
	/**
	* Read buffer from tokenizer
	* @param uint8Array - Uint8Array to tokenize
	* @param options - Read behaviour options
	* @returns {Promise<number>}
	*/
	async readBuffer(uint8Array, options) {
		if (options?.position) this.position = options.position;
		const bytesRead = await this.peekBuffer(uint8Array, options);
		this.position += bytesRead;
		return bytesRead;
	}
	/**
	* Peek (read ahead) buffer from tokenizer
	* @param uint8Array
	* @param options - Read behaviour options
	* @returns {Promise<number>}
	*/
	async peekBuffer(uint8Array, options) {
		const normOptions = this.normalizeOptions(uint8Array, options);
		const bytes2read = Math.min(this.uint8Array.length - normOptions.position, normOptions.length);
		if (!normOptions.mayBeLess && bytes2read < normOptions.length) throw new EndOfStreamError();
		uint8Array.set(this.uint8Array.subarray(normOptions.position, normOptions.position + bytes2read));
		return bytes2read;
	}
	close() {
		return super.close();
	}
	supportsRandomAccess() {
		return true;
	}
	setPosition(position) {
		this.position = position;
	}
};
var BlobTokenizer = class extends AbstractTokenizer {
	/**
	* Construct BufferTokenizer
	* @param blob - Uint8Array to tokenize
	* @param options Tokenizer options
	*/
	constructor(blob, options) {
		super(options);
		this.blob = blob;
		this.fileInfo = {
			...options?.fileInfo ?? {},
			size: blob.size,
			mimeType: blob.type
		};
	}
	/**
	* Read buffer from tokenizer
	* @param uint8Array - Uint8Array to tokenize
	* @param options - Read behaviour options
	* @returns {Promise<number>}
	*/
	async readBuffer(uint8Array, options) {
		if (options?.position) this.position = options.position;
		const bytesRead = await this.peekBuffer(uint8Array, options);
		this.position += bytesRead;
		return bytesRead;
	}
	/**
	* Peek (read ahead) buffer from tokenizer
	* @param buffer
	* @param options - Read behaviour options
	* @returns {Promise<number>}
	*/
	async peekBuffer(buffer, options) {
		const normOptions = this.normalizeOptions(buffer, options);
		const bytes2read = Math.min(this.blob.size - normOptions.position, normOptions.length);
		if (!normOptions.mayBeLess && bytes2read < normOptions.length) throw new EndOfStreamError();
		const arrayBuffer = await this.blob.slice(normOptions.position, normOptions.position + bytes2read).arrayBuffer();
		buffer.set(new Uint8Array(arrayBuffer));
		return bytes2read;
	}
	close() {
		return super.close();
	}
	supportsRandomAccess() {
		return true;
	}
	setPosition(position) {
		this.position = position;
	}
};
/**
* Construct ReadStreamTokenizer from given ReadableStream (WebStream API).
* Will set fileSize, if provided given Stream has set the .path property/
* @param webStream - Read from Node.js Stream.Readable (must be a byte stream)
* @param options - Tokenizer options
* @returns ReadStreamTokenizer
*/
function fromWebStream(webStream, options) {
	const webStreamReader = makeWebStreamReader(webStream);
	const _options = options ?? {};
	const chainedClose = _options.onClose;
	_options.onClose = async () => {
		await webStreamReader.close();
		if (chainedClose) return chainedClose();
	};
	return new ReadStreamTokenizer(webStreamReader, _options);
}
/**
* Construct ReadStreamTokenizer from given Buffer.
* @param uint8Array - Uint8Array to tokenize
* @param options - Tokenizer options
* @returns BufferTokenizer
*/
function fromBuffer(uint8Array, options) {
	return new BufferTokenizer(uint8Array, options);
}
/**
* Construct ReadStreamTokenizer from given Blob.
* @param blob - Uint8Array to tokenize
* @param options - Tokenizer options
* @returns BufferTokenizer
*/
function fromBlob(blob, options) {
	return new BlobTokenizer(blob, options);
}
var require_ms = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Helpers.
	*/
	var s = 1e3;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var w = d * 7;
	var y = d * 365.25;
	/**
	* Parse or format the given `val`.
	*
	* Options:
	*
	*  - `long` verbose formatting [false]
	*
	* @param {String|Number} val
	* @param {Object} [options]
	* @throws {Error} throw an error if val is not a non-empty string or a number
	* @return {String|Number}
	* @api public
	*/
	module.exports = function(val, options) {
		options = options || {};
		var type = typeof val;
		if (type === "string" && val.length > 0) return parse(val);
		else if (type === "number" && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
		throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
	};
	/**
	* Parse the given `str` and return milliseconds.
	*
	* @param {String} str
	* @return {Number}
	* @api private
	*/
	function parse(str) {
		str = String(str);
		if (str.length > 100) return;
		var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
		if (!match) return;
		var n = parseFloat(match[1]);
		switch ((match[2] || "ms").toLowerCase()) {
			case "years":
			case "year":
			case "yrs":
			case "yr":
			case "y": return n * y;
			case "weeks":
			case "week":
			case "w": return n * w;
			case "days":
			case "day":
			case "d": return n * d;
			case "hours":
			case "hour":
			case "hrs":
			case "hr":
			case "h": return n * h;
			case "minutes":
			case "minute":
			case "mins":
			case "min":
			case "m": return n * m;
			case "seconds":
			case "second":
			case "secs":
			case "sec":
			case "s": return n * s;
			case "milliseconds":
			case "millisecond":
			case "msecs":
			case "msec":
			case "ms": return n;
			default: return;
		}
	}
	/**
	* Short format for `ms`.
	*
	* @param {Number} ms
	* @return {String}
	* @api private
	*/
	function fmtShort(ms) {
		var msAbs = Math.abs(ms);
		if (msAbs >= d) return Math.round(ms / d) + "d";
		if (msAbs >= h) return Math.round(ms / h) + "h";
		if (msAbs >= m) return Math.round(ms / m) + "m";
		if (msAbs >= s) return Math.round(ms / s) + "s";
		return ms + "ms";
	}
	/**
	* Long format for `ms`.
	*
	* @param {Number} ms
	* @return {String}
	* @api private
	*/
	function fmtLong(ms) {
		var msAbs = Math.abs(ms);
		if (msAbs >= d) return plural(ms, msAbs, d, "day");
		if (msAbs >= h) return plural(ms, msAbs, h, "hour");
		if (msAbs >= m) return plural(ms, msAbs, m, "minute");
		if (msAbs >= s) return plural(ms, msAbs, s, "second");
		return ms + " ms";
	}
	/**
	* Pluralization helper.
	*/
	function plural(ms, msAbs, n, name) {
		var isPlural = msAbs >= n * 1.5;
		return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
	}
}));
var require_common = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This is the common logic for both the Node.js and web browser
	* implementations of `debug()`.
	*/
	function setup(env) {
		createDebug.debug = createDebug;
		createDebug.default = createDebug;
		createDebug.coerce = coerce;
		createDebug.disable = disable;
		createDebug.enable = enable;
		createDebug.enabled = enabled;
		createDebug.humanize = require_ms();
		createDebug.destroy = destroy;
		Object.keys(env).forEach((key) => {
			createDebug[key] = env[key];
		});
		/**
		* The currently active debug mode names, and names to skip.
		*/
		createDebug.names = [];
		createDebug.skips = [];
		/**
		* Map of special "%n" handling functions, for the debug "format" argument.
		*
		* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
		*/
		createDebug.formatters = {};
		/**
		* Selects a color for a debug namespace
		* @param {String} namespace The namespace string for the debug instance to be colored
		* @return {Number|String} An ANSI color code for the given namespace
		* @api private
		*/
		function selectColor(namespace) {
			let hash = 0;
			for (let i = 0; i < namespace.length; i++) {
				hash = (hash << 5) - hash + namespace.charCodeAt(i);
				hash |= 0;
			}
			return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
		}
		createDebug.selectColor = selectColor;
		/**
		* Create a debugger with the given `namespace`.
		*
		* @param {String} namespace
		* @return {Function}
		* @api public
		*/
		function createDebug(namespace) {
			let prevTime;
			let enableOverride = null;
			let namespacesCache;
			let enabledCache;
			function debug(...args) {
				if (!debug.enabled) return;
				const self = debug;
				const curr = Number(/* @__PURE__ */ new Date());
				self.diff = curr - (prevTime || curr);
				self.prev = prevTime;
				self.curr = curr;
				prevTime = curr;
				args[0] = createDebug.coerce(args[0]);
				if (typeof args[0] !== "string") args.unshift("%O");
				let index = 0;
				args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
					if (match === "%%") return "%";
					index++;
					const formatter = createDebug.formatters[format];
					if (typeof formatter === "function") {
						const val = args[index];
						match = formatter.call(self, val);
						args.splice(index, 1);
						index--;
					}
					return match;
				});
				createDebug.formatArgs.call(self, args);
				(self.log || createDebug.log).apply(self, args);
			}
			debug.namespace = namespace;
			debug.useColors = createDebug.useColors();
			debug.color = createDebug.selectColor(namespace);
			debug.extend = extend;
			debug.destroy = createDebug.destroy;
			Object.defineProperty(debug, "enabled", {
				enumerable: true,
				configurable: false,
				get: () => {
					if (enableOverride !== null) return enableOverride;
					if (namespacesCache !== createDebug.namespaces) {
						namespacesCache = createDebug.namespaces;
						enabledCache = createDebug.enabled(namespace);
					}
					return enabledCache;
				},
				set: (v) => {
					enableOverride = v;
				}
			});
			if (typeof createDebug.init === "function") createDebug.init(debug);
			return debug;
		}
		function extend(namespace, delimiter) {
			const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
			newDebug.log = this.log;
			return newDebug;
		}
		/**
		* Enables a debug mode by namespaces. This can include modes
		* separated by a colon and wildcards.
		*
		* @param {String} namespaces
		* @api public
		*/
		function enable(namespaces) {
			createDebug.save(namespaces);
			createDebug.namespaces = namespaces;
			createDebug.names = [];
			createDebug.skips = [];
			const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
			for (const ns of split) if (ns[0] === "-") createDebug.skips.push(ns.slice(1));
			else createDebug.names.push(ns);
		}
		/**
		* Checks if the given string matches a namespace template, honoring
		* asterisks as wildcards.
		*
		* @param {String} search
		* @param {String} template
		* @return {Boolean}
		*/
		function matchesTemplate(search, template) {
			let searchIndex = 0;
			let templateIndex = 0;
			let starIndex = -1;
			let matchIndex = 0;
			while (searchIndex < search.length) if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
				if (template[templateIndex] === "*") {
					starIndex = templateIndex;
					matchIndex = searchIndex;
					templateIndex++;
				} else {
					searchIndex++;
					templateIndex++;
				}
			} else if (starIndex !== -1) {
				templateIndex = starIndex + 1;
				matchIndex++;
				searchIndex = matchIndex;
			} else return false;
			while (templateIndex < template.length && template[templateIndex] === "*") templateIndex++;
			return templateIndex === template.length;
		}
		/**
		* Disable debug output.
		*
		* @return {String} namespaces
		* @api public
		*/
		function disable() {
			const namespaces = [...createDebug.names, ...createDebug.skips.map((namespace) => "-" + namespace)].join(",");
			createDebug.enable("");
			return namespaces;
		}
		/**
		* Returns true if the given mode name is enabled, false otherwise.
		*
		* @param {String} name
		* @return {Boolean}
		* @api public
		*/
		function enabled(name) {
			for (const skip of createDebug.skips) if (matchesTemplate(name, skip)) return false;
			for (const ns of createDebug.names) if (matchesTemplate(name, ns)) return true;
			return false;
		}
		/**
		* Coerce `val`.
		*
		* @param {Mixed} val
		* @return {Mixed}
		* @api private
		*/
		function coerce(val) {
			if (val instanceof Error) return val.stack || val.message;
			return val;
		}
		/**
		* XXX DO NOT USE. This is a temporary stub function.
		* XXX It WILL be removed in the next major release.
		*/
		function destroy() {
			console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
		}
		createDebug.enable(createDebug.load());
		return createDebug;
	}
	module.exports = setup;
}));
var import_browser = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This is the web browser implementation of `debug()`.
	*/
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = localstorage();
	exports.destroy = (() => {
		let warned = false;
		return () => {
			if (!warned) {
				warned = true;
				console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
			}
		};
	})();
	/**
	* Colors.
	*/
	exports.colors = [
		"#0000CC",
		"#0000FF",
		"#0033CC",
		"#0033FF",
		"#0066CC",
		"#0066FF",
		"#0099CC",
		"#0099FF",
		"#00CC00",
		"#00CC33",
		"#00CC66",
		"#00CC99",
		"#00CCCC",
		"#00CCFF",
		"#3300CC",
		"#3300FF",
		"#3333CC",
		"#3333FF",
		"#3366CC",
		"#3366FF",
		"#3399CC",
		"#3399FF",
		"#33CC00",
		"#33CC33",
		"#33CC66",
		"#33CC99",
		"#33CCCC",
		"#33CCFF",
		"#6600CC",
		"#6600FF",
		"#6633CC",
		"#6633FF",
		"#66CC00",
		"#66CC33",
		"#9900CC",
		"#9900FF",
		"#9933CC",
		"#9933FF",
		"#99CC00",
		"#99CC33",
		"#CC0000",
		"#CC0033",
		"#CC0066",
		"#CC0099",
		"#CC00CC",
		"#CC00FF",
		"#CC3300",
		"#CC3333",
		"#CC3366",
		"#CC3399",
		"#CC33CC",
		"#CC33FF",
		"#CC6600",
		"#CC6633",
		"#CC9900",
		"#CC9933",
		"#CCCC00",
		"#CCCC33",
		"#FF0000",
		"#FF0033",
		"#FF0066",
		"#FF0099",
		"#FF00CC",
		"#FF00FF",
		"#FF3300",
		"#FF3333",
		"#FF3366",
		"#FF3399",
		"#FF33CC",
		"#FF33FF",
		"#FF6600",
		"#FF6633",
		"#FF9900",
		"#FF9933",
		"#FFCC00",
		"#FFCC33"
	];
	/**
	* Currently only WebKit-based Web Inspectors, Firefox >= v31,
	* and the Firebug extension (any Firefox version) are known
	* to support "%c" CSS customizations.
	*
	* TODO: add a `localStorage` variable to explicitly enable/disable colors
	*/
	function useColors() {
		if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
		if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
		let m;
		return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
	}
	/**
	* Colorize log arguments if enabled.
	*
	* @api public
	*/
	function formatArgs(args) {
		args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
		if (!this.useColors) return;
		const c = "color: " + this.color;
		args.splice(1, 0, c, "color: inherit");
		let index = 0;
		let lastC = 0;
		args[0].replace(/%[a-zA-Z%]/g, (match) => {
			if (match === "%%") return;
			index++;
			if (match === "%c") lastC = index;
		});
		args.splice(lastC, 0, c);
	}
	/**
	* Invokes `console.debug()` when available.
	* No-op when `console.debug` is not a "function".
	* If `console.debug` is not available, falls back
	* to `console.log`.
	*
	* @api public
	*/
	exports.log = console.debug || console.log || (() => {});
	/**
	* Save `namespaces`.
	*
	* @param {String} namespaces
	* @api private
	*/
	function save(namespaces) {
		try {
			if (namespaces) exports.storage.setItem("debug", namespaces);
			else exports.storage.removeItem("debug");
		} catch (error) {}
	}
	/**
	* Load `namespaces`.
	*
	* @return {String} returns the previously persisted debug modes
	* @api private
	*/
	function load() {
		let r;
		try {
			r = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
		} catch (error) {}
		if (!r && typeof process !== "undefined" && "env" in process) r = {}.DEBUG;
		return r;
	}
	/**
	* Localstorage attempts to return the localstorage.
	*
	* This is necessary because safari throws
	* when a user disables cookies/localstorage
	* and you attempt to access it.
	*
	* @return {LocalStorage}
	* @api private
	*/
	function localstorage() {
		try {
			return localStorage;
		} catch (error) {}
	}
	module.exports = require_common()(exports);
	var { formatters } = module.exports;
	/**
	* Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	*/
	formatters.j = function(v) {
		try {
			return JSON.stringify(v);
		} catch (error) {
			return "[UnexpectedJSONParseError]: " + error.message;
		}
	};
})))());
/**
* Ref https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT
*/
var Signature = {
	LocalFileHeader: 67324752,
	DataDescriptor: 134695760,
	CentralFileHeader: 33639248,
	EndOfCentralDirectory: 101010256
};
var DataDescriptor = {
	get(array) {
		return {
			signature: UINT32_LE.get(array, 0),
			compressedSize: UINT32_LE.get(array, 8),
			uncompressedSize: UINT32_LE.get(array, 12)
		};
	},
	len: 16
};
/**
* First part of the ZIP Local File Header
* Offset | Bytes| Description
* -------|------+-------------------------------------------------------------------
*      0 |    4 | Signature (0x04034b50)
*      4 |    2 | Minimum version needed to extract
*      6 |    2 | Bit flag
*      8 |    2 | Compression method
*     10 |    2 | File last modification time (MS-DOS format)
*     12 |    2 | File last modification date (MS-DOS format)
*     14 |    4 | CRC-32 of uncompressed data
*     18 |    4 | Compressed size
*     22 |    4 | Uncompressed size
*     26 |    2 | File name length (n)
*     28 |    2 | Extra field length (m)
*     30 |    n | File name
* 30 + n |    m | Extra field
*/
var LocalFileHeaderToken = {
	get(array) {
		const flags = UINT16_LE.get(array, 6);
		return {
			signature: UINT32_LE.get(array, 0),
			minVersion: UINT16_LE.get(array, 4),
			dataDescriptor: !!(flags & 8),
			compressedMethod: UINT16_LE.get(array, 8),
			compressedSize: UINT32_LE.get(array, 18),
			uncompressedSize: UINT32_LE.get(array, 22),
			filenameLength: UINT16_LE.get(array, 26),
			extraFieldLength: UINT16_LE.get(array, 28),
			filename: null
		};
	},
	len: 30
};
/**
* 4.3.16  End of central directory record:
*  end of central dir signature (0x06064b50)                                      4 bytes
*  number of this disk                                                            2 bytes
*  number of the disk with the start of the central directory                     2 bytes
*  total number of entries in the central directory on this disk                  2 bytes
*  total number of entries in the size of the central directory                   2 bytes
*  sizeOfTheCentralDirectory                                                      4 bytes
*  offset of start of central directory with respect to the starting disk number  4 bytes
*  .ZIP file comment length                                                       2 bytes
*  .ZIP file comment       (variable size)
*/
var EndOfCentralDirectoryRecordToken = {
	get(array) {
		return {
			signature: UINT32_LE.get(array, 0),
			nrOfThisDisk: UINT16_LE.get(array, 4),
			nrOfThisDiskWithTheStart: UINT16_LE.get(array, 6),
			nrOfEntriesOnThisDisk: UINT16_LE.get(array, 8),
			nrOfEntriesOfSize: UINT16_LE.get(array, 10),
			sizeOfCd: UINT32_LE.get(array, 12),
			offsetOfStartOfCd: UINT32_LE.get(array, 16),
			zipFileCommentLength: UINT16_LE.get(array, 20)
		};
	},
	len: 22
};
/**
* File header:
*    central file header signature   4 bytes   0 (0x02014b50)
*    version made by                 2 bytes   4
*    version needed to extract       2 bytes   6
*    general purpose bit flag        2 bytes   8
*    compression method              2 bytes  10
*    last mod file time              2 bytes  12
*    last mod file date              2 bytes  14
*    crc-32                          4 bytes  16
*    compressed size                 4 bytes  20
*    uncompressed size               4 bytes  24
*    file name length                2 bytes  28
*    extra field length              2 bytes  30
*    file comment length             2 bytes  32
*    disk number start               2 bytes  34
*    internal file attributes        2 bytes  36
*    external file attributes        4 bytes  38
*    relative offset of local header 4 bytes  42
*/
var FileHeader = {
	get(array) {
		const flags = UINT16_LE.get(array, 8);
		return {
			signature: UINT32_LE.get(array, 0),
			minVersion: UINT16_LE.get(array, 6),
			dataDescriptor: !!(flags & 8),
			compressedMethod: UINT16_LE.get(array, 10),
			compressedSize: UINT32_LE.get(array, 20),
			uncompressedSize: UINT32_LE.get(array, 24),
			filenameLength: UINT16_LE.get(array, 28),
			extraFieldLength: UINT16_LE.get(array, 30),
			fileCommentLength: UINT16_LE.get(array, 32),
			relativeOffsetOfLocalHeader: UINT32_LE.get(array, 42),
			filename: null
		};
	},
	len: 46
};
function signatureToArray(signature) {
	const signatureBytes = new Uint8Array(UINT32_LE.len);
	UINT32_LE.put(signatureBytes, 0, signature);
	return signatureBytes;
}
var debug = (0, import_browser.default)("tokenizer:inflate");
var syncBufferSize = 262144;
var ddSignatureArray = signatureToArray(Signature.DataDescriptor);
var eocdSignatureBytes = signatureToArray(Signature.EndOfCentralDirectory);
var ZipHandler = class ZipHandler {
	constructor(tokenizer) {
		this.tokenizer = tokenizer;
		this.syncBuffer = new Uint8Array(syncBufferSize);
	}
	async isZip() {
		return await this.peekSignature() === Signature.LocalFileHeader;
	}
	peekSignature() {
		return this.tokenizer.peekToken(UINT32_LE);
	}
	async findEndOfCentralDirectoryLocator() {
		const randomReadTokenizer = this.tokenizer;
		const chunkLength = Math.min(16384, randomReadTokenizer.fileInfo.size);
		const buffer = this.syncBuffer.subarray(0, chunkLength);
		await this.tokenizer.readBuffer(buffer, { position: randomReadTokenizer.fileInfo.size - chunkLength });
		for (let i = buffer.length - 4; i >= 0; i--) if (buffer[i] === eocdSignatureBytes[0] && buffer[i + 1] === eocdSignatureBytes[1] && buffer[i + 2] === eocdSignatureBytes[2] && buffer[i + 3] === eocdSignatureBytes[3]) return randomReadTokenizer.fileInfo.size - chunkLength + i;
		return -1;
	}
	async readCentralDirectory() {
		if (!this.tokenizer.supportsRandomAccess()) {
			debug("Cannot reading central-directory without random-read support");
			return;
		}
		debug("Reading central-directory...");
		const pos = this.tokenizer.position;
		const offset = await this.findEndOfCentralDirectoryLocator();
		if (offset > 0) {
			debug("Central-directory 32-bit signature found");
			const eocdHeader = await this.tokenizer.readToken(EndOfCentralDirectoryRecordToken, offset);
			const files = [];
			this.tokenizer.setPosition(eocdHeader.offsetOfStartOfCd);
			for (let n = 0; n < eocdHeader.nrOfEntriesOfSize; ++n) {
				const entry = await this.tokenizer.readToken(FileHeader);
				if (entry.signature !== Signature.CentralFileHeader) throw new Error("Expected Central-File-Header signature");
				entry.filename = await this.tokenizer.readToken(new StringType(entry.filenameLength, "utf-8"));
				await this.tokenizer.ignore(entry.extraFieldLength);
				await this.tokenizer.ignore(entry.fileCommentLength);
				files.push(entry);
				debug(`Add central-directory file-entry: n=${n + 1}/${files.length}: filename=${files[n].filename}`);
			}
			this.tokenizer.setPosition(pos);
			return files;
		}
		this.tokenizer.setPosition(pos);
	}
	async unzip(fileCb) {
		const entries = await this.readCentralDirectory();
		if (entries) return this.iterateOverCentralDirectory(entries, fileCb);
		let stop = false;
		do {
			const zipHeader = await this.readLocalFileHeader();
			if (!zipHeader) break;
			const next = fileCb(zipHeader);
			stop = !!next.stop;
			let fileData;
			await this.tokenizer.ignore(zipHeader.extraFieldLength);
			if (zipHeader.dataDescriptor && zipHeader.compressedSize === 0) {
				const chunks = [];
				let len = syncBufferSize;
				debug("Compressed-file-size unknown, scanning for next data-descriptor-signature....");
				let nextHeaderIndex = -1;
				while (nextHeaderIndex < 0 && len === syncBufferSize) {
					len = await this.tokenizer.peekBuffer(this.syncBuffer, { mayBeLess: true });
					nextHeaderIndex = indexOf(this.syncBuffer.subarray(0, len), ddSignatureArray);
					const size = nextHeaderIndex >= 0 ? nextHeaderIndex : len;
					if (next.handler) {
						const data = new Uint8Array(size);
						await this.tokenizer.readBuffer(data);
						chunks.push(data);
					} else await this.tokenizer.ignore(size);
				}
				debug(`Found data-descriptor-signature at pos=${this.tokenizer.position}`);
				if (next.handler) await this.inflate(zipHeader, mergeArrays(chunks), next.handler);
			} else if (next.handler) {
				debug(`Reading compressed-file-data: ${zipHeader.compressedSize} bytes`);
				fileData = new Uint8Array(zipHeader.compressedSize);
				await this.tokenizer.readBuffer(fileData);
				await this.inflate(zipHeader, fileData, next.handler);
			} else {
				debug(`Ignoring compressed-file-data: ${zipHeader.compressedSize} bytes`);
				await this.tokenizer.ignore(zipHeader.compressedSize);
			}
			debug(`Reading data-descriptor at pos=${this.tokenizer.position}`);
			if (zipHeader.dataDescriptor) {
				if ((await this.tokenizer.readToken(DataDescriptor)).signature !== 134695760) throw new Error(`Expected data-descriptor-signature at position ${this.tokenizer.position - DataDescriptor.len}`);
			}
		} while (!stop);
	}
	async iterateOverCentralDirectory(entries, fileCb) {
		for (const fileHeader of entries) {
			const next = fileCb(fileHeader);
			if (next.handler) {
				this.tokenizer.setPosition(fileHeader.relativeOffsetOfLocalHeader);
				const zipHeader = await this.readLocalFileHeader();
				if (zipHeader) {
					await this.tokenizer.ignore(zipHeader.extraFieldLength);
					const fileData = new Uint8Array(fileHeader.compressedSize);
					await this.tokenizer.readBuffer(fileData);
					await this.inflate(zipHeader, fileData, next.handler);
				}
			}
			if (next.stop) break;
		}
	}
	async inflate(zipHeader, fileData, cb) {
		if (zipHeader.compressedMethod === 0) return cb(fileData);
		if (zipHeader.compressedMethod !== 8) throw new Error(`Unsupported ZIP compression method: ${zipHeader.compressedMethod}`);
		debug(`Decompress filename=${zipHeader.filename}, compressed-size=${fileData.length}`);
		return cb(await ZipHandler.decompressDeflateRaw(fileData));
	}
	static async decompressDeflateRaw(data) {
		const input = new ReadableStream({ start(controller) {
			controller.enqueue(data);
			controller.close();
		} });
		const ds = new DecompressionStream("deflate-raw");
		const output = input.pipeThrough(ds);
		try {
			const buffer = await new Response(output).arrayBuffer();
			return new Uint8Array(buffer);
		} catch (err) {
			const message = err instanceof Error ? `Failed to deflate ZIP entry: ${err.message}` : "Unknown decompression error in ZIP entry";
			throw new TypeError(message);
		}
	}
	async readLocalFileHeader() {
		const signature = await this.tokenizer.peekToken(UINT32_LE);
		if (signature === Signature.LocalFileHeader) {
			const header = await this.tokenizer.readToken(LocalFileHeaderToken);
			header.filename = await this.tokenizer.readToken(new StringType(header.filenameLength, "utf-8"));
			return header;
		}
		if (signature === Signature.CentralFileHeader) return false;
		if (signature === 3759263696) throw new Error("Encrypted ZIP");
		throw new Error("Unexpected signature");
	}
};
function indexOf(buffer, portion) {
	const bufferLength = buffer.length;
	const portionLength = portion.length;
	if (portionLength > bufferLength) return -1;
	for (let i = 0; i <= bufferLength - portionLength; i++) {
		let found = true;
		for (let j = 0; j < portionLength; j++) if (buffer[i + j] !== portion[j]) {
			found = false;
			break;
		}
		if (found) return i;
	}
	return -1;
}
function mergeArrays(chunks) {
	const totalLength = chunks.reduce((acc, curr) => acc + curr.length, 0);
	const mergedArray = new Uint8Array(totalLength);
	let offset = 0;
	for (const chunk of chunks) {
		mergedArray.set(chunk, offset);
		offset += chunk.length;
	}
	return mergedArray;
}
var GzipHandler = class {
	constructor(tokenizer) {
		this.tokenizer = tokenizer;
	}
	inflate() {
		const tokenizer = this.tokenizer;
		return new ReadableStream({ async pull(controller) {
			const buffer = /* @__PURE__ */ new Uint8Array(1024);
			const size = await tokenizer.readBuffer(buffer, { mayBeLess: true });
			if (size === 0) {
				controller.close();
				return;
			}
			controller.enqueue(buffer.subarray(0, size));
		} }).pipeThrough(new DecompressionStream("gzip"));
	}
};
var objectToString = Object.prototype.toString;
var uint8ArrayStringified = "[object Uint8Array]";
function isType(value, typeConstructor, typeStringified) {
	if (!value) return false;
	if (value.constructor === typeConstructor) return true;
	return objectToString.call(value) === typeStringified;
}
function isUint8Array(value) {
	return isType(value, Uint8Array, uint8ArrayStringified);
}
function assertUint8Array(value) {
	if (!isUint8Array(value)) throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof value}\``);
}
function concatUint8Arrays(arrays, totalLength) {
	if (arrays.length === 0) return /* @__PURE__ */ new Uint8Array(0);
	totalLength ??= arrays.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
	const returnValue = new Uint8Array(totalLength);
	let offset = 0;
	for (const array of arrays) {
		assertUint8Array(array);
		returnValue.set(array, offset);
		offset += array.length;
	}
	return returnValue;
}
new globalThis.TextDecoder("utf8");
new globalThis.TextEncoder();
Array.from({ length: 256 }, (_, index) => index.toString(16).padStart(2, "0"));
/**
@param {DataView} view
@returns {number}
*/
function getUintBE(view) {
	const { byteLength } = view;
	if (byteLength === 6) return view.getUint16(0) * 2 ** 32 + view.getUint32(2);
	if (byteLength === 5) return view.getUint8(0) * 2 ** 32 + view.getUint32(1);
	if (byteLength === 4) return view.getUint32(0);
	if (byteLength === 3) return view.getUint8(0) * 2 ** 16 + view.getUint16(1);
	if (byteLength === 2) return view.getUint16(0);
	if (byteLength === 1) return view.getUint8(0);
}
function stringToBytes(string, encoding) {
	if (encoding === "utf-16le") {
		const bytes = [];
		for (let index = 0; index < string.length; index++) {
			const code = string.charCodeAt(index);
			bytes.push(code & 255, code >> 8 & 255);
		}
		return bytes;
	}
	if (encoding === "utf-16be") {
		const bytes = [];
		for (let index = 0; index < string.length; index++) {
			const code = string.charCodeAt(index);
			bytes.push(code >> 8 & 255, code & 255);
		}
		return bytes;
	}
	return [...string].map((character) => character.charCodeAt(0));
}
/**
Checks whether the TAR checksum is valid.

@param {Uint8Array} arrayBuffer - The TAR header `[offset ... offset + 512]`.
@param {number} offset - TAR header offset.
@returns {boolean} `true` if the TAR checksum is valid, otherwise `false`.
*/
function tarHeaderChecksumMatches(arrayBuffer, offset = 0) {
	const readSum = Number.parseInt(new StringType(6).get(arrayBuffer, 148).replace(new RegExp("\\0.*$", "v"), "").trim(), 8);
	if (Number.isNaN(readSum)) return false;
	let sum = 256;
	for (let index = offset; index < offset + 148; index++) sum += arrayBuffer[index];
	for (let index = offset + 156; index < offset + 512; index++) sum += arrayBuffer[index];
	return readSum === sum;
}
/**
ID3 UINT32 sync-safe tokenizer token.
28 bits (representing up to 256MB) integer, the msb is 0 to avoid "false syncsignals".
*/
var uint32SyncSafeToken = {
	get: (buffer, offset) => buffer[offset + 3] & 127 | (buffer[offset + 2] & 127) << 7 | (buffer[offset + 1] & 127) << 14 | (buffer[offset] & 127) << 21,
	len: 4
};
var extensions = [
	"jpg",
	"png",
	"apng",
	"gif",
	"webp",
	"flif",
	"xcf",
	"cr2",
	"cr3",
	"orf",
	"arw",
	"dng",
	"nef",
	"rw2",
	"raf",
	"tif",
	"bmp",
	"icns",
	"jxr",
	"psd",
	"indd",
	"zip",
	"tar",
	"rar",
	"gz",
	"bz2",
	"7z",
	"dmg",
	"mp4",
	"mid",
	"mkv",
	"webm",
	"mov",
	"avi",
	"mpg",
	"mp2",
	"mp3",
	"m4a",
	"oga",
	"ogg",
	"ogv",
	"opus",
	"flac",
	"wav",
	"spx",
	"amr",
	"pdf",
	"epub",
	"elf",
	"macho",
	"exe",
	"swf",
	"rtf",
	"wasm",
	"woff",
	"woff2",
	"eot",
	"ttf",
	"otf",
	"ttc",
	"ico",
	"flv",
	"ps",
	"xz",
	"sqlite",
	"nes",
	"crx",
	"xpi",
	"cab",
	"deb",
	"ar",
	"rpm",
	"Z",
	"lz",
	"cfb",
	"mxf",
	"mts",
	"blend",
	"bpg",
	"docx",
	"pptx",
	"xlsx",
	"3gp",
	"3g2",
	"j2c",
	"jp2",
	"jpm",
	"jpx",
	"mj2",
	"aif",
	"qcp",
	"odt",
	"ods",
	"odp",
	"xml",
	"mobi",
	"heic",
	"cur",
	"ktx",
	"ape",
	"wv",
	"dcm",
	"ics",
	"glb",
	"pcap",
	"dsf",
	"lnk",
	"alias",
	"voc",
	"ac3",
	"m4v",
	"m4p",
	"m4b",
	"f4v",
	"f4p",
	"f4b",
	"f4a",
	"mie",
	"asf",
	"ogm",
	"ogx",
	"mpc",
	"arrow",
	"shp",
	"aac",
	"mp1",
	"it",
	"s3m",
	"xm",
	"skp",
	"avif",
	"eps",
	"lzh",
	"pgp",
	"asar",
	"stl",
	"chm",
	"3mf",
	"zst",
	"jxl",
	"vcf",
	"jls",
	"pst",
	"dwg",
	"parquet",
	"class",
	"arj",
	"cpio",
	"ace",
	"avro",
	"icc",
	"fbx",
	"vsdx",
	"vtt",
	"apk",
	"drc",
	"lz4",
	"potx",
	"xltx",
	"dotx",
	"xltm",
	"ott",
	"ots",
	"otp",
	"odg",
	"otg",
	"xlsm",
	"docm",
	"dotm",
	"potm",
	"pptm",
	"jar",
	"jmp",
	"rm",
	"sav",
	"ppsm",
	"ppsx",
	"tar.gz",
	"reg",
	"dat",
	"key",
	"numbers",
	"pages"
];
var mimeTypes = [
	"image/jpeg",
	"image/png",
	"image/gif",
	"image/webp",
	"image/flif",
	"image/x-xcf",
	"image/x-canon-cr2",
	"image/x-canon-cr3",
	"image/tiff",
	"image/bmp",
	"image/vnd.ms-photo",
	"image/vnd.adobe.photoshop",
	"application/x-indesign",
	"application/epub+zip",
	"application/x-xpinstall",
	"application/vnd.ms-powerpoint.slideshow.macroenabled.12",
	"application/vnd.oasis.opendocument.text",
	"application/vnd.oasis.opendocument.spreadsheet",
	"application/vnd.oasis.opendocument.presentation",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	"application/vnd.openxmlformats-officedocument.presentationml.presentation",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow",
	"application/zip",
	"application/x-tar",
	"application/x-rar-compressed",
	"application/gzip",
	"application/x-bzip2",
	"application/x-7z-compressed",
	"application/x-apple-diskimage",
	"application/vnd.apache.arrow.file",
	"video/mp4",
	"audio/midi",
	"video/matroska",
	"video/webm",
	"video/quicktime",
	"video/vnd.avi",
	"audio/wav",
	"audio/qcelp",
	"audio/x-ms-asf",
	"video/x-ms-asf",
	"application/vnd.ms-asf",
	"video/mpeg",
	"video/3gpp",
	"audio/mpeg",
	"audio/mp4",
	"video/ogg",
	"audio/ogg",
	"audio/ogg; codecs=opus",
	"application/ogg",
	"audio/flac",
	"audio/ape",
	"audio/wavpack",
	"audio/amr",
	"application/pdf",
	"application/x-elf",
	"application/x-mach-binary",
	"application/x-msdownload",
	"application/x-shockwave-flash",
	"application/rtf",
	"application/wasm",
	"font/woff",
	"font/woff2",
	"application/vnd.ms-fontobject",
	"font/ttf",
	"font/otf",
	"font/collection",
	"image/x-icon",
	"video/x-flv",
	"application/postscript",
	"application/eps",
	"application/x-xz",
	"application/x-sqlite3",
	"application/x-nintendo-nes-rom",
	"application/x-google-chrome-extension",
	"application/vnd.ms-cab-compressed",
	"application/x-deb",
	"application/x-unix-archive",
	"application/x-rpm",
	"application/x-compress",
	"application/lzip",
	"application/x-cfb",
	"application/x-mie",
	"application/mxf",
	"video/mp2t",
	"application/x-blender",
	"image/bpg",
	"image/j2c",
	"image/jp2",
	"image/jpx",
	"image/jpm",
	"image/mj2",
	"audio/aiff",
	"application/xml",
	"application/x-mobipocket-ebook",
	"image/heif",
	"image/heif-sequence",
	"image/heic",
	"image/heic-sequence",
	"image/icns",
	"image/ktx",
	"application/dicom",
	"audio/x-musepack",
	"text/calendar",
	"text/vcard",
	"text/vtt",
	"model/gltf-binary",
	"application/vnd.tcpdump.pcap",
	"audio/x-dsf",
	"application/x-ms-shortcut",
	"application/x-ft-apple.alias",
	"audio/x-voc",
	"audio/vnd.dolby.dd-raw",
	"audio/x-m4a",
	"image/apng",
	"image/x-olympus-orf",
	"image/x-sony-arw",
	"image/x-adobe-dng",
	"image/x-nikon-nef",
	"image/x-panasonic-rw2",
	"image/x-fujifilm-raf",
	"video/x-m4v",
	"video/3gpp2",
	"application/x-esri-shape",
	"audio/aac",
	"audio/x-it",
	"audio/x-s3m",
	"audio/x-xm",
	"video/MP1S",
	"video/MP2P",
	"application/vnd.sketchup.skp",
	"image/avif",
	"application/x-lzh-compressed",
	"application/pgp-encrypted",
	"application/x-asar",
	"model/stl",
	"application/vnd.ms-htmlhelp",
	"model/3mf",
	"image/jxl",
	"application/zstd",
	"image/jls",
	"application/vnd.ms-outlook",
	"image/vnd.dwg",
	"application/vnd.apache.parquet",
	"application/java-vm",
	"application/x-arj",
	"application/x-cpio",
	"application/x-ace-compressed",
	"application/avro",
	"application/vnd.iccprofile",
	"application/x-ft-fbx",
	"application/vnd.visio",
	"application/vnd.android.package-archive",
	"application/x-ft-draco",
	"application/x-lz4",
	"application/vnd.openxmlformats-officedocument.presentationml.template",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template",
	"application/vnd.ms-excel.template.macroenabled.12",
	"application/vnd.oasis.opendocument.text-template",
	"application/vnd.oasis.opendocument.spreadsheet-template",
	"application/vnd.oasis.opendocument.presentation-template",
	"application/vnd.oasis.opendocument.graphics",
	"application/vnd.oasis.opendocument.graphics-template",
	"application/vnd.ms-excel.sheet.macroenabled.12",
	"application/vnd.ms-word.document.macroenabled.12",
	"application/vnd.ms-word.template.macroenabled.12",
	"application/vnd.ms-powerpoint.template.macroenabled.12",
	"application/vnd.ms-powerpoint.presentation.macroenabled.12",
	"application/java-archive",
	"application/vnd.rn-realmedia",
	"application/x-spss-sav",
	"application/x-ms-regedit",
	"application/x-ft-windows-registry-hive",
	"application/x-jmp-data",
	"application/vnd.apple.keynote",
	"application/vnd.apple.numbers",
	"application/vnd.apple.pages"
];
var maximumUntrustedSkipSizeInBytes = 16777216;
var ParserHardLimitError = class extends Error {};
function getSafeBound(value, maximum, reason) {
	if (!Number.isFinite(value) || value < 0 || value > maximum) throw new ParserHardLimitError(`${reason} has invalid size ${value} (maximum ${maximum} bytes)`);
	return value;
}
async function safeIgnore(tokenizer, length, { maximumLength = maximumUntrustedSkipSizeInBytes, reason = "skip" } = {}) {
	const safeLength = getSafeBound(length, maximumLength, reason);
	await tokenizer.ignore(safeLength);
}
async function safeReadBuffer(tokenizer, buffer, options, { maximumLength = buffer.length, reason = "read" } = {}) {
	const safeLength = getSafeBound(buffer.length, maximumLength, reason);
	return tokenizer.readBuffer(buffer, {
		...options,
		length: safeLength
	});
}
function checkBytes(buffer, headers, options) {
	options = {
		offset: 0,
		...options
	};
	for (const [index, header] of headers.entries()) if (options.mask) {
		if (header !== (options.mask[index] & buffer[index + options.offset])) return false;
	} else if (header !== buffer[index + options.offset]) return false;
	return true;
}
function hasUnknownFileSize(tokenizer) {
	const fileSize = tokenizer.fileInfo.size;
	return !Number.isFinite(fileSize) || fileSize === Number.MAX_SAFE_INTEGER;
}
function hasExceededUnknownSizeScanBudget(tokenizer, startOffset, maximumBytes) {
	return hasUnknownFileSize(tokenizer) && tokenizer.position - startOffset > maximumBytes;
}
var maximumZipEntrySizeInBytes = 1048576;
var maximumZipEntryCount = 1024;
var maximumZipBufferedReadSizeInBytes = 2 ** 31 - 1;
var maximumZipTextEntrySizeInBytes = maximumZipEntrySizeInBytes;
var recoverableZipErrorMessages = /* @__PURE__ */ new Set([
	"Unexpected signature",
	"Encrypted ZIP",
	"Expected Central-File-Header signature"
]);
var recoverableZipErrorMessagePrefixes = [
	"ZIP entry count exceeds ",
	"Unsupported ZIP compression method:",
	"ZIP entry compressed data exceeds ",
	"ZIP entry decompressed data exceeds ",
	"Expected data-descriptor-signature at position "
];
var recoverableZipErrorCodes = /* @__PURE__ */ new Set([
	"Z_BUF_ERROR",
	"Z_DATA_ERROR",
	"ERR_INVALID_STATE"
]);
async function decompressDeflateRawWithLimit(data, { maximumLength = maximumZipEntrySizeInBytes } = {}) {
	const reader = new ReadableStream({ start(controller) {
		controller.enqueue(data);
		controller.close();
	} }).pipeThrough(new DecompressionStream("deflate-raw")).getReader();
	const chunks = [];
	let totalLength = 0;
	try {
		for (;;) {
			const { done, value } = await reader.read();
			if (done) break;
			totalLength += value.length;
			if (totalLength > maximumLength) {
				await reader.cancel().catch(() => {});
				throw new Error(`ZIP entry decompressed data exceeds ${maximumLength} bytes`);
			}
			chunks.push(value);
		}
	} catch (error) {
		if (error.code !== "ERR_TRAILING_JUNK_AFTER_STREAM_END") throw error;
	} finally {
		reader.releaseLock();
	}
	const uncompressedData = new Uint8Array(totalLength);
	let offset = 0;
	for (const chunk of chunks) {
		uncompressedData.set(chunk, offset);
		offset += chunk.length;
	}
	return uncompressedData;
}
function mergeByteChunks(chunks, totalLength) {
	const merged = new Uint8Array(totalLength);
	let offset = 0;
	for (const chunk of chunks) {
		merged.set(chunk, offset);
		offset += chunk.length;
	}
	return merged;
}
function getMaximumZipBufferedReadLength(tokenizer) {
	const fileSize = tokenizer.fileInfo.size;
	const remainingBytes = Number.isFinite(fileSize) ? Math.max(0, fileSize - tokenizer.position) : Number.MAX_SAFE_INTEGER;
	return Math.min(remainingBytes, maximumZipBufferedReadSizeInBytes);
}
function isRecoverableZipError(error) {
	if (error instanceof EndOfStreamError) return true;
	if (error instanceof ParserHardLimitError) return true;
	if (!(error instanceof Error)) return false;
	if (recoverableZipErrorMessages.has(error.message)) return true;
	if (recoverableZipErrorCodes.has(error.code)) return true;
	for (const prefix of recoverableZipErrorMessagePrefixes) if (error.message.startsWith(prefix)) return true;
	return false;
}
function canReadZipEntryForDetection(zipHeader, maximumSize = maximumZipEntrySizeInBytes) {
	const sizes = [zipHeader.compressedSize, zipHeader.uncompressedSize];
	for (const size of sizes) if (!Number.isFinite(size) || size < 0 || size > maximumSize) return false;
	return true;
}
function createIWorkZipDetectionState() {
	return {
		hasDocumentEntry: false,
		hasMasterSlideEntry: false,
		hasTablesEntry: false,
		hasCalculationEngineEntry: false
	};
}
function updateIWorkZipDetectionStateFromFilename(iWorkState, filename) {
	if (filename === "Index/Document.iwa") iWorkState.hasDocumentEntry = true;
	if (filename.startsWith("Index/MasterSlide")) iWorkState.hasMasterSlideEntry = true;
	if (filename.startsWith("Index/Tables/")) iWorkState.hasTablesEntry = true;
	if (filename === "Index/CalculationEngine.iwa") iWorkState.hasCalculationEngineEntry = true;
}
function getIWorkFileTypeFromZipEntries(iWorkState) {
	if (!iWorkState.hasDocumentEntry) return;
	if (iWorkState.hasMasterSlideEntry) return {
		ext: "key",
		mime: "application/vnd.apple.keynote"
	};
	if (iWorkState.hasTablesEntry) return {
		ext: "numbers",
		mime: "application/vnd.apple.numbers"
	};
	return {
		ext: "pages",
		mime: "application/vnd.apple.pages"
	};
}
function getFileTypeFromMimeType(mimeType) {
	mimeType = mimeType.toLowerCase();
	switch (mimeType) {
		case "application/epub+zip": return {
			ext: "epub",
			mime: mimeType
		};
		case "application/vnd.oasis.opendocument.text": return {
			ext: "odt",
			mime: mimeType
		};
		case "application/vnd.oasis.opendocument.text-template": return {
			ext: "ott",
			mime: mimeType
		};
		case "application/vnd.oasis.opendocument.spreadsheet": return {
			ext: "ods",
			mime: mimeType
		};
		case "application/vnd.oasis.opendocument.spreadsheet-template": return {
			ext: "ots",
			mime: mimeType
		};
		case "application/vnd.oasis.opendocument.presentation": return {
			ext: "odp",
			mime: mimeType
		};
		case "application/vnd.oasis.opendocument.presentation-template": return {
			ext: "otp",
			mime: mimeType
		};
		case "application/vnd.oasis.opendocument.graphics": return {
			ext: "odg",
			mime: mimeType
		};
		case "application/vnd.oasis.opendocument.graphics-template": return {
			ext: "otg",
			mime: mimeType
		};
		case "application/vnd.openxmlformats-officedocument.presentationml.slideshow": return {
			ext: "ppsx",
			mime: mimeType
		};
		case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": return {
			ext: "xlsx",
			mime: mimeType
		};
		case "application/vnd.ms-excel.sheet.macroenabled": return {
			ext: "xlsm",
			mime: "application/vnd.ms-excel.sheet.macroenabled.12"
		};
		case "application/vnd.openxmlformats-officedocument.spreadsheetml.template": return {
			ext: "xltx",
			mime: mimeType
		};
		case "application/vnd.ms-excel.template.macroenabled": return {
			ext: "xltm",
			mime: "application/vnd.ms-excel.template.macroenabled.12"
		};
		case "application/vnd.ms-powerpoint.slideshow.macroenabled": return {
			ext: "ppsm",
			mime: "application/vnd.ms-powerpoint.slideshow.macroenabled.12"
		};
		case "application/vnd.openxmlformats-officedocument.wordprocessingml.document": return {
			ext: "docx",
			mime: mimeType
		};
		case "application/vnd.ms-word.document.macroenabled": return {
			ext: "docm",
			mime: "application/vnd.ms-word.document.macroenabled.12"
		};
		case "application/vnd.openxmlformats-officedocument.wordprocessingml.template": return {
			ext: "dotx",
			mime: mimeType
		};
		case "application/vnd.ms-word.template.macroenabledtemplate": return {
			ext: "dotm",
			mime: "application/vnd.ms-word.template.macroenabled.12"
		};
		case "application/vnd.openxmlformats-officedocument.presentationml.template": return {
			ext: "potx",
			mime: mimeType
		};
		case "application/vnd.ms-powerpoint.template.macroenabled": return {
			ext: "potm",
			mime: "application/vnd.ms-powerpoint.template.macroenabled.12"
		};
		case "application/vnd.openxmlformats-officedocument.presentationml.presentation": return {
			ext: "pptx",
			mime: mimeType
		};
		case "application/vnd.ms-powerpoint.presentation.macroenabled": return {
			ext: "pptm",
			mime: "application/vnd.ms-powerpoint.presentation.macroenabled.12"
		};
		case "application/vnd.ms-visio.drawing": return {
			ext: "vsdx",
			mime: "application/vnd.visio"
		};
		case "application/vnd.ms-package.3dmanufacturing-3dmodel+xml": return {
			ext: "3mf",
			mime: "model/3mf"
		};
	}
}
function createOpenXmlZipDetectionState() {
	return {
		hasContentTypesEntry: false,
		hasParsedContentTypesEntry: false,
		isParsingContentTypes: false,
		hasUnparseableContentTypes: false,
		hasWordDirectory: false,
		hasPresentationDirectory: false,
		hasSpreadsheetDirectory: false,
		hasThreeDimensionalModelEntry: false
	};
}
function updateOpenXmlZipDetectionStateFromFilename(openXmlState, filename) {
	if (filename.startsWith("word/")) openXmlState.hasWordDirectory = true;
	if (filename.startsWith("ppt/")) openXmlState.hasPresentationDirectory = true;
	if (filename.startsWith("xl/")) openXmlState.hasSpreadsheetDirectory = true;
	if (filename.startsWith("3D/") && filename.endsWith(".model")) openXmlState.hasThreeDimensionalModelEntry = true;
}
function getOpenXmlFileTypeFromDirectoryNames(openXmlState) {
	if (openXmlState.hasWordDirectory) return {
		ext: "docx",
		mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
	};
	if (openXmlState.hasPresentationDirectory) return {
		ext: "pptx",
		mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
	};
	if (openXmlState.hasSpreadsheetDirectory) return {
		ext: "xlsx",
		mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
	if (openXmlState.hasThreeDimensionalModelEntry) return {
		ext: "3mf",
		mime: "model/3mf"
	};
}
function getOpenXmlFileTypeFromZipEntries(openXmlState) {
	if (!openXmlState.hasContentTypesEntry || openXmlState.hasUnparseableContentTypes || openXmlState.isParsingContentTypes || openXmlState.hasParsedContentTypesEntry) return;
	return getOpenXmlFileTypeFromDirectoryNames(openXmlState);
}
function getOpenXmlMimeTypeFromContentTypesXml(xmlContent) {
	const endPosition = xmlContent.indexOf(".main+xml\"");
	if (endPosition === -1) {
		const mimeType = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml";
		if (xmlContent.includes(`ContentType="${mimeType}"`)) return mimeType;
		return;
	}
	const truncatedContent = xmlContent.slice(0, endPosition);
	const firstQuotePosition = truncatedContent.lastIndexOf("\"");
	return truncatedContent.slice(firstQuotePosition + 1);
}
var zipDataDescriptorSignature = 134695760;
var zipDataDescriptorLengthInBytes = 16;
var zipDataDescriptorOverlapLengthInBytes = 15;
function findZipDataDescriptorOffset(buffer, bytesConsumed) {
	if (buffer.length < zipDataDescriptorLengthInBytes) return -1;
	const lastPossibleDescriptorOffset = buffer.length - zipDataDescriptorLengthInBytes;
	for (let index = 0; index <= lastPossibleDescriptorOffset; index++) if (UINT32_LE.get(buffer, index) === zipDataDescriptorSignature && UINT32_LE.get(buffer, index + 8) === bytesConsumed + index) return index;
	return -1;
}
async function readZipDataDescriptorEntryWithLimit(zipHandler, { shouldBuffer, maximumLength = maximumZipEntrySizeInBytes } = {}) {
	const { syncBuffer } = zipHandler;
	const { length: syncBufferLength } = syncBuffer;
	const chunks = [];
	let bytesConsumed = 0;
	for (;;) {
		const length = await zipHandler.tokenizer.peekBuffer(syncBuffer, { mayBeLess: true });
		const dataDescriptorOffset = findZipDataDescriptorOffset(syncBuffer.subarray(0, length), bytesConsumed);
		const retainedLength = dataDescriptorOffset >= 0 ? 0 : length === syncBufferLength ? Math.min(zipDataDescriptorOverlapLengthInBytes, length - 1) : 0;
		const chunkLength = dataDescriptorOffset >= 0 ? dataDescriptorOffset : length - retainedLength;
		if (chunkLength === 0) break;
		bytesConsumed += chunkLength;
		if (bytesConsumed > maximumLength) throw new Error(`ZIP entry compressed data exceeds ${maximumLength} bytes`);
		if (shouldBuffer) {
			const data = new Uint8Array(chunkLength);
			await zipHandler.tokenizer.readBuffer(data);
			chunks.push(data);
		} else await zipHandler.tokenizer.ignore(chunkLength);
		if (dataDescriptorOffset >= 0) break;
	}
	if (!hasUnknownFileSize(zipHandler.tokenizer)) zipHandler.knownSizeDescriptorScannedBytes += bytesConsumed;
	if (!shouldBuffer) return;
	return mergeByteChunks(chunks, bytesConsumed);
}
function getRemainingZipScanBudget(zipHandler, startOffset) {
	if (hasUnknownFileSize(zipHandler.tokenizer)) return Math.max(0, maximumUntrustedSkipSizeInBytes - (zipHandler.tokenizer.position - startOffset));
	return Math.max(0, maximumZipEntrySizeInBytes - zipHandler.knownSizeDescriptorScannedBytes);
}
async function readZipEntryData(zipHandler, zipHeader, { shouldBuffer, maximumDescriptorLength = maximumZipEntrySizeInBytes } = {}) {
	if (zipHeader.dataDescriptor && zipHeader.compressedSize === 0) return readZipDataDescriptorEntryWithLimit(zipHandler, {
		shouldBuffer,
		maximumLength: maximumDescriptorLength
	});
	if (!shouldBuffer) {
		await safeIgnore(zipHandler.tokenizer, zipHeader.compressedSize, {
			maximumLength: hasUnknownFileSize(zipHandler.tokenizer) ? maximumZipEntrySizeInBytes : zipHandler.tokenizer.fileInfo.size,
			reason: "ZIP entry compressed data"
		});
		return;
	}
	const maximumLength = getMaximumZipBufferedReadLength(zipHandler.tokenizer);
	if (!Number.isFinite(zipHeader.compressedSize) || zipHeader.compressedSize < 0 || zipHeader.compressedSize > maximumLength) throw new Error(`ZIP entry compressed data exceeds ${maximumLength} bytes`);
	const fileData = new Uint8Array(zipHeader.compressedSize);
	await zipHandler.tokenizer.readBuffer(fileData);
	return fileData;
}
ZipHandler.prototype.inflate = async function(zipHeader, fileData, callback) {
	if (zipHeader.compressedMethod === 0) return callback(fileData);
	if (zipHeader.compressedMethod !== 8) throw new Error(`Unsupported ZIP compression method: ${zipHeader.compressedMethod}`);
	return callback(await decompressDeflateRawWithLimit(fileData, { maximumLength: maximumZipEntrySizeInBytes }));
};
ZipHandler.prototype.unzip = async function(fileCallback) {
	let stop = false;
	let zipEntryCount = 0;
	const zipScanStart = this.tokenizer.position;
	this.knownSizeDescriptorScannedBytes = 0;
	do {
		if (hasExceededUnknownSizeScanBudget(this.tokenizer, zipScanStart, 16777216)) throw new ParserHardLimitError(`ZIP stream probing exceeds ${maximumUntrustedSkipSizeInBytes} bytes`);
		const zipHeader = await this.readLocalFileHeader();
		if (!zipHeader) break;
		zipEntryCount++;
		if (zipEntryCount > maximumZipEntryCount) throw new Error(`ZIP entry count exceeds ${maximumZipEntryCount}`);
		const next = fileCallback(zipHeader);
		stop = Boolean(next.stop);
		await this.tokenizer.ignore(zipHeader.extraFieldLength);
		const fileData = await readZipEntryData(this, zipHeader, {
			shouldBuffer: Boolean(next.handler),
			maximumDescriptorLength: Math.min(maximumZipEntrySizeInBytes, getRemainingZipScanBudget(this, zipScanStart))
		});
		if (next.handler) await this.inflate(zipHeader, fileData, next.handler);
		if (zipHeader.dataDescriptor) {
			const dataDescriptor = new Uint8Array(zipDataDescriptorLengthInBytes);
			await this.tokenizer.readBuffer(dataDescriptor);
			if (UINT32_LE.get(dataDescriptor, 0) !== zipDataDescriptorSignature) throw new Error(`Expected data-descriptor-signature at position ${this.tokenizer.position - dataDescriptor.length}`);
		}
		if (hasExceededUnknownSizeScanBudget(this.tokenizer, zipScanStart, 16777216)) throw new ParserHardLimitError(`ZIP stream probing exceeds ${maximumUntrustedSkipSizeInBytes} bytes`);
	} while (!stop);
};
async function detectZip(tokenizer) {
	let fileType;
	const openXmlState = createOpenXmlZipDetectionState();
	const iWorkState = createIWorkZipDetectionState();
	try {
		await new ZipHandler(tokenizer).unzip((zipHeader) => {
			updateOpenXmlZipDetectionStateFromFilename(openXmlState, zipHeader.filename);
			updateIWorkZipDetectionStateFromFilename(iWorkState, zipHeader.filename);
			if (iWorkState.hasDocumentEntry && (iWorkState.hasMasterSlideEntry || iWorkState.hasTablesEntry)) {
				fileType = getIWorkFileTypeFromZipEntries(iWorkState);
				return { stop: true };
			}
			const isOpenXmlContentTypesEntry = zipHeader.filename === "[Content_Types].xml";
			const openXmlFileTypeFromEntries = getOpenXmlFileTypeFromZipEntries(openXmlState);
			if (!isOpenXmlContentTypesEntry && openXmlFileTypeFromEntries) {
				fileType = openXmlFileTypeFromEntries;
				return { stop: true };
			}
			switch (zipHeader.filename) {
				case "META-INF/mozilla.rsa":
					fileType = {
						ext: "xpi",
						mime: "application/x-xpinstall"
					};
					return { stop: true };
				case "META-INF/MANIFEST.MF":
					fileType = {
						ext: "jar",
						mime: "application/java-archive"
					};
					return { stop: true };
				case "mimetype":
					if (!canReadZipEntryForDetection(zipHeader, maximumZipTextEntrySizeInBytes)) return {};
					return {
						async handler(fileData) {
							fileType = getFileTypeFromMimeType(new TextDecoder("utf-8").decode(fileData).trim());
						},
						stop: true
					};
				case "[Content_Types].xml":
					openXmlState.hasContentTypesEntry = true;
					if (!canReadZipEntryForDetection(zipHeader, maximumZipTextEntrySizeInBytes)) {
						openXmlState.hasUnparseableContentTypes = true;
						return {};
					}
					openXmlState.isParsingContentTypes = true;
					return {
						async handler(fileData) {
							const mimeType = getOpenXmlMimeTypeFromContentTypesXml(new TextDecoder("utf-8").decode(fileData));
							if (mimeType) fileType = getFileTypeFromMimeType(mimeType);
							openXmlState.hasParsedContentTypesEntry = true;
							openXmlState.isParsingContentTypes = false;
						},
						stop: true
					};
				default:
					if (new RegExp("classes\\d*\\.dex", "v").test(zipHeader.filename)) {
						fileType = {
							ext: "apk",
							mime: "application/vnd.android.package-archive"
						};
						return { stop: true };
					}
					return {};
			}
		});
	} catch (error) {
		if (!isRecoverableZipError(error)) throw error;
		if (openXmlState.isParsingContentTypes) {
			openXmlState.isParsingContentTypes = false;
			openXmlState.hasUnparseableContentTypes = true;
		}
		if (!fileType && error instanceof EndOfStreamError && !openXmlState.hasContentTypesEntry) fileType = getOpenXmlFileTypeFromDirectoryNames(openXmlState);
	}
	const iWorkFileType = hasUnknownFileSize(tokenizer) && iWorkState.hasDocumentEntry && !iWorkState.hasMasterSlideEntry && !iWorkState.hasTablesEntry && !iWorkState.hasCalculationEngineEntry ? void 0 : getIWorkFileTypeFromZipEntries(iWorkState);
	return fileType ?? getOpenXmlFileTypeFromZipEntries(openXmlState) ?? iWorkFileType ?? {
		ext: "zip",
		mime: "application/zip"
	};
}
var maximumEbmlDocumentTypeSizeInBytes = 64;
var maximumEbmlElementPayloadSizeInBytes = 1048576;
var maximumEbmlElementCount = 256;
async function detectEbml(tokenizer) {
	async function readField() {
		const msb = await tokenizer.peekNumber(UINT8);
		let mask = 128;
		let ic = 0;
		while ((msb & mask) === 0 && mask !== 0) {
			++ic;
			mask >>= 1;
		}
		const id = new Uint8Array(ic + 1);
		await safeReadBuffer(tokenizer, id, void 0, {
			maximumLength: id.length,
			reason: "EBML field"
		});
		return id;
	}
	async function readElement() {
		const idField = await readField();
		const lengthField = await readField();
		lengthField[0] ^= 128 >> lengthField.length - 1;
		const nrLength = Math.min(6, lengthField.length);
		const idView = new DataView(idField.buffer);
		const lengthView = new DataView(lengthField.buffer, lengthField.length - nrLength, nrLength);
		return {
			id: getUintBE(idView),
			len: getUintBE(lengthView)
		};
	}
	async function readChildren(children) {
		let ebmlElementCount = 0;
		while (children > 0) {
			ebmlElementCount++;
			if (ebmlElementCount > maximumEbmlElementCount) return;
			if (hasExceededUnknownSizeScanBudget(tokenizer, ebmlScanStart, 16777216)) return;
			const previousPosition = tokenizer.position;
			const element = await readElement();
			if (element.id === 17026) {
				if (element.len > maximumEbmlDocumentTypeSizeInBytes) return;
				const documentTypeLength = getSafeBound(element.len, maximumEbmlDocumentTypeSizeInBytes, "EBML DocType");
				return (await tokenizer.readToken(new StringType(documentTypeLength))).replaceAll(new RegExp("\\0.*$", "gv"), "");
			}
			if (hasUnknownFileSize(tokenizer) && (!Number.isFinite(element.len) || element.len < 0 || element.len > maximumEbmlElementPayloadSizeInBytes)) return;
			await safeIgnore(tokenizer, element.len, {
				maximumLength: hasUnknownFileSize(tokenizer) ? maximumEbmlElementPayloadSizeInBytes : tokenizer.fileInfo.size,
				reason: "EBML payload"
			});
			--children;
			if (tokenizer.position <= previousPosition) return;
		}
	}
	const rootElement = await readElement();
	const ebmlScanStart = tokenizer.position;
	switch (await readChildren(rootElement.len)) {
		case "webm": return {
			ext: "webm",
			mime: "video/webm"
		};
		case "matroska": return {
			ext: "mkv",
			mime: "video/matroska"
		};
	}
}
var maximumPngChunkCount = 512;
var maximumPngStreamScanBudgetInBytes = 16777216;
var maximumPngChunkSizeInBytes = 1048576;
function isPngAncillaryChunk(type) {
	return (type.codePointAt(0) & 32) !== 0;
}
async function detectPng(tokenizer) {
	const pngFileType = {
		ext: "png",
		mime: "image/png"
	};
	const apngFileType = {
		ext: "apng",
		mime: "image/apng"
	};
	await tokenizer.ignore(8);
	async function readChunkHeader() {
		return {
			length: await tokenizer.readToken(INT32_BE),
			type: await tokenizer.readToken(new StringType(4, "latin1"))
		};
	}
	const isUnknownPngStream = hasUnknownFileSize(tokenizer);
	const pngScanStart = tokenizer.position;
	let pngChunkCount = 0;
	let hasSeenImageHeader = false;
	do {
		pngChunkCount++;
		if (pngChunkCount > maximumPngChunkCount) break;
		if (hasExceededUnknownSizeScanBudget(tokenizer, pngScanStart, maximumPngStreamScanBudgetInBytes)) break;
		const previousPosition = tokenizer.position;
		const chunk = await readChunkHeader();
		if (chunk.length < 0) return;
		if (chunk.type === "IHDR") {
			if (chunk.length !== 13) return;
			hasSeenImageHeader = true;
		}
		switch (chunk.type) {
			case "IDAT": return pngFileType;
			case "acTL": return apngFileType;
			default:
				if (!hasSeenImageHeader && chunk.type !== "CgBI") return;
				if (isUnknownPngStream && chunk.length > maximumPngChunkSizeInBytes) return hasSeenImageHeader && isPngAncillaryChunk(chunk.type) ? pngFileType : void 0;
				try {
					await safeIgnore(tokenizer, chunk.length + 4, {
						maximumLength: isUnknownPngStream ? 1048580 : tokenizer.fileInfo.size,
						reason: "PNG chunk payload"
					});
				} catch (error) {
					if (!isUnknownPngStream && (error instanceof ParserHardLimitError || error instanceof EndOfStreamError)) return pngFileType;
					throw error;
				}
		}
		if (tokenizer.position <= previousPosition) break;
	} while (tokenizer.position + 8 < tokenizer.fileInfo.size);
	return pngFileType;
}
var maximumAsfHeaderObjectCount = 512;
var maximumAsfHeaderPayloadSizeInBytes = 1048576;
async function detectAsf(tokenizer) {
	let isMalformedAsf = false;
	try {
		async function readHeader() {
			const guid = /* @__PURE__ */ new Uint8Array(16);
			await safeReadBuffer(tokenizer, guid, void 0, {
				maximumLength: guid.length,
				reason: "ASF header GUID"
			});
			return {
				id: guid,
				size: Number(await tokenizer.readToken(UINT64_LE))
			};
		}
		await safeIgnore(tokenizer, 30, {
			maximumLength: 30,
			reason: "ASF header prelude"
		});
		const isUnknownFileSize = hasUnknownFileSize(tokenizer);
		const asfHeaderScanStart = tokenizer.position;
		let asfHeaderObjectCount = 0;
		while (tokenizer.position + 24 < tokenizer.fileInfo.size) {
			asfHeaderObjectCount++;
			if (asfHeaderObjectCount > maximumAsfHeaderObjectCount) break;
			if (hasExceededUnknownSizeScanBudget(tokenizer, asfHeaderScanStart, 16777216)) break;
			const previousPosition = tokenizer.position;
			const header = await readHeader();
			let payload = header.size - 24;
			if (!Number.isFinite(payload) || payload < 0) {
				isMalformedAsf = true;
				break;
			}
			if (checkBytes(header.id, [
				145,
				7,
				220,
				183,
				183,
				169,
				207,
				17,
				142,
				230,
				0,
				192,
				12,
				32,
				83,
				101
			])) {
				const typeId = /* @__PURE__ */ new Uint8Array(16);
				payload -= await safeReadBuffer(tokenizer, typeId, void 0, {
					maximumLength: typeId.length,
					reason: "ASF stream type GUID"
				});
				if (checkBytes(typeId, [
					64,
					158,
					105,
					248,
					77,
					91,
					207,
					17,
					168,
					253,
					0,
					128,
					95,
					92,
					68,
					43
				])) return {
					ext: "asf",
					mime: "audio/x-ms-asf"
				};
				if (checkBytes(typeId, [
					192,
					239,
					25,
					188,
					77,
					91,
					207,
					17,
					168,
					253,
					0,
					128,
					95,
					92,
					68,
					43
				])) return {
					ext: "asf",
					mime: "video/x-ms-asf"
				};
				break;
			}
			if (isUnknownFileSize && payload > maximumAsfHeaderPayloadSizeInBytes) {
				isMalformedAsf = true;
				break;
			}
			await safeIgnore(tokenizer, payload, {
				maximumLength: isUnknownFileSize ? maximumAsfHeaderPayloadSizeInBytes : tokenizer.fileInfo.size,
				reason: "ASF header payload"
			});
			if (tokenizer.position <= previousPosition) {
				isMalformedAsf = true;
				break;
			}
		}
	} catch (error) {
		if (error instanceof EndOfStreamError || error instanceof ParserHardLimitError) {
			if (hasUnknownFileSize(tokenizer)) isMalformedAsf = true;
		} else throw error;
	}
	if (isMalformedAsf) return;
	return {
		ext: "asf",
		mime: "application/vnd.ms-asf"
	};
}
/**
Primary entry point, Node.js specific entry point is index.js
*/
var reasonableDetectionSizeInBytes = 4100;
var maximumMpegOffsetTolerance = 4096;
var maximumNestedGzipDetectionSizeInBytes = maximumUntrustedSkipSizeInBytes;
var maximumNestedGzipProbeDepth = 1;
var unknownSizeGzipProbeTimeoutInMilliseconds = 100;
var maximumId3HeaderSizeInBytes = maximumUntrustedSkipSizeInBytes;
var maximumTiffTagCount = 512;
var maximumDetectionReentryCount = 256;
var maximumTiffStreamIfdOffsetInBytes = 1048576;
var maximumTiffIfdOffsetInBytes = maximumUntrustedSkipSizeInBytes;
function normalizeSampleSize(sampleSize) {
	if (!Number.isFinite(sampleSize)) return reasonableDetectionSizeInBytes;
	return Math.max(1, Math.trunc(sampleSize));
}
function normalizeMpegOffsetTolerance(mpegOffsetTolerance) {
	if (!Number.isFinite(mpegOffsetTolerance)) return 0;
	return Math.max(0, Math.min(maximumMpegOffsetTolerance, Math.trunc(mpegOffsetTolerance)));
}
function getKnownFileSizeOrMaximum(fileSize) {
	if (!Number.isFinite(fileSize)) return Number.MAX_SAFE_INTEGER;
	return Math.max(0, fileSize);
}
function importAtRuntime(specifier) {
	return module.import(specifier);
}
function toDefaultStream(stream) {
	return stream.pipeThrough(new TransformStream());
}
function readWithSignal(reader, signal) {
	if (signal === void 0) return reader.read();
	signal.throwIfAborted();
	return Promise.race([reader.read(), new Promise((_resolve, reject) => {
		signal.addEventListener("abort", () => {
			reject(signal.reason);
			reader.cancel(signal.reason).catch(() => {});
		}, { once: true });
	})]);
}
function createByteLimitedReadableStream(stream, maximumBytes) {
	const reader = stream.getReader();
	let emittedBytes = 0;
	let sourceDone = false;
	let sourceCanceled = false;
	const cancelSource = async (reason) => {
		if (sourceDone || sourceCanceled) return;
		sourceCanceled = true;
		await reader.cancel(reason);
	};
	return new ReadableStream({
		async pull(controller) {
			if (emittedBytes >= maximumBytes) {
				controller.close();
				await cancelSource();
				return;
			}
			const { done, value } = await reader.read();
			if (done || !value) {
				sourceDone = true;
				controller.close();
				return;
			}
			const remainingBytes = maximumBytes - emittedBytes;
			if (value.length > remainingBytes) {
				controller.enqueue(value.subarray(0, remainingBytes));
				emittedBytes += remainingBytes;
				controller.close();
				await cancelSource();
				return;
			}
			controller.enqueue(value);
			emittedBytes += value.length;
		},
		async cancel(reason) {
			await cancelSource(reason);
		}
	});
}
async function fileTypeFromBuffer(input, options) {
	return new FileTypeParser(options).fromBuffer(input);
}
var FileTypeParser = class FileTypeParser {
	constructor(options) {
		const normalizedMpegOffsetTolerance = normalizeMpegOffsetTolerance(options?.mpegOffsetTolerance);
		this.options = {
			...options,
			mpegOffsetTolerance: normalizedMpegOffsetTolerance
		};
		this.detectors = [
			...this.options.customDetectors ?? [],
			{
				id: "core",
				detect: this.detectConfident
			},
			{
				id: "core.imprecise",
				detect: this.detectImprecise
			}
		];
		this.tokenizerOptions = { abortSignal: this.options.signal };
		this.gzipProbeDepth = 0;
	}
	getTokenizerOptions() {
		return { ...this.tokenizerOptions };
	}
	createTokenizerFromWebStream(stream) {
		return fromWebStream(toDefaultStream(stream), this.getTokenizerOptions());
	}
	async parseTokenizer(tokenizer, detectionReentryCount = 0) {
		this.detectionReentryCount = detectionReentryCount;
		const initialPosition = tokenizer.position;
		for (const detector of this.detectors) {
			let fileType;
			try {
				fileType = await detector.detect(tokenizer);
			} catch (error) {
				if (error instanceof EndOfStreamError) return;
				if (error instanceof ParserHardLimitError) return;
				throw error;
			}
			if (fileType) return fileType;
			if (initialPosition !== tokenizer.position) return;
		}
	}
	async fromTokenizer(tokenizer) {
		try {
			return await this.parseTokenizer(tokenizer);
		} finally {
			await tokenizer.close();
		}
	}
	async fromBuffer(input) {
		if (!(input instanceof Uint8Array || input instanceof ArrayBuffer)) throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof input}\``);
		const buffer = input instanceof Uint8Array ? input : new Uint8Array(input);
		if (!(buffer?.length > 1)) return;
		return this.fromTokenizer(fromBuffer(buffer, this.getTokenizerOptions()));
	}
	async fromBlob(blob) {
		this.options.signal?.throwIfAborted();
		const tokenizer = fromBlob(blob, this.getTokenizerOptions());
		return this.fromTokenizer(tokenizer);
	}
	async fromStream(stream) {
		this.options.signal?.throwIfAborted();
		const tokenizer = this.createTokenizerFromWebStream(stream);
		return this.fromTokenizer(tokenizer);
	}
	async fromFile(path) {
		this.options.signal?.throwIfAborted();
		const [{ default: fsPromises }, { FileTokenizer }] = await Promise.all([importAtRuntime("node:fs/promises"), importAtRuntime("strtok3")]);
		const fileHandle = await fsPromises.open(path, fsPromises.constants.O_RDONLY | fsPromises.constants.O_NONBLOCK);
		const fileStat = await fileHandle.stat();
		if (!fileStat.isFile()) {
			await fileHandle.close();
			return;
		}
		const tokenizer = new FileTokenizer(fileHandle, {
			...this.getTokenizerOptions(),
			fileInfo: {
				path,
				size: fileStat.size
			}
		});
		return this.fromTokenizer(tokenizer);
	}
	async toDetectionStream(stream, options) {
		this.options.signal?.throwIfAborted();
		const sampleSize = normalizeSampleSize(options?.sampleSize ?? 4100);
		let detectedFileType;
		let streamEnded = false;
		const reader = stream.getReader();
		const chunks = [];
		let totalSize = 0;
		try {
			while (totalSize < sampleSize) {
				const { value, done } = await readWithSignal(reader, this.options.signal);
				if (done || !value) {
					streamEnded = true;
					break;
				}
				chunks.push(value);
				totalSize += value.length;
			}
			if (!streamEnded && totalSize === sampleSize) {
				const { value, done } = await readWithSignal(reader, this.options.signal);
				if (done || !value) streamEnded = true;
				else {
					chunks.push(value);
					totalSize += value.length;
				}
			}
		} finally {
			reader.releaseLock();
		}
		if (totalSize > 0) {
			const sample = chunks.length === 1 ? chunks[0] : concatUint8Arrays(chunks);
			try {
				detectedFileType = await this.fromBuffer(sample.subarray(0, sampleSize));
			} catch (error) {
				if (!(error instanceof EndOfStreamError)) throw error;
				detectedFileType = void 0;
			}
			if (!streamEnded && detectedFileType?.ext === "pages") detectedFileType = {
				ext: "zip",
				mime: "application/zip"
			};
		}
		const transformStream = new TransformStream({
			start(controller) {
				for (const chunk of chunks) controller.enqueue(chunk);
			},
			transform(chunk, controller) {
				controller.enqueue(chunk);
			}
		});
		const newStream = stream.pipeThrough(transformStream);
		newStream.fileType = detectedFileType;
		return newStream;
	}
	async detectGzip(tokenizer) {
		if (this.gzipProbeDepth >= maximumNestedGzipProbeDepth) return {
			ext: "gz",
			mime: "application/gzip"
		};
		const limitedInflatedStream = createByteLimitedReadableStream(new GzipHandler(tokenizer).inflate(), maximumNestedGzipDetectionSizeInBytes);
		const hasUnknownSize = hasUnknownFileSize(tokenizer);
		let timeout;
		let probeSignal;
		let probeParser;
		let compressedFileType;
		if (hasUnknownSize) {
			const timeoutController = new AbortController();
			timeout = setTimeout(() => {
				timeoutController.abort(new DOMException(`Operation timed out after ${unknownSizeGzipProbeTimeoutInMilliseconds} ms`, "TimeoutError"));
			}, unknownSizeGzipProbeTimeoutInMilliseconds);
			probeSignal = this.options.signal === void 0 ? timeoutController.signal : AbortSignal.any([this.options.signal, timeoutController.signal]);
			probeParser = new FileTypeParser({
				...this.options,
				signal: probeSignal
			});
			probeParser.gzipProbeDepth = this.gzipProbeDepth + 1;
		} else this.gzipProbeDepth++;
		try {
			compressedFileType = await (probeParser ?? this).fromStream(limitedInflatedStream);
		} catch (error) {
			if (error?.name === "AbortError" && probeSignal?.reason?.name !== "TimeoutError") throw error;
		} finally {
			clearTimeout(timeout);
			if (!hasUnknownSize) this.gzipProbeDepth--;
		}
		if (compressedFileType?.ext === "tar") return {
			ext: "tar.gz",
			mime: "application/gzip"
		};
		return {
			ext: "gz",
			mime: "application/gzip"
		};
	}
	check(header, options) {
		return checkBytes(this.buffer, header, options);
	}
	checkString(header, options) {
		return this.check(stringToBytes(header, options?.encoding), options);
	}
	detectConfident = async (tokenizer) => {
		this.buffer = new Uint8Array(reasonableDetectionSizeInBytes);
		if (tokenizer.fileInfo.size === void 0) tokenizer.fileInfo.size = Number.MAX_SAFE_INTEGER;
		this.tokenizer = tokenizer;
		if (hasUnknownFileSize(tokenizer)) {
			await tokenizer.peekBuffer(this.buffer, {
				length: 3,
				mayBeLess: true
			});
			if (this.check([
				31,
				139,
				8
			])) return this.detectGzip(tokenizer);
		}
		await tokenizer.peekBuffer(this.buffer, {
			length: 32,
			mayBeLess: true
		});
		if (this.check([66, 77])) return {
			ext: "bmp",
			mime: "image/bmp"
		};
		if (this.check([11, 119])) return {
			ext: "ac3",
			mime: "audio/vnd.dolby.dd-raw"
		};
		if (this.check([120, 1])) return {
			ext: "dmg",
			mime: "application/x-apple-diskimage"
		};
		if (this.check([77, 90])) return {
			ext: "exe",
			mime: "application/x-msdownload"
		};
		if (this.check([37, 33])) {
			await tokenizer.peekBuffer(this.buffer, {
				length: 24,
				mayBeLess: true
			});
			if (this.checkString("PS-Adobe-", { offset: 2 }) && this.checkString(" EPSF-", { offset: 14 })) return {
				ext: "eps",
				mime: "application/eps"
			};
			return {
				ext: "ps",
				mime: "application/postscript"
			};
		}
		if (this.check([31, 160]) || this.check([31, 157])) return {
			ext: "Z",
			mime: "application/x-compress"
		};
		if (this.check([199, 113])) return {
			ext: "cpio",
			mime: "application/x-cpio"
		};
		if (this.check([96, 234])) return {
			ext: "arj",
			mime: "application/x-arj"
		};
		if (this.check([
			239,
			187,
			191
		])) {
			if (this.detectionReentryCount >= maximumDetectionReentryCount) return;
			this.detectionReentryCount++;
			await this.tokenizer.ignore(3);
			return this.detectConfident(tokenizer);
		}
		if (this.check([
			71,
			73,
			70
		])) return {
			ext: "gif",
			mime: "image/gif"
		};
		if (this.check([
			73,
			73,
			188
		])) return {
			ext: "jxr",
			mime: "image/vnd.ms-photo"
		};
		if (this.check([
			31,
			139,
			8
		])) return this.detectGzip(tokenizer);
		if (this.check([
			66,
			90,
			104
		])) return {
			ext: "bz2",
			mime: "application/x-bzip2"
		};
		if (this.checkString("ID3")) {
			await safeIgnore(tokenizer, 6, {
				maximumLength: 6,
				reason: "ID3 header prefix"
			});
			const id3HeaderLength = await tokenizer.readToken(uint32SyncSafeToken);
			const isUnknownFileSize = hasUnknownFileSize(tokenizer);
			if (!Number.isFinite(id3HeaderLength) || id3HeaderLength < 0 || isUnknownFileSize && (id3HeaderLength > maximumId3HeaderSizeInBytes || tokenizer.position + id3HeaderLength > maximumId3HeaderSizeInBytes)) return;
			if (tokenizer.position + id3HeaderLength > tokenizer.fileInfo.size) {
				if (isUnknownFileSize) return;
				return {
					ext: "mp3",
					mime: "audio/mpeg"
				};
			}
			try {
				await safeIgnore(tokenizer, id3HeaderLength, {
					maximumLength: isUnknownFileSize ? maximumId3HeaderSizeInBytes : tokenizer.fileInfo.size,
					reason: "ID3 payload"
				});
			} catch (error) {
				if (error instanceof EndOfStreamError) return;
				throw error;
			}
			if (this.detectionReentryCount >= maximumDetectionReentryCount) return;
			this.detectionReentryCount++;
			return this.parseTokenizer(tokenizer, this.detectionReentryCount);
		}
		if (this.checkString("MP+")) return {
			ext: "mpc",
			mime: "audio/x-musepack"
		};
		if ((this.buffer[0] === 67 || this.buffer[0] === 70) && this.check([87, 83], { offset: 1 })) return {
			ext: "swf",
			mime: "application/x-shockwave-flash"
		};
		if (this.check([
			255,
			216,
			255
		])) {
			if (this.check([247], { offset: 3 })) return {
				ext: "jls",
				mime: "image/jls"
			};
			return {
				ext: "jpg",
				mime: "image/jpeg"
			};
		}
		if (this.check([
			79,
			98,
			106,
			1
		])) return {
			ext: "avro",
			mime: "application/avro"
		};
		if (this.checkString("FLIF")) return {
			ext: "flif",
			mime: "image/flif"
		};
		if (this.checkString("8BPS")) return {
			ext: "psd",
			mime: "image/vnd.adobe.photoshop"
		};
		if (this.checkString("MPCK")) return {
			ext: "mpc",
			mime: "audio/x-musepack"
		};
		if (this.checkString("FORM")) return {
			ext: "aif",
			mime: "audio/aiff"
		};
		if (this.checkString("icns", { offset: 0 })) return {
			ext: "icns",
			mime: "image/icns"
		};
		if (this.check([
			80,
			75,
			3,
			4
		])) return detectZip(tokenizer);
		if (this.checkString("OggS")) {
			await tokenizer.ignore(28);
			const type = /* @__PURE__ */ new Uint8Array(8);
			await tokenizer.readBuffer(type);
			if (checkBytes(type, [
				79,
				112,
				117,
				115,
				72,
				101,
				97,
				100
			])) return {
				ext: "opus",
				mime: "audio/ogg; codecs=opus"
			};
			if (checkBytes(type, [
				128,
				116,
				104,
				101,
				111,
				114,
				97
			])) return {
				ext: "ogv",
				mime: "video/ogg"
			};
			if (checkBytes(type, [
				1,
				118,
				105,
				100,
				101,
				111,
				0
			])) return {
				ext: "ogm",
				mime: "video/ogg"
			};
			if (checkBytes(type, [
				127,
				70,
				76,
				65,
				67
			])) return {
				ext: "oga",
				mime: "audio/ogg"
			};
			if (checkBytes(type, [
				83,
				112,
				101,
				101,
				120,
				32,
				32
			])) return {
				ext: "spx",
				mime: "audio/ogg"
			};
			if (checkBytes(type, [
				1,
				118,
				111,
				114,
				98,
				105,
				115
			])) return {
				ext: "ogg",
				mime: "audio/ogg"
			};
			return {
				ext: "ogx",
				mime: "application/ogg"
			};
		}
		if (this.check([80, 75]) && (this.buffer[2] === 3 || this.buffer[2] === 5 || this.buffer[2] === 7) && (this.buffer[3] === 4 || this.buffer[3] === 6 || this.buffer[3] === 8)) return {
			ext: "zip",
			mime: "application/zip"
		};
		if (this.checkString("MThd")) return {
			ext: "mid",
			mime: "audio/midi"
		};
		if (this.checkString("wOFF") && (this.check([
			0,
			1,
			0,
			0
		], { offset: 4 }) || this.checkString("OTTO", { offset: 4 }))) return {
			ext: "woff",
			mime: "font/woff"
		};
		if (this.checkString("wOF2") && (this.check([
			0,
			1,
			0,
			0
		], { offset: 4 }) || this.checkString("OTTO", { offset: 4 }))) return {
			ext: "woff2",
			mime: "font/woff2"
		};
		if (this.check([
			212,
			195,
			178,
			161
		]) || this.check([
			161,
			178,
			195,
			212
		])) return {
			ext: "pcap",
			mime: "application/vnd.tcpdump.pcap"
		};
		if (this.checkString("DSD ")) return {
			ext: "dsf",
			mime: "audio/x-dsf"
		};
		if (this.checkString("LZIP")) return {
			ext: "lz",
			mime: "application/lzip"
		};
		if (this.checkString("fLaC")) return {
			ext: "flac",
			mime: "audio/flac"
		};
		if (this.check([
			66,
			80,
			71,
			251
		])) return {
			ext: "bpg",
			mime: "image/bpg"
		};
		if (this.checkString("wvpk")) return {
			ext: "wv",
			mime: "audio/wavpack"
		};
		if (this.checkString("%PDF")) return {
			ext: "pdf",
			mime: "application/pdf"
		};
		if (this.check([
			0,
			97,
			115,
			109
		])) return {
			ext: "wasm",
			mime: "application/wasm"
		};
		if (this.check([73, 73])) {
			const fileType = await this.readTiffHeader(false);
			if (fileType) return fileType;
		}
		if (this.check([77, 77])) {
			const fileType = await this.readTiffHeader(true);
			if (fileType) return fileType;
		}
		if (this.checkString("MAC ")) return {
			ext: "ape",
			mime: "audio/ape"
		};
		if (this.check([
			26,
			69,
			223,
			163
		])) return detectEbml(tokenizer);
		if (this.checkString("SQLi")) return {
			ext: "sqlite",
			mime: "application/x-sqlite3"
		};
		if (this.check([
			78,
			69,
			83,
			26
		])) return {
			ext: "nes",
			mime: "application/x-nintendo-nes-rom"
		};
		if (this.checkString("Cr24")) return {
			ext: "crx",
			mime: "application/x-google-chrome-extension"
		};
		if (this.checkString("MSCF") || this.checkString("ISc(")) return {
			ext: "cab",
			mime: "application/vnd.ms-cab-compressed"
		};
		if (this.check([
			237,
			171,
			238,
			219
		])) return {
			ext: "rpm",
			mime: "application/x-rpm"
		};
		if (this.check([
			197,
			208,
			211,
			198
		])) return {
			ext: "eps",
			mime: "application/eps"
		};
		if (this.check([
			40,
			181,
			47,
			253
		])) return {
			ext: "zst",
			mime: "application/zstd"
		};
		if (this.check([
			127,
			69,
			76,
			70
		])) return {
			ext: "elf",
			mime: "application/x-elf"
		};
		if (this.check([
			33,
			66,
			68,
			78
		])) return {
			ext: "pst",
			mime: "application/vnd.ms-outlook"
		};
		if (this.checkString("PAR1") || this.checkString("PARE")) return {
			ext: "parquet",
			mime: "application/vnd.apache.parquet"
		};
		if (this.checkString("ttcf")) return {
			ext: "ttc",
			mime: "font/collection"
		};
		if (this.check([
			254,
			237,
			250,
			206
		]) || this.check([
			254,
			237,
			250,
			207
		]) || this.check([
			206,
			250,
			237,
			254
		]) || this.check([
			207,
			250,
			237,
			254
		])) return {
			ext: "macho",
			mime: "application/x-mach-binary"
		};
		if (this.check([
			4,
			34,
			77,
			24
		])) return {
			ext: "lz4",
			mime: "application/x-lz4"
		};
		if (this.checkString("regf")) return {
			ext: "dat",
			mime: "application/x-ft-windows-registry-hive"
		};
		if (this.checkString("$FL2") || this.checkString("$FL3")) return {
			ext: "sav",
			mime: "application/x-spss-sav"
		};
		if (this.check([
			79,
			84,
			84,
			79,
			0
		])) return {
			ext: "otf",
			mime: "font/otf"
		};
		if (this.checkString("#!AMR")) return {
			ext: "amr",
			mime: "audio/amr"
		};
		if (this.checkString(String.raw`{\rtf`)) return {
			ext: "rtf",
			mime: "application/rtf"
		};
		if (this.check([
			70,
			76,
			86,
			1
		])) return {
			ext: "flv",
			mime: "video/x-flv"
		};
		if (this.checkString("IMPM")) return {
			ext: "it",
			mime: "audio/x-it"
		};
		if (this.checkString("-lh0-", { offset: 2 }) || this.checkString("-lh1-", { offset: 2 }) || this.checkString("-lh2-", { offset: 2 }) || this.checkString("-lh3-", { offset: 2 }) || this.checkString("-lh4-", { offset: 2 }) || this.checkString("-lh5-", { offset: 2 }) || this.checkString("-lh6-", { offset: 2 }) || this.checkString("-lh7-", { offset: 2 }) || this.checkString("-lzs-", { offset: 2 }) || this.checkString("-lz4-", { offset: 2 }) || this.checkString("-lz5-", { offset: 2 }) || this.checkString("-lhd-", { offset: 2 })) return {
			ext: "lzh",
			mime: "application/x-lzh-compressed"
		};
		if (this.check([
			0,
			0,
			1,
			186
		])) {
			if (this.check([33], {
				offset: 4,
				mask: [241]
			})) return {
				ext: "mpg",
				mime: "video/MP1S"
			};
			if (this.check([68], {
				offset: 4,
				mask: [196]
			})) return {
				ext: "mpg",
				mime: "video/MP2P"
			};
		}
		if (this.checkString("ITSF")) return {
			ext: "chm",
			mime: "application/vnd.ms-htmlhelp"
		};
		if (this.check([
			202,
			254,
			186,
			190
		])) {
			const machOArchitectureCount = UINT32_BE.get(this.buffer, 4);
			const javaClassFileMajorVersion = UINT16_BE.get(this.buffer, 6);
			if (machOArchitectureCount > 0 && machOArchitectureCount <= 30) return {
				ext: "macho",
				mime: "application/x-mach-binary"
			};
			if (javaClassFileMajorVersion > 30) return {
				ext: "class",
				mime: "application/java-vm"
			};
		}
		if (this.checkString(".RMF")) return {
			ext: "rm",
			mime: "application/vnd.rn-realmedia"
		};
		if (this.checkString("DRACO")) return {
			ext: "drc",
			mime: "application/x-ft-draco"
		};
		if (this.check([
			253,
			55,
			122,
			88,
			90,
			0
		])) return {
			ext: "xz",
			mime: "application/x-xz"
		};
		if (this.checkString("<?xml ")) return {
			ext: "xml",
			mime: "application/xml"
		};
		if (this.check([
			55,
			122,
			188,
			175,
			39,
			28
		])) return {
			ext: "7z",
			mime: "application/x-7z-compressed"
		};
		if (this.check([
			82,
			97,
			114,
			33,
			26,
			7
		]) && (this.buffer[6] === 0 || this.buffer[6] === 1)) return {
			ext: "rar",
			mime: "application/x-rar-compressed"
		};
		if (this.checkString("solid ")) return {
			ext: "stl",
			mime: "model/stl"
		};
		if (this.checkString("AC")) {
			const version = new StringType(4, "latin1").get(this.buffer, 2);
			if (new RegExp("^\\d+$", "v").test(version) && version >= 1e3 && version <= 1050) return {
				ext: "dwg",
				mime: "image/vnd.dwg"
			};
		}
		if (this.checkString("070707")) return {
			ext: "cpio",
			mime: "application/x-cpio"
		};
		if (this.checkString("BLENDER")) return {
			ext: "blend",
			mime: "application/x-blender"
		};
		if (this.checkString("!<arch>")) {
			await tokenizer.ignore(8);
			if (await tokenizer.readToken(new StringType(13, "ascii")) === "debian-binary") return {
				ext: "deb",
				mime: "application/x-deb"
			};
			return {
				ext: "ar",
				mime: "application/x-unix-archive"
			};
		}
		if (this.checkString("WEBVTT") && [
			"\n",
			"\r",
			"	",
			" ",
			"\0"
		].some((char7) => this.checkString(char7, { offset: 6 }))) return {
			ext: "vtt",
			mime: "text/vtt"
		};
		if (this.check([
			137,
			80,
			78,
			71,
			13,
			10,
			26,
			10
		])) return detectPng(tokenizer);
		if (this.check([
			65,
			82,
			82,
			79,
			87,
			49,
			0,
			0
		])) return {
			ext: "arrow",
			mime: "application/vnd.apache.arrow.file"
		};
		if (this.check([
			103,
			108,
			84,
			70,
			2,
			0,
			0,
			0
		])) return {
			ext: "glb",
			mime: "model/gltf-binary"
		};
		if (this.check([
			102,
			114,
			101,
			101
		], { offset: 4 }) || this.check([
			109,
			100,
			97,
			116
		], { offset: 4 }) || this.check([
			109,
			111,
			111,
			118
		], { offset: 4 }) || this.check([
			119,
			105,
			100,
			101
		], { offset: 4 })) return {
			ext: "mov",
			mime: "video/quicktime"
		};
		if (this.check([
			73,
			73,
			82,
			79,
			8,
			0,
			0,
			0,
			24
		])) return {
			ext: "orf",
			mime: "image/x-olympus-orf"
		};
		if (this.checkString("gimp xcf ")) return {
			ext: "xcf",
			mime: "image/x-xcf"
		};
		if (this.checkString("ftyp", { offset: 4 }) && (this.buffer[8] & 96) !== 0) {
			const brandMajor = new StringType(4, "latin1").get(this.buffer, 8).replace("\0", " ").trim();
			switch (brandMajor) {
				case "avif":
				case "avis": return {
					ext: "avif",
					mime: "image/avif"
				};
				case "mif1": return {
					ext: "heic",
					mime: "image/heif"
				};
				case "msf1": return {
					ext: "heic",
					mime: "image/heif-sequence"
				};
				case "heic":
				case "heix": return {
					ext: "heic",
					mime: "image/heic"
				};
				case "hevc":
				case "hevx": return {
					ext: "heic",
					mime: "image/heic-sequence"
				};
				case "qt": return {
					ext: "mov",
					mime: "video/quicktime"
				};
				case "M4V":
				case "M4VH":
				case "M4VP": return {
					ext: "m4v",
					mime: "video/x-m4v"
				};
				case "M4P": return {
					ext: "m4p",
					mime: "video/mp4"
				};
				case "M4B": return {
					ext: "m4b",
					mime: "audio/mp4"
				};
				case "M4A": return {
					ext: "m4a",
					mime: "audio/x-m4a"
				};
				case "F4V": return {
					ext: "f4v",
					mime: "video/mp4"
				};
				case "F4P": return {
					ext: "f4p",
					mime: "video/mp4"
				};
				case "F4A": return {
					ext: "f4a",
					mime: "audio/mp4"
				};
				case "F4B": return {
					ext: "f4b",
					mime: "audio/mp4"
				};
				case "crx": return {
					ext: "cr3",
					mime: "image/x-canon-cr3"
				};
				default:
					if (brandMajor.startsWith("3g")) {
						if (brandMajor.startsWith("3g2")) return {
							ext: "3g2",
							mime: "video/3gpp2"
						};
						return {
							ext: "3gp",
							mime: "video/3gpp"
						};
					}
					return {
						ext: "mp4",
						mime: "video/mp4"
					};
			}
		}
		if (this.checkString("REGEDIT4\r\n")) return {
			ext: "reg",
			mime: "application/x-ms-regedit"
		};
		if (this.check([
			82,
			73,
			70,
			70
		])) {
			if (this.checkString("WEBP", { offset: 8 })) return {
				ext: "webp",
				mime: "image/webp"
			};
			if (this.check([
				65,
				86,
				73
			], { offset: 8 })) return {
				ext: "avi",
				mime: "video/vnd.avi"
			};
			if (this.check([
				87,
				65,
				86,
				69
			], { offset: 8 })) return {
				ext: "wav",
				mime: "audio/wav"
			};
			if (this.check([
				81,
				76,
				67,
				77
			], { offset: 8 })) return {
				ext: "qcp",
				mime: "audio/qcelp"
			};
		}
		if (this.check([
			73,
			73,
			85,
			0,
			24,
			0,
			0,
			0,
			136,
			231,
			116,
			216
		])) return {
			ext: "rw2",
			mime: "image/x-panasonic-rw2"
		};
		if (this.check([
			48,
			38,
			178,
			117,
			142,
			102,
			207,
			17,
			166,
			217
		])) return detectAsf(tokenizer);
		if (this.check([
			171,
			75,
			84,
			88,
			32,
			49,
			49,
			187,
			13,
			10,
			26,
			10
		])) return {
			ext: "ktx",
			mime: "image/ktx"
		};
		if ((this.check([
			126,
			16,
			4
		]) || this.check([
			126,
			24,
			4
		])) && this.check([
			48,
			77,
			73,
			69
		], { offset: 4 })) return {
			ext: "mie",
			mime: "application/x-mie"
		};
		if (this.check([
			39,
			10,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		], { offset: 2 })) return {
			ext: "shp",
			mime: "application/x-esri-shape"
		};
		if (this.check([
			255,
			79,
			255,
			81
		])) return {
			ext: "j2c",
			mime: "image/j2c"
		};
		if (this.check([
			0,
			0,
			0,
			12,
			106,
			80,
			32,
			32,
			13,
			10,
			135,
			10
		])) {
			await tokenizer.ignore(20);
			switch (await tokenizer.readToken(new StringType(4, "ascii"))) {
				case "jp2 ": return {
					ext: "jp2",
					mime: "image/jp2"
				};
				case "jpx ": return {
					ext: "jpx",
					mime: "image/jpx"
				};
				case "jpm ": return {
					ext: "jpm",
					mime: "image/jpm"
				};
				case "mjp2": return {
					ext: "mj2",
					mime: "image/mj2"
				};
				default: return;
			}
		}
		if (this.check([255, 10]) || this.check([
			0,
			0,
			0,
			12,
			74,
			88,
			76,
			32,
			13,
			10,
			135,
			10
		])) return {
			ext: "jxl",
			mime: "image/jxl"
		};
		if (this.check([254, 255])) {
			if (this.checkString("<?xml ", {
				offset: 2,
				encoding: "utf-16be"
			})) return {
				ext: "xml",
				mime: "application/xml"
			};
			return;
		}
		if (this.check([
			208,
			207,
			17,
			224,
			161,
			177,
			26,
			225
		])) return {
			ext: "cfb",
			mime: "application/x-cfb"
		};
		await tokenizer.peekBuffer(this.buffer, {
			length: Math.min(256, tokenizer.fileInfo.size),
			mayBeLess: true
		});
		if (this.check([
			97,
			99,
			115,
			112
		], { offset: 36 })) return {
			ext: "icc",
			mime: "application/vnd.iccprofile"
		};
		if (this.checkString("**ACE", { offset: 7 }) && this.checkString("**", { offset: 12 })) return {
			ext: "ace",
			mime: "application/x-ace-compressed"
		};
		if (this.checkString("BEGIN:")) {
			if (this.checkString("VCARD", { offset: 6 })) return {
				ext: "vcf",
				mime: "text/vcard"
			};
			if (this.checkString("VCALENDAR", { offset: 6 })) return {
				ext: "ics",
				mime: "text/calendar"
			};
		}
		if (this.checkString("FUJIFILMCCD-RAW")) return {
			ext: "raf",
			mime: "image/x-fujifilm-raf"
		};
		if (this.checkString("Extended Module:")) return {
			ext: "xm",
			mime: "audio/x-xm"
		};
		if (this.checkString("Creative Voice File")) return {
			ext: "voc",
			mime: "audio/x-voc"
		};
		if (this.check([
			4,
			0,
			0,
			0
		]) && this.buffer.length >= 16) {
			const jsonSize = new DataView(this.buffer.buffer).getUint32(12, true);
			if (jsonSize > 12 && this.buffer.length >= jsonSize + 16) try {
				const header = new TextDecoder().decode(this.buffer.subarray(16, jsonSize + 16));
				if (JSON.parse(header).files) return {
					ext: "asar",
					mime: "application/x-asar"
				};
			} catch {}
		}
		if (this.check([
			6,
			14,
			43,
			52,
			2,
			5,
			1,
			1,
			13,
			1,
			2,
			1,
			1,
			2
		])) return {
			ext: "mxf",
			mime: "application/mxf"
		};
		if (this.checkString("SCRM", { offset: 44 })) return {
			ext: "s3m",
			mime: "audio/x-s3m"
		};
		if (this.check([71]) && this.check([71], { offset: 188 })) return {
			ext: "mts",
			mime: "video/mp2t"
		};
		if (this.check([71], { offset: 4 }) && this.check([71], { offset: 196 })) return {
			ext: "mts",
			mime: "video/mp2t"
		};
		if (this.check([
			66,
			79,
			79,
			75,
			77,
			79,
			66,
			73
		], { offset: 60 })) return {
			ext: "mobi",
			mime: "application/x-mobipocket-ebook"
		};
		if (this.check([
			68,
			73,
			67,
			77
		], { offset: 128 })) return {
			ext: "dcm",
			mime: "application/dicom"
		};
		if (this.check([
			76,
			0,
			0,
			0,
			1,
			20,
			2,
			0,
			0,
			0,
			0,
			0,
			192,
			0,
			0,
			0,
			0,
			0,
			0,
			70
		])) return {
			ext: "lnk",
			mime: "application/x-ms-shortcut"
		};
		if (this.check([
			98,
			111,
			111,
			107,
			0,
			0,
			0,
			0,
			109,
			97,
			114,
			107,
			0,
			0,
			0,
			0
		])) return {
			ext: "alias",
			mime: "application/x-ft-apple.alias"
		};
		if (this.checkString("Kaydara FBX Binary  \0")) return {
			ext: "fbx",
			mime: "application/x-ft-fbx"
		};
		if (this.check([76, 80], { offset: 34 }) && (this.check([
			0,
			0,
			1
		], { offset: 8 }) || this.check([
			1,
			0,
			2
		], { offset: 8 }) || this.check([
			2,
			0,
			2
		], { offset: 8 }))) return {
			ext: "eot",
			mime: "application/vnd.ms-fontobject"
		};
		if (this.check([
			6,
			6,
			237,
			245,
			216,
			29,
			70,
			229,
			189,
			49,
			239,
			231,
			254,
			116,
			183,
			29
		])) return {
			ext: "indd",
			mime: "application/x-indesign"
		};
		if (this.check([
			255,
			255,
			0,
			0,
			7,
			0,
			0,
			0,
			4,
			0,
			0,
			0,
			1,
			0,
			1,
			0
		]) || this.check([
			0,
			0,
			255,
			255,
			0,
			0,
			0,
			7,
			0,
			0,
			0,
			4,
			0,
			1,
			0,
			1
		])) return {
			ext: "jmp",
			mime: "application/x-jmp-data"
		};
		await tokenizer.peekBuffer(this.buffer, {
			length: Math.min(512, tokenizer.fileInfo.size),
			mayBeLess: true
		});
		if (this.checkString("ustar", { offset: 257 }) && (this.checkString("\0", { offset: 262 }) || this.checkString(" ", { offset: 262 })) || this.check([
			0,
			0,
			0,
			0,
			0,
			0
		], { offset: 257 }) && tarHeaderChecksumMatches(this.buffer)) return {
			ext: "tar",
			mime: "application/x-tar"
		};
		if (this.check([255, 254])) {
			const encoding = "utf-16le";
			if (this.checkString("<?xml ", {
				offset: 2,
				encoding
			})) return {
				ext: "xml",
				mime: "application/xml"
			};
			if (this.check([255, 14], { offset: 2 }) && this.checkString("SketchUp Model", {
				offset: 4,
				encoding
			})) return {
				ext: "skp",
				mime: "application/vnd.sketchup.skp"
			};
			if (this.checkString("Windows Registry Editor Version 5.00\r\n", {
				offset: 2,
				encoding
			})) return {
				ext: "reg",
				mime: "application/x-ms-regedit"
			};
			return;
		}
		if (this.checkString("-----BEGIN PGP MESSAGE-----")) return {
			ext: "pgp",
			mime: "application/pgp-encrypted"
		};
	};
	detectImprecise = async (tokenizer) => {
		this.buffer = new Uint8Array(reasonableDetectionSizeInBytes);
		const fileSize = getKnownFileSizeOrMaximum(tokenizer.fileInfo.size);
		await tokenizer.peekBuffer(this.buffer, {
			length: Math.min(8, fileSize),
			mayBeLess: true
		});
		if (this.check([
			0,
			0,
			1,
			186
		]) || this.check([
			0,
			0,
			1,
			179
		])) return {
			ext: "mpg",
			mime: "video/mpeg"
		};
		if (this.check([
			0,
			1,
			0,
			0,
			0
		])) return {
			ext: "ttf",
			mime: "font/ttf"
		};
		if (this.check([
			0,
			0,
			1,
			0
		])) return {
			ext: "ico",
			mime: "image/x-icon"
		};
		if (this.check([
			0,
			0,
			2,
			0
		])) return {
			ext: "cur",
			mime: "image/x-icon"
		};
		await tokenizer.peekBuffer(this.buffer, {
			length: Math.min(4 + this.options.mpegOffsetTolerance, fileSize),
			mayBeLess: true
		});
		if (this.buffer.length >= 4 + this.options.mpegOffsetTolerance) for (let depth = 0; depth <= this.options.mpegOffsetTolerance; ++depth) {
			const type = this.scanMpeg(depth);
			if (type) return type;
		}
	};
	async readTiffTag(bigEndian) {
		const tagId = await this.tokenizer.readToken(bigEndian ? UINT16_BE : UINT16_LE);
		await this.tokenizer.ignore(10);
		switch (tagId) {
			case 50341: return {
				ext: "arw",
				mime: "image/x-sony-arw"
			};
			case 50706: return {
				ext: "dng",
				mime: "image/x-adobe-dng"
			};
		}
	}
	async readTiffIFD(bigEndian) {
		const numberOfTags = await this.tokenizer.readToken(bigEndian ? UINT16_BE : UINT16_LE);
		if (numberOfTags > maximumTiffTagCount) return;
		if (hasUnknownFileSize(this.tokenizer) && 2 + numberOfTags * 12 > maximumTiffIfdOffsetInBytes) return;
		for (let n = 0; n < numberOfTags; ++n) {
			const fileType = await this.readTiffTag(bigEndian);
			if (fileType) return fileType;
		}
	}
	async readTiffHeader(bigEndian) {
		const tiffFileType = {
			ext: "tif",
			mime: "image/tiff"
		};
		const version = (bigEndian ? UINT16_BE : UINT16_LE).get(this.buffer, 2);
		const ifdOffset = (bigEndian ? UINT32_BE : UINT32_LE).get(this.buffer, 4);
		if (version === 42) {
			if (ifdOffset >= 6) {
				if (this.checkString("CR", { offset: 8 })) return {
					ext: "cr2",
					mime: "image/x-canon-cr2"
				};
				if (ifdOffset >= 8) {
					const someId1 = (bigEndian ? UINT16_BE : UINT16_LE).get(this.buffer, 8);
					const someId2 = (bigEndian ? UINT16_BE : UINT16_LE).get(this.buffer, 10);
					if (someId1 === 28 && someId2 === 254 || someId1 === 31 && someId2 === 11) return {
						ext: "nef",
						mime: "image/x-nikon-nef"
					};
				}
			}
			if (hasUnknownFileSize(this.tokenizer) && ifdOffset > maximumTiffStreamIfdOffsetInBytes) return tiffFileType;
			const maximumTiffOffset = hasUnknownFileSize(this.tokenizer) ? maximumTiffIfdOffsetInBytes : this.tokenizer.fileInfo.size;
			try {
				await safeIgnore(this.tokenizer, ifdOffset, {
					maximumLength: maximumTiffOffset,
					reason: "TIFF IFD offset"
				});
			} catch (error) {
				if (error instanceof EndOfStreamError) return;
				throw error;
			}
			let fileType;
			try {
				fileType = await this.readTiffIFD(bigEndian);
			} catch (error) {
				if (error instanceof EndOfStreamError) return;
				throw error;
			}
			return fileType ?? tiffFileType;
		}
		if (version === 43) return tiffFileType;
	}
	/**
	Scan check MPEG 1 or 2 Layer 3 header, or 'layer 0' for ADTS (MPEG sync-word 0xFFE).
	
	@param offset - Offset to scan for sync-preamble.
	@returns {{ext: string, mime: string}}
	*/
	scanMpeg(offset) {
		if (this.check([255, 224], {
			offset,
			mask: [255, 224]
		})) {
			if (this.check([16], {
				offset: offset + 1,
				mask: [22]
			})) return {
				ext: "aac",
				mime: "audio/aac"
			};
			if (this.check([255, 254], { offset })) return;
			if (this.check([8], {
				offset: offset + 1,
				mask: [24]
			})) return;
			if (this.check([240], {
				offset: offset + 2,
				mask: [240]
			})) return;
			if (this.check([12], {
				offset: offset + 2,
				mask: [12]
			})) return;
			if (this.check([2], {
				offset: offset + 1,
				mask: [6]
			})) return {
				ext: "mp3",
				mime: "audio/mpeg"
			};
			if (this.check([4], {
				offset: offset + 1,
				mask: [6]
			})) return {
				ext: "mp2",
				mime: "audio/mpeg"
			};
			if (this.check([6], {
				offset: offset + 1,
				mask: [6]
			})) return {
				ext: "mp1",
				mime: "audio/mpeg"
			};
		}
	}
};
new Set(extensions);
new Set(mimeTypes);
var hookXorEnc = () => {
	return new Promise((resolve, reject) => {
		Promise.all([
			hookXorKey(),
			hookEncBinUrl(),
			hookViewerMeta(),
			hookApiV2Work()
		]).then(([{ key: encDetectorKey }, { url: binUrl }, { json: viewerMeta }, { json: apiV2WorkMeta }]) => {
			origConsole.log("viewerMeta ", viewerMeta);
			origConsole.log("xor key ", encDetectorKey);
			origConsole.log("binUrl  ", binUrl);
			const encBinUrls = makeEncBinUrls(binUrl, viewerMeta);
			origConsole.log("encBinUrls  ", encBinUrls.length);
			const saveName = makeArtworkSaveName(viewerMeta, apiV2WorkMeta);
			origConsole.log("makeArtworkSaveName ", saveName);
			resolve({
				method: "xor",
				data: {
					urls: encBinUrls,
					key: encDetectorKey,
					zipFileName: saveName,
					download: () => downloadAndDecryptToZip(encBinUrls, encDetectorKey, `${saveName}.zip`).catch(origConsole.error)
				}
			});
		});
	});
};
function makeArtworkSaveName(viewerMeta, apiV2WorkMeta) {
	console.log(apiV2WorkMeta);
	let creator = void 0;
	if (viewerMeta.meta_data.creator?.length > 0) creator = viewerMeta.meta_data.creator.join(" ");
	let apiV2_maker = "";
	if (apiV2WorkMeta?.maker?.name?.ja_JP) apiV2_maker = apiV2WorkMeta.maker?.name?.ja_JP;
	let apiV2_name = "";
	if (apiV2WorkMeta?.name?.ja_JP) apiV2_name = apiV2WorkMeta?.name?.ja_JP;
	let publisher = "";
	if (viewerMeta.meta_data.publisher) publisher = viewerMeta.meta_data.publisher;
	let title = void 0;
	if (viewerMeta.meta_data.title) title = viewerMeta.meta_data.title;
	let no = "";
	const NO = extractDlsiteId(window.location.href);
	if (NO) no = NO;
	return `[${no}] (${publisher})(${creator ?? apiV2_maker}) ${title ?? apiV2_name}`;
}
function extractNumberOrKeepOriginal(str) {
	const match = str.match(/\d+/);
	return match ? match[0] : str;
}
function makeEncBinUrls(binUrlExample, viewerMeta) {
	const binUrls = [];
	const pattern = /\/((i-\d+)|cover|\d+)\.enc\b/;
	const matched = pattern.test(binUrlExample);
	viewerMeta.pages.forEach(({ src }, _i) => {
		let url;
		let name;
		if (matched) {
			url = binUrlExample.replace(pattern, `/${src}`);
			name = `${_i}-${extractNumberOrKeepOriginal(src.replace(".enc", ""))}`;
		} else {
			url = binUrlExample.replace(/\/[^\/]+.enc/, `/${src}`);
			name = src.replace(".enc", "");
		}
		binUrls.push({
			url,
			name
		});
	});
	return binUrls;
}
/**
* hook Worker的postMessage方法，尝试截获xor key以判断是否为xor加密方式
* @returns {Promise<encDetectorResult>}
*/
var hookXorKey = () => {
	return new Promise((resolve, reject) => {
		const origPostMessage = Worker.prototype.postMessage;
		Worker.prototype.postMessage = function(msg, ...rest) {
			if (msg && msg.param) {
				if (msg.param.key && msg.param.method === "xor") {
					Worker.prototype.postMessage = origPostMessage;
					resolve({ key: msg.param.key });
				}
			}
			return origPostMessage.call(this, msg, ...rest);
		};
		const originalDecrypt = crypto.subtle.decrypt;
		crypto.subtle.decrypt = async function(algorithm, key, data) {
			const result = await originalDecrypt.call(this, algorithm, key, data);
			resolve({ key: new TextDecoder("utf-8").decode(result) });
			return result;
		};
	});
};
var hookEncBinUrl = () => {
	return new Promise((resolve, reject) => {
		registerRequestHook(/\/[^/?]+\.enc(?:\?|$)/, (json, response, url) => {
			resolve({ url });
		}, true);
	});
};
var hookViewerMeta = () => {
	return new Promise((resolve, reject) => {
		registerRequestHook(/\/viewer\-meta\.json\b/, (json, response, url) => {
			resolve({ json });
		}, true);
	});
};
var hookApiV2Work = () => {
	return new Promise((resolve) => {
		let unregisterFns = [];
		const cleanUpAll = () => {
			unregisterFns.forEach((unhook) => {
				if (typeof unhook === "function") unhook();
			});
			unregisterFns.length = 0;
		};
		[
			/\/api\/v2\/work\/.+$/,
			/\/api\/viewer\/work\/.+$/,
			/\/api\/comipo\/v2\/work\/.+$/
		].forEach((pattern) => {
			const unhook = registerRequestHook(pattern, (json) => {
				cleanUpAll();
				resolve({ json });
			}, true);
			unregisterFns.push(unhook);
		});
	});
};
/**
* XOR 解密
*/
function xorDecrypt(data, keyHex) {
	const key = Uint8Array.from(keyHex.match(/.{1,2}/g).map((b) => parseInt(b, 16)));
	const keyLen = key.length;
	const result = new Uint8Array(data.length);
	for (let i = 0; i < data.length; i++) result[i] = data[i] ^ key[i % keyLen];
	return result;
}
function downloadArrayBuffer(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.responseType = "arraybuffer";
		xhr.onload = () => {
			if (xhr.status === 200) resolve(xhr.response);
			else reject(/* @__PURE__ */ new Error(`下载失败: ${xhr.status} ${xhr.statusText}`));
		};
		xhr.onerror = () => reject(/* @__PURE__ */ new Error("XHR 请求失败"));
		xhr.send();
	});
}
/**
* 异步下载+解密+自动识别文件类型+打包ZIP (支持多线程)
* @param {Array<{url: string, name: string}>} files - 文件列表
* @param {string} keyHex - XOR 密钥
* @param {string} outputZip - 输出 ZIP 名称
* @param {number} concurrency - 并发线程数（默认 5）
*/
var downloadAndDecryptToZip = async (files, keyHex, outputZip, concurrency = 3) => {
	const zipFiles = {};
	let successCount = 0;
	let failCount = 0;
	const runWithConcurrency = async (tasks, maxConcurrent) => {
		const results = [];
		const executing = /* @__PURE__ */ new Set();
		for (const task of tasks) {
			if (executing.size >= maxConcurrent) await Promise.race(executing);
			const taskPromise = runTask(task).finally(() => {
				executing.delete(taskPromise);
			});
			executing.add(taskPromise);
			results.push(taskPromise);
		}
		return Promise.allSettled(results);
	};
	const runTask = async ({ url, name }) => {
		try {
			origConsole.log(`下载中: ${name}`);
			_unsafeWindow.add_log?.(`下载中: ${name}`);
			const arrayBuffer = await downloadArrayBuffer(url);
			const decrypted = xorDecrypt(new Uint8Array(arrayBuffer), keyHex);
			const type = await fileTypeFromBuffer(decrypted);
			const ext = type ? type.ext : "bin";
			const finalName = name.endsWith(`.${ext}`) ? name : `${name}.${ext}`;
			zipFiles[finalName] = decrypted;
			successCount++;
			origConsole.log(`✓ 已完成: ${finalName} (${type?.mime || "未知类型"})`);
			_unsafeWindow.add_log?.(`✓ 已完成: ${finalName} (${type?.mime || "未知类型"})`);
			return {
				success: true,
				name: finalName
			};
		} catch (err) {
			failCount++;
			origConsole.error(`✗ 处理失败: ${name}`, err);
			_unsafeWindow.add_log?.(`✗ 处理失败: ${name} (${err.message})`);
			return {
				success: false,
				name,
				error: err.message
			};
		}
	};
	await runWithConcurrency(files, concurrency);
	if (Object.keys(zipFiles).length === 0) {
		const errorMsg = "所有文件处理失败，无法创建ZIP";
		origConsole.error(errorMsg);
		_unsafeWindow.add_log?.(errorMsg);
		throw new Error(errorMsg);
	}
	return new Promise((resolve, reject) => {
		zip(zipFiles, (err, zipped) => {
			if (err) {
				origConsole.error("ZIP 压缩失败", err);
				_unsafeWindow.add_log?.("ZIP 压缩失败", err);
				reject(err);
				return;
			}
			const blob = new Blob([zipped], { type: "application/zip" });
			const blobUrl = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = blobUrl;
			a.download = outputZip;
			const summary = `完成: ${successCount} 成功, ${failCount} 失败 -> ${outputZip}`;
			origConsole.log(summary);
			_unsafeWindow.add_log?.(summary);
			resolve({
				save: () => {
					a.click();
					setTimeout(() => URL.revokeObjectURL(blobUrl), 1e3);
				},
				successCount,
				failCount,
				blobUrl
			});
		});
	});
};
/**
* 
*   , LC = async e => {
const r = new TextEncoder().encode(e)
, a = await crypto.subtle.digest("SHA-256", r);
return Array.from(new Uint8Array(a)).map(l => l.toString(16).padStart(2, "0")).join("")
}
*/
(function() {
	const orig = crypto.subtle.generateKey;
	crypto.subtle.generateKey = async function(algorithm, extractable, usages) {
		console.log("%c[HOOK] generateKey called", "color: lime;");
		console.log("algorithm:", algorithm);
		console.log("extractable:", extractable);
		console.log("usages:", usages);
		const keyPair = await orig.apply(this, arguments);
		console.log("%c[HOOK] generated keyPair:", "color: cyan;");
		console.log("publicKey:", keyPair.publicKey);
		console.log("privateKey:", keyPair.privateKey);
		debugger;
		try {
			const spki = await crypto.subtle.exportKey("spki", keyPair.publicKey);
			const pkcs8 = await crypto.subtle.exportKey("pkcs8", keyPair.privateKey);
			const toBase64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));
			console.log("publicKey (SPKI base64):", toBase64(spki));
			console.log("privateKey (PKCS8 base64):", toBase64(pkcs8));
		} catch (err) {
			console.warn("[HOOK] exportKey failed:", err);
		}
		return keyPair;
	};
})();
/**
* 
* "MII***
publicKey (SPKI base64): 
请求https://play.dlsite.com/api/v3/viewer/token/BJ****** 的载荷public_key参数
*/
function useLog() {
	const log_list = ref([]);
	function add_log(text) {
		log_list.value.unshift(text);
	}
	function clear_log() {
		log_list.value = [];
	}
	_unsafeWindow.add_log = add_log;
	return {
		log_list,
		add_log,
		clear_log
	};
}
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = ["hide"];
var _hoisted_2 = { class: "button-area" };
var _hoisted_3 = { class: "log-area" };
var _hoisted_4 = { class: "log-line" };
var App_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	__name: "App",
	setup(__props) {
		const attaching = ref(false);
		const downloading = ref(false);
		const download_fin = ref(false);
		let past_location_key = null;
		let state_version = 0;
		const panel_hide = ref(true);
		const attached_seccess = ref(false);
		const url_nums = ref(1);
		const downloaded_nums = ref(0);
		let download_func = null;
		let save_func = null;
		const { log_list, add_log, clear_log } = useLog();
		function start_download() {
			const current_state_version = state_version;
			downloading.value = true;
			download_fin.value = false;
			download_func?.().then((result) => {
				if (current_state_version !== state_version) return;
				if (!result?.save) throw new Error("download did not return a save handler");
				save_func = result.save;
				download_fin.value = true;
				downloading.value = false;
			}).catch((e) => {
				if (current_state_version !== state_version) return;
				origConsole.error(e);
				add_log("下载失败：" + e.message);
				download_fin.value = false;
				downloading.value = false;
			});
		}
		function save() {
			save_func?.();
		}
		/***
		* 开始检测加密方式
		*/
		const attach_enc_method = () => {
			if (attaching.value) return;
			const current_state_version = state_version;
			attaching.value = true;
			Promise.race([hookXorEnc(), hookFetchPuzzle()]).then(({ method, data }) => {
				if (current_state_version !== state_version) return;
				add_log("检测到加密方式：" + method);
				origConsole.log("检测到加密方式：", method, data);
				if (method === "xor" || method === "puzzle") {
					const { urls, key, zipFileName, download } = data;
					add_log("检测作品页数：" + urls.length);
					url_nums.value = urls.length;
					downloaded_nums.value = 0;
					if (key) add_log("检测xor key：" + key);
					add_log("检测作品名称：" + zipFileName);
					attached_seccess.value = true;
					panel_hide.value = false;
					download_func = download;
				}
			}).catch((e) => {
				if (current_state_version !== state_version) return;
				origConsole.error(e);
			}).finally(() => {
				if (current_state_version !== state_version) return;
				attaching.value = false;
			});
		};
		const locationUpdated = () => {
			if (past_location_key != getLocationKey()) pathnameUpdated();
		};
		const getLocationKey = () => window.location.href;
		const clearPluginState = () => {
			state_version++;
			clear_log();
			add_log("页面已切换");
			origConsole.log("页面已切换");
			attaching.value = false;
			downloading.value = false;
			download_fin.value = false;
			panel_hide.value = true;
			attached_seccess.value = false;
			url_nums.value = 1;
			downloaded_nums.value = 0;
			download_func = null;
			save_func = null;
		};
		const pathnameUpdated = () => {
			past_location_key = getLocationKey();
			clearPluginState();
			const no = extractDlsiteId(window.location.href);
			if (no) {
				origConsole.log(no);
				attach_enc_method();
			}
		};
		pathnameUpdated();
		const _wr = function(type) {
			const orig = history[type];
			return function() {
				const rv = orig.apply(this, arguments);
				const e = new Event(type);
				e.arguments = arguments;
				window.dispatchEvent(e);
				return rv;
			};
		};
		history.pushState = _wr("pushState");
		history.replaceState = _wr("replaceState");
		window.addEventListener("pushState", function(e) {
			locationUpdated();
		});
		window.addEventListener("replaceState", function(e) {
			locationUpdated();
		});
		window.addEventListener("popstate", function(e) {
			locationUpdated();
		});
		window.addEventListener("hashchange", function(e) {
			locationUpdated();
		});
		/**
		* @description 返回元素最接近body的父节点
		* @param {*} dom
		*/
		function findDeep2ndParentNode(dom) {
			if (dom && dom.parentNode && dom.parentNode.tagName != "BODY") return findDeep2ndParentNode(dom.parentNode);
			else return dom;
		}
		function bodyClickCallback(e) {
			if (!findDeep2ndParentNode(e.target).getAttributeNames().includes("data-v-app")) {
				if (!panel_hide.value) panel_hide.value = true;
			}
		}
		onMounted(() => {
			document.body.addEventListener("click", bodyClickCallback, {
				capture: false,
				passive: false,
				once: false
			});
		});
		onUnmounted(() => {
			document.body.removeEventListener("click", bodyClickCallback);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "plugin-area",
				hide: panel_hide.value,
				onMouseover: _cache[0] || (_cache[0] = ($event) => panel_hide.value = false),
				onWheel: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
			}, [
				_cache[2] || (_cache[2] = createElementVNode("div", { class: "title" }, "DLsite-Play-Downloader-vue", -1)),
				createElementVNode("div", _hoisted_2, [!downloading.value && !download_fin.value ? (openBlock(), createBlock(unref(ElButton), {
					key: 0,
					loading: attaching.value,
					disabled: !attached_seccess.value,
					dark: false,
					color: "var(--surface-on-surface-primary)",
					onClick: start_download,
					style: { "color": "white" }
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(attaching.value ? "检测加密方式中" : "开始下载"), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])) : (openBlock(), createBlock(unref(ElButton), {
					key: 1,
					loading: downloading.value,
					disabled: !download_fin.value,
					dark: false,
					color: "var(--surface-on-surface-primary)",
					onClick: save,
					style: { "color": "white" }
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(downloading.value ? "下载中" : "保存压缩文件"), 1)]),
					_: 1
				}, 8, ["loading", "disabled"]))]),
				createElementVNode("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(log_list), (log) => {
					return openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(log), 1);
				}), 256))])
			], 40, _hoisted_1);
		};
	}
}, [["__scopeId", "data-v-fe414780"]]);
function mountApp() {
	if (!document.body) {
		requestAnimationFrame(mountApp);
		return;
	}
	const container = document.createElement("div");
	container.className = "dlsite-play-downloader-vue";
	document.body.appendChild(container);
	createApp(App_default).mount(container);
}
mountApp();})}}));
System.import("./___monkey.entry.js", "./");
