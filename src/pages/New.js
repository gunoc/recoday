import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const New = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MyHeader
        headText={"새로운 기록 쓰기"}
        leftChild={
          <MyButton onClick={() => navigate(-1)} text={"< 뒤로가기"} />
        }
      />
      <div>
        <section>
          
        </section>
      </div>
    </div>
  );
};

export default New;
