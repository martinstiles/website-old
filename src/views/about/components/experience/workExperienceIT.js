import React from 'react'
import InfoSection from '../infoSection'
import ExperienceBox from '../experienceBox'

const WorkExperienceIT = () => {

  return (
    <InfoSection header='WORK EXPERIENCE - IT'>
      <ExperienceBox
        title='SOFTWARE DEVELOPER INTERN'
        link='https://strise.ai/'
        company='Strise'
        duration='January 2020 - July 2020'
        keywords='Key technologies: React, TypeScript, GraphQL, Git'
        description='Interning as a front end developer. Strise aims to revolutionize enterprise software, and being a part of
          the team was a unique experience to me. I worked part time along side my studies from January til May, and then continued as
          an intern during summer. My tasks naturally included a lot of bug squashing and refactoring, but also implementing new features 
          in the product and creating internal tools for efficiency. I did, for instance, make a Slack bot to add previews for links to the
          Strise product in slack, which you can read about in this blogpost I wrote (link will come as soon as it is released).'
      />

      <ExperienceBox
        title='LEARNING ASSISTANT '
        link='https://www.ntnu.no/idi'
        company='NTNU'
        duration='January 2020 - May 2020 '
        keywords='Keywords: Mentoring, SQL, ER diagrams, normalizing theory'
        description='Student assistant in the course TDT4145: Data Modelling and Database Systems. Helping others professionally
          turns out to be something I enjoy more than I imagined.'
      />
    </InfoSection>
  )
}

export default WorkExperienceIT