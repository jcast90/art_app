import React, { FC, useState, useEffect } from 'react';
import FeaturedArt from '../components/FeaturedArt';
import GridArt from '../components/GridArt';
import { fetchPaintings } from '../components/fetchPaintings';
import artData from '../data.json'

const ArtPieces: FC = () => {
  const [artPieces, updateArt] = useState(artData);

  useEffect(() => {
    const paintings = fetchPaintings();
    console.log(paintings)
  })

  return (
    <>
      <FeaturedArt data={artPieces} />
      <GridArt title="test" artPieces={artPieces} />
    </>
  )

}
export default ArtPieces