import "./Middle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Middle = (props) => {
  return (
    <div>
      <div className="middle__container">
       

            {/* <table>
                <tr>
                    <td className=""> 
                    <FontAwesomeIcon icon="fa-solid fa-gear" />
                    </td>
                    <td>
                        <p className="leftHand">{props.title}</p>
                    </td>
                    <td>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                             </td>
                </tr>
              <tr>
                <td className="fontAwsome__table ">
                  <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                </td>
                <td>
                  <p className="leftHand">{props.title}</p>
                </td>
                <td>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                             </td>
              </tr>
              <tr>
                <td >
                <FontAwesomeIcon icon="fa-solid fa-tags">
                      </FontAwesomeIcon>
                </td>
                <td>
                    <p className="leftHand">{props.title}</p>
                </td>
                <td>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                             </td>
              </tr>
            </table> */}
            <div className="title__container">
            <p>{props.title}</p>
            </div>
            <FontAwesomeIcon icon={props.icon} />
            <div className="arrow__container">
            <FontAwesomeIcon icon={props.icon__1} />
            </div>
            

      </div>


    </div>
  );
};
export default Middle;
