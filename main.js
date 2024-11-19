!function(){"use strict";const e={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button-submit",inactiveButtonClass:"modal__button-submit_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},t=(e,t,r)=>{const o=t.id+"-error";document.querySelector("#"+o).textContent="",t.classList.remove(r.inputErrorClass)},r=(e,t,r)=>{(e=>e.some((e=>!e.validity.valid)))(e)?o(t,r):(t.disabled=!1,t.classList.remove(r.inactiveButtonClass))},o=(e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)},n=n=>{const a=Array.from(n.querySelectorAll(e.inputSelector)),s=n.querySelector(e.submitButtonSelector);r(a,s,e),n.addEventListener("reset",(()=>{o(s,e)})),a.forEach((o=>{o.addEventListener("input",(function(){((e,r,o)=>{r.validity.valid?t(0,r,o):((e,t,r,o)=>{const n=t.id+"-error";document.querySelector("#"+n).textContent=r,t.classList.add(o.inputErrorClass)})(0,r,r.validationMessage,o)})(0,o,e),r(a,s,e)}))}))},a=new class{constructor(e){let{baseUrl:t,headers:r}=e;this._baseUrl=t,this._headers=r}getAppInfo(){return Promise.all([this.getInitialCards()],[this.getUserInfo()])}getInitialCards(){return fetch(`${this._baseUrl}/cards`,{headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}getUserInfo(){return fetch(`${this._baseUrl}/users/me`,{method:"GET",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editUserInfo(e){let{name:t,about:r}=e;return fetch(`${this._baseUrl}/users/me`,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:r})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editAvatarInfo(e){return fetch(`${this._baseUrl}/users/me/avatar`,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}addCardInfo(e){let{name:t,link:r}=e;return fetch(`${this._baseUrl}/cards`,{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:r})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}deleteCard(e){return fetch(`${this._baseUrl}/cards/${e}`,{method:"DELETE",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}changeLikeStatus(e,t){return fetch(`${this._baseUrl}/cards/${e}/likes`,{method:t?"DELETE":"PUT",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}}({baseUrl:"https://around-api.en.tripleten-services.com/v1",headers:{authorization:"7ce32752-7f51-4ee3-8daa-e08858792089","Content-Type":"application/json"}});a.getAppInfo().then((e=>{let[t]=e;t.forEach((e=>{const t=B(e);q.append(t)}))})).catch(console.error);const s=document.querySelectorAll(".modal"),c=document.querySelector(".profile__edit-button"),l=document.querySelector("#profile-edit-modal"),i=l.querySelector(".modal__form"),d=(l.querySelector(".modal__button-close"),document.querySelector(".profile__name")),u=document.querySelector(".profile__description"),m=l.querySelector("#profile-name-input"),_=l.querySelector("#profile-description-input"),h=document.querySelector("#add-card-modal"),f=document.querySelector(".profile__new-post-button"),y=h.querySelector(".modal__form"),p=(h.querySelector(".modal__button-close"),h.querySelector(".modal__button-submit")),v=y.querySelector("#add-card-link-input"),S=y.querySelector("#add-card-caption-input"),b=document.querySelector("#card-template"),q=document.querySelector(".cards__list"),E=document.querySelector("#preview-modal"),k=E.querySelector(".modal__image"),L=E.querySelector(".modal__caption"),C=document.querySelector("#avatar-modal"),g=document.querySelector(".profile__avatar-button"),$=C.querySelector(".modal__form"),j=(C.querySelector(".modal__button-submit"),$.querySelector("#avatar-input")),U=document.querySelector("#delete-modal"),I=U.querySelector(".modal__form");let P,A;function x(e){e.classList.add("modal_open"),document.addEventListener("keydown",w)}function T(e){e.classList.remove("modal_open"),document.removeEventListener("keydown",w)}function w(e){if("Escape"===e.key){const e=document.querySelector(".modal_open");e&&T(e)}}function B(e){const t=b.content.querySelector(".card").cloneNode(!0),r=t.querySelector(".card__title"),o=t.querySelector(".card__image"),n=t.querySelector(".card__like-button"),s=t.querySelector(".card__delete-button");return r.textContent=e.name,o.src=e.link,o.alt=e.name,e.isLiked&&n.classList.add("card__like-button--active"),n.addEventListener("click",(t=>{const r=t.target.classList.contains("card__like-button_liked");a.changeLikeStatus(e._id,r).then((e=>{n.classList.toggle("card__like-button_liked")})).catch(console.error)})),s.addEventListener("click",(()=>{P=t,A=e._id,x(U)})),o.addEventListener("click",(()=>{x(E),k.src=e.link,k.alt=e.name,L.textContent=e.name})),t}g.addEventListener("click",(()=>{x(C)})),$.addEventListener("submit",(function(e){e.preventDefault(),a.editAvatarInfo(j.value).then((e=>{j.textContent=e.avatar,T(C)})).catch(console.error)})),document.querySelectorAll(".modal__button-close"),s.forEach((e=>{e.addEventListener("mousedown",(t=>{t.target.classList.contains("modal_open")&&T(e),t.target.classList.contains("modal__button-close")&&T(e)}))})),c.addEventListener("click",(()=>{m.value=d.textContent,_.value=u.textContent,((e,r,o)=>{r.forEach((e=>{t(0,e,o)}))})(0,[m,_],e),x(l)})),i.addEventListener("submit",(function(e){e.preventDefault(),a.editUserInfo({name:m.value,about:_.value}).then((e=>{d.textContent=e.name,u.textContent=e.about,T(l)})).catch(console.error)})),I.addEventListener("submit",(function(e){e.preventDefault(),a.deleteCard(A).then((e=>{T(U),P.remove()})).catch(console.error)})),f.addEventListener("click",(()=>{x(h)})),y.addEventListener("submit",(function(t){t.preventDefault(),a.addCardInfo({name:S.value,link:v.value}).then((t=>{const r=B(t);q.prepend(r),T(h),y.reset(),disableButton(p,e)})).catch(console.error)})),function(e){document.querySelectorAll(e.formSelector).forEach((e=>{n(e)}))}(e)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxFQUFLMUQsS0FDL0I2QixFQUFtQjVFLFlBQWN5RyxFQUFLekQsTUFDdENvRCxFQUFXM0IsRUFBaUIsSUFFN0JMLE1BQU1DLFFBQVFDLE1BQ25CLElBeUVBd0IsRUFBVzVFLGlCQUFpQixVQVg1QixTQUE0Qm9GLEdBQzFCQSxFQUFJZ0IsaUJBQ0o5RixFQUNHaUMsV0FBV3VDLEdBQ1gxRCxNQUFNbUUsSUFDTEwsRUFBV1AsR0FDWEUsRUFBYTdGLFFBQVEsSUFFdEJrRSxNQUFNQyxRQUFRQyxNQUNuQixJQUtBVSxFQUFjOUQsaUJBQWlCLFNBQVMsS0FDdEMrRSxFQUFVbEIsRUFBYSxJQWtCekJFLEVBQVkvRCxpQkFBaUIsVUFmN0IsU0FBaUNvRixHQUMvQkEsRUFBSWdCLGlCQUVKOUYsRUFDRzhCLFlBQVksQ0FBRVAsS0FBTXFDLEVBQWlCbUMsTUFBTy9ELEtBQU0yQixFQUFjb0MsUUFDaEVqRixNQUFNbUUsSUFDTCxNQUFNekMsRUFBY0MsRUFBZXdDLEdBQ25DdkMsRUFBVXVELFFBQVF6RCxHQUNsQm9DLEVBQVdyQixHQUNYRSxFQUFZeUMsUUFDWi9HLGNBQWN1RSxFQUFxQmhHLEVBQVMsSUFFN0NrRixNQUFNQyxRQUFRQyxNQUNuQixJRDlMTyxTQUEwQnBGLEdBQ2RZLFNBQVNtQixpQkFBaUIvQixFQUFTQyxjQUMzQ2dDLFNBQVN6QixJQUNoQm9CLEVBQWtCcEIsRUFBc0IsR0FFNUMsQ0M2TEFpSSxDQUFpQnpJLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLy4vc3JjL3NjcmlwdHMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvdXRpbHMvQXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19idXR0b24tc3VibWl0XCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX2J1dHRvbi1zdWJtaXRfZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbmNvbnN0IHNob3dJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGVycm9yTXNnLCBzZXR0aW5ncykgPT4ge1xuICBjb25zdCBlcnJvck1zZ0lkID0gaW5wdXRFbGVtZW50LmlkICsgXCItZXJyb3JcIjtcbiAgY29uc3QgZXJyb3JNc2dFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGVycm9yTXNnSWQpO1xuICBlcnJvck1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1zZztcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcbn07XG5cbmNvbnN0IGhpZGVJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIHNldHRpbmdzKSA9PiB7XG4gIGNvbnN0IGVycm9yTXNnSWQgPSBpbnB1dEVsZW1lbnQuaWQgKyBcIi1lcnJvclwiO1xuICBjb25zdCBlcnJvck1zZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgZXJyb3JNc2dJZCk7XG4gIGVycm9yTXNnRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XG59O1xuXG5jb25zdCBjaGVja0lucHV0VmFsaWRpdHkgPSAoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgc2V0dGluZ3MpID0+IHtcbiAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICBzaG93SW5wdXRFcnJvcihcbiAgICAgIGZvcm1FbGVtZW50LFxuICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlLFxuICAgICAgc2V0dGluZ3NcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIHNldHRpbmdzKTtcbiAgfVxufTtcblxuY29uc3QgaGFzSW52YWxpZElucHV0ID0gKGlucHV0TGlzdCkgPT4ge1xuICByZXR1cm4gaW5wdXRMaXN0LnNvbWUoKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuICFpbnB1dC52YWxpZGl0eS52YWxpZDtcbiAgfSk7XG59O1xuY29uc3QgdG9nZ2xlQnV0dG9uU3RhdGUgPSAoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBzZXR0aW5ncykgPT4ge1xuICBpZiAoaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcbiAgICBkaXNhYmxlQnV0dG9uKGJ1dHRvbkVsZW1lbnQsIHNldHRpbmdzKTtcbiAgfSBlbHNlIHtcbiAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICB9XG59O1xuXG5jb25zdCBkaXNhYmxlQnV0dG9uID0gKGJ1dHRvbkVsZW1lbnQsIHNldHRpbmdzKSA9PiB7XG4gIGJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXRWYWxpZGF0aW9uID0gKGZvcm1FbGVtZW50LCBpbnB1dExpc3QsIHNldHRpbmdzKSA9PiB7XG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dCwgc2V0dGluZ3MpO1xuICB9KTtcbn07XG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9IChmb3JtRWxlbWVudCkgPT4ge1xuICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxuICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3MuaW5wdXRTZWxlY3RvcilcbiAgKTtcbiAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3JcbiAgKTtcblxuICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIHNldHRpbmdzKTtcblxuICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xuICAgIGRpc2FibGVCdXR0b24oYnV0dG9uRWxlbWVudCwgc2V0dGluZ3MpO1xuICB9KTtcblxuICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgc2V0dGluZ3MpO1xuICAgICAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBzZXR0aW5ncyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVZhbGlkYXRpb24oc2V0dGluZ3MpIHtcbiAgY29uc3QgZm9ybUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmZvcm1TZWxlY3Rvcik7XG4gIGZvcm1MaXN0LmZvckVhY2goKGZvcm1FbGVtZW50KSA9PiB7XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQsIHNldHRpbmdzKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge1xuICBlbmFibGVWYWxpZGF0aW9uLFxuICBzZXR0aW5ncyxcbiAgcmVzZXRWYWxpZGF0aW9uLFxufSBmcm9tIFwiLi4vc2NyaXB0cy92YWxpZGF0aW9uLmpzXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vdXRpbHMvQXBpLmpzXCI7XG5cbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiVmFsIFRob3JlbnNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMS1waG90by1ieS1tb3JpdHotZmVsZG1hbm4tZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJlc3RhdXJhbnQgdGVycmFjZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy8yLXBob3RvLWJ5LWNlaWxpbmUtZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFuIG91dGRvb3IgY2FmZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy8zLXBob3RvLWJ5LXR1YmFudXItZG9nYW4tZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkEgdmVyeSBsb25nIGJyaWRnZSwgb3ZlciB0aGUgZm9yZXN0IGFuZCB0aHJvdWdoIHRoZSB0cmVlc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy80LXBob3RvLWJ5LW1hdXJpY2UtbGFzY2hldC1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVHVubmVsIHdpdGggbW9ybmluZyBsaWdodFwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy81LXBob3RvLWJ5LXZhbi1hbmgtbmd1eWVuLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNb3VudGFpbiBob3VzZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy82LXBob3RvLWJ5LW1vcml0ei1mZWxkbWFubi1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR29sZGVuIEdhdGUgYnJpZGdlXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzctcGhvdG8tYnktZ3JpZmZpbi13b29sZHJpZGdlLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuXTtcblxuY29uc3QgYXBpID0gbmV3IEFwaSh7XG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcm91bmQtYXBpLmVuLnRyaXBsZXRlbi1zZXJ2aWNlcy5jb20vdjFcIixcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246IFwiN2NlMzI3NTItN2Y1MS00ZWUzLThkYWEtZTA4ODU4NzkyMDg5XCIsXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuYXBpXG4gIC5nZXRBcHBJbmZvKClcbiAgLnRoZW4oKFtjYXJkc10pID0+IHtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KGNhcmQpO1xuICAgICAgY2FyZHNMaXN0LmFwcGVuZChjYXJkRWxlbWVudCk7XG4gICAgfSk7XG4gIH0pXG4gIC5jYXRjaChjb25zb2xlLmVycm9yKTtcblxuLy8gR2VuZXJhbCB2YXJpYWJsZVxuY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKTtcblxuLy8gUHJvZmlsZSB2YXJpYWJsZXNcbmNvbnN0IHByb2ZpbGVFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcbmNvbnN0IHByb2ZpbGVFZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtZWRpdC1tb2RhbFwiKTtcbmNvbnN0IHByb2ZpbGVFZGl0Rm9ybSA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcbmNvbnN0IHByb2ZpbGVDbG9zZUJ1dHRvbiA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcbiAgXCIubW9kYWxfX2J1dHRvbi1jbG9zZVwiXG4pO1xuXG4vLyBQcm9maWxlIEZvcm0gdmFyaWFibGVzXG5jb25zdCBwcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKTtcbmNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIik7XG5jb25zdCBwcm9maWxlTmFtZUlucHV0ID0gcHJvZmlsZUVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtbmFtZS1pbnB1dFwiKTtcbmNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbklucHV0ID0gcHJvZmlsZUVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICBcIiNwcm9maWxlLWRlc2NyaXB0aW9uLWlucHV0XCJcbik7XG5cbi8vIE5ldyBwb3N0L2FkZCBjYXJkIHZhcmlhbGJlc1xuY29uc3QgYWRkQ2FyZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1tb2RhbFwiKTtcbmNvbnN0IGFkZENhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25ldy1wb3N0LWJ1dHRvblwiKTtcbmNvbnN0IGFkZENhcmRGb3JtID0gYWRkQ2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5jb25zdCBhZGRDYXJkQ2xvc2VCdXR0b24gPSBhZGRDYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fYnV0dG9uLWNsb3NlXCIpO1xuY29uc3QgYWRkQ2FyZEJ1dHRvblN1Ym1pdCA9IGFkZENhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19idXR0b24tc3VibWl0XCIpO1xuXG4vLyBOZXcgcG9zdC9hZGQgY2FyZCBmb3JtIHZhcmlhYmxlc1xuY29uc3QgY2FyZExpbmtJbnB1dCA9IGFkZENhcmRGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbGluay1pbnB1dFwiKTtcbmNvbnN0IGNhcmRDYXB0aW9uSW5wdXQgPSBhZGRDYXJkRm9ybS5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLWNhcHRpb24taW5wdXRcIik7XG5cbi8vIENhcmQgbGlzdCB2YXJpYWJsZXNcbmNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10ZW1wbGF0ZVwiKTtcbmNvbnN0IGNhcmRzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpc3RcIik7XG5cbi8vIFByZXZpZXcgbW9kYWwgRWxlbWVudCBzZWxlY3RvclxuY29uc3QgcHJldmlld01vZGFsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldmlldy1tb2RhbFwiKTtcbmNvbnN0IHByZXZpZXdNb2RhbEltYWdlID0gcHJldmlld01vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbWFnZVwiKTtcbmNvbnN0IHByZXZpZXdNb2RhbENhcHRpb24gPVxuICBwcmV2aWV3TW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NhcHRpb25cIik7XG4vL2NvbnN0IHByZXZpZXdNb2RhbENsb3NlQnV0dG9uID0gcHJldmlld01vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuLy8gIFwiLm1vZGFsX19idXR0b24tY2xvc2VcIlxuLy8pO1xuXG4vLyBBdmF0YXIgZm9ybSBlbGVtZW50c1xuY29uc3QgYXZhdGFyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F2YXRhci1tb2RhbFwiKTtcbmNvbnN0IGF2YXRhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYXZhdGFyLWJ1dHRvblwiKTtcbmNvbnN0IGF2YXRhckZvcm0gPSBhdmF0YXJNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuLy9jb25zdCBhdmF0YXJDbG9zZUJ1dHRvbiA9IGF2YXRhck1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2J1dHRvbi1jbG9zZVwiKTtcbmNvbnN0IGF2YXRhckJ1dHRvblN1Ym1pdCA9IGF2YXRhck1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2J1dHRvbi1zdWJtaXRcIik7XG5jb25zdCBhdmF0YXJJbnB1dCA9IGF2YXRhckZvcm0ucXVlcnlTZWxlY3RvcihcIiNhdmF0YXItaW5wdXRcIik7XG5cbi8vIERlbGV0ZSBmb3JtIGVsZW1lbnRzIGFuZCBjb25zdHNcbmNvbnN0IGRlbGV0ZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGUtbW9kYWxcIik7XG5jb25zdCBkZWxldGVGb3JtID0gZGVsZXRlTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcbmxldCBzZWxlY3RlZENhcmQ7XG5sZXQgc2VsZWN0ZWRDYXJkSWQ7XG5cbi8vIEdlbmVyYWwgZm9ybSBmdW5jdGlvbnNcbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlblwiKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjYXBlKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlblwiKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjYXBlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXNjYXBlKGV2dCkge1xuICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgIGNvbnN0IGFjdGl2ZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuXCIpO1xuICAgIGlmIChhY3RpdmVNb2RhbCkge1xuICAgICAgY2xvc2VNb2RhbChhY3RpdmVNb2RhbCk7XG4gICAgfVxuICB9XG59XG4vLyBlZGl0IGF2YXRhciBmdW5jdGlvbnNcbmZ1bmN0aW9uIGhhbmRsZUF2YXRhclN1Ym1pdChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGFwaVxuICAgIC5lZGl0QXZhdGFySW5mbyhhdmF0YXJJbnB1dC52YWx1ZSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgYXZhdGFySW5wdXQudGV4dENvbnRlbnQgPSBkYXRhLmF2YXRhcjtcbiAgICAgIGNsb3NlTW9kYWwoYXZhdGFyTW9kYWwpO1xuICAgIH0pXG4gICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xufVxuXG5hdmF0YXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3Blbk1vZGFsKGF2YXRhck1vZGFsKTtcbn0pO1xuYXZhdGFyRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUF2YXRhclN1Ym1pdCk7XG5cbi8vIEZpbmQgYWxsIGNsb3NlIGJ1dHRvbnNcbmNvbnN0IGNsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2J1dHRvbi1jbG9zZVwiKTtcblxuLy8gSGFuZGxlIG1vZGFsIGNsb3NpbmcgYWZ0ZXIgY2xpY2tpbmcgb3ZlcmxheSBvciBjbG9zZSBidXR0b25cbm1vZGFscy5mb3JFYWNoKChtb2RhbCkgPT4ge1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldnQpID0+IHtcbiAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9vcGVuXCIpKSB7XG4gICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICB9XG4gICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX2J1dHRvbi1jbG9zZVwiKSkge1xuICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vLyBFZGl0IHByb2ZpbGUgZnVuY3Rpb25zXG5mdW5jdGlvbiBoYW5kbGVQcm9maWxlRWRpdEZvcm1TdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBhcGlcbiAgICAuZWRpdFVzZXJJbmZvKHtcbiAgICAgIG5hbWU6IHByb2ZpbGVOYW1lSW5wdXQudmFsdWUsXG4gICAgICBhYm91dDogcHJvZmlsZURlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgICBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLmFib3V0O1xuICAgICAgY2xvc2VNb2RhbChwcm9maWxlRWRpdE1vZGFsKTtcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbn1cbnByb2ZpbGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHByb2ZpbGVOYW1lSW5wdXQudmFsdWUgPSBwcm9maWxlTmFtZS50ZXh0Q29udGVudDtcbiAgcHJvZmlsZURlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gIHJlc2V0VmFsaWRhdGlvbihcbiAgICBwcm9maWxlRWRpdEZvcm0sXG4gICAgW3Byb2ZpbGVOYW1lSW5wdXQsIHByb2ZpbGVEZXNjcmlwdGlvbklucHV0XSxcbiAgICBzZXR0aW5nc1xuICApO1xuICBvcGVuTW9kYWwocHJvZmlsZUVkaXRNb2RhbCk7XG59KTtcblxucHJvZmlsZUVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvZmlsZUVkaXRGb3JtU3VibWl0KTtcblxuLy8gQ2FyZCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGdldENhcmRFbGVtZW50KGRhdGEpIHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkVGVtcGxhdGUuY29udGVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gIGNvbnN0IGNhcmRUaXRsZUVsZW1lbnQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xuICBjb25zdCBjYXJkSW1hZ2VFbGVtZW50ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKTtcbiAgY29uc3QgY2FyZExpa2VCdXR0b24gPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpO1xuICBjb25zdCBjYXJkRGVsZXRlQnV0dG9uID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZWxldGUtYnV0dG9uXCIpO1xuXG4gIGNhcmRUaXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gIGNhcmRJbWFnZUVsZW1lbnQuc3JjID0gZGF0YS5saW5rO1xuICBjYXJkSW1hZ2VFbGVtZW50LmFsdCA9IGRhdGEubmFtZTtcblxuICAvL21haW50YWlucyBhY3RpdmUgc3RhdHVzIHRvIGxpa2UgYWZ0ZXIgcmVmcmVzaFxuICBpZiAoZGF0YS5pc0xpa2VkKSB7XG4gICAgY2FyZExpa2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhcmRfX2xpa2UtYnV0dG9uLS1hY3RpdmVcIik7XG4gIH1cblxuICBjYXJkTGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgIGNvbnN0IGlzTGlrZWQgPSBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNhcmRfX2xpa2UtYnV0dG9uX2xpa2VkXCIpO1xuICAgIGFwaVxuICAgICAgLmNoYW5nZUxpa2VTdGF0dXMoZGF0YS5faWQsIGlzTGlrZWQpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjYXJkTGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fbGlrZWRcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9KTtcblxuICBjYXJkRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy9jYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgICBzZWxlY3RlZENhcmQgPSBjYXJkRWxlbWVudDtcbiAgICBzZWxlY3RlZENhcmRJZCA9IGRhdGEuX2lkO1xuICAgIG9wZW5Nb2RhbChkZWxldGVNb2RhbCk7XG4gIH0pO1xuXG4gIGNhcmRJbWFnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuTW9kYWwocHJldmlld01vZGFsRWxlbWVudCk7XG4gICAgcHJldmlld01vZGFsSW1hZ2Uuc3JjID0gZGF0YS5saW5rO1xuICAgIHByZXZpZXdNb2RhbEltYWdlLmFsdCA9IGRhdGEubmFtZTtcbiAgICBwcmV2aWV3TW9kYWxDYXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICB9KTtcblxuICByZXR1cm4gY2FyZEVsZW1lbnQ7XG59XG5cbi8vaGFuZGxlIGRlbGV0ZSBmb3JtIHJlcXVlc3QgbGlzdGVuZXJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZVN1Ym1pdChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGFwaVxuICAgIC5kZWxldGVDYXJkKHNlbGVjdGVkQ2FyZElkKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjbG9zZU1vZGFsKGRlbGV0ZU1vZGFsKTtcbiAgICAgIHNlbGVjdGVkQ2FyZC5yZW1vdmUoKTtcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbn1cblxuZGVsZXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZURlbGV0ZVN1Ym1pdCk7XG4vL2FkZCBjYW5jZWwgZXZlbnQgbGlzdGVuZXJcbi8vIE5ldy9hZGQgY2FyZCBmdW5jdGlvbnNcbmFkZENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3Blbk1vZGFsKGFkZENhcmRNb2RhbCk7XG59KTtcblxuZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZEZvcm1TdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL2NvbnN0IG5ld0NhcmQgPSB7IG5hbWU6IGNhcmRDYXB0aW9uSW5wdXQudmFsdWUsIGxpbms6IGNhcmRMaW5rSW5wdXQudmFsdWUgfTtcbiAgYXBpXG4gICAgLmFkZENhcmRJbmZvKHsgbmFtZTogY2FyZENhcHRpb25JbnB1dC52YWx1ZSwgbGluazogY2FyZExpbmtJbnB1dC52YWx1ZSB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KGRhdGEpO1xuICAgICAgY2FyZHNMaXN0LnByZXBlbmQoY2FyZEVsZW1lbnQpO1xuICAgICAgY2xvc2VNb2RhbChhZGRDYXJkTW9kYWwpO1xuICAgICAgYWRkQ2FyZEZvcm0ucmVzZXQoKTtcbiAgICAgIGRpc2FibGVCdXR0b24oYWRkQ2FyZEJ1dHRvblN1Ym1pdCwgc2V0dGluZ3MpO1xuICAgIH0pXG4gICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xufVxuXG5hZGRDYXJkRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUFkZENhcmRGb3JtU3VibWl0KTtcblxuZW5hYmxlVmFsaWRhdGlvbihzZXR0aW5ncyk7XG4iLCJjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3Rvcih7IGJhc2VVcmwsIGhlYWRlcnMgfSkge1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBiYXNlVXJsO1xuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG5cbiAgZ2V0QXBwSW5mbygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3RoaXMuZ2V0SW5pdGlhbENhcmRzKCldLCBbdGhpcy5nZXRVc2VySW5mbygpXSk7XG4gIH1cblxuICBnZXRJbml0aWFsQ2FyZHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS91c2Vycy9tZWAsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfSk7XG4gIH1cblxuICBlZGl0VXNlckluZm8oeyBuYW1lLCBhYm91dCB9KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgLy8gU2VuZCB0aGUgZGF0YSBpbiB0aGUgYm9keSBhcyBhIEpTT04gc3RyaW5nLlxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBhYm91dCxcbiAgICAgIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgIH0pO1xuICB9XG4gIGVkaXRBdmF0YXJJbmZvKGF2YXRhcikge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICAvLyBTZW5kIHRoZSBkYXRhIGluIHRoZSBib2R5IGFzIGEgSlNPTiBzdHJpbmcuXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGF2YXRhcixcbiAgICAgIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2FyZEluZm8oeyBuYW1lLCBsaW5rIH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIC8vIFNlbmQgdGhlIGRhdGEgaW4gdGhlIGJvZHkgYXMgYSBKU09OIHN0cmluZy5cbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGluayxcbiAgICAgIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgIH0pO1xuICB9XG4gIGRlbGV0ZUNhcmQoY2FyZElkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VMaWtlU3RhdHVzKGNhcmRJZCwgaXNMaWtlZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCB7XG4gICAgICBtZXRob2Q6IGlzTGlrZWQgPyBcIkRFTEVURVwiIDogXCJQVVRcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBpO1xuIl0sIm5hbWVzIjpbInNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJoaWRlSW5wdXRFcnJvciIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNc2dJZCIsImlkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2dnbGVCdXR0b25TdGF0ZSIsImlucHV0TGlzdCIsImJ1dHRvbkVsZW1lbnQiLCJzb21lIiwiaW5wdXQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiaGFzSW52YWxpZElucHV0IiwiZGlzYWJsZUJ1dHRvbiIsImRpc2FibGVkIiwiYWRkIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvckVhY2giLCJjaGVja0lucHV0VmFsaWRpdHkiLCJzaG93SW5wdXRFcnJvciIsImVycm9yTXNnIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIl9yZWYiLCJiYXNlVXJsIiwiaGVhZGVycyIsInRoaXMiLCJfYmFzZVVybCIsIl9oZWFkZXJzIiwiZ2V0QXBwSW5mbyIsIlByb21pc2UiLCJhbGwiLCJnZXRJbml0aWFsQ2FyZHMiLCJnZXRVc2VySW5mbyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsInJlamVjdCIsInN0YXR1cyIsIm1ldGhvZCIsImVkaXRVc2VySW5mbyIsIl9yZWYyIiwibmFtZSIsImFib3V0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlZGl0QXZhdGFySW5mbyIsImF2YXRhciIsImFkZENhcmRJbmZvIiwiX3JlZjMiLCJsaW5rIiwiZGVsZXRlQ2FyZCIsImNhcmRJZCIsImNoYW5nZUxpa2VTdGF0dXMiLCJpc0xpa2VkIiwiYXV0aG9yaXphdGlvbiIsImNhcmRzIiwiY2FyZCIsImNhcmRFbGVtZW50IiwiZ2V0Q2FyZEVsZW1lbnQiLCJjYXJkc0xpc3QiLCJhcHBlbmQiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsIm1vZGFscyIsInByb2ZpbGVFZGl0QnV0dG9uIiwicHJvZmlsZUVkaXRNb2RhbCIsInByb2ZpbGVFZGl0Rm9ybSIsInByb2ZpbGVOYW1lIiwicHJvZmlsZURlc2NyaXB0aW9uIiwicHJvZmlsZU5hbWVJbnB1dCIsInByb2ZpbGVEZXNjcmlwdGlvbklucHV0IiwiYWRkQ2FyZE1vZGFsIiwiYWRkQ2FyZEJ1dHRvbiIsImFkZENhcmRGb3JtIiwiYWRkQ2FyZEJ1dHRvblN1Ym1pdCIsImNhcmRMaW5rSW5wdXQiLCJjYXJkQ2FwdGlvbklucHV0IiwiY2FyZFRlbXBsYXRlIiwicHJldmlld01vZGFsRWxlbWVudCIsInByZXZpZXdNb2RhbEltYWdlIiwicHJldmlld01vZGFsQ2FwdGlvbiIsImF2YXRhck1vZGFsIiwiYXZhdGFyQnV0dG9uIiwiYXZhdGFyRm9ybSIsImF2YXRhcklucHV0IiwiZGVsZXRlTW9kYWwiLCJkZWxldGVGb3JtIiwic2VsZWN0ZWRDYXJkIiwic2VsZWN0ZWRDYXJkSWQiLCJvcGVuTW9kYWwiLCJtb2RhbCIsImhhbmRsZUVzY2FwZSIsImNsb3NlTW9kYWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5IiwiYWN0aXZlTW9kYWwiLCJkYXRhIiwiY29udGVudCIsImNsb25lTm9kZSIsImNhcmRUaXRsZUVsZW1lbnQiLCJjYXJkSW1hZ2VFbGVtZW50IiwiY2FyZExpa2VCdXR0b24iLCJjYXJkRGVsZXRlQnV0dG9uIiwic3JjIiwiYWx0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJfaWQiLCJ0b2dnbGUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwicmVzZXRWYWxpZGF0aW9uIiwicHJlcGVuZCIsInJlc2V0IiwiZW5hYmxlVmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=