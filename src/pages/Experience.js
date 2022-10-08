import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";

export const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Present"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor Degree in Computer Science</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Genoa, Genoa, Italy</h4>
          <p>
            Algorythm and Data Structures, Object-Oriented-Programming
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' date="Present" iconStyle={{background: '#3e497a', color: "#fff"}} icon={<WorkIcon/>}>
          <h3 className="vertical-timeline-element-title"> Looking For a Work Experience </h3>
          <p> Looking for a first software developer experience to learn and apply my knowlage to a real-world project  </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
