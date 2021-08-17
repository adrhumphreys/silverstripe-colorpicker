<?php

namespace SilverStripe\IconPicker;

use SilverStripe\Forms\DropdownField;

class IconPickerField extends DropdownField
{
    protected $schemaComponent = 'IconPickerField';

    public function __construct($name, $title = null, $source = array(), $value = null)
    {
        parent::__construct($name, $title, $source, $value);
        $this->addExtraClass('icon-picker-field');
    }
}
