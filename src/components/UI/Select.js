import { Select } from 'antd';
import React from 'react';
import { ReactComponent as ArrowDown } from 'static/icons/arrow-down.svg';

const { Option } = Select;

const MySelect = ({ data, value, onSelect, className, ...rest }) => {
  return (
    <div className="selector">
      <Select
        defaultValue={value}
        onSelect={onSelect}
        className={className}
        {...rest}
        suffixIcon={
          <ArrowDown
            style={{
              transform: rotate.second ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          />
        }
      >
        {data.map(({ sort, id, title }) => (
          <Option key={id} value={sort}>
            {title}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default MySelect;
