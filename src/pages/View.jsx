import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../redux/slice/whishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';


function View() {
  const {id}=useParams()
  // console.log(id);

  const[product,setProduct]=useState({})
  const products=JSON.parse(localStorage.getItem("products"))
  const dispatch= useDispatch()
  const {loading}=useSelector((state)=>state.productSlice)

  const {wishlist}=useSelector(state=>state.wishlistSlice)


  useEffect(()=>{
    setProduct(products.find(item =>item.id==id))
  },[])

  const handleWishlist = (product)=>{
    const existingProduct = wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("already exist")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  return (
    <>
  <div className='container my-3'>
    <div className=' row  d-flex justify-content-center flex-wrap' >
      <div className="col-lg-4 border" style={{minWidth:"400px"}}>
        <img style={{width:"100%",height:"400px"}} src={product?.thumbnail} alt="" />
      </div>
      <div className="col-lg-2"></div>
      <div className="col-lg-6">
        <p>pid:{product?.id}</p>
        <h1>{product?.title}</h1>
        <h5 className='fw-bolder'>Price: <span style={{color:"red"}}>${product?.price}</span></h5>
        <p>{product?.description}</p>
        <div className='d-flex justify-content-between'>
            <Button className='btn btn-outline-dark' onClick={()=>handleWishlist(product)}><i className='fa-solid fa-heart text-danger'></i> &nbsp;&nbsp; W i s h l i s t</Button>
            <Button className='btn btn-outline-light' onClick={() =>dispatch(addToCart(product))}><i className='fa-solid fa-cart-shopping text-warning'></i> &nbsp;&nbsp;C a r t</Button>
            
        </div>      
        </div>

        
    </div>

  </div>
  </>
  )
}

export default View
