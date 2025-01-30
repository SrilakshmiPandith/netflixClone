import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';
import { BG_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
      <img
          src={BG_IMG}
          alt="bg-img"
        />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch