/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { InputGroup, Label, Input } from '@admin-bro/design-system';
import { BasePropertyProps } from 'admin-bro';

const SubTotalComponent = (props: BasePropertyProps) => {
  console.log('props', props);
  const { record, property, onChange } = props;
  let value = record.params.subTotal;
  let vatPercent = 0.5;
  if (!isNaN(Number(value))) {
    onChange('vat', (Number(value) * vatPercent).toString());
  }
  return (
    <InputGroup>
      <Label>{property.label}</Label>
      <Input
        value={value}
      />
    </InputGroup>
  );
};
export { SubTotalComponent as default, SubTotalComponent };
