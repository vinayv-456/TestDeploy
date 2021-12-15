/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import Table from '../../../Common/Table/Table/Table.view';
import { DAQContainer, Heading, PlotChartContainer, Properties, TableHeading, Values } from './DeatilComponent.style';

const kpvDetailsColProps = [
  { label: 'KPV Name', name: 'KPV Name', width: 40 },
  { label: 'Unit of Measure', name: 'Unit of Measure', width: 20 },
  { label: 'Notes', name: 'Notes', width: 40 }
];

const plotChartColProps = [
  { label: 'Data Chart', name: 'Data Chart' },
  { label: 'Run Chart', name: 'Run Chart' },
  { label: 'SPC', name: 'SPC' }
];

const DAQSettingsColProps = [
  { label: 'Tag Name', name: 'Tag Name' },
  { label: 'Column No.', name: 'Column No.' },
  { label: 'Column Name', name: 'Column Name' }
];

const ProcessSettingsColProps = [
  { label: 'Limits', name: 'Limits' },
  { label: 'From', name: 'From' },
  { label: 'To', name: 'To' },
  { label: 'Band Colour', name: 'Band Colour' },
  { label: 'Alarm', name: 'Alarm' }
];

export const KPVConfig = ({ data }) => <Table colProps={kpvDetailsColProps} data={data} />;

export const PlotChart = ({ data }) => (
  <PlotChartContainer>
    <Table colProps={plotChartColProps} data={data} />
  </PlotChartContainer>
);
export const DAQSettings = ({ data }) => {
  const gain = data[Object.keys(data)[0]];
  const address = data[Object.keys(data)[1]];
  return (
    <DAQContainer>
      {gain && (
        <div style={{ width: '35%', marginLeft: '10px' }}>
          <Heading>{Object.keys(data)[0]}</Heading>
          {Object.keys(gain).map((ele, index) => (
            <div key={index} style={{ display: 'flex', fontSize: '2rem' }}>
              <Properties>{ele}</Properties>

              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '1.8rem' }}>:</span>
                <Values>{gain[ele]}</Values>
              </div>
            </div>
          ))}
        </div>
      )}
      {address.length > 0 && (
        <div style={{ flex: 1 }}>
          <TableHeading>{Object.keys(data)[1]}</TableHeading>
          <Table colProps={DAQSettingsColProps} data={address} />
        </div>
      )}
    </DAQContainer>
  );
};

export const ProcessSettings = ({ data }) => {
  const limitSettings = data[Object.keys(data)[0]];
  return (
    limitSettings.length > 0 && (
      <div>
        <TableHeading>{Object.keys(data)[0]}</TableHeading>
        <Table colProps={ProcessSettingsColProps} data={limitSettings} />
      </div>
    )
  );
};
