import React, { FC, useState } from 'react';

interface Props {
  data: any
}

export const FeaturedArt: FC<Props> = (props) => {
  const [data, updateData] = useState(0);
  return (
    <div>
      {data}
    </div>
  );
};

export default FeaturedArt