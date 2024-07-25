import './Home.css'
import Homes from '../../components/homes/Homes'
import Range from '../../components/range/Range'
import Products from '../../components/products/Products'
import Furniture from '../../components/furniture/Furniture'

const Home = () => {
  return (
    <div>
      <Homes/>
      <Range/>
      <Products/>
      <Furniture/>
    </div>
  )
}

export default Home
