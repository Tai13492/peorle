import React from "react"
import Container from "../components/container"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const WhatIsCollagen = () => (
  <Container>
    <div style={{ textAlign: "center" }}>
      <div style={{ textAlign: "center", marginTop: 24 }}>
        <Image />
      </div>
      <h1 style={{ fontWeight: 400 }}> คอลลาเจนคืออะไร? </h1>
      <div style={{ textAlign: "left", maxWidth: 900, margin: "auto" }}>
        <p>
          หากคุณเป็นคนหนึ่งที่ยังคงสงสัยเคลือบแคลงใจกับสิ่งที่เรียกว่า
          “คอลลาเจน” วันนี้เราจะมาไขปริศนาให้ทุกคนได้รู้แจ้งเห็นจริงกัน
          ว่าเจ้าคอลลาเจนที่เคยได้ยินกันจนชินหูเนี่ย แท้จริงแล้วคืออะไร?
          มีประโยชน์กับมนุษย์หรือไม่? จำเป็นต้องลงทุนกับสิ่งนี้หรือเปล่า?
          ทุกคำถามมีคำตอบ หากคุณยังไม่รู้จริง
          อย่าเพิ่งมองว่าคอลลาเจนเป็นเรื่องไร้สาระของคนอยากสวยเพียงอย่างเดียว
          เพราะถ้าได้ลองเปิดใจทำความรู้จักกับเจ้าสารอาหารชนิดนี้แล้ว
          คุณจะประทับใจในคุณประโยชน์ของเค้าจนลืมไม่ลง
        </p>
        <p>
          คอลลาเจน คือ โปรตีนที่อยู่ในร่างกายของคุณนั่นแหละ อ้าว!
          มีแล้วจะทานเสริมอีกทำไม?
          นั่นก็เพราะคอลลาเจนจะผลิตน้อยลงเมื่อคุณอายุมากขึ้น
          ซึ่งก็คือช่วงที่ร่างกายมนุษย์หยุดเจริญเติบโตหรือเรียกอีกอย่างคือโตเต็มวัยนั่นเอง
          ถ้าบอกเป็นตัวเลขก็ประมาณช่วงอายุ 20 ปีขึ้นไป
          กล่าวมาถึงตรงนี้หลายท่านคงยิ่งอยากรู้ เพราะถ้าคอลลาเจนผลิตน้อยลงจริง
          ผลกระทบที่เกิดขึ้นกับมนุษย์อย่างชัดเจนคืออะไร?
          คุณลองสังเกตตัวเองสมัยเด็กจนถึงช่วงวัยรุ่นแรกแย้มดูสิ
          ตอนนั้นไม่ว่าคุณใช้ชีวิตโลดโผนหรือบุกป่าฝ่าดงแค่ใหน คุณก็ยังคงแข็งแรง
          ใบหน้าฉายแววอ่อนเยาว์ สดใสเปล่งปลั่ง ผิวพรรณดูนุ่ม เต่งตึง
          แผลเป็นที่เกิดขึ้นในช่วงนั้นไม่เคยทิ้งรอยให้คุณต้องเป็นกังวลหรือถ้ามีก็จางจนแทบมองไม่เห็นราวกับลงครอสทำเลเซอร์มา
          เป็นผลมาจากอัตราการสร้างคอลลาเจนที่ยังคงมีมากเพราะเป็นวัยที่ร่างกายเจริญเติบโต
          แต่เมื่อคุณอายุ 20 ปีขึ้นไป แล้วไม่ดูแลสุขภาพตัวเอง
          ยังประพฤติตัวโลดโผนเหมือนดังช่วงวัยรุ่นแรกแย้ม
          หลังจากนี้แหละคุณจะได้เรียนรู้กับสัจธรรมที่ว่า
          “สัตว์โลกย่อมเป็นไปตามกรรม” เพราะผลที่ตามมาจากการละเลยตัวเอง คือ
          ปวดเมื่อยง่าย เกิดริ้วรอยก่อนวัย ผิวแห้งกร้าน
          ใต้ตาและใบหน้าหมองคล้ำง่ายราวกับโดนของ
          นี่ยังไม่รวมถึงแผลเป็นที่นอกจากจะหายยากหายเย็นแล้วยังทิ้งรอยดำฝังลึกให้เราเจ็บใจเล่นอีก
          เป็นผลจากอัตราการสร้างคอลลาเจนที่ลดน้อยลงเปรียบดังคนรักที่ทำตัวห่างเหินทิ้งให้เราเหี่ยวเฉาไร้คนดูแล
          เป็นเช่นนี้แล้วคุณยังคงคิดว่าการทานคอลลาเจนเสริมเป็นเรื่องไร้สาระของคนอยากสวยอีกหรือไม่?
        </p>
        <p style={{ marginBottom: 36 }}>
          เท่านี้คงคลายข้อสงสัยของหลายๆคนลงได้
          ว่าเหตุใดบางคนถึงพยายามเสาะหาคอลลาเจนที่ดีมีคุณภาพมารับประทานเสริม
          จริงอยู่ที่คอลลาเจนเป็นสารอาหารจำพวกโปรตีนซึ่งหาได้จากอาหารประเภทเนื้อสัตว์
          แต่คุณต้องรับประทานเนื้อสัตว์ประเภทไหน? หรือปริมาณมากเท่าไหร่?
          ถึงจะสร้างคอลลาเจนได้เพียงพอกับร่างกาย
          คำตอบคือคอลลาเจนจากเนื้อสัตว์ในมื้อปกติไม่เพียงพอเมื่อคุณอายุมากขึ้น
          ปัจจุบันจึงมีคอลลาเจนสกัดคุณภาพดี หลากหลายยี่ห้อให้คุณได้เลือกสรร
          นี่คือทางลัดสุขภาพดีที่คุณกำหนดได้ อย่าลืมดูแลตัวเอง
          ด้วยการพักผ่อนให้เพียงพอ ทานอาหารให้ครบ 5 หมู่
          หาคอลลาเจนคุณภาพดีที่คุณมั่นใจสักยี่ห้อมารับประทานเสริม
          แล้วการลงทุนของคนจะไม่ไร้ประโยชน์อย่างแน่นอน
        </p>
      </div>
    </div>
  </Container>
)

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        collagen: file(relativePath: { eq: "what_is_collagen.jpg" }) {
          ...fixed250
        }
      }
    `}
    render={data => (
      <Img
        fixed={data["collagen"].childImageSharp.fixed}
        style={{ borderRadius: 250 }}
      />
    )}
  />
)

export default WhatIsCollagen
