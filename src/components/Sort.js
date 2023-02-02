import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/productSlice";
import Categories from "./Categories";

const Sort = () => {
  const { data: products, copy: productsCopy } = useSelector(
    (state) => state.products
  );
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsCopy.length <= 0) return;
    setProductsLoaded(true);
  }, [productsCopy]);

  const categories = useMemo(() => {
    const categoryProducts = Array.from(
      new Set(
        productsCopy.flatMap((p) => {
          const subcategories = p.category.split(" ");
          if (subcategories.length <= 1) return "#" + p.category;
          // - is for indication that it is subcategory
          // so we can use includes method when filtering subcategory
          // else check equality for filtering products
          return [
            ...subcategories.slice(1).map((c) => "-#" + c),
            "#" + p.category,
          ];
        })
      )
    );
    categoryProducts.unshift("#All");
    return categoryProducts;
  }, [productsLoaded]);

  const sortByCategory = useCallback(
    (e) => {
      const tag = e.target.innerText;
      setSelectedFilter(tag);
      
      if (tag.includes("All")) return dispatch(addProducts(productsCopy));

      // checking is sub category (- indicates subcategory)
      const isSubcategory = tag.replace("\n", "")[0] === "-";
      if (isSubcategory) {
        const _tag = tag.replace("\n", "").slice(2); // as -# in start of string
        dispatch(
          addProducts(
            productsCopy.filter((item) => item.category.includes(_tag))
          )
        );
        return;
      }

      dispatch(
        addProducts(
          productsCopy.filter((item) => {
            const newTag = tag.slice(1);
            return newTag === item.category;
          })
        )
      );
    },
    [productsLoaded]
  );

  const sortByPrice = useCallback(
    (e) => {
      const productsSort = [...products];
      dispatch(
        addProducts(
          productsSort.sort((a, b) => {
            if (e.target.innerText.includes("High to Low")) {
              [b, a] = [a, b];
            }
            if (a.price < b.price) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
            return 0;
          })
        )
      );
    },
    [products]
  );

  return (
    <>
      <input
        type="checkbox"
        name="toggle-sort"
        className="peer hidden"
        id="toggle-sort"
      />
      <label
        htmlFor="toggle-sort"
        className="px-5 py-1 fixed bg-gray-300 rounded-xl peer-checked:bg-sky-300 translate-x-3 translate-y-2 _desktop:hidden"
      >
        Sort
      </label>
      <div
        className="basis-1/6 border-r border-slate-400 border-solid flex flex-col pt-2 mobile:fixed w-[95%] mobile:translate-x-[2.5%] mobile:shadow-gray-500 mobile:border-none mobile:shadow-lg  mobile:mt-[13vmin] mobile:bg-white peer-checked:block mobile:hidden mobile:px-5 h-[90vh] sticky top-[60px]"
        style={{ alignItems: "center" }}
      >
        <span className="w-full px-2 text-sm pb-2 font-semibold">Category</span>
        <Categories
          sortBy={sortByCategory}
          categories={categories}
          name="category-tags"
        />
        <span className="w-full px-2 text-sm pb-2 font-semibold">Price</span>
        <Categories
          sortBy={sortByPrice}
          categories={["Low to High", "High to Low"]}
          uuid={selectedFilter}
          name="price-tags"
          checked={false}
        />

        <a
          className="absolute bottom-0 left-1 text-xs font-semibold text-green-700 cursor-pointer"
          href="#products--container"
        >
          Go to Top
        </a>
      </div>
    </>
  );
};

export default Sort;
