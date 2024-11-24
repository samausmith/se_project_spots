!function(){"use strict";const e={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button-submit",inactiveButtonClass:"modal__button-submit_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},t=(e,t,r)=>{const o=t.id+"-error";document.querySelector("#"+o).textContent="",t.classList.remove(r.inputErrorClass)},r=(e,t,r)=>{(e=>e.some((e=>!e.validity.valid)))(e)?o(t,r):(t.disabled=!1,t.classList.remove(r.inactiveButtonClass))},o=(e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)},n=n=>{const a=Array.from(n.querySelectorAll(e.inputSelector)),s=n.querySelector(e.submitButtonSelector);r(a,s,e),n.addEventListener("reset",(()=>{o(s,e)})),a.forEach((o=>{o.addEventListener("input",(function(){((e,r,o)=>{r.validity.valid?t(0,r,o):((e,t,r,o)=>{const n=t.id+"-error";document.querySelector("#"+n).textContent=r,t.classList.add(o.inputErrorClass)})(0,r,r.validationMessage,o)})(0,o,e),r(a,s,e)}))}))};function a(e,t,r,o){e.textContent=t?o:r}const s=new class{constructor(e){let{baseUrl:t,headers:r}=e;this._baseUrl=t,this._headers=r}getAppInfo(){return Promise.all([this.getInitialCards()],[this.getUserInfo()])}getInitialCards(){return fetch(`${this._baseUrl}/cards`,{headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}getUserInfo(){return fetch(`${this._baseUrl}/users/me`,{method:"GET",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editUserInfo(e){let{name:t,about:r}=e;return fetch(`${this._baseUrl}/users/me`,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:r})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editAvatarInfo(e){return fetch(`${this._baseUrl}/users/me/avatar`,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}addCardInfo(e){let{name:t,link:r}=e;return fetch(`${this._baseUrl}/cards`,{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:r})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}deleteCard(e){return fetch(`${this._baseUrl}/cards/${e}`,{method:"DELETE",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}changeLikeStatus(e,t){return fetch(`${this._baseUrl}/cards/${e}/likes`,{method:t?"DELETE":"PUT",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}}({baseUrl:"https://around-api.en.tripleten-services.com/v1",headers:{authorization:"7ce32752-7f51-4ee3-8daa-e08858792089","Content-Type":"application/json"}});s.getAppInfo().then(((e,t)=>{let[r]=e,[o]=t;r.forEach((e=>{const t=B(e);E.append(t)})),u=o.name,m=o.about})).catch(console.error);const l=document.querySelectorAll(".modal"),i=document.querySelector(".profile__edit-button"),c=document.querySelector("#profile-edit-modal"),d=c.querySelector(".modal__form"),u=(c.querySelector(".modal__button-close"),document.querySelector(".profile__name")),m=document.querySelector(".profile__description"),_=c.querySelector("#profile-name-input"),h=c.querySelector("#profile-description-input"),f=document.querySelector("#add-card-modal"),v=document.querySelector(".profile__new-post-button"),y=f.querySelector(".modal__form"),S=(f.querySelector(".modal__button-close"),f.querySelector(".modal__button-submit")),b=y.querySelector("#add-card-link-input"),p=y.querySelector("#add-card-caption-input"),q=document.querySelector("#card-template"),E=document.querySelector(".cards__list"),k=document.querySelector("#preview-modal"),L=k.querySelector(".modal__image"),g=k.querySelector(".modal__caption"),C=document.querySelector("#avatar-modal"),$=document.querySelector(".profile__avatar-button"),j=C.querySelector(".modal__form"),U=(C.querySelector(".modal__button-submit"),j.querySelector("#avatar-input")),I=document.querySelector("#delete-modal"),P=I.querySelector(".modal__form");let A,x;function D(e){e.classList.add("modal_open"),document.addEventListener("keydown",w)}function T(e){e.classList.remove("modal_open"),document.removeEventListener("keydown",w)}function w(e){if("Escape"===e.key){const e=document.querySelector(".modal_open");e&&T(e)}}function B(e){const t=q.content.querySelector(".card").cloneNode(!0),r=t.querySelector(".card__title"),o=t.querySelector(".card__image"),n=t.querySelector(".card__like-button"),a=t.querySelector(".card__delete-button");return r.textContent=e.name,o.src=e.link,o.alt=e.name,e.isLiked&&n.classList.add("card__like-button--active"),n.addEventListener("click",(t=>{const r=t.target.classList.contains("card__like-button_liked");s.changeLikeStatus(e._id,r).then((e=>{n.classList.toggle("card__like-button_liked")})).catch(console.error)})),a.addEventListener("click",(()=>{A=t,x=e._id,D(I)})),o.addEventListener("click",(()=>{D(k),L.src=e.link,L.alt=e.name,g.textContent=e.name})),t}$.addEventListener("click",(()=>{D(C)})),j.addEventListener("submit",(function(e){e.preventDefault();const t=e.submitter;a(t,!0,t.value,"Saving..."),s.editAvatarInfo(U.value).then((e=>{U.textContent=e.avatar,T(C)})).catch(console.error).finally((()=>{a(t,!1,t.value,"Saving...")}))})),document.querySelectorAll(".modal__button-close"),l.forEach((e=>{e.addEventListener("mousedown",(t=>{t.target.classList.contains("modal_open")&&T(e),t.target.classList.contains("modal__button-close")&&T(e)}))})),i.addEventListener("click",(()=>{_.value=u.textContent,h.value=m.textContent,((e,r,o)=>{r.forEach((e=>{t(0,e,o)}))})(0,[_,h],e),D(c)})),d.addEventListener("submit",(function(e){e.preventDefault();const t=e.submitter;a(t,!0,t.value,"Saving..."),s.editUserInfo({name:_.value,about:h.value}).then((e=>{u.textContent=e.name,m.textContent=e.about,T(c)})).catch(console.error).finally((()=>{a(t,!1,t.value,"Saving...")}))})),P.addEventListener("submit",(function(e){e.preventDefault();const t=e.submitter;a(t,!0,t.value,"Deleting..."),s.deleteCard(x).then((e=>{T(I),A.remove()})).catch(console.error).finally((()=>{a(t,!1,t.value,"Deleting...")}))})),v.addEventListener("click",(()=>{D(f)})),y.addEventListener("submit",(function(t){t.preventDefault();const r=t.submitter;a(r,!0,r.value,"Saving..."),s.addCardInfo({name:p.value,link:b.value}).then((t=>{const r=B(t);E.prepend(r),T(f),y.reset(),disableButton(S,e)})).catch(console.error).finally((()=>{a(r,!1,r.value,"Saving...")}))})),function(e){document.querySelectorAll(e.formSelector).forEach((e=>{n(e)}))}(e)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RzhCLFlBQVksQ0FBRVAsS0FBTXNDLEVBQWlCcUMsTUFBT2xFLEtBQU00QixFQUFjc0MsUUFDaEVwRixNQUFNb0UsSUFDTCxNQUFNekMsRUFBY0MsRUFBZXdDLEdBQ25DdkMsRUFBVTJELFFBQVE3RCxHQUNsQm9DLEVBQVdyQixHQUNYRSxFQUFZNkMsUUFDWnpILGNBQWM2RSxFQUFxQnRHLEVBQVMsSUFFN0MwRixNQUFNQyxRQUFRQyxPQUNka0QsU0FBUSxLQUNQeEcsRUFBY3FHLEdBQVksRUFBT0EsRUFBV0UsTUFBTyxZQUFZLEdBRXJFLElGck5PLFNBQTBCN0ksR0FDZFksU0FBU21CLGlCQUFpQi9CLEVBQVNDLGNBQzNDZ0MsU0FBU3pCLElBQ2hCb0IsRUFBa0JwQixFQUFzQixHQUU1QyxDRW9OQTJJLENBQWlCbkosRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvc2NyaXB0cy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvdXRpbHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvdXRpbHMvQXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19idXR0b24tc3VibWl0XCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX2J1dHRvbi1zdWJtaXRfZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbmNvbnN0IHNob3dJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGVycm9yTXNnLCBzZXR0aW5ncykgPT4ge1xuICBjb25zdCBlcnJvck1zZ0lkID0gaW5wdXRFbGVtZW50LmlkICsgXCItZXJyb3JcIjtcbiAgY29uc3QgZXJyb3JNc2dFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGVycm9yTXNnSWQpO1xuICBlcnJvck1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1zZztcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcbn07XG5cbmNvbnN0IGhpZGVJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIHNldHRpbmdzKSA9PiB7XG4gIGNvbnN0IGVycm9yTXNnSWQgPSBpbnB1dEVsZW1lbnQuaWQgKyBcIi1lcnJvclwiO1xuICBjb25zdCBlcnJvck1zZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgZXJyb3JNc2dJZCk7XG4gIGVycm9yTXNnRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XG59O1xuXG5jb25zdCBjaGVja0lucHV0VmFsaWRpdHkgPSAoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgc2V0dGluZ3MpID0+IHtcbiAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICBzaG93SW5wdXRFcnJvcihcbiAgICAgIGZvcm1FbGVtZW50LFxuICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlLFxuICAgICAgc2V0dGluZ3NcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIHNldHRpbmdzKTtcbiAgfVxufTtcblxuY29uc3QgaGFzSW52YWxpZElucHV0ID0gKGlucHV0TGlzdCkgPT4ge1xuICByZXR1cm4gaW5wdXRMaXN0LnNvbWUoKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuICFpbnB1dC52YWxpZGl0eS52YWxpZDtcbiAgfSk7XG59O1xuY29uc3QgdG9nZ2xlQnV0dG9uU3RhdGUgPSAoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBzZXR0aW5ncykgPT4ge1xuICBpZiAoaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcbiAgICBkaXNhYmxlQnV0dG9uKGJ1dHRvbkVsZW1lbnQsIHNldHRpbmdzKTtcbiAgfSBlbHNlIHtcbiAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICB9XG59O1xuXG5jb25zdCBkaXNhYmxlQnV0dG9uID0gKGJ1dHRvbkVsZW1lbnQsIHNldHRpbmdzKSA9PiB7XG4gIGJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXRWYWxpZGF0aW9uID0gKGZvcm1FbGVtZW50LCBpbnB1dExpc3QsIHNldHRpbmdzKSA9PiB7XG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dCwgc2V0dGluZ3MpO1xuICB9KTtcbn07XG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9IChmb3JtRWxlbWVudCkgPT4ge1xuICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxuICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3MuaW5wdXRTZWxlY3RvcilcbiAgKTtcbiAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3JcbiAgKTtcblxuICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIHNldHRpbmdzKTtcblxuICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xuICAgIGRpc2FibGVCdXR0b24oYnV0dG9uRWxlbWVudCwgc2V0dGluZ3MpO1xuICB9KTtcblxuICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgc2V0dGluZ3MpO1xuICAgICAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBzZXR0aW5ncyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVZhbGlkYXRpb24oc2V0dGluZ3MpIHtcbiAgY29uc3QgZm9ybUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmZvcm1TZWxlY3Rvcik7XG4gIGZvcm1MaXN0LmZvckVhY2goKGZvcm1FbGVtZW50KSA9PiB7XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQsIHNldHRpbmdzKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0QnV0dG9uVGV4dChidXR0b24sIGlzTG9hZGluZywgZGVmYXVsdFRleHQsIGxvYWRpbmdUZXh0KSB7XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBsb2FkaW5nVGV4dDtcbiAgfSBlbHNlIHtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBkZWZhdWx0VGV4dDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgZW5hYmxlVmFsaWRhdGlvbixcbiAgc2V0dGluZ3MsXG4gIHJlc2V0VmFsaWRhdGlvbixcbn0gZnJvbSBcIi4uL3NjcmlwdHMvdmFsaWRhdGlvbi5qc1wiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBBcGkgZnJvbSBcIi4uL3V0aWxzL0FwaS5qc1wiO1xuaW1wb3J0IHsgc2V0QnV0dG9uVGV4dCB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJzLmpzXCI7XG5cbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiVmFsIFRob3JlbnNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMS1waG90by1ieS1tb3JpdHotZmVsZG1hbm4tZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJlc3RhdXJhbnQgdGVycmFjZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy8yLXBob3RvLWJ5LWNlaWxpbmUtZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFuIG91dGRvb3IgY2FmZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy8zLXBob3RvLWJ5LXR1YmFudXItZG9nYW4tZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkEgdmVyeSBsb25nIGJyaWRnZSwgb3ZlciB0aGUgZm9yZXN0IGFuZCB0aHJvdWdoIHRoZSB0cmVlc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy80LXBob3RvLWJ5LW1hdXJpY2UtbGFzY2hldC1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVHVubmVsIHdpdGggbW9ybmluZyBsaWdodFwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy81LXBob3RvLWJ5LXZhbi1hbmgtbmd1eWVuLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNb3VudGFpbiBob3VzZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy82LXBob3RvLWJ5LW1vcml0ei1mZWxkbWFubi1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR29sZGVuIEdhdGUgYnJpZGdlXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzctcGhvdG8tYnktZ3JpZmZpbi13b29sZHJpZGdlLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuXTtcblxuY29uc3QgYXBpID0gbmV3IEFwaSh7XG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcm91bmQtYXBpLmVuLnRyaXBsZXRlbi1zZXJ2aWNlcy5jb20vdjFcIixcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246IFwiN2NlMzI3NTItN2Y1MS00ZWUzLThkYWEtZTA4ODU4NzkyMDg5XCIsXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuYXBpXG4gIC5nZXRBcHBJbmZvKClcbiAgLnRoZW4oKFtjYXJkc10sIFtwcm9maWxlSW5mb10pID0+IHtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KGNhcmQpO1xuICAgICAgY2FyZHNMaXN0LmFwcGVuZChjYXJkRWxlbWVudCk7XG4gICAgfSk7XG4gICAgcHJvZmlsZU5hbWUgPSBwcm9maWxlSW5mby5uYW1lO1xuICAgIHByb2ZpbGVEZXNjcmlwdGlvbiA9IHByb2ZpbGVJbmZvLmFib3V0O1xuICB9KVxuICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cbi8vIEdlbmVyYWwgdmFyaWFibGVcbmNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxcIik7XG5cbi8vIFByb2ZpbGUgdmFyaWFibGVzXG5jb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XG5jb25zdCBwcm9maWxlRWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWVkaXQtbW9kYWxcIik7XG5jb25zdCBwcm9maWxlRWRpdEZvcm0gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5jb25zdCBwcm9maWxlQ2xvc2VCdXR0b24gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLm1vZGFsX19idXR0b24tY2xvc2VcIlxuKTtcblxuLy8gUHJvZmlsZSBGb3JtIHZhcmlhYmxlc1xuY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIpO1xuY29uc3QgcHJvZmlsZU5hbWVJbnB1dCA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLW5hbWUtaW5wdXRcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb25JbnB1dCA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcbiAgXCIjcHJvZmlsZS1kZXNjcmlwdGlvbi1pbnB1dFwiXG4pO1xuXG4vLyBOZXcgcG9zdC9hZGQgY2FyZCB2YXJpYWxiZXNcbmNvbnN0IGFkZENhcmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbW9kYWxcIik7XG5jb25zdCBhZGRDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uZXctcG9zdC1idXR0b25cIik7XG5jb25zdCBhZGRDYXJkRm9ybSA9IGFkZENhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuY29uc3QgYWRkQ2FyZENsb3NlQnV0dG9uID0gYWRkQ2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2J1dHRvbi1jbG9zZVwiKTtcbmNvbnN0IGFkZENhcmRCdXR0b25TdWJtaXQgPSBhZGRDYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fYnV0dG9uLXN1Ym1pdFwiKTtcblxuLy8gTmV3IHBvc3QvYWRkIGNhcmQgZm9ybSB2YXJpYWJsZXNcbmNvbnN0IGNhcmRMaW5rSW5wdXQgPSBhZGRDYXJkRm9ybS5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLWxpbmstaW5wdXRcIik7XG5jb25zdCBjYXJkQ2FwdGlvbklucHV0ID0gYWRkQ2FyZEZvcm0ucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1jYXB0aW9uLWlucHV0XCIpO1xuXG4vLyBDYXJkIGxpc3QgdmFyaWFibGVzXG5jb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIik7XG5jb25zdCBjYXJkc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saXN0XCIpO1xuXG4vLyBQcmV2aWV3IG1vZGFsIEVsZW1lbnQgc2VsZWN0b3JcbmNvbnN0IHByZXZpZXdNb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctbW9kYWxcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxJbWFnZSA9IHByZXZpZXdNb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxDYXB0aW9uID1cbiAgcHJldmlld01vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jYXB0aW9uXCIpO1xuLy9jb25zdCBwcmV2aWV3TW9kYWxDbG9zZUJ1dHRvbiA9IHByZXZpZXdNb2RhbEVsZW1lbnQucXVlcnlTZWxlY3Rvcihcbi8vICBcIi5tb2RhbF9fYnV0dG9uLWNsb3NlXCJcbi8vKTtcblxuLy8gQXZhdGFyIGZvcm0gZWxlbWVudHNcbmNvbnN0IGF2YXRhck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdmF0YXItbW9kYWxcIik7XG5jb25zdCBhdmF0YXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhci1idXR0b25cIik7XG5jb25zdCBhdmF0YXJGb3JtID0gYXZhdGFyTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcbi8vY29uc3QgYXZhdGFyQ2xvc2VCdXR0b24gPSBhdmF0YXJNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19idXR0b24tY2xvc2VcIik7XG5jb25zdCBhdmF0YXJCdXR0b25TdWJtaXQgPSBhdmF0YXJNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19idXR0b24tc3VibWl0XCIpO1xuY29uc3QgYXZhdGFySW5wdXQgPSBhdmF0YXJGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjYXZhdGFyLWlucHV0XCIpO1xuXG4vLyBEZWxldGUgZm9ybSBlbGVtZW50cyBhbmQgY29uc3RzXG5jb25zdCBkZWxldGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlLW1vZGFsXCIpO1xuY29uc3QgZGVsZXRlRm9ybSA9IGRlbGV0ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5sZXQgc2VsZWN0ZWRDYXJkO1xubGV0IHNlbGVjdGVkQ2FyZElkO1xuXG4vLyBHZW5lcmFsIGZvcm0gZnVuY3Rpb25zXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5cIik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5cIik7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVzY2FwZShldnQpIHtcbiAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICBjb25zdCBhY3RpdmVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfb3BlblwiKTtcbiAgICBpZiAoYWN0aXZlTW9kYWwpIHtcbiAgICAgIGNsb3NlTW9kYWwoYWN0aXZlTW9kYWwpO1xuICAgIH1cbiAgfVxufVxuLy8gZWRpdCBhdmF0YXIgZnVuY3Rpb25zXG5mdW5jdGlvbiBoYW5kbGVBdmF0YXJTdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzYXZlQnV0dG9uID0gZXZ0LnN1Ym1pdHRlcjtcbiAgc2V0QnV0dG9uVGV4dChzYXZlQnV0dG9uLCB0cnVlLCBzYXZlQnV0dG9uLnZhbHVlLCBcIlNhdmluZy4uLlwiKTtcbiAgYXBpXG4gICAgLmVkaXRBdmF0YXJJbmZvKGF2YXRhcklucHV0LnZhbHVlKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBhdmF0YXJJbnB1dC50ZXh0Q29udGVudCA9IGRhdGEuYXZhdGFyO1xuICAgICAgY2xvc2VNb2RhbChhdmF0YXJNb2RhbCk7XG4gICAgfSlcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBzZXRCdXR0b25UZXh0KHNhdmVCdXR0b24sIGZhbHNlLCBzYXZlQnV0dG9uLnZhbHVlLCBcIlNhdmluZy4uLlwiKTtcbiAgICB9KTtcbn1cblxuYXZhdGFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG9wZW5Nb2RhbChhdmF0YXJNb2RhbCk7XG59KTtcbmF2YXRhckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVBdmF0YXJTdWJtaXQpO1xuXG4vLyBGaW5kIGFsbCBjbG9zZSBidXR0b25zXG5jb25zdCBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19idXR0b24tY2xvc2VcIik7XG5cbi8vIEhhbmRsZSBtb2RhbCBjbG9zaW5nIGFmdGVyIGNsaWNraW5nIG92ZXJsYXkgb3IgY2xvc2UgYnV0dG9uXG5tb2RhbHMuZm9yRWFjaCgobW9kYWwpID0+IHtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZ0KSA9PiB7XG4gICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfb3BlblwiKSkge1xuICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgfVxuICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19idXR0b24tY2xvc2VcIikpIHtcbiAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLy8gRWRpdCBwcm9maWxlIGZ1bmN0aW9uc1xuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUVkaXRGb3JtU3VibWl0KGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGV2dC5zdWJtaXR0ZXI7XG4gIHNldEJ1dHRvblRleHQoc2F2ZUJ1dHRvbiwgdHJ1ZSwgc2F2ZUJ1dHRvbi52YWx1ZSwgXCJTYXZpbmcuLi5cIik7XG4gIGFwaVxuICAgIC5lZGl0VXNlckluZm8oe1xuICAgICAgbmFtZTogcHJvZmlsZU5hbWVJbnB1dC52YWx1ZSxcbiAgICAgIGFib3V0OiBwcm9maWxlRGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBwcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICAgIHByb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XG4gICAgICBjbG9zZU1vZGFsKHByb2ZpbGVFZGl0TW9kYWwpO1xuICAgIH0pXG4gICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgc2V0QnV0dG9uVGV4dChzYXZlQnV0dG9uLCBmYWxzZSwgc2F2ZUJ1dHRvbi52YWx1ZSwgXCJTYXZpbmcuLi5cIik7XG4gICAgfSk7XG59XG5wcm9maWxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9maWxlTmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZU5hbWUudGV4dENvbnRlbnQ7XG4gIHByb2ZpbGVEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50O1xuICByZXNldFZhbGlkYXRpb24oXG4gICAgcHJvZmlsZUVkaXRGb3JtLFxuICAgIFtwcm9maWxlTmFtZUlucHV0LCBwcm9maWxlRGVzY3JpcHRpb25JbnB1dF0sXG4gICAgc2V0dGluZ3NcbiAgKTtcbiAgb3Blbk1vZGFsKHByb2ZpbGVFZGl0TW9kYWwpO1xufSk7XG5cbnByb2ZpbGVFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVByb2ZpbGVFZGl0Rm9ybVN1Ym1pdCk7XG5cbi8vIENhcmQgZnVuY3Rpb25zXG5mdW5jdGlvbiBnZXRDYXJkRWxlbWVudChkYXRhKSB7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZFRlbXBsYXRlLmNvbnRlbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXG4gICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICBjb25zdCBjYXJkVGl0bGVFbGVtZW50ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKTtcbiAgY29uc3QgY2FyZEltYWdlRWxlbWVudCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XG4gIGNvbnN0IGNhcmRMaWtlQnV0dG9uID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgY29uc3QgY2FyZERlbGV0ZUJ1dHRvbiA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKTtcblxuICBjYXJkVGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICBjYXJkSW1hZ2VFbGVtZW50LnNyYyA9IGRhdGEubGluaztcbiAgY2FyZEltYWdlRWxlbWVudC5hbHQgPSBkYXRhLm5hbWU7XG5cbiAgLy9tYWludGFpbnMgYWN0aXZlIHN0YXR1cyB0byBsaWtlIGFmdGVyIHJlZnJlc2hcbiAgaWYgKGRhdGEuaXNMaWtlZCkge1xuICAgIGNhcmRMaWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYXJkX19saWtlLWJ1dHRvbi0tYWN0aXZlXCIpO1xuICB9XG5cbiAgY2FyZExpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICBjb25zdCBpc0xpa2VkID0gZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjYXJkX19saWtlLWJ1dHRvbl9saWtlZFwiKTtcbiAgICBhcGlcbiAgICAgIC5jaGFuZ2VMaWtlU3RhdHVzKGRhdGEuX2lkLCBpc0xpa2VkKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY2FyZExpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2xpa2VkXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfSk7XG5cbiAgY2FyZERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vY2FyZEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgc2VsZWN0ZWRDYXJkID0gY2FyZEVsZW1lbnQ7XG4gICAgc2VsZWN0ZWRDYXJkSWQgPSBkYXRhLl9pZDtcbiAgICBvcGVuTW9kYWwoZGVsZXRlTW9kYWwpO1xuICB9KTtcblxuICBjYXJkSW1hZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKHByZXZpZXdNb2RhbEVsZW1lbnQpO1xuICAgIHByZXZpZXdNb2RhbEltYWdlLnNyYyA9IGRhdGEubGluaztcbiAgICBwcmV2aWV3TW9kYWxJbWFnZS5hbHQgPSBkYXRhLm5hbWU7XG4gICAgcHJldmlld01vZGFsQ2FwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xufVxuXG4vL2hhbmRsZSBkZWxldGUgZm9ybSByZXF1ZXN0IGxpc3RlbmVyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVTdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBldnQuc3VibWl0dGVyO1xuICBzZXRCdXR0b25UZXh0KGRlbGV0ZUJ1dHRvbiwgdHJ1ZSwgZGVsZXRlQnV0dG9uLnZhbHVlLCBcIkRlbGV0aW5nLi4uXCIpO1xuICBhcGlcbiAgICAuZGVsZXRlQ2FyZChzZWxlY3RlZENhcmRJZClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY2xvc2VNb2RhbChkZWxldGVNb2RhbCk7XG4gICAgICBzZWxlY3RlZENhcmQucmVtb3ZlKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBzZXRCdXR0b25UZXh0KGRlbGV0ZUJ1dHRvbiwgZmFsc2UsIGRlbGV0ZUJ1dHRvbi52YWx1ZSwgXCJEZWxldGluZy4uLlwiKTtcbiAgICB9KTtcbn1cblxuZGVsZXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZURlbGV0ZVN1Ym1pdCk7XG4vL2FkZCBjYW5jZWwgZXZlbnQgbGlzdGVuZXJcbi8vIE5ldy9hZGQgY2FyZCBmdW5jdGlvbnNcbmFkZENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3Blbk1vZGFsKGFkZENhcmRNb2RhbCk7XG59KTtcblxuZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZEZvcm1TdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL2NvbnN0IG5ld0NhcmQgPSB7IG5hbWU6IGNhcmRDYXB0aW9uSW5wdXQudmFsdWUsIGxpbms6IGNhcmRMaW5rSW5wdXQudmFsdWUgfTtcbiAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGV2dC5zdWJtaXR0ZXI7XG4gIHNldEJ1dHRvblRleHQoc2F2ZUJ1dHRvbiwgdHJ1ZSwgc2F2ZUJ1dHRvbi52YWx1ZSwgXCJTYXZpbmcuLi5cIik7XG4gIGFwaVxuICAgIC5hZGRDYXJkSW5mbyh7IG5hbWU6IGNhcmRDYXB0aW9uSW5wdXQudmFsdWUsIGxpbms6IGNhcmRMaW5rSW5wdXQudmFsdWUgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChkYXRhKTtcbiAgICAgIGNhcmRzTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcbiAgICAgIGNsb3NlTW9kYWwoYWRkQ2FyZE1vZGFsKTtcbiAgICAgIGFkZENhcmRGb3JtLnJlc2V0KCk7XG4gICAgICBkaXNhYmxlQnV0dG9uKGFkZENhcmRCdXR0b25TdWJtaXQsIHNldHRpbmdzKTtcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIHNldEJ1dHRvblRleHQoc2F2ZUJ1dHRvbiwgZmFsc2UsIHNhdmVCdXR0b24udmFsdWUsIFwiU2F2aW5nLi4uXCIpO1xuICAgIH0pO1xufVxuXG5hZGRDYXJkRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUFkZENhcmRGb3JtU3VibWl0KTtcblxuZW5hYmxlVmFsaWRhdGlvbihzZXR0aW5ncyk7XG4iLCJjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3Rvcih7IGJhc2VVcmwsIGhlYWRlcnMgfSkge1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBiYXNlVXJsO1xuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG5cbiAgZ2V0QXBwSW5mbygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3RoaXMuZ2V0SW5pdGlhbENhcmRzKCldLCBbdGhpcy5nZXRVc2VySW5mbygpXSk7XG4gIH1cblxuICBnZXRJbml0aWFsQ2FyZHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS91c2Vycy9tZWAsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfSk7XG4gIH1cblxuICBlZGl0VXNlckluZm8oeyBuYW1lLCBhYm91dCB9KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgLy8gU2VuZCB0aGUgZGF0YSBpbiB0aGUgYm9keSBhcyBhIEpTT04gc3RyaW5nLlxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBhYm91dCxcbiAgICAgIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgIH0pO1xuICB9XG4gIGVkaXRBdmF0YXJJbmZvKGF2YXRhcikge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICAvLyBTZW5kIHRoZSBkYXRhIGluIHRoZSBib2R5IGFzIGEgSlNPTiBzdHJpbmcuXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGF2YXRhcixcbiAgICAgIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2FyZEluZm8oeyBuYW1lLCBsaW5rIH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIC8vIFNlbmQgdGhlIGRhdGEgaW4gdGhlIGJvZHkgYXMgYSBKU09OIHN0cmluZy5cbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGluayxcbiAgICAgIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgIH0pO1xuICB9XG4gIGRlbGV0ZUNhcmQoY2FyZElkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VMaWtlU3RhdHVzKGNhcmRJZCwgaXNMaWtlZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCB7XG4gICAgICBtZXRob2Q6IGlzTGlrZWQgPyBcIkRFTEVURVwiIDogXCJQVVRcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBpO1xuIl0sIm5hbWVzIjpbInNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJoaWRlSW5wdXRFcnJvciIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNc2dJZCIsImlkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2dnbGVCdXR0b25TdGF0ZSIsImlucHV0TGlzdCIsImJ1dHRvbkVsZW1lbnQiLCJzb21lIiwiaW5wdXQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiaGFzSW52YWxpZElucHV0IiwiZGlzYWJsZUJ1dHRvbiIsImRpc2FibGVkIiwiYWRkIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvckVhY2giLCJjaGVja0lucHV0VmFsaWRpdHkiLCJzaG93SW5wdXRFcnJvciIsImVycm9yTXNnIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJzZXRCdXR0b25UZXh0IiwiYnV0dG9uIiwiaXNMb2FkaW5nIiwiZGVmYXVsdFRleHQiLCJsb2FkaW5nVGV4dCIsImFwaSIsImNvbnN0cnVjdG9yIiwiX3JlZiIsImJhc2VVcmwiLCJoZWFkZXJzIiwidGhpcyIsIl9iYXNlVXJsIiwiX2hlYWRlcnMiLCJnZXRBcHBJbmZvIiwiUHJvbWlzZSIsImFsbCIsImdldEluaXRpYWxDYXJkcyIsImdldFVzZXJJbmZvIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwicmVqZWN0Iiwic3RhdHVzIiwibWV0aG9kIiwiZWRpdFVzZXJJbmZvIiwiX3JlZjIiLCJuYW1lIiwiYWJvdXQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVkaXRBdmF0YXJJbmZvIiwiYXZhdGFyIiwiYWRkQ2FyZEluZm8iLCJfcmVmMyIsImxpbmsiLCJkZWxldGVDYXJkIiwiY2FyZElkIiwiY2hhbmdlTGlrZVN0YXR1cyIsImlzTGlrZWQiLCJhdXRob3JpemF0aW9uIiwiY2FyZHMiLCJwcm9maWxlSW5mbyIsImNhcmQiLCJjYXJkRWxlbWVudCIsImdldENhcmRFbGVtZW50IiwiY2FyZHNMaXN0IiwiYXBwZW5kIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsIm1vZGFscyIsInByb2ZpbGVFZGl0QnV0dG9uIiwicHJvZmlsZUVkaXRNb2RhbCIsInByb2ZpbGVFZGl0Rm9ybSIsInByb2ZpbGVOYW1lSW5wdXQiLCJwcm9maWxlRGVzY3JpcHRpb25JbnB1dCIsImFkZENhcmRNb2RhbCIsImFkZENhcmRCdXR0b24iLCJhZGRDYXJkRm9ybSIsImFkZENhcmRCdXR0b25TdWJtaXQiLCJjYXJkTGlua0lucHV0IiwiY2FyZENhcHRpb25JbnB1dCIsImNhcmRUZW1wbGF0ZSIsInByZXZpZXdNb2RhbEVsZW1lbnQiLCJwcmV2aWV3TW9kYWxJbWFnZSIsInByZXZpZXdNb2RhbENhcHRpb24iLCJhdmF0YXJNb2RhbCIsImF2YXRhckJ1dHRvbiIsImF2YXRhckZvcm0iLCJhdmF0YXJJbnB1dCIsImRlbGV0ZU1vZGFsIiwiZGVsZXRlRm9ybSIsInNlbGVjdGVkQ2FyZCIsInNlbGVjdGVkQ2FyZElkIiwib3Blbk1vZGFsIiwibW9kYWwiLCJoYW5kbGVFc2NhcGUiLCJjbG9zZU1vZGFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dCIsImtleSIsImFjdGl2ZU1vZGFsIiwiZGF0YSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJjYXJkVGl0bGVFbGVtZW50IiwiY2FyZEltYWdlRWxlbWVudCIsImNhcmRMaWtlQnV0dG9uIiwiY2FyZERlbGV0ZUJ1dHRvbiIsInNyYyIsImFsdCIsInRhcmdldCIsImNvbnRhaW5zIiwiX2lkIiwidG9nZ2xlIiwicHJldmVudERlZmF1bHQiLCJzYXZlQnV0dG9uIiwic3VibWl0dGVyIiwidmFsdWUiLCJmaW5hbGx5IiwicmVzZXRWYWxpZGF0aW9uIiwiZGVsZXRlQnV0dG9uIiwicHJlcGVuZCIsInJlc2V0IiwiZW5hYmxlVmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=