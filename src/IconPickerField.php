<?php

namespace SilverStripe\IconPicker;

use SilverStripe\Forms\DropdownField;
use SilverStripe\Forms\SingleSelectField;

class IconPickerField extends DropdownField
{
    protected $schemaComponent = 'IconPickerField';

    public function __construct($name, $title = null, $source = array(), $value = null)
    {
        parent::__construct($name, $title, $source, $value);

        $this->addExtraClass('icon-picker-field');
//        $this->setSchemaData(['data' => ['options' => 'abc']]);
    }



//    public function getSchemaDataDefaults()
//    {
//        $schemaData = parent::getSchemaStateDefaults();
//
//        echo '<pre>'; print_r($schemaData); exit;
//
//        $schemaData['source'] = $this->getSource();
//        $schemaData['name'] = $this->getName();
//        $schemaData['value'] = $this->Value();
//
//        return $schemaData;
//    }
//
//    public function getSourceValues()
//    {
//        return array_merge([''], array_map(function ($color) {
//            return $color['CSSClass'];
//        }, $this->getSource()));
//    }
}
