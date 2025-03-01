import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import '../App.css'
// import { useOutletContext } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

export default function Home() {
    const [query, setQuery] = useState('')
    // const [isDark] = useOutletContext()
    const [isDark] = useTheme()
    // console.log(isDark);


    return (
        <main className={`${isDark ? 'dark' : ''}`}>
            <div className="search-filter-container">
                <SearchBar setQuery={setQuery} />
                <SelectMenu setQuery={setQuery} />
            </div>
            <CountriesList query={query} />
        </main>
    )
}
