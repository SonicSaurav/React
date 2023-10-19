import React, { useEffect, useState } from 'react';

export default function Github() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/SonicSaurav')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className='text-center m-4 bg-gray-600 text-white'>Loading...</div>
      ) : (
        <div className='text-center m-4 bg-gray-600 text-white'>
          Github Followers: {data.followers}
          <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
      )}
    </>
  );
}
