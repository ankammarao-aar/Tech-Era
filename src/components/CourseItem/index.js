import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {courseDetails} = props
  const {id, name, logoUrl} = courseDetails

  return (
    <Link to={`/courses/${id}`} className="link">
      <li className="course-list-item">
        <img src={logoUrl} alt={name} className="course-img" />
        <p className="course-name">{name}</p>
      </li>
    </Link>
  )
}

export default CourseItem
