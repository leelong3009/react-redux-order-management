import React from 'react';
import { Table } from 'semantic-ui-react';

const Cell = ({ entry, cellAccessKey }) => {
  const value = entry[cellAccessKey];
  return <Table.Cell key={cellAccessKey}>{value}</Table.Cell>;
};

const DataRow = ({ metadata, entry }) => {
  return <Table.Row>{getDataCells(metadata, entry)}</Table.Row>;
};

const getCellHeaders = metadata =>
  metadata.map(({ accessKey, header }, index) => (
    <Table.HeaderCell key={accessKey || index}>{header}</Table.HeaderCell>
  ));

const HeaderRow = ({ metadata }) => (
  <Table.Row>{getCellHeaders(metadata)}</Table.Row>
);

const getDataCells = (metadata, entry) => {
  return metadata.map(mdata => {
    const { accessKey } = mdata;
    return <Cell key={accessKey} entry={entry} cellAccessKey={accessKey} />;
  });
};

export { HeaderRow, DataRow };
