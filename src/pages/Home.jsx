import React, { useEffect } from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchProductData } from '../redux/slice/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slice/whishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'


function Home() {
  const dispatch= useDispatch()


  const {loading,error,products}=useSelector((state)=>state.productSlice)
  const {wishlist}=useSelector(state=>state.wishlistSlice)
  const cart =useSelector(state=>state.cartReducer)
  // console.log(loading);
  // console.log(error);
  // console.log(products);


    useEffect(()=>{
      dispatch(fetchProductData())
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
    <div style={{marginTop:"80px",marginLeft:"100px"}}>
      {
        loading?<div className='d-flex justify-content-center mt-5'>
          <Spinner animation="border" variant="info" />Loading...
        </div>

        :<Row className='mt-5 container'>
          { products.length>0&&products.map((product,index)=>(
            <Col key={index} className='mt-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
      <Link to={`/view/${product.id}`}>
      <Card.Img variant="top" style={{width:"100%"}} src={product.thumbnail} />
      </Link>
      <Card.Body>
        <Card.Title>{product.title.slice(0,20)}</Card.Title>

        <div className='d-flex justify-content-between'>
            <Button className='btn btn-light' onClick={()=>handleWishlist(product)}><i className='fa-solid fa-heart text-danger'></i></Button>
            <Button className='btn btn-light' onClick={()=>dispatch(addToCart(product))}><i className='fa-solid fa-cart-shopping text-warning'></i></Button>
        </div>
      </Card.Body>
    </Card>
            </Col>
          ))}
        </Row>
     
      }
    </div>
  )
}

export default Home
