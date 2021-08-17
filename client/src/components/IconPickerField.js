import React, { useState } from "react";
import classNames from "classnames";
import { inject } from "lib/Injector";
import fieldHolder from "components/FieldHolder/FieldHolder";

const IconPickerField = (props) => {
  const {
    id,
    name,
    source,
    onChange = null,
    setInput = null,
    PopoverOptionSetComponent,
  } = props;
  const [value, setValue] = useState(props.value);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const handleValueChange = (value) => {
    if (onChange) {
      onChange(null, { id, value });
    }

    if (setInput) {
      setInput(name, value);
    }

    setValue(value);
    setOpen(false);
  };

  const mapper = ({ title, value }) => ({
    content: title,
    key: value,
    className: value,
    onClick: () => handleValueChange(value),
  });
  const buttons = source.map(mapper);

  let icon = source.find(({ value: val }) => val === value);

  if (!icon) {
    icon = source[0];
  }

  return (
    <div>
      <button
        className="btn btn-outline-secondary iconpicker-field"
        id={`${id}__button`}
      >
        <span className={classNames("iconpicker-field__icon", icon.value)} />
        <span className="iconpicker-field__text">{icon.title}</span>
      </button>
      <PopoverOptionSetComponent
        className="popover-option-set"
        id={id}
        toggleText="Select color"
        buttons={buttons}
        isOpen={open}
        toggle={toggleOpen}
        target={`${id}__button`}
      />
    </div>
  );
};

export default inject(
  ["PopoverOptionSet"],
  (PopoverOptionSetComponent) => ({ PopoverOptionSetComponent }),
  () => "IconPickerField"
)(fieldHolder(IconPickerField));
