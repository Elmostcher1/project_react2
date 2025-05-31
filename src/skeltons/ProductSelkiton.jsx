import React from "react"
import ContentLoader from "react-content-loader"

const ProductSelkiton = (props) => {
  const arr = Array(8).fill(0)
  
  return(
    <div className="row">
   {arr.map((val , i)=>(
         <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
<ContentLoader 
    speed={2}
    width={800}
    height={400}
    viewBox="0 0 800 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="52" y="12" rx="0" ry="0" width="2" height="1" /> 
    <rect x="4" y="19" rx="0" ry="0" width="171" height="220" /> 
    <rect x="353" y="234" rx="0" ry="0" width="1" height="0" /> 
    <rect x="37" y="285" rx="0" ry="0" width="115" height="17" /> 
    <rect x="18" y="259" rx="0" ry="0" width="147" height="16" /> 
    <rect x="32" y="335" rx="2" ry="2" width="26" height="31" /> 
    <rect x="135" y="335" rx="2" ry="2" width="27" height="32" /> 
    <rect x="146" y="344" rx="0" ry="0" width="0" height="7" />
  </ContentLoader>

  </div>
   ))}
    </div>
  )


}
export default ProductSelkiton
