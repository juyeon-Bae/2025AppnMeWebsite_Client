import TitleCard from "../components/Common/TitleCard"
import Button from "../components/Common/Button"
import Footer from "../components/Common/Footer"
import Bottom from "../components/Common/Bottom"
import QForm from "../components/QnA/qForm"
import Header from "../components/Common/TopHeader"
import Banner from "../components/Home/MainTitle/Banner"

import { useRef } from "react";
import { motion } from "framer-motion";

export default function QuestionForm() {

    const formRef = useRef(null);
    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div>
            <Header />
            <Banner height={"70%"} />
            <div style={{ marginTop: "130px" }}>
                <TitleCard
                    btnHeight={"28px"} btnWeight={"46px"} borderRadius={"6px"} fontSize={"12px"} btnText={"2025"}
                    mainTitle={"질문 폼 입니다!"}
                    subTitle1={"자유롭게 질문해주세요!"}
                /></div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "38px 0 136px 0", zIndex: "1" }}>
                <Button width={"156px"} height={"46px"} text={"Fill The Form Out!"} borderRadius={"10px"} onClick={scrollToForm} />
            </div>

            {/* 질문 폼 */}
            <motion.div ref={formRef} initial={{ opacity: 0 }} animate={{ opacity: 1, zIndex: "10", position: "relative", transition: { duration: 0.5 } }}>
                <QForm />
            </motion.div>

            <Bottom margin={"100px 0 0 0"} />
            <Footer />
        </div>
    )
}