import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {

  useEffect(()=>{
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `독기 - 새 기록`
  },[])
  return <div>
     <DiaryEditor></DiaryEditor>
  </div>
};

export default New;
