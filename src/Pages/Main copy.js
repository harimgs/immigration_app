import { useState } from "react";
import { Container, Row, Button, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import data from "../data.json";

function Main() {
  const [initData, setInitData] = useState(data);
  const [loading, setLoading] = useState(false);

  // const initFettch = () => {
  //   setLoading(true);
  //   axios
  //     .get(data)
  //     .then((result) => {
  //       setInitData(result);
  //       setLoading(false);
  //       console.log(initData);
  //     })
  //     .catch(() => {
  //       console.log("실패함");
  //       setLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   initFettch();
  // }, []);
  // console.log(initData);

  const lang_kr_category = [
    { "visitor-inside-canada": "관광비자" },
    { visitor_extension: "관광비자 연장" },
    { study_permit_outside: "학생비자 연장(캐나다외)" },
    { study_extension: "학생비자 연장" },
    { work_extension_new_employer: "취업비자" },
    { iec: "워홀" },
    { eta: "eTA" },
    { atlantic_immigration: "아틀란틱" },
    { cec: "CEC" },
    { quebec_business: "퀘백" },
    { provincial_nominees_back: "PNP" },
    { provincial_nominees_back: "PNP" },
    { self_employed_federal: "자영업" },
    { fed_skilled_workers: "FSW" },
    { fed_skilled_trades: "FST" },
    { skilled_workers_quebec: "퀘백 숙련이민" },
    { startup_back: "스타트업" },
    { spouse_can: "배우자 초청" },
    { spouse_int: "배우자 초청(캐나다외)" },
    { parent_grandparent_forward: "부모님, 조부모님 초청" },
    { refugees_protected_back: "난민" },
    { humanitarian_compassionate_back: "H&C" },
    { citizenship: "시민권" },
    { pr_card: "PR" },
    { rep_documents: "Replacement" },
    { caregivers: "케어기버" },
  ];
  const lang_kr_service = [
    { online: "온라인" },
    { paper: "종이" },
    { study_permit_outside: null },
    { iec: "이번시즌" },
    { iec_past: "저번시즌" },
    { eta: null },
    { atlantic_immigration: null },
    { cec_ee: "Express Entry" },
    { quebec_business: null },
    { provincial_nominees_paper_back: "종이" },
    { provincial_nominees_ee: "Express Entry" },
    { self_employed_federal: "" },
    { skilled_workers_ee: "Express Entry" },
    { skilled_trades_ee: "Express Entry" },
    { skilled_workers_quebec: null },
    { startup_back: null },
    { service_comittment: null },
    { parent_grandparent_forward: null },
    { refugees_protected_past: null },
    { humanitarian_compassionate_back: null },
    { grant_after2015: "신청" },
    { cit_cert: "증서" },
    { cit_resumption: "재개" },
    { cit_renunciation: "포기" },
    { cit_adoption_part1: "입양인" },
    { cit_search: "기록검색" },
    { new_pr: "신규" },
    { vos: "상태확인" },
    { replacement: "교체" },
    { amend_imm: "이민서류 수정" },
    { amend_tr: "TR서류 수정" },
    { childcare: "차일드 케어 2년 이상" },
    { childcare_pr: "차일드 케어 2년 이하" },
    { supportworker: "서포트 워커 2년 이상" },
    { supportworker_pr: "서포트 워커 2년 이하" },
  ];

  const lang_kr_time = [
    { minutes: "분" },
    { days: "일" },
    { weeks: "주" },
    { months: "달" },
    { "Part 1:": null },
  ];

  const output = [];

  for (let [category, services] of Object.entries(initData)) {
    // for (let i = 0; i < lang_kr.length; i++) {
    //   if (category === String(Object.keys(lang_kr[i]))) {
    //     category = String(Object.values(lang_kr[i]));
    //   }
    // }
    for (const [service, time] of Object.entries(services)) {
      if (service === "lastupdated") continue;
      output.push({
        category: `${category}`,
        service: service ? service : null,
        time: time === "No processing time available" ? null : time,
        lastupdated: services["lastupdated"],
      });
    }
  }

  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < lang_kr_category.length; j++) {
      if (output[i].category === String(Object.keys(lang_kr_category[j]))) {
        output[i].category = String(Object.values(lang_kr_category[j]));
      }
    }
  }
  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < lang_kr_service.length; j++) {
      if (output[i].service === String(Object.keys(lang_kr_service[j]))) {
        output[i].service = String(Object.values(lang_kr_service[j]));
      }
    }
  }

  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < lang_kr_time.length; j++) {
      output[i].time = output[i].time.replace(
        String(Object.keys(lang_kr_time[j])),
        String(Object.values(lang_kr_time[j]))
      );
    }
  }

  return (
    <Container>
      <Table responsive="sm" bordered hover>
        <thead>
          <tr>
            <th>카테고리</th>
            <th>서비스</th>
            <th>예상일자</th>
          </tr>
        </thead>
        <tbody>
          {output.map((data, index) => (
            <tr key={index}>
              <td>{data.category}</td>
              <td>{data.service}</td>
              <td>{data.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Main;
