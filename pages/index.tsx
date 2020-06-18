import { useState } from 'react';
import { NextPage } from 'next';

import { EmptyState, Layout, Page } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';
import ResourceListWithProducts from '../components/ResourceList';

interface IndexProps {}

const Index: NextPage<IndexProps> = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const img: string =
    'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

  return (
    <Page>
      <TitleBar
        title="Sample App"
        primaryAction={{
          content: 'Fetch products',
          onAction: (): void => console.log('clicked'),
        }}
      />
      {isEmpty ? (
        <Layout>
          <EmptyState
            heading="Fecth your all products to start"
            action={{
              content: 'Fetch products',
              onAction: (): void => console.log('clicked'),
            }}
            image={img}
          />
        </Layout>
      ) : (
        <ResourceListWithProducts first={50} />
      )}
    </Page>
  );
};

export default Index;
