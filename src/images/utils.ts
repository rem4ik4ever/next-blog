export const getImageURL = (url:string, width:number):string => {
  return `${process.env.NOW_URL}/api/images?source=${encodeURIComponent(url)}&w=${width}`
}

