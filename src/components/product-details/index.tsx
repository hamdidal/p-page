import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../services/products";
import { Product } from "../../services/types";
import DashboardLayout from "../../layouts/Dashboard";
import {
  BottomImages,
  DetailButton,
  DetailContainer,
  DetailsContainer,
  ImgBox,
  ImgContainer,
  ProductDetailsContainer,
} from "./index.styled";
import { ptr } from "../../utils/helpers";
import Button from "../styled-components/Button";
import Typography from "../styled-components/Typography";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    fetchProduct(+id!).then((res) => {
      setProduct(res);
    });
  }, [id]);

  return (
    <DashboardLayout>
      <DetailsContainer>
        <ProductDetailsContainer>
          <ImgContainer>
            <ImgBox>
              <img
                src={product?.image}
                alt={product?.title}
                height={ptr(8500)}
                width="fit-content"
              />
            </ImgBox>
            <BottomImages>
              <ImgBox>
                <img
                  width="fit-content"
                  src={product?.image}
                  alt={product?.title}
                  height={ptr(4000)}
                />
              </ImgBox>
              <ImgBox>
                <img
                  width="fit-content"
                  src={product?.image}
                  alt={product?.title}
                  height={ptr(4000)}
                />
              </ImgBox>
            </BottomImages>
          </ImgContainer>

          <DetailContainer>
            <Typography variant="h4-semibold">
              {product?.title.toLocaleUpperCase()}
              <div>
                <Typography variant="body-smaller-default">
                  {product?.category.toLocaleUpperCase()}
                </Typography>
              </div>
            </Typography>

            <Typography variant="body-small-medium">
              {product?.description}
            </Typography>
            <Typography variant="h4-semibold">{product?.price} TL</Typography>

            <DetailButton>
              <Button
                width="100%"
                variant="contained"
                children="Sepete Ekle"
              ></Button>
              <Button
                width="100%"
                variant="outlined"
                children="Satın Al"
              ></Button>
            </DetailButton>
          </DetailContainer>
        </ProductDetailsContainer>
      </DetailsContainer>
    </DashboardLayout>
  );
};

export default ProductDetails;
