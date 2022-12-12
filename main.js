(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),n=document.forms.user,r=document.forms.card,o=document.forms.profilepic,i=document.querySelector(".profile__pic-container"),u={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=t.userName,r=t.userOccupation,o=t.userProfilePic;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userOccupation=document.querySelector(r),this._userProfilePic=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userOccupation.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userOccupation.textContent=e.about,this._userProfilePic.src=e.avatar}},{key:"setProfilePic",value:function(e){this._userProfilePic.src=e.avatar}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){var n=t.data,r=t.userId,o=t.templateSelector,i=t.handleCardClick,u=t.handleDeletion,s=t.handleLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=n,this._cardName=n.name,this._cardLink=n.link,this._likes=n.likes,this._cardId=n._id,this._userId=r,this._ownerId=n.owner._id,this._templateSelector=o,this._handleCardClick=i,this._handleDeletion=u,this._handleLike=s}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"cardIsLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"setLikesCounter",value:function(e){this._likes=e,this._element.querySelector(".cards__like-counter").textContent=this._likes.length,this._likeButton=this._element.querySelector(".cards__like"),this.cardIsLiked()?this._likeButton.classList.add("cards__like_active"):this._likeButton.classList.remove("cards__like_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".cards__image"),this._cardImage.src=this._cardLink,this._cardImage.alt="Фотография: ".concat(this._cardName),this._element.querySelector(".cards__name").textContent=this._cardName,this._buttonDeleteCard=this._element.querySelector(".cards__delete-button"),this.setLikesCounter(this._likes),this._hideDeleteButton(),this._setEventListeners(),this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_hideDeleteButton",value:function(){this._ownerId!==this._userId&&(this._buttonDeleteCard.style.display="none")}},{key:"_setButtonDeleteCardEventListener",value:function(){var e=this;this._buttonDeleteCard.addEventListener("click",(function(){e._handleDeletion(e._cardId)}))}},{key:"_setLikeButtonEventListener",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLike(e._cardId)}))}},{key:"_setOpenPopupEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._data)}))}},{key:"_setEventListeners",value:function(){this._setButtonDeleteCardEventListener(),this._setLikeButtonEventListener(),this._setOpenPopupEventListeners()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){var n=t.renderer,r=t.containerSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(r),this._renderer=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-icon"))&&e.close(t.target)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function k(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._formInputsList=t._form.querySelectorAll(".popup__input"),t._submitButton=t._form.querySelector(".popup__button"),t._submitButtonText=t._submitButton.textContent,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsValues={},this._formInputsList.forEach((function(t){e._inputsValues[t.name]=t.value})),this._inputsValues}},{key:"setEventListeners",value:function(){var e=this;v(g(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"setInputValues",value:function(e){this._formInputsList.forEach((function(t){t.value=e[t.name]}))}},{key:"renderLoadingSaving",value:function(e){e?this._submitButton.textContent="Сохранение...":(this.close(),this._submitButton.textContent=this._submitButtonText)}},{key:"close",value:function(){v(g(u.prototype),"close",this).call(this),this._form.reset()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function P(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e){S(j(u.prototype),"open",this).call(this),this._popupImage.alt="Фотография: ".concat(e.name),this._popupImage.src=e.link,this._popupCaption.textContent=e.name}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function x(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t._submitButton=t._form.querySelector(".popup__button"),t._submitButtonText=t._submitButton.textContent,t}return t=u,(n=[{key:"submitDeletion",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;T(U(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(),e.close()}))}},{key:"renderLoadingDeletion",value:function(e){this._submitButtonText=e?"Удаление...":this._submitButton.textContent}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){e.classList.add(this._inputErrorClass),this._errorElement.classList.add(this._errorClass),this._errorElement.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){e.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this.enableButton()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._errorElement=e._formElement.querySelector(".".concat(t.id,"-error")),e._isValid(t),e._toggleButtonState()}))}))}},{key:"hideErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._errorElement=e._formElement.querySelector(".".concat(t.id,"-error")),e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners(this._formSelector)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J,H=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._serverURL=t.serverURL,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkRes",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._serverURL,"/cards"),{headers:this._headers}).then(this._checkRes)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._serverURL,"/users/me"),{headers:this._headers}).then(this._checkRes)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._serverURL,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkRes)}},{key:"setProfilePic",value:function(e){return fetch("".concat(this._serverURL,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkRes)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._serverURL,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkRes)}},{key:"putLike",value:function(e){return fetch("".concat(this._serverURL,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkRes)}},{key:"removeLike",value:function(e){return fetch("".concat(this._serverURL,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkRes)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._serverURL,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRes)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({serverURL:"https://mesto.nomoreparties.co/v1/cohort-54",headers:{authorization:"9732efc5-811e-490a-92fd-fca287deba43","Content-Type":"application/json"}});function M(e){var t=new l({data:e,userId:J,templateSelector:"#card__template",handleCardClick:function(e){Y.open(e)},handleDeletion:function(e){X.open(),X.submitDeletion((function(){X.renderLoadingDeletion(!0),H.deleteCard(e).then((function(e){t.deleteCard()})).catch((function(e){console.log(e)})).finally((function(){X.renderLoadingDeletion(!1)}))}))},handleLike:function(e){t.cardIsLiked()?H.removeLike(e).then((function(e){t.setLikesCounter(e.likes)})).catch((function(e){console.log(e)})):H.putLike(e).then((function(e){t.setLikesCounter(e.likes)})).catch((function(e){console.log(e)}))}});return t.generateCard()}H.getUserInfo().then((function(e){K.setUserInfo(e),K.setProfilePic(e),J=e._id})).catch((function(e){console.log(e)}));var z=new p({renderer:function(e){z.addItem(M(e))},containerSelector:".cards"});H.getInitialCards().then((function(e){z.renderItems(e)})).catch((function(e){console.log(e)}));var G=new E({popupSelector:".popup_type_edit-profile",handleFormSubmit:function(e){G.renderLoadingSaving(!0),H.setUserInfo(e).then((function(e){K.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){G.renderLoadingSaving(!1)}))}});G.setEventListeners();var K=new c({userName:".profile__name",userOccupation:".profile__occupation",userProfilePic:".profile__pic"}),Q=new E({popupSelector:".popup_type_edit-profilepic",handleFormSubmit:function(e){Q.renderLoadingSaving(!0),H.setProfilePic(e).then((function(e){K.setProfilePic(e)})).catch((function(e){console.log(e)})).finally((function(){Q.renderLoadingSaving(!1)}))}});Q.setEventListeners();var W=new E({popupSelector:".popup_type_new-card",handleFormSubmit:function(e){W.renderLoadingSaving(!0),H.addNewCard(e).then((function(e){z.addItem(M(e))})).catch((function(e){console.log(e)})).finally((function(){W.renderLoadingSaving(!1)}))}});W.setEventListeners();var X=new N(".popup_type_confirm-deletion");X.setEventListeners();var Y=new I(".popup_type_full-image");Y.setEventListeners();var Z=new F(u,n);Z.enableValidation();var $=new F(u,r);$.enableValidation();var ee=new F(u,o);ee.enableValidation(),e.addEventListener("click",(function(){G.setInputValues(K.getUserInfo()),Z.hideErrors(),G.open()})),t.addEventListener("click",(function(){$.hideErrors(),W.open()})),i.addEventListener("click",(function(){ee.hideErrors(),Q.open()}))})();