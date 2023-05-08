import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'


const BarIcon = () => {
  return (
    <div>
      <h1>
        {/* <img src="" alt="페이지 로고" /> */}
        {/* 임시 아이콘 */}
        <FontAwesomeIcon icon={faBars}/>
      </h1>
    </div>
  );
};

export default BarIcon;
