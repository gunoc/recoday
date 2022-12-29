import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import classes from "./DiaryList.module.css";
import MyButton from "./MyButton";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "good", name: "좋은" },
  { value: "bad", name: "안좋은" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className={classes.ControlMenu}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((el, i) => (
        <option key={i} value={el.value}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(a.date) - parseInt(b.date);
      } else {
        return parseInt(b.date) - parseInt(a.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList =
      filter === "all" ? copyList : copyList.filter((el) => filterCallBack(el));
    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className={classes.DiaryList}>
      <div className={classes["menu_wrapper"]}>
        <div className={classes["left_col"]}>
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className={classes["right_col"]}>
          <MyButton
            type={"positive"}
            text={"추가하기"}
            onClick={() => navigate("./new")}
          />
        </div>
      </div>

      {getProcessedDiaryList().map((el) => (
        <div key={el.id}>
            <DiaryItem key={el.id} {...el}/>
        </div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
