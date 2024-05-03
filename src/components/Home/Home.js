import HomeHeader from "./HomeHeader"
import { homeCardsData } from "../../assets/constants"
import HomeCard from "./HomeCard"
import NewMeetingModal from "../../Modals/NewMeetingModal"
import JoinMeetingModal from "../../Modals/JoinMeetingModal"
import ScheduleMeetingModal from "../../Modals/ScheduleMeetingModal"

const Home = () => {

  return (
    <section className="flex w-full h-full flex-col gap-5 text-white" style={{border:'1px solid white'}}>

      <HomeHeader/>

      <div className="flex gap-6">
        {
          homeCardsData.map((card)=>{
            return(
              <HomeCard key={card.id} id={card.id} img={card.img} title={card.title} description={card.description} bgColor={card.bgColor} />
            )
          })
        }
      </div>

      <NewMeetingModal/>

      <JoinMeetingModal/>

      <ScheduleMeetingModal/>
      
    </section>
  )
}

export default Home
