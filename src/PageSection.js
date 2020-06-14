import React from 'react';
import {
  EuiPageContent,
  EuiPageContentHeader,
  EuiTitle,
} from '@elastic/eui';

const PageSection = ({ title, children }) => {
	const titleID = () => title.toLowerCase().split(' ').join('-');

  return (
    <EuiPageContent>
      <EuiPageContentHeader>
        <EuiTitle id={titleID()}>
          <h2>{title}</h2>
        </EuiTitle>
      </EuiPageContentHeader>
      {children}
    </EuiPageContent>
  );
};

export default PageSection;
