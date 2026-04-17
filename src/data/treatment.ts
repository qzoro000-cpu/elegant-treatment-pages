// Treatment data shape — designed to be populated by CMS later.
// Every section component reads from this shape; missing arrays/strings collapse the section.

import heroImage from "@/assets/hero-treatment.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import overviewBg from "@/assets/overview-bg.jpg";

export type KeyPoint = { title: string; body: string };
export type ProgressInfo = { label: string; value: string };
export type Advantage = { index: string; title: string; body: string };
export type Reason = { title: string; body: string };
export type PricingProgram = {
  name: string;
  tag?: string;
  price: string;
  originalPrice?: string;
  duration?: string;
  includes: string[];
  highlight?: boolean;
};
export type FaqItem = { q: string; a: string };
export type GalleryImage = { src: string; alt: string; aspect?: "portrait" | "landscape" | "square" };

export type TreatmentData = {
  category?: string;
  treatmentName: string;
  subtitle?: string;
  summary?: string;
  heroImage?: string;
  heroBadge?: string;
  durationText?: string;
  priceText?: string;
  originalPriceText?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };

  overviewTitle?: string;
  overviewBody?: string;
  overviewImage?: string;
  keyPoints?: KeyPoint[];

  effects?: string[];
  progressInfo?: ProgressInfo[];

  advantages?: Advantage[];

  precautionsBefore?: string[];
  precautionsAfter?: string[];
  contraindications?: string[];

  tatoaReasons?: Reason[];

  pricingPrograms?: PricingProgram[];
  pricingNote?: string;

  galleryImages?: GalleryImage[];

  faqItems?: FaqItem[];

  finalCta?: {
    headline: string;
    body?: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };

  clinicInfo?: {
    name: string;
    address?: string;
    hours?: string[];
    phone?: string;
  };
};

export const sampleTreatment: TreatmentData = {
  category: "SIGNATURE LIFTING",
  treatmentName: "타토아 시그니처 리프팅",
  subtitle: "Tatoa Signature Lifting Protocol",
  summary:
    "피부 결을 정돈하고 윤곽선을 단정하게 다듬는 타토아만의 시그니처 프로토콜. 깊은 층까지 전달되는 정교한 에너지가 자연스러운 탄력을 회복시킵니다.",
  heroImage,
  heroBadge: "NEW · 2025 Signature",
  durationText: "약 60분",
  priceText: "₩890,000",
  originalPriceText: "₩1,200,000",
  ctaPrimary: { label: "예약 상담 신청", href: "#reserve" },
  ctaSecondary: { label: "1:1 문의하기", href: "#inquiry" },

  overviewTitle: "정제된 기술이 만드는 단정한 윤곽",
  overviewBody:
    "타토아 시그니처 리프팅은 단일 장비에 의존하지 않습니다. 피부의 층위마다 다른 깊이로 작용하는 복합 프로토콜을 의료진이 직접 설계하여, 자연스러우면서도 또렷한 변화를 이끌어냅니다.",
  overviewImage: overviewBg,
  keyPoints: [
    { title: "복합 레이어드 프로토콜", body: "표피·진피·근막을 하나의 흐름으로 다듬습니다." },
    { title: "1:1 맞춤 설계", body: "얼굴 비율과 피부 상태를 분석해 강도를 조정합니다." },
    { title: "다운타임 최소화", body: "일상에 자연스럽게 스며드는 회복 곡선을 설계했습니다." },
  ],

  effects: [
    "얼굴 윤곽선 정돈",
    "피부 탄력 회복",
    "결의 매끄러움 개선",
    "은은한 톤 정돈 효과",
  ],
  progressInfo: [
    { label: "시술 시간", value: "약 60분" },
    { label: "마취", value: "표면 마취" },
    { label: "통증 정도", value: "하 ~ 중" },
    { label: "다운타임", value: "1 ~ 3일" },
    { label: "권장 주기", value: "6 ~ 12개월" },
    { label: "효과 지속", value: "최대 12개월" },
  ],

  advantages: [
    {
      index: "01",
      title: "층위별 정밀 설계",
      body: "에너지가 도달하는 깊이를 의료진이 직접 컨트롤합니다. 얕은 층과 깊은 층을 분리해 자연스러운 입체감을 만듭니다.",
    },
    {
      index: "02",
      title: "타토아 전용 프로토콜",
      body: "수년간 축적된 케이스를 기반으로 표준화된 자체 프로토콜. 시술자의 경험치에 의존하지 않고 일관된 결과를 제공합니다.",
    },
    {
      index: "03",
      title: "회복 곡선 설계",
      body: "단순히 강하게가 아닌, 회복 흐름까지 고려한 강도 조절. 일상으로의 복귀가 자연스럽도록 설계합니다.",
    },
    {
      index: "04",
      title: "전담 상담 시스템",
      body: "시술 전후 동일한 의료진이 결과를 추적합니다. 변화의 흐름을 함께 읽는 동행이 시술의 일부입니다.",
    },
  ],

  precautionsBefore: [
    "시술 1주일 전부터 강한 박피 시술은 피해주세요.",
    "복용 중인 약물이 있다면 사전에 알려주세요.",
    "임신·수유 중이거나 계획 중이신 경우 상담이 필요합니다.",
    "시술 당일에는 메이크업을 가볍게 해주세요.",
  ],
  precautionsAfter: [
    "시술 후 24시간은 사우나·고온 환경을 피해주세요.",
    "충분한 보습과 자외선 차단을 권장드립니다.",
    "음주·과도한 운동은 3일간 자제해주세요.",
    "이상 반응이 있을 경우 즉시 내원해주세요.",
  ],
  contraindications: [
    "심장 박동기 등 체내 의료기기 착용자",
    "시술 부위에 활동성 염증이 있는 경우",
    "켈로이드 체질 또는 광과민성 질환자",
  ],

  tatoaReasons: [
    {
      title: "축적된 임상 데이터",
      body: "수만 건의 케이스에서 정제된 프로토콜이 모든 시술의 기준입니다.",
    },
    {
      title: "의료진의 직접 시술",
      body: "상담부터 시술까지 동일한 의료진이 책임지는 일관된 흐름.",
    },
    {
      title: "정직한 설계 철학",
      body: "필요한 만큼, 정확한 깊이로. 과하지 않음이 타토아의 기준입니다.",
    },
    {
      title: "사후 케어 시스템",
      body: "시술 이후의 변화까지 함께 추적하는 장기 관리 프로그램.",
    },
  ],

  pricingPrograms: [
    {
      name: "Single Session",
      tag: "체험",
      price: "₩890,000",
      originalPrice: "₩1,200,000",
      duration: "1회",
      includes: ["시그니처 리프팅 1회", "전담 상담", "기본 사후 케어"],
    },
    {
      name: "Signature 3 Program",
      tag: "BEST",
      price: "₩2,490,000",
      originalPrice: "₩3,600,000",
      duration: "3회 / 6개월",
      includes: [
        "시그니처 리프팅 3회",
        "전담 의료진 1:1 케어",
        "프리미엄 사후 케어 패키지",
        "전후 사진 분석 리포트",
      ],
      highlight: true,
    },
    {
      name: "Annual Care",
      tag: "장기",
      price: "₩4,800,000",
      duration: "5회 / 12개월",
      includes: ["시그니처 리프팅 5회", "분기별 피부 분석", "전용 라운지 이용", "VIP 예약 우선권"],
    },
  ],
  pricingNote: "표시된 가격은 부가세(VAT) 별도입니다. 프로모션은 사전 예고 없이 종료될 수 있습니다.",

  galleryImages: [
    { src: gallery1, alt: "Tatoa 클리닉 트리트먼트 룸", aspect: "portrait" },
    { src: gallery2, alt: "시그니처 케어 디테일", aspect: "portrait" },
    { src: gallery3, alt: "프리미엄 케어 환경", aspect: "portrait" },
    { src: gallery4, alt: "Tatoa 클리닉 리셉션", aspect: "portrait" },
  ],

  faqItems: [
    {
      q: "한 번의 시술로 효과를 체감할 수 있나요?",
      a: "개인차가 있지만 시술 직후부터 결의 정돈을 느끼시는 분이 많습니다. 윤곽 변화는 4 ~ 8주에 걸쳐 점진적으로 나타납니다.",
    },
    {
      q: "회복 기간 동안 일상이 가능한가요?",
      a: "대부분의 경우 시술 다음 날부터 일상 복귀가 가능합니다. 미세한 붉음은 메이크업으로 자연스럽게 커버됩니다.",
    },
    {
      q: "통증은 어느 정도인가요?",
      a: "표면 마취 후 진행되며, 견딜 수 있는 수준의 자극으로 보고됩니다. 강도는 상담을 통해 조정됩니다.",
    },
    {
      q: "다른 시술과 병행할 수 있나요?",
      a: "가능합니다. 의료진이 피부 상태를 보고 안전한 조합과 순서를 설계해드립니다.",
    },
    {
      q: "프로그램은 환불이 가능한가요?",
      a: "잔여 회차에 한해 규정에 따라 환불 가능합니다. 자세한 사항은 상담 시 안내드립니다.",
    },
  ],

  finalCta: {
    headline: "지금, 가장 단정한 변화를 시작하세요.",
    body: "전담 의료진이 1:1 상담으로 가장 알맞은 흐름을 설계해드립니다.",
    primary: { label: "예약 상담 신청", href: "#reserve" },
    secondary: { label: "전화 문의 02-0000-0000", href: "tel:020000000" },
  },

  clinicInfo: {
    name: "TATOA Clinic · Branch",
    address: "서울특별시 강남구 도산대로 000, 0층",
    hours: ["평일 11:00 — 20:00", "토요일 10:00 — 17:00", "일·공휴일 휴진"],
    phone: "02-0000-0000",
  },
};
