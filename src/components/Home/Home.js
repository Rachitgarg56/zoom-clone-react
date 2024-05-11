import HomeHeader from "./HomeHeader"
import { homeCardsData } from "../../assets/constants"
import HomeCard from "./HomeCard"
import NewMeetingModal from "../../Modals/NewMeetingModal"
import JoinMeetingModal from "../../Modals/JoinMeetingModal"
import ScheduleMeetingModal from "../../Modals/ScheduleMeetingModal"

const Home = () => {

  return (
    <section className="flex w-full h-full pt-6 flex-col gap-5 text-white">

      <HomeHeader/>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-4">
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
