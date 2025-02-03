import { useNavigate } from "react-router-dom";
import Btn from "./btn";
import Button from "../../Common/Button";
import styled from "styled-components";

export default function MainTitle() {
    const ImgStyle = styled.div`
        width: 100%;
        max-width: 409px;
        height: 77px;
        margin: 34px 0 26px 0;
    `
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/AboutUs")
    }
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", columnGap: "12px" }}>
                <Button text={"NEW"} borderRadius={"6px"} width={"45px"} height={"28px"} fontSize={"12px"} />
                <span>2025 App & Me Website</span>
            </div>
            <ImgStyle><img src="/images/logo.png"></img></ImgStyle>

            <div>
                <p style={{ color: "#FFFFFF99", marginBottom: "5px" }}>앱앤미는 차세대 개발 흐름에 따른 기술들을 익히고 연구하며</p>
                <p style={{ color: "#FFFFFF99" }}>실제로 서비스를 구현해서 학교 및 사회에 기여하는 전공 동아리입니다.</p>
            </div>

            <Btn width={"149px"} backColor={"#FFFFFF26"} fontColor={"#FFF"} onClick={onClick} />
        </div>
    )
}