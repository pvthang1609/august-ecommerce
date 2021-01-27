// import ProductFilter from "features/product/components/product-filter";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct } from "actions/productAction";
import "./filter-page.scss";
import { BreadCrumbs } from "assets/import";
import ProductCategory from "features/product/components/product-category";
import { CATEGORY_LIST } from "assets/CONSTANTS";
import CustomSelectBox from "features/product/components/custom-select-box";
import { SORTODER_LIST, NUMITEMDISPLAY_LIST } from "assets/CONSTANTS";
import ProductList from "features/product/components/product-list";
import ProductCard from "features/product/components/product-card";

// import PropTypes from "prop-types";

const BREADCRUMBS_LIST = [
  {
    name: "Tìm kiếm",
    url: "/product/filter-page",
  },
];

FilterPage.propTypes = {};

function FilterPage() {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const {
    gender = "all",
    type = "all",
    collections = "all",
    brand = "all",
    sortOrder = "newest",
    limit = 8,
  } = parsed;

  const dispatch = useDispatch();

  const getFilterUrl = (filter) => {
    const filterGender = filter.gender || gender;
    const filterType = filter.type || type;
    const filterCollections = filter.collections || collections;
    const filterBrand = filter.brand || brand;
    const filterSort = filter.sortOrder || sortOrder;
    const filterLimit = filter.limit || limit;
    return `?gender=${filterGender}&type=${filterType}&collections=${filterCollections}&brand=${filterBrand}&sortOrder=${filterSort}&limit=${filterLimit}`;
  };
  useEffect(() => {
    dispatch(
      filterProduct({
        gender: gender === "all" ? "" : gender,
        type: type === "all" ? "" : type,
        collections: collections === "all" ? "" : collections,
        brand: brand === "all" ? "" : brand,
        sortOrder: sortOrder,
        limit: limit,
      })
    );
  }, [gender, type, collections, sortOrder, limit]);

  const { listFilter, page, totalPage, loading } = useSelector(
    (state) => state.filterProduct
  );

  return (
    <div>
      <BreadCrumbs list={BREADCRUMBS_LIST} />
      <div className="grid wide">
        <div className="row">
          <div className="col l-2">
            <div className="filter-page__heading">Danh mục</div>
            <div className="filter-page__category">
              <ul className="filter-page__category--gender">
                <li className="list__item">
                  <Link
                    className="list__link"
                    to={getFilterUrl({ gender: "all" })}
                  >
                    Tất cả
                  </Link>
                </li>
                <li className="list__item">
                  <Link
                    className="list__link"
                    to={getFilterUrl({ gender: "male" })}
                  >
                    Nam
                  </Link>
                </li>
                <li className="list__item">
                  <Link
                    className="list__link"
                    to={getFilterUrl({ gender: "female" })}
                  >
                    Nữ
                  </Link>
                </li>
              </ul>
              <ProductCategory category={CATEGORY_LIST} />
            </div>
          </div>
          <div className="col l-10">
            <div className="row filter-page__header">
              <div className="col l-12">
                <div className="row">
                  <div className="col l-2">
                    <CustomSelectBox display="Sắp xếp" list={SORTODER_LIST} />
                  </div>
                  <div className="col l-2 l-o-1">
                    <CustomSelectBox
                      display="Hiển Thị"
                      list={NUMITEMDISPLAY_LIST}
                      width={145}
                    />
                  </div>
                  <div className="col l-2 l-o-5">
                    <div className="pagination">
                      <input type="number" value={page} />
                      <span>{`trên ${totalPage}`}</span>
                      <button>
                        <i
                          className="fa fa-long-arrow-right"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {!loading && (
                <ProductList className="col l-12" productList={listFilter}>
                  {(item, index) => (
                    <ProductCard
                      className="col l-3"
                      key={index}
                      product={item}
                    />
                  )}
                </ProductList>
              )}
            </div>
            <div className="row">
              <div className="col l-12">Footer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPage;
