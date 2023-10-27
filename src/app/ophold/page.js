import Products from '@/components/stays/stays'
import Header from '@/components/common/header/header'

const Member = () => {


  return <div className="page">

      <Header title={'Vores Ophold'} img={'/image_01.jpg'}/>

      <Products config={{recommended: false}}></Products>
      

  </div>

}

export default Member



