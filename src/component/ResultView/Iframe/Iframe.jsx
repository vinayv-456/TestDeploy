/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';

const Iframe = () => {
  const [tags, setTags] = useState('');

  useEffect(() => {
    const tagsRaw = new URL(window.location.href).searchParams.get('tags');
    setTags(tagsRaw);
  }, []);

  // console.log(new URL(window.location.href).searchParams.get('location'));
  return (
    <div style={{ fontSize: 14, padding: 20, width: '100%', height: '100%' }}>
      {/* <p style={{ fontSize: 14 }}>{new URL(window.location.href).searchParams.get('location')}</p>
      <p style={{ fontSize: 14 }}>{new URL(window.location.href).searchParams.get('parent')}</p> */}
      {tags}
    </div>
  );
};

export default Iframe;

// {Object.keys(tags).map((title, i) => (
//   // eslint-disable-next-line react/no-array-index-key
//   <div style={{ fontSize: '1.6rem' }} key={i}>
//     {/* {console.log('aae', tags[title])} */}
//     {JSON.stringify(tags[title], undefined, 1)}
//   </div>
// ))}
