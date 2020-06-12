import { useState } from 'react';
import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  Stack,
  TextField,
} from '@shopify/polaris';

const Setting = (): JSX.Element => {
  const defaultDiscount: string = '0%';
  const [discount, setDiscount]: [string, any] = useState(defaultDiscount);

  const img: string =
    'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

  const handleSubmit = (): void => {
    // TODO:
  };

  const handleChange = (e): void => {
    // TODO:
  };

  return (
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title="Default discount"
          description="Add a product to Sample App, it will automatically be discounted."
        >
          <Card sectioned>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <TextField
                  value={discount}
                  onChange={handleChange}
                  label="Discount percentage"
                  type="discount"
                />
                <Stack distribution="trailing">
                  <Button primary submit>
                    Save
                  </Button>
                </Stack>
              </FormLayout>
            </Form>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
};

export default Setting;
