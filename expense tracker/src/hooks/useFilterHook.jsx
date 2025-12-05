
import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useFilterHook = (dataList,callback) => {
 //const[query, setQuery] = useState('');
 const[query, setQuery] = useLocalStorage('query','');


 const filterData = dataList.filter(el=>callback(el).toLowerCase().includes(query))
 

 return [filterData,setQuery]
}
