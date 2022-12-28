import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  console.log("id는? " + id);
  console.log("mode는? " + mode);

  const naviHandle = () => {
    navigate('./home')
  }
  const backHandle = () => {
    navigate(-1)
  }
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정페이지 입니다</p>
      <button onClick={() => setSearchParams({ who: "mugak" })}>
        쿼리스트링 바꾸기
      </button>

      <button onClick={naviHandle}>Home으로 가기</button>
      <button onClick={backHandle}>뒤로 가기</button>
    </div>
  );
};

export default Edit;
