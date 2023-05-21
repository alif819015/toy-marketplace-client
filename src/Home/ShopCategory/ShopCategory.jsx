import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

const ShopCategory = () => {
  const [categories, setCategories] = useState([]);
  const {_id} = categories;
  useEffect(() => {
    fetch("https://assignment-11-toy-marketplace-server-alif819015.vercel.app/all-categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h3 className="text-3xl text-center font-bold">
        Shop by Category: {categories.length}
      </h3>
      <div>
        <Tabs className="p-3 rounded-md mt-4 tex-c mx-auto w-2/3">
          <TabList className="flex justify-between py-1 px-4 font-semibold gap-8 cos">
            <Tab><button className="btn btn-outline">Transformers</button></Tab>
            <Tab><button className="btn btn-outline">Avengers</button></Tab>
            <Tab><button className="btn btn-outline">Marvel</button></Tab>
          </TabList>

          <TabPanel className='md:flex gap-4'>
            {
                categories?.map(toy => <CategoryCard key={toy._id} toy={toy}></CategoryCard>)
            }
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategory;
