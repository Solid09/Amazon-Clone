import './CSS/UnorderedProductsList.css'

function UnorderedProductsList(props){
   return(
      <div className="unorderedListContainer">
        <h2 style={{margin:'0', padding:'0'}}>{props.header}</h2>
        <ul className="unorderedList">
          {Array(props.listSize)
            .fill()
            .map((_, index) => (
              <li key={index}>
                <a href="#">
                  <img
                    src={props.placeHolderImg}
                    alt={`Product ${index + 1}`}
                  />
                </a>
              </li>
            ))}
        </ul>
      </div>
   )
}

export default UnorderedProductsList;