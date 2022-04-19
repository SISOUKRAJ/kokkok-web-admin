import React, { Component } from 'react'
import { Tabs ,Button,Modal} from 'antd';
import DocumentType from './DocumentType/index'
import DriverType from './driverType/index'
import { QueryClient,QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()

const { TabPane } = Tabs;

export default class index extends Component {



  render() {
      
      const App=()=>{

        function callback(key) {
            console.log(key);
          }
          
            const Demo = () => (


                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="Document Type" key="1">

<DocumentType/>
                  </TabPane>
                  <TabPane tab="Driver Type" key="2">


<DriverType/>

                  </TabPane>
                      
                </Tabs>
              );
              const [isModalVisible, setIsModalVisible] = React.useState(false);

              const showModal = () => {
                setIsModalVisible(true);
              };
            
              const handleOk = () => {
                setIsModalVisible(false);
              };
            
              const handleCancel = () => {
                setIsModalVisible(false);
              };
            
        return(

            <>
            
            <Button type="primary" onClick={showModal}>
       Manger
      </Button>
      <Modal title="Manger" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} centered width={1000}>
      
      
      <Demo/>
      </Modal>
            </>

        )
      }
 
    return (

                <QueryClientProvider client={queryClient}>

      <div>

   
<App/>



      </div></QueryClientProvider>

    )
  }
}
