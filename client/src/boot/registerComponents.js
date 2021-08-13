import Injector from "lib/Injector";
import IconPickerField from "../components/IconPickerField";

export default () => {
  Injector.component.registerMany({
    IconPickerField,
  });
};
