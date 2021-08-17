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

      const setInput = (fieldName, value) => {
        const input = document.querySelector(`input[name="${fieldName}"]`);

        if (!input) {
          return;
        }

        input.value = value;
      };

      ReactDOM.render(
        <IconPickerField {...state} setInput={setInput} />,
        this[0]
      );
    },

    onunmatch() {
      ReactDOM.unmountComponentAtNode(this[0]);
    },
  });
});
