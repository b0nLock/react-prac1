import React from 'react'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select 
    value={value} 
    onChange={e => onChange(e.target.value)}
    style={{fontSize: '20px', padding: '10px 20px'}}>
        <option disabled value="">{defaultValue}</option>
        {options.map((option, index) => 
            <option key={index} value={option.value}>
                {option.name}
            </option>
        )}
    </select>
  )
}

export default MySelect