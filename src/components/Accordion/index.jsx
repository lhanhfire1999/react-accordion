import React from 'react';
import clsx from 'clsx';
import './Accordion.scss';

const Accordion = ({ title, content }) => {
  const [active, setActive] = React.useState(false);
  const handleClickTitle = () => setActive((prev) => !prev);
  return (
    <li className={clsx('accordion', { active })}>
      <div className="accordion__header" onClick={handleClickTitle}>
        <h3>{title}</h3>
        <span className="accordion__icon">
          <i className="bx bx-chevron-down"></i>
        </span>
      </div>
      <p className="accordion__content">{content}</p>
    </li>
  );
};

export default Accordion;
