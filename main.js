!function(){"use strict";const e={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button-submit",inactiveButtonClass:"modal__button-submit_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},t=(e,t,r)=>{const o=t.id+"-error";document.querySelector("#"+o).textContent="",t.classList.remove(r.inputErrorClass)},r=(e,t,r)=>{(e=>e.some((e=>!e.validity.valid)))(e)?o(t,r):(t.disabled=!1,t.classList.remove(r.inactiveButtonClass))},o=(e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)},n=n=>{const a=Array.from(n.querySelectorAll(e.inputSelector)),s=n.querySelector(e.submitButtonSelector);r(a,s,e),n.addEventListener("reset",(()=>{o(s,e)})),a.forEach((o=>{o.addEventListener("input",(function(){((e,r,o)=>{r.validity.valid?t(0,r,o):((e,t,r,o)=>{const n=t.id+"-error";document.querySelector("#"+n).textContent=r,t.classList.add(o.inputErrorClass)})(0,r,r.validationMessage,o)})(0,o,e),r(a,s,e)}))}))};function a(e,t,r,o){e.textContent=t?o:r}const s=new class{constructor(e){let{baseUrl:t,headers:r}=e;this._baseUrl=t,this._headers=r}getAppInfo(){return Promise.all([this.getInitialCards()],[this.getUserInfo()])}getInitialCards(){return fetch(`${this._baseUrl}/cards`,{headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}getUserInfo(){return fetch(`${this._baseUrl}/users/me`,{method:"GET",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editUserInfo(e){let{name:t,about:r}=e;return fetch(`${this._baseUrl}/users/me`,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:r})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}editAvatarInfo(e){return fetch(`${this._baseUrl}/users/me/avatar`,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}addCardInfo(e){let{name:t,link:r}=e;return fetch(`${this._baseUrl}/cards`,{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:r})}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}deleteCard(e){return fetch(`${this._baseUrl}/cards/${e}`,{method:"DELETE",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}changeLikeStatus(e,t){return fetch(`${this._baseUrl}/cards/${e}/likes`,{method:t?"DELETE":"PUT",headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}}({baseUrl:"https://around-api.en.tripleten-services.com/v1",headers:{authorization:"7ce32752-7f51-4ee3-8daa-e08858792089","Content-Type":"application/json"}});s.getAppInfo().then((e=>{let[t]=e;t.forEach((e=>{const t=B(e);E.append(t)}))})).catch(console.error);const l=document.querySelectorAll(".modal"),i=document.querySelector(".profile__edit-button"),c=document.querySelector("#profile-edit-modal"),d=c.querySelector(".modal__form"),u=(c.querySelector(".modal__button-close"),document.querySelector(".profile__name")),m=document.querySelector(".profile__description"),_=c.querySelector("#profile-name-input"),h=c.querySelector("#profile-description-input"),f=document.querySelector("#add-card-modal"),v=document.querySelector(".profile__new-post-button"),y=f.querySelector(".modal__form"),S=(f.querySelector(".modal__button-close"),f.querySelector(".modal__button-submit")),b=y.querySelector("#add-card-link-input"),p=y.querySelector("#add-card-caption-input"),q=document.querySelector("#card-template"),E=document.querySelector(".cards__list"),k=document.querySelector("#preview-modal"),L=k.querySelector(".modal__image"),g=k.querySelector(".modal__caption"),C=document.querySelector("#avatar-modal"),$=document.querySelector(".profile__avatar-button"),j=C.querySelector(".modal__form"),U=(C.querySelector(".modal__button-submit"),j.querySelector("#avatar-input")),I=document.querySelector("#delete-modal"),P=I.querySelector(".modal__form");let A,x;function D(e){e.classList.add("modal_open"),document.addEventListener("keydown",w)}function T(e){e.classList.remove("modal_open"),document.removeEventListener("keydown",w)}function w(e){if("Escape"===e.key){const e=document.querySelector(".modal_open");e&&T(e)}}function B(e){const t=q.content.querySelector(".card").cloneNode(!0),r=t.querySelector(".card__title"),o=t.querySelector(".card__image"),n=t.querySelector(".card__like-button"),a=t.querySelector(".card__delete-button");return r.textContent=e.name,o.src=e.link,o.alt=e.name,n.addEventListener("click",(t=>{const r=t.target.classList.contains("card__like-button_liked");s.changeLikeStatus(e._id,r).then((e=>{console.log(e),n.classList.toggle("card__like-button_liked"),e.isLiked&&n.classList.add("card__like-button--active")})).catch(console.error)})),a.addEventListener("click",(()=>{A=t,x=e._id,D(I)})),o.addEventListener("click",(()=>{D(k),L.src=e.link,L.alt=e.name,g.textContent=e.name})),t}$.addEventListener("click",(()=>{D(C)})),j.addEventListener("submit",(function(e){e.preventDefault();const t=e.submitter;a(t,!0,t.value,"Saving..."),s.editAvatarInfo(U.value).then((e=>{U.textContent=e.avatar,T(C)})).catch(console.error).finally((()=>{a(t,!1,t.value,"Saving...")}))})),document.querySelectorAll(".modal__button-close"),l.forEach((e=>{e.addEventListener("mousedown",(t=>{t.target.classList.contains("modal_open")&&T(e),t.target.classList.contains("modal__button-close")&&T(e)}))})),i.addEventListener("click",(()=>{_.value=u.textContent,h.value=m.textContent,((e,r,o)=>{r.forEach((e=>{t(0,e,o)}))})(0,[_,h],e),D(c)})),d.addEventListener("submit",(function(e){e.preventDefault();const t=e.submitter;a(t,!0,t.value,"Saving..."),s.editUserInfo({name:_.value,about:h.value}).then((e=>{u.textContent=e.name,m.textContent=e.about,T(c)})).catch(console.error).finally((()=>{a(t,!1,t.value,"Saving...")}))})),P.addEventListener("submit",(function(e){e.preventDefault();const t=e.submitter;a(t,!0,t.value,"Deleting..."),s.deleteCard(x).then((e=>{T(I),A.remove()})).catch(console.error).finally((()=>{a(t,!1,t.value,"Deleting...")}))})),v.addEventListener("click",(()=>{D(f)})),y.addEventListener("submit",(function(t){t.preventDefault();const r=t.submitter;a(r,!0,r.value,"Saving..."),s.addCardInfo({name:p.value,link:b.value}).then((t=>{const r=B(t);E.prepend(r),T(f),y.reset(),disableButton(S,e)})).catch(console.error).finally((()=>{a(r,!1,r.value,"Saving...")}))})),function(e){document.querySelectorAll(e.formSelector).forEach((e=>{n(e)}))}(e)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hFcEYsTUFBTW1FLElBQ0wsTUFBTXpDLEVBQWNDLEVBQWV3QyxHQUNuQ3ZDLEVBQVU0RCxRQUFROUQsR0FDbEJvQyxFQUFXckIsR0FDWEUsRUFBWThDLFFBQ1p6SCxjQUFjNEUsRUFBcUJyRyxFQUFTLElBRTdDdUYsTUFBTUMsUUFBUUMsT0FDZHFELFNBQVEsS0FDUHhHLEVBQWNxRyxHQUFZLEVBQU9BLEVBQVdFLE1BQU8sWUFBWSxHQUVyRSxJRm5OTyxTQUEwQjdJLEdBQ2RZLFNBQVNtQixpQkFBaUIvQixFQUFTQyxjQUMzQ2dDLFNBQVN6QixJQUNoQm9CLEVBQWtCcEIsRUFBc0IsR0FFNUMsQ0VrTkEySSxDQUFpQm5KLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLy4vc3JjL3NjcmlwdHMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLy4vc3JjL3V0aWxzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLy4vc3JjL3V0aWxzL0FwaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fYnV0dG9uLXN1Ym1pdFwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19idXR0b24tc3VibWl0X2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9faW5wdXRfdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvcl92aXNpYmxlXCIsXG59O1xuXG5jb25zdCBzaG93SW5wdXRFcnJvciA9IChmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCBlcnJvck1zZywgc2V0dGluZ3MpID0+IHtcbiAgY29uc3QgZXJyb3JNc2dJZCA9IGlucHV0RWxlbWVudC5pZCArIFwiLWVycm9yXCI7XG4gIGNvbnN0IGVycm9yTXNnRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBlcnJvck1zZ0lkKTtcbiAgZXJyb3JNc2dFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNc2c7XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XG59O1xuXG5jb25zdCBoaWRlSW5wdXRFcnJvciA9IChmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCBzZXR0aW5ncykgPT4ge1xuICBjb25zdCBlcnJvck1zZ0lkID0gaW5wdXRFbGVtZW50LmlkICsgXCItZXJyb3JcIjtcbiAgY29uc3QgZXJyb3JNc2dFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGVycm9yTXNnSWQpO1xuICBlcnJvck1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xufTtcblxuY29uc3QgY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIHNldHRpbmdzKSA9PiB7XG4gIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgc2hvd0lucHV0RXJyb3IoXG4gICAgICBmb3JtRWxlbWVudCxcbiAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSxcbiAgICAgIHNldHRpbmdzXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlSW5wdXRFcnJvcihmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCBzZXR0aW5ncyk7XG4gIH1cbn07XG5cbmNvbnN0IGhhc0ludmFsaWRJbnB1dCA9IChpbnB1dExpc3QpID0+IHtcbiAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dCkgPT4ge1xuICAgIHJldHVybiAhaW5wdXQudmFsaWRpdHkudmFsaWQ7XG4gIH0pO1xufTtcbmNvbnN0IHRvZ2dsZUJ1dHRvblN0YXRlID0gKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgc2V0dGluZ3MpID0+IHtcbiAgaWYgKGhhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpKSB7XG4gICAgZGlzYWJsZUJ1dHRvbihidXR0b25FbGVtZW50LCBzZXR0aW5ncyk7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgfVxufTtcblxuY29uc3QgZGlzYWJsZUJ1dHRvbiA9IChidXR0b25FbGVtZW50LCBzZXR0aW5ncykgPT4ge1xuICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0VmFsaWRhdGlvbiA9IChmb3JtRWxlbWVudCwgaW5wdXRMaXN0LCBzZXR0aW5ncykgPT4ge1xuICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBoaWRlSW5wdXRFcnJvcihmb3JtRWxlbWVudCwgaW5wdXQsIHNldHRpbmdzKTtcbiAgfSk7XG59O1xuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoZm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgaW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcbiAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmlucHV0U2VsZWN0b3IpXG4gICk7XG4gIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yXG4gICk7XG5cbiAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBzZXR0aW5ncyk7XG5cbiAgZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsICgpID0+IHtcbiAgICBkaXNhYmxlQnV0dG9uKGJ1dHRvbkVsZW1lbnQsIHNldHRpbmdzKTtcbiAgfSk7XG5cbiAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tJbnB1dFZhbGlkaXR5KGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIHNldHRpbmdzKTtcbiAgICAgIHRvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgc2V0dGluZ3MpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVWYWxpZGF0aW9uKHNldHRpbmdzKSB7XG4gIGNvbnN0IGZvcm1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5mb3JtU2VsZWN0b3IpO1xuICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtRWxlbWVudCkgPT4ge1xuICAgIHNldEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50LCBzZXR0aW5ncyk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldEJ1dHRvblRleHQoYnV0dG9uLCBpc0xvYWRpbmcsIGRlZmF1bHRUZXh0LCBsb2FkaW5nVGV4dCkge1xuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gbG9hZGluZ1RleHQ7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gZGVmYXVsdFRleHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGVuYWJsZVZhbGlkYXRpb24sXG4gIHNldHRpbmdzLFxuICByZXNldFZhbGlkYXRpb24sXG59IGZyb20gXCIuLi9zY3JpcHRzL3ZhbGlkYXRpb24uanNcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgQXBpIGZyb20gXCIuLi91dGlscy9BcGkuanNcIjtcbmltcG9ydCB7IHNldEJ1dHRvblRleHQgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVycy5qc1wiO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlZhbCBUaG9yZW5zXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzEtcGhvdG8tYnktbW9yaXR6LWZlbGRtYW5uLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSZXN0YXVyYW50IHRlcnJhY2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMi1waG90by1ieS1jZWlsaW5lLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBbiBvdXRkb29yIGNhZmVcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMy1waG90by1ieS10dWJhbnVyLWRvZ2FuLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBIHZlcnkgbG9uZyBicmlkZ2UsIG92ZXIgdGhlIGZvcmVzdCBhbmQgdGhyb3VnaCB0aGUgdHJlZXNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNC1waG90by1ieS1tYXVyaWNlLWxhc2NoZXQtZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlR1bm5lbCB3aXRoIG1vcm5pbmcgbGlnaHRcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNS1waG90by1ieS12YW4tYW5oLW5ndXllbi1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTW91bnRhaW4gaG91c2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNi1waG90by1ieS1tb3JpdHotZmVsZG1hbm4tZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdvbGRlbiBHYXRlIGJyaWRnZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy83LXBob3RvLWJ5LWdyaWZmaW4td29vbGRyaWRnZS1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbl07XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLWFwaS5lbi50cmlwbGV0ZW4tc2VydmljZXMuY29tL3YxXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiBcIjdjZTMyNzUyLTdmNTEtNGVlMy04ZGFhLWUwODg1ODc5MjA4OVwiLFxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICB9LFxufSk7XG5cbmFwaVxuICAuZ2V0QXBwSW5mbygpXG4gIC50aGVuKChbY2FyZHNdKSA9PiB7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChjYXJkKTtcbiAgICAgIGNhcmRzTGlzdC5hcHBlbmQoY2FyZEVsZW1lbnQpO1xuICAgIH0pO1xuICB9KVxuICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cbi8vIEdlbmVyYWwgdmFyaWFibGVcbmNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxcIik7XG5cbi8vIFByb2ZpbGUgdmFyaWFibGVzXG5jb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XG5jb25zdCBwcm9maWxlRWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWVkaXQtbW9kYWxcIik7XG5jb25zdCBwcm9maWxlRWRpdEZvcm0gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5jb25zdCBwcm9maWxlQ2xvc2VCdXR0b24gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLm1vZGFsX19idXR0b24tY2xvc2VcIlxuKTtcblxuLy8gUHJvZmlsZSBGb3JtIHZhcmlhYmxlc1xuY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIpO1xuY29uc3QgcHJvZmlsZU5hbWVJbnB1dCA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLW5hbWUtaW5wdXRcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb25JbnB1dCA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcbiAgXCIjcHJvZmlsZS1kZXNjcmlwdGlvbi1pbnB1dFwiXG4pO1xuXG4vLyBOZXcgcG9zdC9hZGQgY2FyZCB2YXJpYWxiZXNcbmNvbnN0IGFkZENhcmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbW9kYWxcIik7XG5jb25zdCBhZGRDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uZXctcG9zdC1idXR0b25cIik7XG5jb25zdCBhZGRDYXJkRm9ybSA9IGFkZENhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuY29uc3QgYWRkQ2FyZENsb3NlQnV0dG9uID0gYWRkQ2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2J1dHRvbi1jbG9zZVwiKTtcbmNvbnN0IGFkZENhcmRCdXR0b25TdWJtaXQgPSBhZGRDYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fYnV0dG9uLXN1Ym1pdFwiKTtcblxuLy8gTmV3IHBvc3QvYWRkIGNhcmQgZm9ybSB2YXJpYWJsZXNcbmNvbnN0IGNhcmRMaW5rSW5wdXQgPSBhZGRDYXJkRm9ybS5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLWxpbmstaW5wdXRcIik7XG5jb25zdCBjYXJkQ2FwdGlvbklucHV0ID0gYWRkQ2FyZEZvcm0ucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1jYXB0aW9uLWlucHV0XCIpO1xuXG4vLyBDYXJkIGxpc3QgdmFyaWFibGVzXG5jb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIik7XG5jb25zdCBjYXJkc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saXN0XCIpO1xuXG4vLyBQcmV2aWV3IG1vZGFsIEVsZW1lbnQgc2VsZWN0b3JcbmNvbnN0IHByZXZpZXdNb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctbW9kYWxcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxJbWFnZSA9IHByZXZpZXdNb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxDYXB0aW9uID1cbiAgcHJldmlld01vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jYXB0aW9uXCIpO1xuLy9jb25zdCBwcmV2aWV3TW9kYWxDbG9zZUJ1dHRvbiA9IHByZXZpZXdNb2RhbEVsZW1lbnQucXVlcnlTZWxlY3Rvcihcbi8vICBcIi5tb2RhbF9fYnV0dG9uLWNsb3NlXCJcbi8vKTtcblxuLy8gQXZhdGFyIGZvcm0gZWxlbWVudHNcbmNvbnN0IGF2YXRhck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdmF0YXItbW9kYWxcIik7XG5jb25zdCBhdmF0YXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhci1idXR0b25cIik7XG5jb25zdCBhdmF0YXJGb3JtID0gYXZhdGFyTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcbi8vY29uc3QgYXZhdGFyQ2xvc2VCdXR0b24gPSBhdmF0YXJNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19idXR0b24tY2xvc2VcIik7XG5jb25zdCBhdmF0YXJCdXR0b25TdWJtaXQgPSBhdmF0YXJNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19idXR0b24tc3VibWl0XCIpO1xuY29uc3QgYXZhdGFySW5wdXQgPSBhdmF0YXJGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjYXZhdGFyLWlucHV0XCIpO1xuXG4vLyBEZWxldGUgZm9ybSBlbGVtZW50cyBhbmQgY29uc3RzXG5jb25zdCBkZWxldGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlLW1vZGFsXCIpO1xuY29uc3QgZGVsZXRlRm9ybSA9IGRlbGV0ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5sZXQgc2VsZWN0ZWRDYXJkO1xubGV0IHNlbGVjdGVkQ2FyZElkO1xuXG4vLyBHZW5lcmFsIGZvcm0gZnVuY3Rpb25zXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5cIik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5cIik7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVzY2FwZShldnQpIHtcbiAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICBjb25zdCBhY3RpdmVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfb3BlblwiKTtcbiAgICBpZiAoYWN0aXZlTW9kYWwpIHtcbiAgICAgIGNsb3NlTW9kYWwoYWN0aXZlTW9kYWwpO1xuICAgIH1cbiAgfVxufVxuLy8gZWRpdCBhdmF0YXIgZnVuY3Rpb25zXG5mdW5jdGlvbiBoYW5kbGVBdmF0YXJTdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzYXZlQnV0dG9uID0gZXZ0LnN1Ym1pdHRlcjtcbiAgc2V0QnV0dG9uVGV4dChzYXZlQnV0dG9uLCB0cnVlLCBzYXZlQnV0dG9uLnZhbHVlLCBcIlNhdmluZy4uLlwiKTtcbiAgYXBpXG4gICAgLmVkaXRBdmF0YXJJbmZvKGF2YXRhcklucHV0LnZhbHVlKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBhdmF0YXJJbnB1dC50ZXh0Q29udGVudCA9IGRhdGEuYXZhdGFyO1xuICAgICAgY2xvc2VNb2RhbChhdmF0YXJNb2RhbCk7XG4gICAgfSlcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBzZXRCdXR0b25UZXh0KHNhdmVCdXR0b24sIGZhbHNlLCBzYXZlQnV0dG9uLnZhbHVlLCBcIlNhdmluZy4uLlwiKTtcbiAgICB9KTtcbn1cblxuYXZhdGFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG9wZW5Nb2RhbChhdmF0YXJNb2RhbCk7XG59KTtcbmF2YXRhckZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVBdmF0YXJTdWJtaXQpO1xuXG4vLyBGaW5kIGFsbCBjbG9zZSBidXR0b25zXG5jb25zdCBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19idXR0b24tY2xvc2VcIik7XG5cbi8vIEhhbmRsZSBtb2RhbCBjbG9zaW5nIGFmdGVyIGNsaWNraW5nIG92ZXJsYXkgb3IgY2xvc2UgYnV0dG9uXG5tb2RhbHMuZm9yRWFjaCgobW9kYWwpID0+IHtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZ0KSA9PiB7XG4gICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfb3BlblwiKSkge1xuICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgfVxuICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19idXR0b24tY2xvc2VcIikpIHtcbiAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLy8gRWRpdCBwcm9maWxlIGZ1bmN0aW9uc1xuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUVkaXRGb3JtU3VibWl0KGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGV2dC5zdWJtaXR0ZXI7XG4gIHNldEJ1dHRvblRleHQoc2F2ZUJ1dHRvbiwgdHJ1ZSwgc2F2ZUJ1dHRvbi52YWx1ZSwgXCJTYXZpbmcuLi5cIik7XG4gIGFwaVxuICAgIC5lZGl0VXNlckluZm8oe1xuICAgICAgbmFtZTogcHJvZmlsZU5hbWVJbnB1dC52YWx1ZSxcbiAgICAgIGFib3V0OiBwcm9maWxlRGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBwcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICAgIHByb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XG4gICAgICBjbG9zZU1vZGFsKHByb2ZpbGVFZGl0TW9kYWwpO1xuICAgIH0pXG4gICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgc2V0QnV0dG9uVGV4dChzYXZlQnV0dG9uLCBmYWxzZSwgc2F2ZUJ1dHRvbi52YWx1ZSwgXCJTYXZpbmcuLi5cIik7XG4gICAgfSk7XG59XG5wcm9maWxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9maWxlTmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZU5hbWUudGV4dENvbnRlbnQ7XG4gIHByb2ZpbGVEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50O1xuICByZXNldFZhbGlkYXRpb24oXG4gICAgcHJvZmlsZUVkaXRGb3JtLFxuICAgIFtwcm9maWxlTmFtZUlucHV0LCBwcm9maWxlRGVzY3JpcHRpb25JbnB1dF0sXG4gICAgc2V0dGluZ3NcbiAgKTtcbiAgb3Blbk1vZGFsKHByb2ZpbGVFZGl0TW9kYWwpO1xufSk7XG5cbnByb2ZpbGVFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVByb2ZpbGVFZGl0Rm9ybVN1Ym1pdCk7XG5cbi8vIENhcmQgZnVuY3Rpb25zXG5mdW5jdGlvbiBnZXRDYXJkRWxlbWVudChkYXRhKSB7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZFRlbXBsYXRlLmNvbnRlbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXG4gICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICBjb25zdCBjYXJkVGl0bGVFbGVtZW50ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKTtcbiAgY29uc3QgY2FyZEltYWdlRWxlbWVudCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XG4gIGNvbnN0IGNhcmRMaWtlQnV0dG9uID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgY29uc3QgY2FyZERlbGV0ZUJ1dHRvbiA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKTtcblxuICBjYXJkVGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICBjYXJkSW1hZ2VFbGVtZW50LnNyYyA9IGRhdGEubGluaztcbiAgY2FyZEltYWdlRWxlbWVudC5hbHQgPSBkYXRhLm5hbWU7XG5cbiAgY2FyZExpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICBjb25zdCBpc0xpa2VkID0gZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjYXJkX19saWtlLWJ1dHRvbl9saWtlZFwiKTtcbiAgICBhcGlcbiAgICAgIC5jaGFuZ2VMaWtlU3RhdHVzKGRhdGEuX2lkLCBpc0xpa2VkKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGNhcmRMaWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9saWtlZFwiKTtcbiAgICAgICAgLy9tYWludGFpbnMgYWN0aXZlIHN0YXR1cyB0byBsaWtlIGFmdGVyIHJlZnJlc2hcbiAgICAgICAgaWYgKGRhdGEuaXNMaWtlZCkge1xuICAgICAgICAgIGNhcmRMaWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYXJkX19saWtlLWJ1dHRvbi0tYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9KTtcblxuICBjYXJkRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy9jYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgICBzZWxlY3RlZENhcmQgPSBjYXJkRWxlbWVudDtcbiAgICBzZWxlY3RlZENhcmRJZCA9IGRhdGEuX2lkO1xuICAgIG9wZW5Nb2RhbChkZWxldGVNb2RhbCk7XG4gIH0pO1xuXG4gIGNhcmRJbWFnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuTW9kYWwocHJldmlld01vZGFsRWxlbWVudCk7XG4gICAgcHJldmlld01vZGFsSW1hZ2Uuc3JjID0gZGF0YS5saW5rO1xuICAgIHByZXZpZXdNb2RhbEltYWdlLmFsdCA9IGRhdGEubmFtZTtcbiAgICBwcmV2aWV3TW9kYWxDYXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICB9KTtcblxuICByZXR1cm4gY2FyZEVsZW1lbnQ7XG59XG5cbi8vaGFuZGxlIGRlbGV0ZSBmb3JtIHJlcXVlc3QgbGlzdGVuZXJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZVN1Ym1pdChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGV2dC5zdWJtaXR0ZXI7XG4gIHNldEJ1dHRvblRleHQoZGVsZXRlQnV0dG9uLCB0cnVlLCBkZWxldGVCdXR0b24udmFsdWUsIFwiRGVsZXRpbmcuLi5cIik7XG4gIGFwaVxuICAgIC5kZWxldGVDYXJkKHNlbGVjdGVkQ2FyZElkKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjbG9zZU1vZGFsKGRlbGV0ZU1vZGFsKTtcbiAgICAgIHNlbGVjdGVkQ2FyZC5yZW1vdmUoKTtcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIHNldEJ1dHRvblRleHQoZGVsZXRlQnV0dG9uLCBmYWxzZSwgZGVsZXRlQnV0dG9uLnZhbHVlLCBcIkRlbGV0aW5nLi4uXCIpO1xuICAgIH0pO1xufVxuXG5kZWxldGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRGVsZXRlU3VibWl0KTtcbi8vYWRkIGNhbmNlbCBldmVudCBsaXN0ZW5lclxuLy8gTmV3L2FkZCBjYXJkIGZ1bmN0aW9uc1xuYWRkQ2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvcGVuTW9kYWwoYWRkQ2FyZE1vZGFsKTtcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVBZGRDYXJkRm9ybVN1Ym1pdChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vY29uc3QgbmV3Q2FyZCA9IHsgbmFtZTogY2FyZENhcHRpb25JbnB1dC52YWx1ZSwgbGluazogY2FyZExpbmtJbnB1dC52YWx1ZSB9O1xuICBjb25zdCBzYXZlQnV0dG9uID0gZXZ0LnN1Ym1pdHRlcjtcbiAgc2V0QnV0dG9uVGV4dChzYXZlQnV0dG9uLCB0cnVlLCBzYXZlQnV0dG9uLnZhbHVlLCBcIlNhdmluZy4uLlwiKTtcbiAgYXBpXG4gICAgLmFkZENhcmRJbmZvKHsgbmFtZTogY2FyZENhcHRpb25JbnB1dC52YWx1ZSwgbGluazogY2FyZExpbmtJbnB1dC52YWx1ZSB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KGRhdGEpO1xuICAgICAgY2FyZHNMaXN0LnByZXBlbmQoY2FyZEVsZW1lbnQpO1xuICAgICAgY2xvc2VNb2RhbChhZGRDYXJkTW9kYWwpO1xuICAgICAgYWRkQ2FyZEZvcm0ucmVzZXQoKTtcbiAgICAgIGRpc2FibGVCdXR0b24oYWRkQ2FyZEJ1dHRvblN1Ym1pdCwgc2V0dGluZ3MpO1xuICAgIH0pXG4gICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgc2V0QnV0dG9uVGV4dChzYXZlQnV0dG9uLCBmYWxzZSwgc2F2ZUJ1dHRvbi52YWx1ZSwgXCJTYXZpbmcuLi5cIik7XG4gICAgfSk7XG59XG5cbmFkZENhcmRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlQWRkQ2FyZEZvcm1TdWJtaXQpO1xuXG5lbmFibGVWYWxpZGF0aW9uKHNldHRpbmdzKTtcbiIsImNsYXNzIEFwaSB7XG4gIGNvbnN0cnVjdG9yKHsgYmFzZVVybCwgaGVhZGVycyB9KSB7XG4gICAgdGhpcy5fYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cblxuICBnZXRBcHBJbmZvKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbdGhpcy5nZXRJbml0aWFsQ2FyZHMoKV0sIFt0aGlzLmdldFVzZXJJbmZvKCldKTtcbiAgfVxuXG4gIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIFByb21pc2UucmVqZWN0KGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVkaXRVc2VySW5mbyh7IG5hbWUsIGFib3V0IH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICAvLyBTZW5kIHRoZSBkYXRhIGluIHRoZSBib2R5IGFzIGEgSlNPTiBzdHJpbmcuXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFib3V0LFxuICAgICAgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfSk7XG4gIH1cbiAgZWRpdEF2YXRhckluZm8oYXZhdGFyKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lL2F2YXRhcmAsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIC8vIFNlbmQgdGhlIGRhdGEgaW4gdGhlIGJvZHkgYXMgYSBKU09OIHN0cmluZy5cbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgYXZhdGFyLFxuICAgICAgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDYXJkSW5mbyh7IG5hbWUsIGxpbmsgfSkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkc2AsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgLy8gU2VuZCB0aGUgZGF0YSBpbiB0aGUgYm9keSBhcyBhIEpTT04gc3RyaW5nLlxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBsaW5rLFxuICAgICAgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlQ2FyZChjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9YCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZUxpa2VTdGF0dXMoY2FyZElkLCBpc0xpa2VkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfS9saWtlc2AsIHtcbiAgICAgIG1ldGhvZDogaXNMaWtlZCA/IFwiREVMRVRFXCIgOiBcIlBVVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcGk7XG4iXSwibmFtZXMiOlsic2V0dGluZ3MiLCJmb3JtU2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsImhpZGVJbnB1dEVycm9yIiwiZm9ybUVsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1zZ0lkIiwiaWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvZ2dsZUJ1dHRvblN0YXRlIiwiaW5wdXRMaXN0IiwiYnV0dG9uRWxlbWVudCIsInNvbWUiLCJpbnB1dCIsInZhbGlkaXR5IiwidmFsaWQiLCJoYXNJbnZhbGlkSW5wdXQiLCJkaXNhYmxlQnV0dG9uIiwiZGlzYWJsZWQiLCJhZGQiLCJzZXRFdmVudExpc3RlbmVycyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9yRWFjaCIsImNoZWNrSW5wdXRWYWxpZGl0eSIsInNob3dJbnB1dEVycm9yIiwiZXJyb3JNc2ciLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInNldEJ1dHRvblRleHQiLCJidXR0b24iLCJpc0xvYWRpbmciLCJkZWZhdWx0VGV4dCIsImxvYWRpbmdUZXh0IiwiYXBpIiwiY29uc3RydWN0b3IiLCJfcmVmIiwiYmFzZVVybCIsImhlYWRlcnMiLCJ0aGlzIiwiX2Jhc2VVcmwiLCJfaGVhZGVycyIsImdldEFwcEluZm8iLCJQcm9taXNlIiwiYWxsIiwiZ2V0SW5pdGlhbENhcmRzIiwiZ2V0VXNlckluZm8iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJyZWplY3QiLCJzdGF0dXMiLCJtZXRob2QiLCJlZGl0VXNlckluZm8iLCJfcmVmMiIsIm5hbWUiLCJhYm91dCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZWRpdEF2YXRhckluZm8iLCJhdmF0YXIiLCJhZGRDYXJkSW5mbyIsIl9yZWYzIiwibGluayIsImRlbGV0ZUNhcmQiLCJjYXJkSWQiLCJjaGFuZ2VMaWtlU3RhdHVzIiwiaXNMaWtlZCIsImF1dGhvcml6YXRpb24iLCJjYXJkcyIsImNhcmQiLCJjYXJkRWxlbWVudCIsImdldENhcmRFbGVtZW50IiwiY2FyZHNMaXN0IiwiYXBwZW5kIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJtb2RhbHMiLCJwcm9maWxlRWRpdEJ1dHRvbiIsInByb2ZpbGVFZGl0TW9kYWwiLCJwcm9maWxlRWRpdEZvcm0iLCJwcm9maWxlTmFtZSIsInByb2ZpbGVEZXNjcmlwdGlvbiIsInByb2ZpbGVOYW1lSW5wdXQiLCJwcm9maWxlRGVzY3JpcHRpb25JbnB1dCIsImFkZENhcmRNb2RhbCIsImFkZENhcmRCdXR0b24iLCJhZGRDYXJkRm9ybSIsImFkZENhcmRCdXR0b25TdWJtaXQiLCJjYXJkTGlua0lucHV0IiwiY2FyZENhcHRpb25JbnB1dCIsImNhcmRUZW1wbGF0ZSIsInByZXZpZXdNb2RhbEVsZW1lbnQiLCJwcmV2aWV3TW9kYWxJbWFnZSIsInByZXZpZXdNb2RhbENhcHRpb24iLCJhdmF0YXJNb2RhbCIsImF2YXRhckJ1dHRvbiIsImF2YXRhckZvcm0iLCJhdmF0YXJJbnB1dCIsImRlbGV0ZU1vZGFsIiwiZGVsZXRlRm9ybSIsInNlbGVjdGVkQ2FyZCIsInNlbGVjdGVkQ2FyZElkIiwib3Blbk1vZGFsIiwibW9kYWwiLCJoYW5kbGVFc2NhcGUiLCJjbG9zZU1vZGFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dCIsImtleSIsImFjdGl2ZU1vZGFsIiwiZGF0YSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJjYXJkVGl0bGVFbGVtZW50IiwiY2FyZEltYWdlRWxlbWVudCIsImNhcmRMaWtlQnV0dG9uIiwiY2FyZERlbGV0ZUJ1dHRvbiIsInNyYyIsImFsdCIsInRhcmdldCIsImNvbnRhaW5zIiwiX2lkIiwibG9nIiwidG9nZ2xlIiwicHJldmVudERlZmF1bHQiLCJzYXZlQnV0dG9uIiwic3VibWl0dGVyIiwidmFsdWUiLCJmaW5hbGx5IiwicmVzZXRWYWxpZGF0aW9uIiwiZGVsZXRlQnV0dG9uIiwicHJlcGVuZCIsInJlc2V0IiwiZW5hYmxlVmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=