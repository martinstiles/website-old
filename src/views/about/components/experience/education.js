import React from 'react'
import InfoSection from '../infoSection'
import ExperienceBox from '../experienceBox'

const Eduaction = () => {  
  return (
    <InfoSection header='EDUCATION'>
      <ExperienceBox
        title='M.Sc. student in Computer Science'
        link='https://www.ntnu.no/studier/mtdt'
        company='NTNU'
        duration='August 2017 - Present'
        description='5 years integrated Masters degree at the Norwegian University of Science and Technology.
          Currently specializing in database systems, search engines and AI. I will finish the degree in spring 2022.'
      />
    </InfoSection>
  )
}

export default Eduaction