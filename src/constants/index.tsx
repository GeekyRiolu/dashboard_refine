import { AuditOutlined, ShopOutlined, TeamOutlined } from "@ant-design/icons";

const IconWrapper = ({
  color,
  children,
}: React.PropsWithChildren<{ color: string }>) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
};

import {
  BusinessType,
  CompanySize,
  Contact,
  Industry,
} from "@/graphql/schema.types";

export type TotalCountType = "companies" | "contacts" | "deals";

export const totalCountVariants: {
  [key in TotalCountType]: {
    primaryColor: string;
    secondaryColor?: string;
    icon: React.ReactNode;
    title: string;
    data: { index: string; value: number }[];
  };
} = {
  companies: {
    primaryColor: "#1677FF",
    secondaryColor: "#BAE0FF",
    icon: (
      <IconWrapper color="#E6F4FF">
        <ShopOutlined
          className="md"
          style={{
            color: "#1677FF",
          }}
        />
      </IconWrapper>
    ),
    title: "Number of Hospitals",
    data: [
      {
        index: "1",
        value: 3500,
      },
      {
        index: "2",
        value: 2750,
      },
      {
        index: "3",
        value: 5000,
      },
      {
        index: "4",
        value: 4250,
      },
      {
        index: "5",
        value: 5000,
      },
    ],
  },
  contacts: {
    primaryColor: "#52C41A",
    secondaryColor: "#D9F7BE",
    icon: (
      <IconWrapper color="#F6FFED">
        <TeamOutlined
          className="md"
          style={{
            color: "#52C41A",
          }}
        />
      </IconWrapper>
    ),
    title: "Number of Contacts",
    data: [
      {
        index: "1",
        value: 10000,
      },
      {
        index: "2",
        value: 19500,
      },
      {
        index: "3",
        value: 13000,
      },
      {
        index: "4",
        value: 17000,
      },
      {
        index: "5",
        value: 13000,
      },
      {
        index: "6",
        value: 20000,
      },
    ],
  },
  deals: {
    primaryColor: "#FA541C",
    secondaryColor: "#FFD8BF",
    icon: (
      <IconWrapper color="#FFF2E8">
        <AuditOutlined
          className="md"
          style={{
            color: "#FA541C",
          }}
        />
      </IconWrapper>
    ),
    title: "Total Patients",
    data: [
      {
        index: "1",
        value: 1000,
      },
      {
        index: "2",
        value: 1300,
      },
      {
        index: "3",
        value: 1200,
      },
      {
        index: "4",
        value: 2000,
      },
      {
        index: "5",
        value: 800,
      },
      {
        index: "6",
        value: 1700,
      },
      {
        index: "7",
        value: 1400,
      },
      {
        index: "8",
        value: 1800,
      },
    ],
  },
};

export const statusOptions: {
  label: string;
  value: Contact["status"];
}[] = [
  {
    label: "New Admission",
    value: "NEW",
  },
  {
    label: "Stable",
    value: "QUALIFIED",
  },
  {
    label: "Critical",
    value: "UNQUALIFIED",
  },
  {
    label: "Recovered",
    value: "WON",
  },
  {
    label: "Undergoing Treatment",
    value: "NEGOTIATION",
  },
  {
    label: "Deceased",
    value: "LOST",
  },
  {
    label: "Under Observation",
    value: "INTERESTED",
  },
  {
    label: "Contacted",
    value: "CONTACTED",
  },
  {
    label: "Discharged",
    value: "CHURNED",
  },
];

export const companySizeOptions: {
  label: string;
  value: CompanySize;
}[] = [
  {
    label: "Private Hospital",
    value: "ENTERPRISE",
  },
  {
    label: "Government Hospital",
    value: "LARGE",
  },
  {
    label: "Clinic",
    value: "SMALL",
  },
  {
    label: "Private Practice",
    value: "SMALL",
  },
];

export const industryOptions: {
  label: string;
  value: Industry;
}[] = [
  { label: "Emergency Department", value: "AEROSPACE" },
  { label: "Cardiology", value: "AGRICULTURE" },
  { label: "Neurology", value: "AUTOMOTIVE" },
  { label: "Pediatrics", value: "CHEMICALS" },
  { label: "Intensive Care Unit (ICU)", value: "INSURANCE" },
  { label: "Obstetrics and Gynecology", value: "CONSTRUCTION" },
  { label: "Oncology", value: "DEFENSE" },
  { label: "Orthopedics", value: "EDUCATION" },
  { label: "Radiology", value: "ENERGY" },
  { label: "Anesthesiology", value: "FINANCIAL_SERVICES" },
  { label: "Surgery", value: "FOOD_AND_BEVERAGE" },
  { label: "Dermatology", value: "GOVERNMENT" },
  { label: "Gastroenterology", value: "HEALTHCARE" },
  { label: "Nephrology", value: "HOSPITALITY" },
];

export const businessTypeOptions: {
  label: string;
  value: BusinessType;
}[] = [
  {
    label: "B2B",
    value: "B2B",
  },
  {
    label: "B2C",
    value: "B2C",
  },
  {
    label: "B2G",
    value: "B2G",
  },
];