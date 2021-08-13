import React, { useState } from "react";
import { inject } from "lib/Injector";
import fieldHolder from "components/FieldHolder/FieldHolder";

const Icon = () => {};

// onChange: this.props.onChange(event, { id: this.props.id, value: event.target.value });
const IconPickerField = (props) => {
  const {
    id,
    name,
    source,
    onChange = null,
    PopoverOptionSetComponent,
  } = props;
  const [value, setValue] = useState(props.value);
  const [open, isOpen] = useState(false);
  const toggleOpen = () => isOpen(!open);

  const handleValueChange = (event) => {
    const value = event.target.value;

    if (onChange) {
      onChange(event, { id, value });
    }

    setValue(value);
  };

  console.log(source);
  const buttons = source.map(({ title, value }) => {
    return {
      content: title,
      key: value,
      onClick: (...args) => {
        console.log(args);
      },
    };
  });

  console.log(buttons);
  console.log(props);
  return (
    <div>
      <PopoverOptionSetComponent
        id={id}
        toggleText="Select color"
        buttons={buttons}
        isOpen={isOpen}
        toggle={toggleOpen}
      />
      <input type="hidden" name={name} value={value} />
    </div>
  );
};

export default inject(
  ["PopoverOptionSet"],
  (PopoverOptionSetComponent) => ({ PopoverOptionSetComponent }),
  () => "IconPickerField"
)(fieldHolder(IconPickerField));
