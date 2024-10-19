import { PlusSquareOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { Text } from '../text'
import React from 'react'
import { Area, AreaConfig } from '@ant-design/plots'
import { useList } from '@refinedev/core'
import { DASHBOARD_DEALS_CHART_QUERY } from '@/graphql/queries'
import { mapDealsData } from '@/utilities/helpers'
import { GetFieldsFromList } from '@refinedev/nestjs-query'
import { DashboardDealsChartQuery } from '@/graphql/types'

const PatientChart = () => {
  const {data} = useList<GetFieldsFromList<DashboardDealsChartQuery>>({
    resource: 'dealStages',
    filters: [
      {
        field: 'title', operator: 'in', value: ['WON','LOST']
      }
    ],
    meta: {
      gqlQuery: DASHBOARD_DEALS_CHART_QUERY
    }
  });

  const dealData = React.useMemo(() => {
    return mapDealsData(data?.data);
  }, [data?.data])

  // 
  const config: AreaConfig = {
    data: dealData,
    xField: 'timeText',
    yField: 'value',
    isStack: false,
    seriesField: 'state', 
    animation: true,
    startOnZero: false,
    smooth: true, 
    legend: {
      offsetY: -6,
      itemName: {
        formatter: (text) => {
          return text === 'WON' ? 'Check Out' : 'Check In';
        }
      }
    },
    yAxis: {
      tickCount: 4,
      label: {
        formatter: (v: string) => {
          return `${Number(v) / 10000}`;
        }
      }
    },
    tooltip: {
      formatter: (data) => {
        return {
          name: data.state === 'WON' ? 'Check In' : 'Check Out',
          value: `${Math.round(Number(data.value) / 10000)}`
        };
      }
    }
  };
  

  return (
    <Card
      style={{
        height:'100%'
      }}
      styles={{
        header: { padding: '8px 16px' },
        body: { padding: '24px 24px 0 24px' },
      }}
      title={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <PlusSquareOutlined />
          <Text size="sm" style={{marginLeft: '0.5rem'}}>
            Patients
          </Text>
        </div>
      }
    >
      <Area {...config} height={325} />
    </Card>
  )
}

export default PatientChart