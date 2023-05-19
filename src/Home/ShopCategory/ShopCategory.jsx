import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ShopCategory = () => {
  return (
    <div>
      <h3 className="text-3xl text-center font-bold">Shop by Category</h3>
      <div>
        <Tabs className="p-3 rounded-md mt-4 tex-c mx-auto w-2/3 bg bg-purple-200">
          <TabList className="flex justify-between py-1 px-4 font-semibold gap-8 cos">
            <Tab>Transformers</Tab>
            <Tab>Avengers</Tab>
            <Tab>Marvel</Tab>
          </TabList>
          <hr/>

          <TabPanel>
            <h2>Any content 1</h2>
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
