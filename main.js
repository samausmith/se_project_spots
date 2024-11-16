!function(){"use strict";const e={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button-submit",inactiveButtonClass:"modal__button-submit_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},t=(e,t,o)=>{t.validity.valid?((e,t,o)=>{const r=t.id+"-error";document.querySelector("#"+r).textContent="",t.classList.remove(o.inputErrorClass)})(0,t,o):((e,t,o,r)=>{const n=t.id+"-error";document.querySelector("#"+n).textContent=o,t.classList.add(r.inputErrorClass)})(0,t,t.validationMessage,o)},o=(e,t,o)=>{(e=>e.some((e=>!e.validity.valid)))(e)?r(t,o):(t.disabled=!1,t.classList.remove(o.inactiveButtonClass))},r=(e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)},n=n=>{const l=Array.from(n.querySelectorAll(e.inputSelector)),a=n.querySelector(e.submitButtonSelector);o(l,a,e),n.addEventListener("reset",(()=>{r(a,e)})),l.forEach((r=>{r.addEventListener("input",(function(){t(0,r,e),o(l,a,e)}))}))};new class{constructor(e){let{baseUrl:t,headers:o}=e;this._baseUrl=t,this._headers=o}getAppInfo(){return Promise.all([this.getInitialCards()],[this.getUserInfo()])}getInitialCards(){return fetch(`${this._baseUrl}/cards`,{headers:this._headers}).then((e=>{if(e.ok)return e.json();Promise.reject(`Error: ${e.status}`)}))}getUserInfo(){return fetch(`${this._baseUrl}/users/me`,{})}editUserInfo(e){let{name:t,about:o}=e;return fetch(`${this._baseUrl}/users/me`,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:o})}).then((e=>{}))}}({baseUrl:"https://around-api.en.tripleten-services.com/v1",headers:{authorization:"e9c65f8e-c72f-45da-ac44-96567d659c6e","Content-Type":"application/json"}}).getAppInfo().then((e=>{let[t]=e;t.forEach((e=>{const t=U(e);q.append(t)}))})).catch(console.error);const l=document.querySelectorAll(".modal"),a=document.querySelector(".profile__edit-button"),c=document.querySelector("#profile-edit-modal"),s=c.querySelector(".modal__form"),i=(c.querySelector(".modal__button-close"),document.querySelector(".profile__name")),d=document.querySelector(".profile__description"),u=c.querySelector("#profile-name-input"),m=c.querySelector("#profile-description-input"),_=document.querySelector("#add-card-modal"),p=document.querySelector(".profile__new-post-button"),y=_.querySelector(".modal__form"),f=(_.querySelector(".modal__button-close"),_.querySelector(".modal__button-submit")),S=y.querySelector("#add-card-link-input"),v=y.querySelector("#add-card-caption-input"),b=document.querySelector("#card-template"),q=document.querySelector(".cards__list"),h=document.querySelector("#preview-modal"),E=h.querySelector(".modal__image"),L=h.querySelector(".modal__caption");function C(e){e.classList.add("modal_open"),document.addEventListener("keydown",g)}function k(e){e.classList.remove("modal_open"),document.removeEventListener("keydown",g)}function g(e){if("Escape"===e.key){const e=document.querySelector(".modal_open");e&&k(e)}}function U(e){const t=b.content.querySelector(".card").cloneNode(!0),o=t.querySelector(".card__title"),r=t.querySelector(".card__image"),n=t.querySelector(".card__like-button"),l=t.querySelector(".card__delete-button");return o.textContent=e.name,r.src=e.link,r.alt=e.name,n.addEventListener("click",(()=>{n.classList.toggle("card__like-button_liked")})),l.addEventListener("click",(()=>{t.remove()})),r.addEventListener("click",(()=>{C(h),E.src=e.link,E.alt=e.name,L.textContent=e.name})),t}h.querySelector(".modal__button-close"),document.querySelectorAll(".modal__button-close"),l.forEach((e=>{e.addEventListener("mousedown",(t=>{t.target.classList.contains("modal_open")&&k(e),t.target.classList.contains("modal__button-close")&&k(e)}))})),a.addEventListener("click",(()=>{u.value=i.textContent,m.value=d.textContent,resetValidation(s,[u,m],e),C(c)})),s.addEventListener("submit",(function(e){e.preventDefault(),i.textContent=u.value,d.textContent=m.value,k(c)})),p.addEventListener("click",(()=>{C(_)})),y.addEventListener("submit",(function(t){t.preventDefault();const o=U({name:v.value,link:S.value});q.prepend(o),y.reset(),disableButton(f,e),k(_)})),function(e){document.querySelectorAll(e.formSelector).forEach((e=>{n(e)}))}(e)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlrQixpQkFDSnJDLEVBQVk5RCxZQUFjZ0UsRUFBaUJpQyxNQUMzQ2xDLEVBQW1CL0QsWUFBY2lFLEVBQXdCZ0MsTUFDekRsQixFQUFXbkIsRUFDYixJQWdEQU8sRUFBY2hELGlCQUFpQixTQUFTLEtBQ3RDeUQsRUFBVVYsRUFBYSxJQWF6QkUsRUFBWWpELGlCQUFpQixVQVY3QixTQUFpQzhELEdBQy9CQSxFQUFJa0IsaUJBQ0osTUFDTWhELEVBQWNDLEVBREosQ0FBRVYsS0FBTTZCLEVBQWlCMEIsTUFBT0wsS0FBTXRCLEVBQWMyQixRQUVwRTVDLEVBQVUrQyxRQUFRakQsR0FDbEJpQixFQUFZaUMsUUFDWnhGLGNBQWN3RCxFQUFxQnRGLEdBQ25DZ0csRUFBV2IsRUFDYixJRG5ITyxTQUEwQm5GLEdBQ2RlLFNBQVNvQixpQkFBaUJuQyxFQUFTQyxjQUMzQ29DLFNBQVM3QixJQUNoQndCLEVBQWtCeEIsRUFBc0IsR0FFNUMsQ0NrSEErRyxDQUFpQnZILEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLy4vc3JjL3NjcmlwdHMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvLi9zcmMvdXRpbHMvQXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19idXR0b24tc3VibWl0XCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX2J1dHRvbi1zdWJtaXRfZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbmNvbnN0IHNob3dJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGVycm9yTXNnLCBzZXR0aW5ncykgPT4ge1xuICBjb25zdCBlcnJvck1zZ0lkID0gaW5wdXRFbGVtZW50LmlkICsgXCItZXJyb3JcIjtcbiAgY29uc3QgZXJyb3JNc2dFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGVycm9yTXNnSWQpO1xuICBlcnJvck1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1zZztcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcbn07XG5cbmNvbnN0IGhpZGVJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIHNldHRpbmdzKSA9PiB7XG4gIGNvbnN0IGVycm9yTXNnSWQgPSBpbnB1dEVsZW1lbnQuaWQgKyBcIi1lcnJvclwiO1xuICBjb25zdCBlcnJvck1zZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgZXJyb3JNc2dJZCk7XG4gIGVycm9yTXNnRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XG59O1xuXG5jb25zdCBjaGVja0lucHV0VmFsaWRpdHkgPSAoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgc2V0dGluZ3MpID0+IHtcbiAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICBzaG93SW5wdXRFcnJvcihcbiAgICAgIGZvcm1FbGVtZW50LFxuICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlLFxuICAgICAgc2V0dGluZ3NcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIHNldHRpbmdzKTtcbiAgfVxufTtcblxuY29uc3QgaGFzSW52YWxpZElucHV0ID0gKGlucHV0TGlzdCkgPT4ge1xuICByZXR1cm4gaW5wdXRMaXN0LnNvbWUoKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuICFpbnB1dC52YWxpZGl0eS52YWxpZDtcbiAgfSk7XG59O1xuY29uc3QgdG9nZ2xlQnV0dG9uU3RhdGUgPSAoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBzZXR0aW5ncykgPT4ge1xuICBpZiAoaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcbiAgICBkaXNhYmxlQnV0dG9uKGJ1dHRvbkVsZW1lbnQsIHNldHRpbmdzKTtcbiAgfSBlbHNlIHtcbiAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICB9XG59O1xuXG5jb25zdCBkaXNhYmxlQnV0dG9uID0gKGJ1dHRvbkVsZW1lbnQsIHNldHRpbmdzKSA9PiB7XG4gIGJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG59O1xuXG5jb25zdCByZXNldFZhbGlkYXRpb24gPSAoZm9ybUVsZW1lbnQsIGlucHV0TGlzdCwgc2V0dGluZ3MpID0+IHtcbiAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaGlkZUlucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0LCBzZXR0aW5ncyk7XG4gIH0pO1xufTtcbmNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKGZvcm1FbGVtZW50KSA9PiB7XG4gIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oXG4gICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5pbnB1dFNlbGVjdG9yKVxuICApO1xuICBjb25zdCBidXR0b25FbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvclxuICApO1xuXG4gIHRvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgc2V0dGluZ3MpO1xuXG4gIGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCAoKSA9PiB7XG4gICAgZGlzYWJsZUJ1dHRvbihidXR0b25FbGVtZW50LCBzZXR0aW5ncyk7XG4gIH0pO1xuXG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrSW5wdXRWYWxpZGl0eShmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCBzZXR0aW5ncyk7XG4gICAgICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIHNldHRpbmdzKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlVmFsaWRhdGlvbihzZXR0aW5ncykge1xuICBjb25zdCBmb3JtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3MuZm9ybVNlbGVjdG9yKTtcbiAgZm9ybUxpc3QuZm9yRWFjaCgoZm9ybUVsZW1lbnQpID0+IHtcbiAgICBzZXRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCwgc2V0dGluZ3MpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGVuYWJsZVZhbGlkYXRpb24sIHNldHRpbmdzIH0gZnJvbSBcIi4uL3NjcmlwdHMvdmFsaWRhdGlvbi5qc1wiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBBcGkgZnJvbSBcIi4uL3V0aWxzL0FwaS5qc1wiO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlZhbCBUaG9yZW5zXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzEtcGhvdG8tYnktbW9yaXR6LWZlbGRtYW5uLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSZXN0YXVyYW50IHRlcnJhY2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMi1waG90by1ieS1jZWlsaW5lLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBbiBvdXRkb29yIGNhZmVcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMy1waG90by1ieS10dWJhbnVyLWRvZ2FuLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBIHZlcnkgbG9uZyBicmlkZ2UsIG92ZXIgdGhlIGZvcmVzdCBhbmQgdGhyb3VnaCB0aGUgdHJlZXNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNC1waG90by1ieS1tYXVyaWNlLWxhc2NoZXQtZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlR1bm5lbCB3aXRoIG1vcm5pbmcgbGlnaHRcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNS1waG90by1ieS12YW4tYW5oLW5ndXllbi1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTW91bnRhaW4gaG91c2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNi1waG90by1ieS1tb3JpdHotZmVsZG1hbm4tZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdvbGRlbiBHYXRlIGJyaWRnZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy83LXBob3RvLWJ5LWdyaWZmaW4td29vbGRyaWRnZS1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbl07XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLWFwaS5lbi50cmlwbGV0ZW4tc2VydmljZXMuY29tL3YxXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiBcImU5YzY1ZjhlLWM3MmYtNDVkYS1hYzQ0LTk2NTY3ZDY1OWM2ZVwiLFxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICB9LFxufSk7XG5cbmFwaVxuICAuZ2V0QXBwSW5mbygpXG4gIC50aGVuKChbY2FyZHNdKSA9PiB7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChjYXJkKTtcbiAgICAgIGNhcmRzTGlzdC5hcHBlbmQoY2FyZEVsZW1lbnQpO1xuICAgIH0pO1xuICB9KVxuICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cbi8vIEdlbmVyYWwgdmFyaWFibGVcbmNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxcIik7XG5cbi8vIFByb2ZpbGUgdmFyaWFibGVzXG5jb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XG5jb25zdCBwcm9maWxlRWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWVkaXQtbW9kYWxcIik7XG5jb25zdCBwcm9maWxlRWRpdEZvcm0gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5jb25zdCBwcm9maWxlQ2xvc2VCdXR0b24gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLm1vZGFsX19idXR0b24tY2xvc2VcIlxuKTtcblxuLy8gUHJvZmlsZSBGb3JtIHZhcmlhYmxlc1xuY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIpO1xuY29uc3QgcHJvZmlsZU5hbWVJbnB1dCA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLW5hbWUtaW5wdXRcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb25JbnB1dCA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcbiAgXCIjcHJvZmlsZS1kZXNjcmlwdGlvbi1pbnB1dFwiXG4pO1xuXG4vLyBOZXcgcG9zdC9hZGQgY2FyZCB2YXJpYWxiZXNcbmNvbnN0IGFkZENhcmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbW9kYWxcIik7XG5jb25zdCBhZGRDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uZXctcG9zdC1idXR0b25cIik7XG5jb25zdCBhZGRDYXJkRm9ybSA9IGFkZENhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuY29uc3QgYWRkQ2FyZENsb3NlQnV0dG9uID0gYWRkQ2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2J1dHRvbi1jbG9zZVwiKTtcbmNvbnN0IGFkZENhcmRCdXR0b25TdWJtaXQgPSBhZGRDYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fYnV0dG9uLXN1Ym1pdFwiKTtcblxuLy8gTmV3IHBvc3QvYWRkIGNhcmQgZm9ybSB2YXJpYWJsZXNcbmNvbnN0IGNhcmRMaW5rSW5wdXQgPSBhZGRDYXJkRm9ybS5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLWxpbmstaW5wdXRcIik7XG5jb25zdCBjYXJkQ2FwdGlvbklucHV0ID0gYWRkQ2FyZEZvcm0ucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1jYXB0aW9uLWlucHV0XCIpO1xuXG4vLyBDYXJkIGxpc3QgdmFyaWFibGVzXG5jb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIik7XG5jb25zdCBjYXJkc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saXN0XCIpO1xuXG4vLyBQcmV2aWV3IG1vZGFsIEVsZW1lbnQgc2VsZWN0b3JcbmNvbnN0IHByZXZpZXdNb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctbW9kYWxcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxJbWFnZSA9IHByZXZpZXdNb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxDYXB0aW9uID1cbiAgcHJldmlld01vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jYXB0aW9uXCIpO1xuY29uc3QgcHJldmlld01vZGFsQ2xvc2VCdXR0b24gPSBwcmV2aWV3TW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLm1vZGFsX19idXR0b24tY2xvc2VcIlxuKTtcblxuLy8gR2VuZXJhbCBmb3JtIGZ1bmN0aW9uc1xuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuXCIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuXCIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFc2NhcGUoZXZ0KSB7XG4gIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgY29uc3QgYWN0aXZlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX29wZW5cIik7XG4gICAgaWYgKGFjdGl2ZU1vZGFsKSB7XG4gICAgICBjbG9zZU1vZGFsKGFjdGl2ZU1vZGFsKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRmluZCBhbGwgY2xvc2UgYnV0dG9uc1xuY29uc3QgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9fYnV0dG9uLWNsb3NlXCIpO1xuXG4vLyBIYW5kbGUgbW9kYWwgY2xvc2luZyBhZnRlciBjbGlja2luZyBvdmVybGF5IG9yIGNsb3NlIGJ1dHRvblxubW9kYWxzLmZvckVhY2goKG1vZGFsKSA9PiB7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2dCkgPT4ge1xuICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX29wZW5cIikpIHtcbiAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH1cbiAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fYnV0dG9uLWNsb3NlXCIpKSB7XG4gICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIEVkaXQgcHJvZmlsZSBmdW5jdGlvbnNcbmZ1bmN0aW9uIGhhbmRsZVByb2ZpbGVFZGl0Rm9ybVN1Ym1pdChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIHByb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gcHJvZmlsZU5hbWVJbnB1dC52YWx1ZTtcbiAgcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvZmlsZURlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gIGNsb3NlTW9kYWwocHJvZmlsZUVkaXRNb2RhbCk7XG59XG5wcm9maWxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9maWxlTmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZU5hbWUudGV4dENvbnRlbnQ7XG4gIHByb2ZpbGVEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50O1xuICByZXNldFZhbGlkYXRpb24oXG4gICAgcHJvZmlsZUVkaXRGb3JtLFxuICAgIFtwcm9maWxlTmFtZUlucHV0LCBwcm9maWxlRGVzY3JpcHRpb25JbnB1dF0sXG4gICAgc2V0dGluZ3NcbiAgKTtcbiAgb3Blbk1vZGFsKHByb2ZpbGVFZGl0TW9kYWwpO1xufSk7XG5cbnByb2ZpbGVFZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVByb2ZpbGVFZGl0Rm9ybVN1Ym1pdCk7XG5cbi8vIENhcmQgZnVuY3Rpb25zXG5mdW5jdGlvbiBnZXRDYXJkRWxlbWVudChkYXRhKSB7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZFRlbXBsYXRlLmNvbnRlbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXG4gICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICBjb25zdCBjYXJkVGl0bGVFbGVtZW50ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKTtcbiAgY29uc3QgY2FyZEltYWdlRWxlbWVudCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XG4gIGNvbnN0IGNhcmRMaWtlQnV0dG9uID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgY29uc3QgY2FyZERlbGV0ZUJ1dHRvbiA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKTtcblxuICBjYXJkVGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICBjYXJkSW1hZ2VFbGVtZW50LnNyYyA9IGRhdGEubGluaztcbiAgY2FyZEltYWdlRWxlbWVudC5hbHQgPSBkYXRhLm5hbWU7XG5cbiAgY2FyZExpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjYXJkTGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fbGlrZWRcIik7XG4gIH0pO1xuXG4gIGNhcmREZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY2FyZEltYWdlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChwcmV2aWV3TW9kYWxFbGVtZW50KTtcbiAgICBwcmV2aWV3TW9kYWxJbWFnZS5zcmMgPSBkYXRhLmxpbms7XG4gICAgcHJldmlld01vZGFsSW1hZ2UuYWx0ID0gZGF0YS5uYW1lO1xuICAgIHByZXZpZXdNb2RhbENhcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gIH0pO1xuXG4gIHJldHVybiBjYXJkRWxlbWVudDtcbn1cblxuLy8gTmV3L2FkZCBjYXJkIGZ1bmN0aW9uc1xuYWRkQ2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvcGVuTW9kYWwoYWRkQ2FyZE1vZGFsKTtcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVBZGRDYXJkRm9ybVN1Ym1pdChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5ld0NhcmQgPSB7IG5hbWU6IGNhcmRDYXB0aW9uSW5wdXQudmFsdWUsIGxpbms6IGNhcmRMaW5rSW5wdXQudmFsdWUgfTtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChuZXdDYXJkKTtcbiAgY2FyZHNMaXN0LnByZXBlbmQoY2FyZEVsZW1lbnQpO1xuICBhZGRDYXJkRm9ybS5yZXNldCgpO1xuICBkaXNhYmxlQnV0dG9uKGFkZENhcmRCdXR0b25TdWJtaXQsIHNldHRpbmdzKTtcbiAgY2xvc2VNb2RhbChhZGRDYXJkTW9kYWwpO1xufVxuXG5hZGRDYXJkRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUFkZENhcmRGb3JtU3VibWl0KTtcblxuZW5hYmxlVmFsaWRhdGlvbihzZXR0aW5ncyk7XG4iLCJjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3Rvcih7IGJhc2VVcmwsIGhlYWRlcnMgfSkge1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBiYXNlVXJsO1xuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG5cbiAgZ2V0QXBwSW5mbygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3RoaXMuZ2V0SW5pdGlhbENhcmRzKCldLCBbdGhpcy5nZXRVc2VySW5mbygpXSk7XG4gIH1cblxuICBnZXRJbml0aWFsQ2FyZHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS91c2Vycy9tZWAsIHt9KTtcbiAgfVxuXG4gIGVkaXRVc2VySW5mbyh7IG5hbWUsIGFib3V0IH0pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICAvLyBTZW5kIHRoZSBkYXRhIGluIHRoZSBib2R5IGFzIGEgSlNPTiBzdHJpbmcuXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFib3V0LFxuICAgICAgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAvLyBoYW5kbGUgdGhlIHJlc3BvbnNlXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBpO1xuIl0sIm5hbWVzIjpbInNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJjaGVja0lucHV0VmFsaWRpdHkiLCJmb3JtRWxlbWVudCIsImlucHV0RWxlbWVudCIsInZhbGlkaXR5IiwidmFsaWQiLCJoaWRlSW5wdXRFcnJvciIsImVycm9yTXNnSWQiLCJpZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2hvd0lucHV0RXJyb3IiLCJlcnJvck1zZyIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJpbnB1dExpc3QiLCJidXR0b25FbGVtZW50Iiwic29tZSIsImlucHV0IiwiaGFzSW52YWxpZElucHV0IiwiZGlzYWJsZUJ1dHRvbiIsImRpc2FibGVkIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvckVhY2giLCJjb25zdHJ1Y3RvciIsIl9yZWYiLCJiYXNlVXJsIiwiaGVhZGVycyIsInRoaXMiLCJfYmFzZVVybCIsIl9oZWFkZXJzIiwiZ2V0QXBwSW5mbyIsIlByb21pc2UiLCJhbGwiLCJnZXRJbml0aWFsQ2FyZHMiLCJnZXRVc2VySW5mbyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsInJlamVjdCIsInN0YXR1cyIsImVkaXRVc2VySW5mbyIsIl9yZWYyIiwibmFtZSIsImFib3V0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhdXRob3JpemF0aW9uIiwiY2FyZHMiLCJjYXJkIiwiY2FyZEVsZW1lbnQiLCJnZXRDYXJkRWxlbWVudCIsImNhcmRzTGlzdCIsImFwcGVuZCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwibW9kYWxzIiwicHJvZmlsZUVkaXRCdXR0b24iLCJwcm9maWxlRWRpdE1vZGFsIiwicHJvZmlsZUVkaXRGb3JtIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJwcm9maWxlTmFtZUlucHV0IiwicHJvZmlsZURlc2NyaXB0aW9uSW5wdXQiLCJhZGRDYXJkTW9kYWwiLCJhZGRDYXJkQnV0dG9uIiwiYWRkQ2FyZEZvcm0iLCJhZGRDYXJkQnV0dG9uU3VibWl0IiwiY2FyZExpbmtJbnB1dCIsImNhcmRDYXB0aW9uSW5wdXQiLCJjYXJkVGVtcGxhdGUiLCJwcmV2aWV3TW9kYWxFbGVtZW50IiwicHJldmlld01vZGFsSW1hZ2UiLCJwcmV2aWV3TW9kYWxDYXB0aW9uIiwib3Blbk1vZGFsIiwibW9kYWwiLCJoYW5kbGVFc2NhcGUiLCJjbG9zZU1vZGFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dCIsImtleSIsImFjdGl2ZU1vZGFsIiwiZGF0YSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJjYXJkVGl0bGVFbGVtZW50IiwiY2FyZEltYWdlRWxlbWVudCIsImNhcmRMaWtlQnV0dG9uIiwiY2FyZERlbGV0ZUJ1dHRvbiIsInNyYyIsImxpbmsiLCJhbHQiLCJ0b2dnbGUiLCJ0YXJnZXQiLCJjb250YWlucyIsInZhbHVlIiwicmVzZXRWYWxpZGF0aW9uIiwicHJldmVudERlZmF1bHQiLCJwcmVwZW5kIiwicmVzZXQiLCJlbmFibGVWYWxpZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==