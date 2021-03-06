import React from "react"
import Container from "../components/container"
import { graphql, StaticQuery, navigate } from "gatsby"
import Img from "gatsby-image"

const WhyPeorle = () => (
  <Container>
    <div style={{ margin: "auto", maxWidth: 700, marginTop: 36 }}>
      <Image name="why_collagen" />
      <h1 style={{ fontWeight: 400, marginBottom: 0, textAlign: "center" }}>
        ทำไมต้องพีออร์เล่
      </h1>
      <p style={{ fontWeight: 300, marginTop: 8 }}>
        {" "}
        คอลลาเจนพีออร์เล่ เป็นสารสกัดคอลลาเจนจากปลาแซลมอนในประเทศเยอรมัน
        ประเทศเยอรมัน เป็นประเทศที่มีความเย็นตลอดเกือบทั้งปี
        และเป็นความเย็นในระดับที่เชื้อโรคอันตรายไม่สามารถอยู่อาศัยได้
        จึงทำให้คอลลาเจนจากปลา ณ ที่แห่งนี้
        ปราศจากเชื้อโรคหรือเชื้อแบคทีเรียต่างๆ และเพื่อสุขภาพของผู้บริโภค
        คอลลาเจนพีออร์เล่จึงไม่ใส่สารเติมแต่ง เช่น น้ำตาล แป้ง สี กลิ่น รส
        ไร้สารตกค้างที่เป็นอันตราย มั่นใจ ได้คุณภาพทุกกล่อง
        ด้วยมาตรฐานระดับโลกในราคาที่คุณจับต้องได้
      </p>
      <p>
        <strong>
          คอลลาเจนแท้คุณภาพสูง คัดสรรจากปลาทะเลน้ำลึกจากธรรมชาติ ดื่มง่าย ใสๆ
          เหมือนน้ำเปล่า
        </strong>
      </p>
    </div>
    <div className="content_container">
      <div className="itemy">
        <div
          style={{
            textAlign: "center",
            margin: "16px 0px",
          }}
        >
          <Image name="drink" />
        </div>
      </div>
      <div className="itemy">
        <h1 style={{ fontWeight: 400, marginBottom: 0 }}>
          เบื่อมั้ย กับการที่เราอยากมีผิวพรรณที่สวยดูดีมีออร่า
          แต่ต้องทานอาหารเสริมครั้งนึงเป็นกำมือ
        </h1>

        <p style={{ fontWeight: 300, marginTop: 8 }}>
          เพราะเราเข้าใจว่า“คุณไม่ต้องการรับประทานคอลลาเจนเพื่อเป็นยา”
          จะดีแค่ไหนหากคุณรับประทานคอลลาเจนเพียงเล็กได้แต่ได้คุณประโยชน์ครบครัน
          ทั้งให้ผิวพรรณที่สวยดูดีและสุขภาพที่แข็งแรงสดใส
          เพื่อลดความยุ่งยากเหล่านั้น พีออร์เล่ คอลลาเจน
          ได้ใช้นวัตกรรมการผลิตคอลลาเจนแบบ Hydrolyzed Collagen Tripeptide Type 2
          (ไฮโดรไลซ์ คอลลาเจน ไตรเปปไทด์ ไทป์ 2 )
          เป็นเทคโนโลยีในการผลิตแบบล่าสุดของโลก
          ซึ่งจะแตกต่างจากคอลลาเจนเปปไทด์แบบธรรมดาทั่วไป โดยคอลลาเจน ไตรเปปไทด์
          ไทป์ 2 นี้ ร่างกายสามารถดูดซึมและนำไปใช้ได้รวดเร็วกว่าเดิม เช่น
          หากปกติคุณดื่มคอลลาเจนแบบทั่วไปตามท้องตลาด คุณอาจทาน 2 ช้อนตวง
          แต่หากคุณทานพีออร์เล่คอลลาเจน <br />{" "}
          <strong> คุณทานเพียงแค่ 1 ช้อนตวง เท่านั้น </strong>
        </p>
      </div>
      <div
        style={{
          padding: 24,
          backgroundColor: "#135fa2",
          fontWeight: 300,
          color: "white",
          width: "100vw",
        }}
      >
        <h1 style={{ textAlign: "center", fontWeight: 200, color: "white" }}>
          พีออร์เล่คอลลาเจน <br />
          มีดีอย่างไร
        </h1>
        <p style={{ maxWidth: 600, margin: "auto" }}>
          เราเป็น ไฮโดรไลเซท คอลลาเจนไตรเปปไทด์ ไทป์ 2 จุดเด่น คือ
          ดูดซึมง่ายและรวดเร็ว โดยปกติแล้วคอลลาเจนเป็นโปรตีนที่มีโมเลกุลขนาดใหญ่
          ดั้งนั้นหากใช้วิธีรับประทานร่างกายมนุษย์จะดูดซึมและนำไปใช้ได้ยากมาก
          แต่สารสกัดคอลลาเจนของเรา
          ใช้นวัตกรรมล่าสุดซึ่งทำให้ร่างกายสามารถดูดซึมง่ายและรวดเร็วนำไปใช้ได้เลย
          โดยไม่ต้องใช้ระยะเวลานาน
        </p>
      </div>
      <div className="content_container">
        <div className="item1">
          <h1 style={{ fontWeight: 400, marginBottom: 0 }}>
            คอลลาเจนแท้คุณภาพสูง <br />
            คัดสรรจากปลาทะเลน้ำลึกธรรมชาติ
          </h1>
          <p style={{ fontWeight: 300 }}>
            สารสกัด พีออร์เล่คอลลาเจน
            ของเราสกัดมาจากปลาทะเลน้ำลึกจากธรรมชาติเท่านั้น
            ไม่มีการสกัดจากปลาเพาะเลี้ยงเด็ดขาด
            นั่นเพราะปลาธรรมชาติจะให้คอลลาเจนบริสุทธิ์คุณภาพสูง
            ในขณะที่ปลาเลี้ยงจะให้คอลลาเจนคุณภาพต่ำเนื่องด้วยการเพาะเลี้ยงในพื้นที่จำกัด
            แออัด น้ำมีอุณหภูมิสูง จึงมักมีปัญหาเรื่องเชื้อโรค
            ด้วยความจริงเหล่านี้ เราจึงคัดสรรสิ่งที่ดีที่สุด
            โดยการเลือกใช้ปลาทะเลน้ำลึกแห่งมหาสมุทรแอตแลนติกเหนือ
            ซึ่งเป็นทะเลที่มีกระแสน้ำเย็น ปราศจากสิ่งเจือปนที่อันตราย
            เพื่อคุณได้คอลลาเจนแท้คุณภาพสูง
          </p>
        </div>
        <div
          className="item2"
          style={{ textAlign: "center", margin: "16px 0px" }}
        >
          <Image name="germany" />
        </div>
      </div>
      <div style={{ margin: "auto", maxWidth: 700, marginTop: 36 }}>
        <Image name="trust" />
        <h1 style={{ fontWeight: 400, marginBottom: 0, textAlign: "center" }}>
          พีออร์เล่คอลลาเจน มั่นใจ ปลอดภัย
        </h1>
        <p style={{ fontWeight: 300, marginTop: 8 }}>
          หลายคนไม่กล้ารับประทานคอลลาเจน เพราะกลัวอ้วน รู้หรือไม่
          คอลลาเจนแท้ไม่ได้ทำให้อ้วน เพราะอย่างที่กล่าวไปข้างต้น
          คอลลาเจนคือสารอาหารจำพวกโปรตีน
          ซึ่งหน้าที่หลักของโปรตีนคือเสริมสร้างเนื้อเยื่อ กล้ามเนื้อ กระดูก เอ็น
          และข้อต่อ แต่เหตุผลที่บางคนรับประทานคอลลาเจนแล้วอ้วนนั้น
          เนื่องจากคอลลาเจนบางยี่ห้อ
          มักใส่สารเติมแต่งจำพวกน้ำตาลและแป้งในปริมาณมาก สารเหล่านี้
          ที่มีผลข้างเคียงทำให้น้ำหนักขึ้นโดยไม่รู้ตัว แต่เราคือ
          พีออร์เล่คอลลาเจน "เพียวคอลลาเจน" ที่ปราศจาก น้ำตาล แป้ง สีผสมอาหาร
          หรือสารเติมแต่งอันตราย เช่น แป้ง น้ำตาล ทรานซามิน คุณจึงมั่นใจ
          หมดปัญหาเรื่องน้ำหนักขึ้นหรือสารตกค้าง สะสมในร่างกาย
          ซึ่งอาจทำให้เกิดโรคต่างๆ ขึ้นได้ในอนาคต
        </p>
        <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <button className="primary" onClick={() => navigate("/ingredients")}>
            <span style={{ fontWeight: 160, fontSize: "1.2em" }}>
              ส่วนประกอบ
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
        drink: file(relativePath: { eq: "drink.jpg" }) {
          ...fullWidthImage
        }
        germany: file(relativePath: { eq: "germany.jpg" }) {
          ...fullWidthImage
        }
        trust: file(relativePath: { eq: "trust.jpg" }) {
          ...fullWidthImage
        }
        why_collagen: file(relativePath: { eq: "why_collagen.jpg" }) {
          ...fullWidthImage
        }
      }
    `}
    render={data => (
      <Img
        fluid={data[name].childImageSharp.fluid}
        style={{ width: "80%", margin: "auto", maxWidth: 400 }}
      />
    )}
  />
)

export default WhyPeorle

// # peorle_product: file(relativePath: { eq: "best-collagen.jpg" }) {
//   #   ...fixed250
//   # }
//   # collagen: file(relativePath: { eq: "what-is-collagen.jpg" }) {
//   #   ...fixed250
//   # }
