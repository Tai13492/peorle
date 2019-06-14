import React from "react"
import Container from "../components/container"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const WorkWithUs = () => (
  <Container>
    <div style={{ textAlign: "center" }}>
      <div style={{ textAlign: "center", marginTop: 24 }}>
        <Image />
      </div>
      <h1 style={{ fontWeight: 400 }}> ตัวแทนผู้จัดจำหน่าย </h1>
      <div style={{ textAlign: "left", maxWidth: 900, margin: "auto" }}>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <div className="number">1.</div>
          ต้องสมัครผ่านตัวแทนจำหน่ายที่มีรหัสเป็น Vip หรือ
          สมัครกับบริษัทในช่วงที่ บจก.peorle เปิดรับเท่านั้น
          (บริษัทจะเปิดรับตัวแทน Vip จนกว่าจะครบตามเป้าหมาย)
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <div className="number">2.</div>
          ตัวแทนที่สต๊อกตั้งแต่ 500 (Vip
          )ขึ้นไปเท่านั้นจึงจะมีสิทธิ์รับตัวแทนในสายงานตนเอง
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <div className="number">3.</div>
          ตัวแทนแบบ Vip หากไม่มีการสั่งซื้อภายในระยะเวลา 6 เดือน
          ถือว่าสละสิทธิ์การเป็น Vip
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <div className="number">4.</div>
          เรทราคาขายส่งตัวแทนในทีมขายต้องเป็นเรทเดียวกันกับบริษัทเท่านั้น
          ห้ามกำหนดใหม่ หรือเปลี่ยนแปลง เพื่อควบคุมเกณฑ์ราคา (ตามตาราง**)
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <div className="number">5.</div>
          ราคาขายปลีก peorleต้องขายราคาเดียวกันคือ 690 บาท ห้ามลดราคา
          และตัวแทนห้ามคิดค่าส่งลูกค้า เพราะเน้นการดูแล *1 กล่องก็ส่งฟรี
          (เพราะถือเป็นโปรโมชั่นถาวรที่บริษัทจัดขึ้น)
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <div className="number">6.</div>
          ห้ามจัดโปรโมชั่น ลด แลก แจก แถม เป็นผลิตภัณฑ์ใดๆก็ตามของบริษัท PEORLE
          จำกัด เพราะถือเป็นการตัดราคายกเว้นกระตุ้นกันเองในกลุ่มทีมขาย
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <div className="number">7.</div>
          ห้ามจัดโปรโมชั่นสะสมจำนวนยอดสั่งซื้อในทีมขายเพื่อแลกเป็นเงินหรือของที่มีมูลค่าแปลเป็นเงินได้
          เช่นทองคำโดยที่บริษัทไม่เป็นคนกำหนดขึ้น
          เพราะถ้าออกโปรเองบริษัทจะไม่รับผิดชอบใดๆ
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <div className="number">8.</div>
          ห้ามหาสินค้าเองข้ามทีมโดยเด็ดขาดเพื่อป้องกันปัญหาที่จะตามมาในอนาคต
          ถือเป็นการคอร์สไลน์กัน ในกรณีลูกทีมต้องการสินค้าเพิ่มให้แจ้ง vip แล้ว
          vip จะเป็นผู้หาสินค้าให้กับลูกทีมเองเท่านั้น
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <div className="number">9.</div>
          หากบริษัท peorle มีการเปิดจอง product สินค้าแต่ละล็อต vip
          จะเป็นผู้แจ้งลูกทีมว่าทางบริษัทเปิดจองเมื่อไหร่ เก็บมัดจำเมื่อไหร่
          กระจายสินค้าล็อตแรกจำนวนเท่าไหร่ ได้ครบหรือไม่
          ลูกทีมมีหน้าที่ต้องสอบถามผ่านvip ให้ชัดเจนก่อนการตัดสินใจจองสินค้า
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <div className="number">10.</div>
          ห้ามสมัครซ้ำซ้อนข้ามสาย
          ถ้าบริษัทตรวจเช็คและจับได้จะถูกตัดออกจากการเป็นตัวแทนทันที
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <div className="number">11.</div>
          ห้ามชักชวนข้ามสาย
          ถ้าบริษัทตรวจเช็คและจับได้จะถูกตัดออกจากการเป็นตัวแทนทันที
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          **กฎต่างๆที่บริษัท ขอสงวนสิทธิ์ในการเปลี่ยนแปลงและจะแจ้งล่วงหน้า 1
          เดือน และการตั้งกฏเพื่อจะสร้างวัฒนธรรมองกรณ์ให้อยู่กันอย่างมั่นคง
          และสบายใจ**
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          ***การสมัครเป็นตัวแทนจำหน่ายระดับ Vip
          จะมีสัญญาเป็นการเป็นตัวแทนจำหน่าย ให้ผู้ที่ต้องการจะเป็นตัวแทนระดับ
          vip เขียนข้อมูลให้ครบถ้วน
          และลงรายละเอียดของทั้งสองฝ่ายเป็นลายลักษณ์อักษร
          เพื่อความสบายใจทั้งสองฝ่าย***
        </div>

        <div style={{ marginBottom: 36 }}>
          เปิดรับตัวแทน 3 รอบเท่านั้น <br /> รอบที่ 1. 20 คน <br /> รอบที่ 2. 20
          คน <br />
          รอบสุดท้าย 20 คน <br />
          ขอขอบคุณทุกท่านที่เข้ามาร่วมเป็นครอบครัวเดียวกันกับเรา บริษัท peorle
          จำกัด 🙏
        </div>
      </div>
      <button
        className="primary"
        style={{ marginBottom: 36 }}
        onClick={() =>
          (window.location.href = "http://line.me/ti/p/~@628jmziy")
        }
      >
        <span style={{ fontWeight: 160, fontSize: "1.2rem" }}>
          สมัครเป็นตัวแทนจำหน่าย
        </span>
      </button>
    </div>
  </Container>
)

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        work_with_us: file(relativePath: { eq: "work_with_us.jpg" }) {
          ...fixed250
        }
      }
    `}
    render={data => (
      <Img
        fixed={data["work_with_us"].childImageSharp.fixed}
        style={{ borderRadius: 250 }}
      />
    )}
  />
)

export default WorkWithUs
