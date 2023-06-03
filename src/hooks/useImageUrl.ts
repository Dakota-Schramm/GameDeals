import React, { useEffect, useState } from 'react'

const SIX_MONTHS_IN_SECONDS = 15552000;

type ImageUrl = 'string' | undefined;

// const myHeaders = new Headers();
// myHeaders.append("Cache-Control", `public, max-age=${SIX_MONTHS_IN_SECONDS}`)
// myHeaders.append(
//   'Access-Control-Allow-Origin',
//   'http://localhost:3000',
// );
// // myHeaders.append(
// //   'Access-Control-Allow-Origin',
// //   'https://cdn.cloudflare.steamstatic.com',
// // );

// const reqOptions = {
//   method: "GET",
//   headers: myHeaders,
//   mode: "cors",
//   // cache: "default",
// }

/**
 * 
 * @returns [imageUrl, setImageUrl]
 */

export const useImageURL = (thumb: string) => {
  const [imageURL, setImageURL] = useState<ImageUrl>(undefined);

  useEffect(() => {
    // const imgRequest = new Request(thumb, reqOptions);
    // fetch(imgRequest)
    fetch(thumb, { next: { revalidate: SIX_MONTHS_IN_SECONDS } })
    .then(
      (res) => {
        if (!res.ok) throw new Error('An error occurred while fetching the data.');
        else if (res.type === "cors") console.log('Cached')
        else if (res.type === "basic") console.log("Network")
        return res.blob();
      }
    ).then(
      (imageBlob) => {
        const newImgUrl = URL.createObjectURL(imageBlob)
        setImageURL(newImgUrl)
      }
    ).catch(
      (err) => console.log(err)
    )
  }, [])

  return imageURL;
}
