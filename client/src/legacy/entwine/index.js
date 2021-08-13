import jQuery from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import { loadComponent } from "lib/Injector";

jQuery.entwine("ss", ($) => {
  $(".js-injector-boot .icon-picker-field .icon-picker-field").entwine({
    onmatch() {
      const context = {};
      const IconPickerField = loadComponent("IconPickerField", context);
      const state = this.data("state");

      ReactDOM.render(<IconPickerField {...state} />, this[0]);
    },

    onunmatch() {
      ReactDOM.unmountComponentAtNode(this[0]);
    },
  });
});
