import './App.css';

function Advisor({name, title, children, href, website, img}) {
  return (
      <div className="advisor-card">
      <img src={img}  alt="logo"/>
    <container className="title">


    <h2>{name}</h2>
    <h3>{title}</h3>
        <p>
          {children}
        </p>
        <a
          className="link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {website}
        </a>
        {/* <input type="checkbox" id="expanded" /> 
        <label htmlFor="expanded" role="button">read more</label> */}

        </container>

    </div>
  );
}

export default Advisor