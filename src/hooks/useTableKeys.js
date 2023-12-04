import { useMemo } from 'react';

const useTableKeys = (dataArray, config) => {
  const filteredArray = useMemo(() => {
    return dataArray.map((item) => {
      const filteredItem = {};
      for (const key in config) {
        if (Object.hasOwnProperty.call(config, key)) {
          const formatter = config[key];
          filteredItem[key] = typeof formatter === 'function' ? formatter(item[key]) : formatter;
        }
      }
      return filteredItem;
    });
  }, [dataArray, config]);

  return filteredArray;
};

export default useTableKeys;