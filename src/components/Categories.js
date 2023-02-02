import React from "react";

const Categories = ({ categories, sortBy, name, checked, uuid }) => {
  return (
    <>
      {categories.map((item, i) => {
        return (
          <div key={uuid ? item + uuid : item}>
            <input
              type="radio"
              name={name}
              id={item}
              defaultChecked={checked || item == "#All"}
              className="peer hidden"
            />
            <label
              htmlFor={item}
              className={`inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer peer-checked:bg-sky-600 peer-checked:text-white bg-gray-200 hover:bg-slate-300 text-center`}
              onClick={sortBy}
            >
              {item[0] === "-" ? ( // - indicates subcategory
                // includes item[0] for checking isSubCategory when filtering
                // but not display to UI
                <>
                  <span className="opacity-1 absolute">{item[0]}</span>
                  {item.slice(1)}
                </>
              ) : (
                item
              )}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default React.memo(Categories);
