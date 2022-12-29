import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

import classes from "./DiaryEditor.module.css";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContext } from "../App";

import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const DiaryEditor = ({ isEdit, originData }) => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));

  const { onCreate, onEdit } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  const emoteClickHandler = (emotion) => {
    setEmotion(emotion);
  };

  const submitHandler = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit ? "기록을 수정하시겠습니까?" : "새로운 기록을 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }

    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className={classes.DiaryEditor}>
      <MyHeader
        headText={isEdit ? "기록 수정하기" : "새로운 기록쓰기"}
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
        <section>
          <h4>오늘의 기록</h4>
          <div className={`${classes["input_box"]} ${classes["text_wrapper"]}`}>
            <textarea
              placeholder="오늘은 어땠슴까~"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section>
          <div className={classes["control_box"]}>
            <MyButton text={"취소하기"} onClick={() => navigate(-1)} />
            <MyButton
              text={"작성완료"}
              type={"positive"}
              onClick={submitHandler}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
