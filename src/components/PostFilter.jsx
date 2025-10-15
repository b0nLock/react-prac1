import React from 'react'
import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div style={{display: 'flex', flexDirection: "column", gap: '10px'}}>
        <MyInput
            placeholder="Поиск..."
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
        />
        <MySelect 
            defaultValue="Сортировка"
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            options={[
            {value: 'title', name: 'По названию'},
            {value: 'description', name: 'По описанию'},
            ]}
        />
    </div>
  )
}

export default PostFilter