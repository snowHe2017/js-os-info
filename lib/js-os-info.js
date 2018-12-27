"use strict";

var OSInfo = {
	os: navigator.userAgent.toUpperCase().indexOf("WINDOWS", 0) > -1 ? "MS Windows" : navigator.userAgent.toUpperCase().indexOf("MAC", 0) > -1 ? "Apple mac" : navigator.userAgent.toUpperCase().indexOf("LINUX", 0) > -1 ? "Lunix" : navigator.userAgent.toUpperCase().indexOf("X11", 0) > -1 ? "Unix" : "unknown",
	browser: null,
	onLine: navigator.onLine,
	language: navigator.language,
	canvasAble: !!window.CanvasRenderingContext2D,
	file: !!window.File && !!window.FileReader && !!window.FileList && !!window.Blob,
	fileSystem: !!window.requestFileSystem || !!window.webkitRequestFileSystem,
	webgl: function () {
		try {
			return !!window.WebGLRenderingContext && !!document.createElement("canvas").getContext("experimental-webgl");
		} catch (a) {
			return !1;
		}
	}(),
	worker: !!window.Worker,
	cookieEnabled: navigator.cookieEnabled,
	msPointerable: null,
	touchable: null,
	maxTouchPoints: !!window.navigator.maxTouchPoints ? window.navigator.maxTouchPoints : 0,
	isSurface: false,
	localStorage: false,
	requestAnimationFrameAble: false,
	update: function update() {
		try {
			this.msPointerable = window.navigator.msPointerEnabled ? true : false;
		} catch (e) {
			this.msPointerable = false;
		}
		try {
			this.touchable = "ontouchstart" in document ? true : false;
		} catch (e) {
			this.touchable = false;
		}
		try {
			this.isSurface = "ontouchstart" in document && this.isPC() ? true : false;
		} catch (e) {}
		try {
			this.localStorage = 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
			this.localStorage = false;
		}
		this.browser = this.getBrowser();

		if (!window.requestAnimationFrame) {
			if (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame) {
				window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
				this.requestAnimationFrameAble = true;
			}
		} else {
			this.requestAnimationFrameAble = true;
		}
		console.log("OS info test over.");
	},
	isPC: function isPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	},
	getBrowser: function getBrowser() {
		var OsObject = "";
		if (navigator.userAgent.indexOf("MSIE") > 0 || navigator.userAgent.indexOf("Media") > 0) {
			OsObject = "IE";
		} else if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
			OsObject = "Firefox";
		} else if (isCamino = navigator.userAgent.indexOf("Chrome") > 0) {
			OsObject = "Chrome";
		} else if (isMozilla = navigator.userAgent.indexOf("Oprea") > 0) {
			OsObject = "Oprea";
		} else if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
			OsObject = "Safari";
		} else {
			OsObject = "some anther";
		}
		return OsObject;
	}
};
module.exports = OSInfo;