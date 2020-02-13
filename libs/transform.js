export default function transform(x, [a,b], [c,d], overflow=false){
  const result = (x-a)/(b-a) * (d-c) + c

  if(overflow&&result>b) return d
  if(overflow&&result<a) return c

  return result
}