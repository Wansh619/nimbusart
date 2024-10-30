import React from 'react';
import './styles.scss'; // Import CSS file for styling

const TimelineElement = ({ header, timePeriod, courseName }) => {
  return (
    <div className="timeline-element">
      <h3 className="timeline-header">{header}</h3>
      <p className="timeline-time">{timePeriod}</p>
      <p className="timeline-course">{courseName}</p>
    </div>
  );
};

const Timeline = () => {
  const elements = [
    {
      header: 'The Lnm institute of Information Technology ,Jaipur,Rajasthan',
      timePeriod: '2021 - 2025',
      courseName: 'B.Tech - ECE',
    },
    {
      header: 'Star international School, Ranchi',
      timePeriod: '2021',
      courseName: ' 12th | CBSE ',
    },
    {
      header: 'MDS Senior Secondary School, Udaipur',
      timePeriod: '2019',
      courseName: ' 10th | CBSE ',
    },
  ];

  return (
    <div className="timeline">
      {elements.map((element, index) => (
        <TimelineElement
          key={index}
          header={element.header}
          timePeriod={element.timePeriod}
          courseName={element.courseName}
        />
      ))}
    </div>
  );
};

export default Timeline;
