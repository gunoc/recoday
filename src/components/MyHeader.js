import classes from "./MyHeader.module.css";
const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header>
      <div className={classes["head_btn_left"]}>{leftChild}</div>
      <div className={classes["head_text"]}>{headText}</div>
      <div className={classes["head_btn_right"]}>{rightChild}</div>
    </header>
  );
};

export default MyHeader;
