import { EmptyState, Layout, Page } from '@shopify/polaris';

const Index = (): JSX.Element => {
  const img: string =
    'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

  return (
    <Page>
      <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: 'Select products',
            onAction: (): void => console.log('clicked'),
          }}
          image={img}
        >
          <p>Select products to change their price temporarily.</p>
        </EmptyState>
      </Layout>
    </Page>
  );
};

export default Index;
