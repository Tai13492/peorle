import React from "react"
import Container from "../components/container"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Ingredients = () => (
  <Container>
    <div>
      <h1
        style={{
          fontWeight: 450,
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        ส่วนประกอบ <br /> คอลลาเจนพรีออร์เล่
      </h1>
    </div>
    <div className="ingredient_container">
      <div className="ingredient_item_data">
        <h1 style={{ fontWeight: 400 }}> 1. Shark Cartilage </h1>
        กระดูกอ่อนปลาฉลาม คือ
        โครงกระดูกของปลาฉลามทั้งตัวที่ถูกจับขึ้นมาและนำมาบดละเอียด อุดมไปด้วย
        ธาตุแคลเซียม, ฟอสฟอรัส, สารกลัยโคซามิโนกลัยแคน (Glycosaminoglycans)
        และสารมูโพลีแซคคาไรด์ (Mucopolysaccharide) นอกจากนี้ยังพบว่า
        กระดูกอ่อนปลาฉลามประกอบไปด้วย โปรตีนคอลลาเจน (Collagen)
        ซึ่งส่วนใหญ่เป็นสารคอนดรอยติน (Chondroitin)
        ซึ่งมีผลในการบรรเทาหรือรักษาโรคข้อเสื่อม
      </div>
      <div className="ingredient_item_img" style={{ textAlign: "center" }}>
        <Image name="shark" />
      </div>
    </div>
    <div className="ingredient_container">
      <div className="ingredient_item_data">
        <h1 style={{ fontWeight: 400 }}> 2. Tripeptide Fish Collagen</h1>
        <p>
          คอลลาเจนชนิดที่ 2 หรือ คอลลาเจนไทพ์ทู (อังกฤษ: type II collagen)
          เป็นพื้นฐานของกระดูกอ่อนข้อและกระดูกอ่อนโปร่งแสง ประกอบเป็น 50%
          ของโปรตีนทั้งหมดในข้อและ 85-90% ของคอลลาเจนของกระดูกอ่อนข้อ
        </p>
        <p>
          ก่อเป็นเส้นใยฝอยได้
          เครือข่ายคอลลาเจนเส้นใยฝอยนี้ทำให้กระดูกอ่อนดักการสะสมโปรตีโอไกลแคนตลอดจนให้ความทนแรงดึงต่อเนื้อเยื่อ
        </p>
        <p>
          เป็นคอลลาเจนชนิดเดียวกับที่พบในเซลล์กระดูกอ่อนบริเวณข้อต่อ
          แตกต่างจากคอลลเจนที่พบในเซลล์ผิวหนัง ซึ่งจะเป็นคอลลาเจนชนิดที่ 1, 3
          และ 4 (Collagen Type 1, 3 และ 4) คอลลาเจนไทพ์ทู
          จะช่วยซ่อมแซมส่วนที่สึกหรอของส่วนประกอบที่อยู่ในข้อ
          โดยกระตุ้นให้มีการสังเคราะห์เซลล์ใหม่เพิ่มขึ้น
          ช่วยเพิ่มระดับของกรดไฮยาลูโรนิค (Hyaluronic acid)
          ซึ่งเป็นส่วนประกอบของน้ำหล่อเลี้ยงในข้อ
          และยังยับยั้งการทำงานของเอนไซม์ที่ย่อยสลายน้ำหล่อเลี้ยงข้อ
          มีคุณสมบัติช่วยลดอาการปวดข้อและข้อยึดได้
          ทำให้การเคลื่อนไหวของร่างกายดีขึ้น
        </p>
      </div>
      <div className="ingredient_item_img" style={{ textAlign: "center" }}>
        <Image name="fish" />
      </div>
    </div>
    <div className="ingredient_container">
      <div className="ingredient_item_data">
        <h1 style={{ fontWeight: 400 }}> 3. Calcium Amino Acid Chelate</h1>
        <p>
          แคลเซียม อะมิโน แอซิด คีเลต
          ถือว่าเป็นแหล่งแคลเซียมใหม่ที่มีความเป็นชีวภาพอย่างแท้จริง
          อัตราการดูดซึมประมาณ 75 – 90 % ขึ้นไป เทียบกับแคลเซียม
          ทั่วไปสูงกว่าถึง 60 – 80 % และ สูงกว่าแคลเซียมในนมกว่า 60 %
          นอกจากนั้นโครงสร้างของแคลเซียมอะมิโน แอซิด คีเลต
          เมื่ออยู่ในลำไส้ของคนจะไม่รวมตัวกับกรด Oxalate และ Phytic ฯลฯ
          ซึ่งเป็นตัวยับยั้งการดูดซึมแคลเซียมในอาหาร
        </p>
        <p>
          การดูดซึมของแคลเซียม อะมิโน แอซิด คีเลต ไม่ต้องมีวิตามิน D3 มาผสม
          เป็นสิ่งที่แคลเซียมยี่ห้อปกติทั่วไปทำไม่ได้ แคลเซียม อะมิโน แอซิด
          คีเลต ต่อเนื้อเยื่อกระดูกมี
          <strong>
            Affinity for bone tissue เป็น 7 เท่าของเนื้อเยื่ออื่น ๆ
          </strong>
          จึงไม่ทำให้เกิดนิ่ว
          ขณะเดียวกันก็ยกระดับการนำแคลเซียมมาใช้ให้เป็นประโยชน์เป็นผลิตภัณฑ์แคลเซียมรุ่นใหม่ที่
          <strong>สมบูรณ์แบบที่สุดและปลอดภัยที่สุด</strong>
        </p>
        <p>
          แหล่งแคลเซียมประเภทนี้มีฤทธิ์ลักษณะกลาง ๆ ไม่ระคายเคืองต่อลำไส้
          ในระหว่างที่ร่างกายดูดซึม
          ไม่ได้รับผลกระทบจากการหลั่งของกรดในกระเพาะอาหาร
          และก็ไม่ทำให้ถึงการหลั่งกรดในกระเพาะอาหารผิดปกติรวมทั้งของเหลวในระบบย่อยอาหาร
          แน่นอนเมื่อผลิตภัณฑ์ แคลเซียม อะมิโน แอซิด คีเลต
          มีข้อเด่นที่พิเศษเช่นนี้ สิ่งที่สำคัญอย่างอื่น เช่น
          โมเลกุลขนาดเล็กใหญ่ โครงสร้าง Spatial structure โครงสร้าง Optically
          active structure
          ความสามารถการรวมตัวกับแคลเซียมไอออนมากหรือน้อยและลักษณะการทำละลายในน้ำ
          ทำละลายในไขมัน ฯลฯ ล้วนเป็นปัจจัยที่สำคัญอย่างมาก
          หากไม่มีเทคโนโลยีและกระบวนการผลิตที่ทันสมัย
          ย่อมไม่อาจทำให้ได้แคลเซียมที่ดีที่สุดได้
        </p>
        <p>
          <strong>
            สุดยอดแคลเซียมระดับโลก ฟอร์มที่ดูดซึมได้ง่ายที่สุดเกือบ 100%
            (แคลเซียม อะมิโน แอซิด คีเลต Calcium Amino Acid Chelate)
            มีปริมาณแคลเซียมสูง มีวิตามิน มีแร่ธาตุหลายชนิด รวมถึงกรด
            อะมิโนและโปรตีนที่จำเป็น
          </strong>
        </p>
      </div>
      <div className="ingredient_item_img" style={{ textAlign: "center" }}>
        <Image name="calcium" />
      </div>
    </div>
  </Container>
)

const Image = ({ name }) => (
  <StaticQuery
    query={graphql`
      query {
        shark: file(relativePath: { eq: "shark.jpg" }) {
          ...fixed250
        }
        fish: file(relativePath: { eq: "fish.jpg" }) {
          ...fixed250
        }
        calcium: file(relativePath: { eq: "calcium.jpg" }) {
          ...fixed250
        }
      }
    `}
    render={data => (
      <Img
        fixed={data[name].childImageSharp.fixed}
        style={{ borderRadius: 200 }}
        // style = {{display:'inline-block'}}
        // className={className}
        // style={style}
      />
    )}
  />
)

export default Ingredients
