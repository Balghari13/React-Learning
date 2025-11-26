
import React, { useState } from 'react'

export const useFilterHook = (dataList,callback) => {
 const[query, setQuery] = useState('');

 const filterData = dataList.filter(el=>callback(el).toLowerCase().includes(query))

 return [filterData,setQuery]
}
