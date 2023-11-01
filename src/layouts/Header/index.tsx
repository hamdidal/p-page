import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "../../components/styled-components/Typography";
import SearchInput from "../../components/styled-components/SearchInput";
import useFilterStore from "../../context/filter-store";
import _debounce from "lodash/debounce";
import {
  AccountContainer,
  BrandsContainer,
  HeaderContainer,
  LogoContainer,
  SearchContainer,
  ShopContainer,
} from "./index.styled";

const Header = () => {
  const { filterText, setFilterText } = useFilterStore();

  const navigate = useNavigate();

  const handleFilter = (event: any): void => {
    _debounce(() => {
      setFilterText(event);
    }, 500)();
  };

  const handleTo = () => {
    navigate(`/`);
  };
  return (
    <HeaderContainer>
      <ShopContainer>
        <DragHandleIcon />
        <Typography variant="body-normal-semibold">Kategoriler</Typography>
      </ShopContainer>
      <BrandsContainer>
        <Typography variant="body-normal-semibold">Markalar</Typography>
        <Typography variant="body-normal-semibold">İndirimler</Typography>
        <Typography variant="body-normal-semibold">Yardım</Typography>
      </BrandsContainer>
      <LogoContainer>
        <img
          src={Logo}
          alt="logo"
          style={{ cursor: "pointer" }}
          onClick={handleTo}
        ></img>
      </LogoContainer>
      <SearchContainer>
        <SearchInput
          fullWidth
          value={filterText || ""}
          onChange={(e) => handleFilter(e)}
          placeholder="Ürün Ara"
        />
      </SearchContainer>
      <AccountContainer>
        <PermIdentityIcon />
        <ShoppingCartIcon />
      </AccountContainer>
    </HeaderContainer>
  );
};

export default Header;
