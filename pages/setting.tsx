import { useState, useCallback } from 'react';
import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  Stack,
  TextField,
  Frame,
  Toast,
} from '@shopify/polaris';

const Setting = (): JSX.Element => {
  const defaultDiscount: string = '0%';
  const [discount, setDiscount] = useState<string>(defaultDiscount);
  const [active, setActive] = useState<boolean>(false);
  const [toastContent, setToastContent] = useState<string | null>(null);

  const img: string =
    'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('e', e);

    setToastContent('保存しました。');
    toggleActive();
  };

  const handleChange = (value: string, _id: string): void => {
    setDiscount(value);
  };

  const toggleActive: () => void = useCallback(
    () => setActive((active) => !active),
    []
  );

  const toastMarkup: JSX.Element | null =
    active && toastContent ? (
      <Toast content={toastContent} onDismiss={toggleActive} />
    ) : null;

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
                />
                <Stack distribution="trailing">
                  <Button primary submit>
                    Save
                  </Button>
                </Stack>
              </FormLayout>
            </Form>
          </Card>
          <Frame>{toastMarkup}</Frame>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
};

export default Setting;
