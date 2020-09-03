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
          the team was a unique experience. I worked part time alongside my studies until May, and then continued as
          an intern during summer. My tasks naturally included a lot of bug squashing and refactoring, but also implementing new features 
          and creating internal tools for efficiency. An example is making a Slack bot to add previews for links to the
          Strise products. You can read about that and more in this blogpost I wrote for Strise (link will come as soon as it is released).'
      />

      <ExperienceBox
        title='LEARNING ASSISTANT '
        link='https://www.ntnu.no/idi'
        company='NTNU'
        duration='January 2020 - May 2020 '
        keywords='Keywords: Mentoring, SQL, ER diagrams, normalizing theory'
        description='Student assistant in the course TDT4145: Data Modelling and Database Systems.
        It was a great joy helping other students professionally. I usually spent more time than I was paid for just for the fun of it.'
      />
    </InfoSection>
  )
}

export default WorkExperienceIT