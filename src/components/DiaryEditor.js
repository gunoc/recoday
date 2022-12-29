import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

import classes from "./DiaryEditor.module.css";
import EmotionItem from "./EmotionItem";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_descript: "완전 좋음",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_descript: "좋음",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_descript: "보통",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_descript: "별루",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_descript: "개별루",
  },
];

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));

  const navigate = useNavigate();

  const emoteClickHandler = (emotion) => {
    setEmotion(emotion);
  };

  return (
    <div className={classes.DiaryEditor}>
      <MyHeader
        headText={"새로운 기록 쓰기"}
        leftChild={
          <MyButton onClick={() => navigate(-1)} text={"< 뒤로가기"} />
        }
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className={classes["input_box"]}>
            <input
              className={classes["input_date"]}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div
            className={`${classes["input_box"]} ${classes["emotion_list_wrapper"]}`}
          >
            {emotionList.map((el) => (
              <EmotionItem
                key={el.emotion_id}
                {...el}
                onClick={emoteClickHandler}
                isSelected={el.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
