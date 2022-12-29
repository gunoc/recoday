import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

import classes from "./Diary.module.css";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (el) => parseInt(el.id) === parseInt(id)
      );
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className={classes.DiaryPage}>로딩중입니다...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (el) => parseInt(el.emotion_id) === parseInt(data.emotion)
    );
    console.log(curEmotionData);

    return (
      <div className={classes.DiaryPage}>
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
          }
          rightChild={
            <MyButton
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={`${classes["diary_img_wrapper"]} ${
                classes[`diary_img_wrapper_${data.emotion}`]
              }`}
            >
              <img src={curEmotionData.emotion_img} alt="" />
              <div className={classes["emotion_descript"]}>
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 기록</h4>
            <div className={classes["diary_content_wrapper"]}>
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
