import React, { useState } from "react";
import classNames from "classnames";
import { inject } from "lib/Injector";
import fieldHolder from "components/FieldHolder/FieldHolder";

// onChange: this.props.onChange(event, { id: this.props.id, value: event.target.value });
const IconPickerField = (props) => {
  const {
    id,
    name,
    source,
    onChange = null,
    setInput = null,
    PopoverOptionSetComponent,
  } = props;
  console.log(props);
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
  };

  const mapper = ({ title, value }) => ({
    content: "",
    key: value,
    className: value,
    onClick: () => handleValueChange(value),
  });
  const buttons = source.map(mapper);

  return (
    <div>
      <button
        className={classNames("btn btn-outline-secondary", value)}
        id={`${id}__button`}
      />
      <PopoverOptionSetComponent
        disableSearch
        className=""
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
