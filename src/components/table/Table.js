import React from 'react';
import { Table as SemanticTable } from 'semantic-ui-react';
import { DataRow, HeaderRow } from './Row';

const Table = ({ metadata, entries }) => (
  <SemanticTable>
    <SemanticTable.Header>
      <HeaderRow metadata={metadata} />
    </SemanticTable.Header>
    <SemanticTable.Body>
      {entries.map(entry => (
        <DataRow key={entry.id} metadata={metadata} entry={entry} />
      ))}
    </SemanticTable.Body>
  </SemanticTable>
);

export { Table };
