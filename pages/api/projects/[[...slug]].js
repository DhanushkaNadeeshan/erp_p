export default function handler(req, res) {
  // this result is an array
  const { slug } = req.query

  if(slug){
    res.end(`Post: ${slug.join(', ')}`)  
  }else{
    res.end(`Post`)
  }
}