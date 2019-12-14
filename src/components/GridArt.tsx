import React, { FC, useState } from 'react';

interface ArtPieces {
  id: string,
  title: string,
  url: string,
  artistUrl: string,
  artistName: string,
  artistId: string,
  completitionYear: number,
  width: number,
  image: string,
  height: number
}

interface Data {
  data: ArtPieces
}

interface Props {
  artPieces: Data[],
  title: string
}

export const GridArt: FC<Props> = ({ title, artPieces }) => {
  console.log(artPieces)
  return artPieces.data.map((art: object) => {
    return (
      <figure>
        <img src={art.image} alt="" />
      </figure>
    )
  })
};

export default GridArt