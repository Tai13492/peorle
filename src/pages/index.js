import React from "react"
import Container from "../components/container"
import { graphql, StaticQuery, navigate } from "gatsby"
import Img from "gatsby-image"

const LandingPage = () => (
  <Container>
    <div className="content_container">
      <div className="item1">
        <h1 style={{ fontWeight: 400, marginBottom: 0 }}>
          ผลิตภัณท์อาหารเสริม <br />
          คอลลาเจน พีออร์เล่
        </h1>
        <h3 style={{ fontWeight: 400, marginTop: 0, marginBottom: 0 }}>
          เราคือไฮโดรไลเซท คอลลาเจนไตรเปปไทด์ ไทป์ 2
        </h3>
        <p style={{ fontWeight: 300, marginTop: 8 }}>
          คอลลาเจน จากพีออร์เล่ คอลลาเจน" อุดมด้วยไฮโดรไลเซส ซุปเปอร์ เปปไทด์
          คอลลาเจน จากปลาทะเลน้ำลึก ประเทศเยอรมัน ปริมาณสูงถึง 10,000 มก.
          ทำให้ดูดซึมได้เร็ว ประสิทธภาพสูง
          พร้อมทั้งสารสกัดจากสาหร่ายแดงแหล่งรวมแคลเซียมจากธรรมชาติ 100%
          มีการสะสมแร่ธาตุไว้มากถึง 72 ชนิด ยังมีแร่ธาตุสำคัญอย่าง
          "แคลเซียม"และ"แมกนีเซียม" รวมทั้งสิ้น 74 ชนิด
        </p>
      </div>
      <div
        className="item2"
        style={{ textAlign: "center", margin: "16px 0px" }}
      >
        <Image name="peorle_product" />
      </div>
    </div>
    <div style={{ margin: "auto", maxWidth: 700, marginTop: 36 }}>
      <h1 style={{ fontWeight: 400, marginBottom: 0, textAlign: "center" }}>
        ทานง่าย ย่อยง่าย ดูดซึมได้ดี ท้องไม่ผูก
      </h1>
      <p style={{ fontWeight: 300, marginTop: 8 }}>
        {" "}
        มีประสิทธิภาพ Bioavailability สูง ไม่ก่อให้เกิดนิ่วในไตและกระเพาะปัสสาวะ
        และมีผลงานวิจัยที่น่าเชื่อถือทางวิทยาศาสตร์กว่า 20 ฉบับ ซึ่งแร่ธาตุหลัก
        ๆ ที่คัดคอลลาเจนคุณภาพเกรดพรีเมี่ยมมาตรฐานระดับโลก
      </p>
      <p style={{ fontWeight: 300, marginTop: 8 }}>
        {" "}
        เป็นคอลลาเจนแท้ที่มีความบริสุทธิ์ปราศจากสารปนเปื้อน
        ให้ผลลัพธ์ที่ดีต่อร่างกายและผิวพรรณ รับประกันความปลอดภัยต่อผู้บริโภค
        เป็นคอลลาเจนที่มอบความคุ้มค่าให้แก่คุณได้อย่างครบถ้วน
        ทั้งในเรื่องราคาและคุณภาพ
      </p>
      <p style={{ fontWeight: 500 }}>
        คอลลาเจนแท้คุณภาพสูง คัดสรรจากปลาทะเลน้ำลึกจากธรรมชาติ ดื่มง่าย ใสๆ
        เหมือนน้ำเปล่า
      </p>
      <p style={{ textAlign: "center" }}>
        <button className="primary" onClick={() => navigate("/why-peorle")}>
          <span style={{ fontWeight: 160, fontSize: "1.2em" }}>
            ทำไมต้องพีออร์เล่
          </span>
        </button>
      </p>
    </div>
    <div className="secondary_container">
      <div
        className="sub_item1"
        style={{ textAlign: "center", margin: "16px 0px" }}
      >
        <Image name="collagen" />
      </div>
      <div className="sub_item2">
        <h1 style={{ fontWeight: 400, marginBottom: 0 }}>คอลลาเจนคืออะไร </h1>

        <p style={{ fontWeight: 300, marginTop: 8 }}>
          หากคุณเป็นคนหนึ่งที่ยังคงสงสัยเคลือบแคลงใจกับสิ่งที่เรียกว่า
          “คอลลาเจน” วันนี้เราจะมาไขปริศนาให้ทุกคนได้รู้แจ้งเห็นจริงกัน
          ว่าเจ้าคอลลาเจนที่เคยได้ยินกันจนชินหูเนี่ย แท้จริงแล้วคืออะไร?
        </p>

        <p style={{ textAlign: "center" }}>
          <button
            className="primary"
            onClick={() => navigate("/what_is_collagen")}
          >
            <span style={{ fontWeight: 160, fontSize: "1.2em" }}>
              คอลลาเจนคืออะไร
            </span>
          </button>
        </p>
      </div>
    </div>
  </Container>
)

const Image = ({ name }) => (
  <StaticQuery
    query={graphql`
      query {
        peorle_product: file(relativePath: { eq: "best-collagen.jpg" }) {
          ...fixed250
        }
        collagen: file(relativePath: { eq: "what-is-collagen.jpg" }) {
          ...fixed250
        }
      }
    `}
    render={data => (
      <Img
        fixed={data[name].childImageSharp.fixed}
        style={{ borderRadius: 200 }}
      />
    )}
  />
)

export default LandingPage
