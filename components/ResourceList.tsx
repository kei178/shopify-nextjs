import React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
  Card,
  ResourceList,
  Stack,
  TextStyle,
  Thumbnail,
  EmptyState,
} from '@shopify/polaris';

const GET_PRODUCTS = gql`
  query getProducts($first: Int) {
    products(first: $first) {
      edges {
        node {
          title
          handle
          descriptionHtml
          id
          images(first: 1) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                price
                id
              }
            }
          }
        }
      }
    }
  }
`;

interface ProductEdge {
  node: Product;
}

interface Product {
  title: string;
  handle: string;
  descriptionHtml: string;
  id: string;
  images: {
    edges: ImageEdge[];
  };
  variants: {
    edges: VariantEdge[];
  };
}

interface VariantEdge {
  node: Variant;
}

interface Variant {
  price: number;
  id: number;
}

interface ImageEdge {
  node: Image;
}

interface Image {
  originalSrc: string;
  altText: string;
}

interface Data {
  products: {
    edges: ProductEdge[];
  };
}

type Variables = {
  first: number;
};

const ResourceListWithProducts = ({ first }) => {
  const img: string =
    'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

  return (
    <Query<Data, Variables>
      query={GET_PRODUCTS}
      variables={{ first: first || 50 }}
    >
      {({ data, loading, error }) => {
        if (loading) return <div>Loading…</div>;
        if (error) return <div>{error.message}</div>;

        console.log('ResourceListWithProducts -> data', data);

        const products = data.products.edges;
        return (
          <Card>
            {products.length === 0 ? (
              <EmptyState
                heading="Fecth your all products to start"
                action={{
                  content: 'Fetch products',
                  onAction: (): void => console.log('clicked'),
                }}
                image={img}
              />
            ) : (
              <ResourceList
                showHeader
                resourceName={{ singular: 'Product', plural: 'Products' }}
                items={products}
                renderItem={(item: ProductEdge) => {
                  const media = (
                    <Thumbnail
                      source={
                        item.node.images.edges[0]
                          ? item.node.images.edges[0].node.originalSrc
                          : ''
                      }
                      alt={
                        item.node.images.edges[0]
                          ? item.node.images.edges[0].node.altText
                          : ''
                      }
                    />
                  );
                  const price = item.node.variants.edges[0].node.price;
                  return (
                    <ResourceList.Item
                      onClick={() => {}}
                      id={item.node.id}
                      media={media}
                      accessibilityLabel={`View details for ${item.node.title}`}
                    >
                      <Stack>
                        <Stack.Item fill>
                          <h3>
                            <TextStyle variation="strong">
                              {item.node.title}
                            </TextStyle>
                          </h3>
                        </Stack.Item>
                        <Stack.Item>
                          <p>${price}</p>
                        </Stack.Item>
                        <Stack.Item>
                          <p>Expires on</p>
                        </Stack.Item>
                      </Stack>
                    </ResourceList.Item>
                  );
                }}
              />
            )}
          </Card>
        );
      }}
    </Query>
  );
};

export default ResourceListWithProducts;
