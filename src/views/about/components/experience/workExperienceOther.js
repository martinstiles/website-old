import React from 'react'
import InfoSection from '../infoSection'
import ExperienceBox from '../experienceBox'

const WorkExperienceOther = () => {
  return (
    <InfoSection header='WORK EXPERIENCE - OTHER'>
      <ExperienceBox
        title='TEACHING MENTOR'
        link='https://innsida.ntnu.no/veiledning'
        company='NTNU'
        duration='Oktober 2020 - present'
        description='Mentoring a student with a functional disability in the courses TMA4145 - Discrete Mathematics and TDT4113 - Programming Project.'
      />
      <ExperienceBox
        title='RIDER'
        link='https://www.foodora.com/'
        company='Foodora'
        duration='March 2019 - November 2019'
        description='Food delivery cyclist. A mix of exercise and income was a great combination for a part time job.'
      />
      <ExperienceBox
        title='BARTENDER'
        link='https://www.facebook.com/menightclub/'
        company='Me Nightclub'
        duration='June 2018 - July 2019'
        description='Working part time as a bartender was a really fun experiece. And besides, being good
          at making drinks is a "surprisingly" useful skill.'
      />
      <ExperienceBox
        title='Tactical Command Assistant'
        link='https://forsvaret.no/hogskolene/studiekatalog-bibliotek/Luftkrigsskolen/utdanning/utdanningstilbud/luftvern'
        company='Norwegian Army'
        duration='July 2016 - July 2017'
        description='One year in the Norwegian Air Defence Battalion, honing both self discipline and communication skills.'
      />
    </InfoSection>
  )
}

export default WorkExperienceOther