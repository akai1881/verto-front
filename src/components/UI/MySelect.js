import React from 'react';
import { ReactComponent as ArrowDown } from 'static/icons/arrow-down.svg';
import { Select } from 'antd';
import { useState } from 'react';

const { Option } = Select;

const MySelect = ({ data, value, onSelect, className, ...rest }) => {
  const [rotate, setRotate] = useState(false);

  const handleFocus = (open) => {
    setRotate(open);
  };

  return (
    <div className="barter-select">
      <Select
        defaultValue={value}
        onSelect={onSelect}
        onDropdownVisibleChange={handleFocus}
        className={className}
        {...rest}
        suffixIcon={
          <ArrowDown
            style={{
              transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '.3s',
            }}
          />
        }
      >
        {data.map(({ id, title }) => (
          <Option key={id} value={id}>
            {title}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default MySelect;
