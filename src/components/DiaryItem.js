import { useNavigate } from "react-router-dom";
import classes from "./DiaryItem.module.css";
import MyButton from "./MyButton";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleString();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className={classes.DiaryItem}>
      <div
        onClick={goDetail}
        className={`${classes["emotion_img_wrapper"]} ${
          classes[`emotion_img_wrapper_${emotion}`]
        }`}
      >
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt=""
        />
      </div>
      <div onClick={goDetail} className={classes["info_wrapper"]}>
        <div className={classes["diary_date"]}>{strDate}</div>
        <div className={classes["diary_content_preview"]}>
          {content.slice(0, 25)}
        </div>
      </div>
      <div className={classes["btn_wrapper"]}>
        <MyButton onClick={goEdit} text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
