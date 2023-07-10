const MenuItem = ({title, url}) => { // receive props selectively using obj destructuring
  // console.log(props);
  /** 
    * props are objects 
    * props are read-only
    * props can also have children
  */

  return (
    <li className="nav-item">
      <a className="nav-link" href={url}>
        {title}
      </a>
    </li>
  );
}

export default MenuItem