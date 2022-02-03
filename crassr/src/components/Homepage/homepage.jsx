import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table'
import { fetchShoppingList } from 'store/HomePage/actions'
import MetaTags from 'components/Common/metaTags'
import './homepage.css'

const Homepage = () => {
   
    const dispatch = useDispatch()

    const { shoppingList } = useSelector(state => state.home)
    window.scrollTo(0, 0)
    useEffect(() => {
    
        new Promise((resolve, reject) => dispatch(fetchShoppingList({ payload: {}, resolve, reject })))
    }, [])

    return (
        <>
        <MetaTags/>
        <div className = "container">
         <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Shopping Site</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
               
                {
                    shoppingList?.map((site) => {
                        return (
                            <tr>
                            <td>{site.id}</td>
                            <td>{site.name}</td>
                            <td>{site.username}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </Table>
        </div>
        </>
       
    )
}

export default Homepage;
