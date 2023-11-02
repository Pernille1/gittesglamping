import Accordians from '@/components/activities/accordians'
import Header from '@/components/common/header/header'

const Page = () => {



  return <div className={'page'}>
      <Header title={'Aktiviteter'} img={'/image_04.jpg'}/>
      
      <Accordians></Accordians>
      
      
  </div>


}

export default Page