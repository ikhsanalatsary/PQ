/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { InputGroup, Label, Input } from '@admin-bro/design-system';
import { BasePropertyComponentProps } from 'admin-bro';

const VatComponent = (props) => {
  console.log('props', props);
  const { record, property, onChange } = props;
  let value = record.params[property.path];
  let subTotal = Number(record.params.subTotal);
  let vatPercent = 0.5;
  if (!isNaN(subTotal)) {
    let values = subTotal * vatPercent;
    onChange('vat', values);
  }
  return (
    <InputGroup>
      <Label>{property.label}</Label>
      <Input value={value} />
    </InputGroup>
  );
};
export {
  VatComponent as default,
  VatComponent,
};