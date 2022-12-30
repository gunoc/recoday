import React from 'react'
import classes from "./EmotionItem.module.css";

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[classes.EmotionItem, isSelected ? `${classes[`EmotionItem_on_${emotion_id}`]}` : classes["EmotionItem_off"] ].join(" ")}
    >
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default React.memo(EmotionItem);
